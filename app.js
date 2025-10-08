// app.js limpio y funcional con botón Siguiente
let questions = [];
let current = 0;
let score = 0;
let answered = false;
let answeredCount = 0;
let quizRange = {start: 0, end: 0};

const fileInput = document.getElementById('fileInput');
const quizDiv = document.getElementById('quiz');
const scoreDiv = document.getElementById('score');
const restartBtn = document.getElementById('restartBtn');
const stopBtn = document.getElementById('stopBtn');
const rangeSelector = document.getElementById('rangeSelector');
const startIdxInput = document.getElementById('startIdx');
const endIdxInput = document.getElementById('endIdx');
const startQuizBtn = document.getElementById('startQuizBtn');
const pruebasList = document.getElementById('pruebasList');

// Listado de archivos de pruebas (automático, solo .txt en carpeta pruebas/)
let pruebasArchivos = [];

function cargarPruebasArchivos() {
  fetch('pruebas/')
    .then(resp => resp.text())
    .then(html => {
      // Extraer nombres de archivos .txt del listado de directorio (asume indexación habilitada)
      const matches = Array.from(html.matchAll(/href="([^"]+\.txt)"/g));
      pruebasArchivos = matches.map(m => decodeURIComponent(m[1]));
      renderPruebasList();
    });
}

// Llamar a cargarPruebasArchivos al inicio
cargarPruebasArchivos();

function getSubcarpetaFromArchivo(nombre) {
  const match = nombre.match(/\[([^\]]+)\]/);
  return match ? match[1] : '';
}
function getNombreVisibleArchivo(nombre) {
  // Solo el nombre limpio: después de ']' y antes de '.txt', sin ruta
  const base = nombre.split('/').pop();
  const match = base.match(/^\[[^\]]+\](.+)\.txt$/i);
  return match ? match[1].trim() : base.replace(/\.txt$/i, '');
}

fileInput.addEventListener('change', handleFile, false);
restartBtn.addEventListener('click', () => location.reload());
stopBtn.addEventListener('click', stopQuiz);
startQuizBtn.addEventListener('click', () => {
  let start = parseInt(startIdxInput.value, 10) - 1;
  let end = parseInt(endIdxInput.value, 10) - 1;
  if (isNaN(start) || isNaN(end) || start < 0 || end < start || end >= questions.length) {
    alert('Rango inválido');
    return;
  }
  quizRange.start = start;
  quizRange.end = end;
  current = start;
  score = 0;
  answeredCount = 0;
  scoreDiv.textContent = '';
  rangeSelector.style.display = 'none';
  stopBtn.style.display = 'inline-block';
  restartBtn.style.display = 'none';
  hideInstructions();
  showQuestion();
});

function handleFile(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(evt) {
    const text = evt.target.result;
    questions = parseQuestions(text);
    if (questions.length === 0) {
      quizDiv.innerHTML = '<p style="color:red">No se encontraron preguntas válidas.</p>';
      return;
    }
    // Mostrar selector de rango
    startIdxInput.max = questions.length;
    endIdxInput.max = questions.length;
    startIdxInput.value = 1;
    endIdxInput.value = questions.length;
    rangeSelector.style.display = 'block';
    quizDiv.innerHTML = '';
    scoreDiv.textContent = '';
    stopBtn.style.display = 'none';
    restartBtn.style.display = 'none';
    hideInstructions();
  };
  reader.readAsText(file);
}

function stopQuiz() {
  quizDiv.innerHTML = '<h2>¡Prueba detenida!</h2>';
  let percent = answeredCount > 0 ? ((score / answeredCount) * 100).toFixed(1) : 0;
  scoreDiv.textContent = `Puntaje: ${score} / ${answeredCount} (${percent}%)`;
  stopBtn.style.display = 'none';
  restartBtn.style.display = 'block';
}

function parseQuestions(text) {
  const lines = text.split(/\r?\n/);
  let qs = [];
  let q = null;
  // Regex para opciones: a), a., a ), a ., A), etc. (pero NO solo 'a' o 'A' suelta)
  const optRegex = /^[A-Da-d][).\s]/;
  for (let line of lines) {
    let trimmed = line.trim();
    if (!trimmed) {
      // Si hay pregunta en curso y tiene al menos 3 opciones, agregarla
      if (q && q.options.length >= 3) {
        qs.push(q);
      }
      q = null;
      continue;
    }
    if (!q) {
      q = { question: trimmed, options: [] };
    } else if (optRegex.test(trimmed)) {
      let isCorrect = trimmed.endsWith('*');
      let optText = isCorrect ? trimmed.slice(0, -1).trim() : trimmed;
      q.options.push({ text: optText.replace(/^[A-Da-d][).\s]+/, ''), correct: isCorrect });
    } else if (q && q.options.length > 0) {
      // Permitir preguntas con 3 o más opciones
      if (q.options.length >= 3) {
        qs.push(q);
      }
      // Si la línea comienza con A-D/a-d NO seguida de ")" (ej: "A continuación..."), es pregunta nueva, no opción
      if (/^[A-Da-d](?!\)).+/.test(trimmed)) {
        q = { question: trimmed, options: [] };
      } else if (optRegex.test(trimmed) || trimmed.length < 10 || /^[a-záéíóú]/.test(trimmed)) {
        q = null;
      } else {
        q = { question: trimmed, options: [] };
      }
    } else {
      // Si la línea no es opción ni pregunta válida, ignórala
      q = null;
    }
  }
  if (q && q.options.length >= 3) {
    qs.push(q);
  }
  return qs;
}

function showQuestion() {
  answered = false;
  // Si es la última pregunta, mostrar puntaje final
  if (current > quizRange.end) {
    quizDiv.innerHTML = '<h2>¡Prueba finalizada!</h2>';
    let percent = answeredCount > 0 ? ((score / answeredCount) * 100).toFixed(1) : 0;
    scoreDiv.textContent = `Puntaje final: ${score} / ${answeredCount} (${percent}%)`;
    stopBtn.style.display = 'none';
    restartBtn.style.display = 'block';
    return;
  }
  const q = questions[current];
  const progress = `<div class="progress">Pregunta ${current-quizRange.start+1} de ${quizRange.end-quizRange.start+1}</div>`;
  // Buscar imagen asociada
  let imgHtml = '';
  if (currentSubcarpeta) {
    const numPregunta = (current+1).toString();
    const basePath = `pruebas/imagenes/${currentSubcarpeta}/`;
    let imgPath = basePath + numPregunta + '.png';
    console.log('Intentando cargar imagen:', imgPath);
    imgHtml = `<img src="${imgPath}" alt="Imagen pregunta ${numPregunta}" style="max-width:100%;display:none;" onload="this.style.display='block'" onerror="this.style.display='none'">`;
  }
  quizDiv.innerHTML = `${progress}${imgHtml}<div class="question">${current+1}. ${q.question}</div><div class="options"></div><div id="nextDiv"></div>`;
  const optionsDiv = quizDiv.querySelector('.options');
  q.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.textContent = opt.text;
    btn.onclick = () => selectOption(idx);
    optionsDiv.appendChild(btn);
  });
}

function selectOption(idx) {
  if (answered) return;
  answered = true;
  answeredCount++;
  const q = questions[current];
  const optionsDiv = quizDiv.querySelector('.options');
  Array.from(optionsDiv.children).forEach((btn, i) => {
    btn.disabled = true;
    if (q.options[i].correct) btn.classList.add('correct');
    if (i === idx && !q.options[i].correct) btn.classList.add('incorrect');
  });
  if (q.options[idx].correct) {
    score++;
    scoreDiv.textContent = '¡Correcto!';
  } else {
    scoreDiv.textContent = 'Incorrecto.';
  }
  let percent = ((score / answeredCount) * 100).toFixed(1);
  scoreDiv.textContent += ` | Puntaje: ${score} / ${answeredCount} (${percent}%)`;
  const nextDiv = document.getElementById('nextDiv');
  nextDiv.innerHTML = '<button id="nextBtn">Siguiente</button>';
  document.getElementById('nextBtn').onclick = () => {
    scoreDiv.textContent = '';
    current++;
    showQuestion();
  };
}

function renderPruebasList() {
  if (!pruebasList) return;
  pruebasList.innerHTML = '<b>Pruebas disponibles:</b> ' + pruebasArchivos.map(nombre => `<button class="pruebaBtn" data-file="${nombre}">${getNombreVisibleArchivo(nombre)}</button>`).join(' ');
  document.querySelectorAll('.pruebaBtn').forEach(btn => {
    btn.onclick = function() {
      fetchPruebaArchivo(btn.getAttribute('data-file'));
    };
  });
}

let currentSubcarpeta = '';

function fetchPruebaArchivo(nombre) {
  currentSubcarpeta = getSubcarpetaFromArchivo(nombre);
  console.log('Cargando archivo de prueba:', nombre, 'Subcarpeta:', currentSubcarpeta);
  // Quitar cualquier barra inicial y anteponer 'pruebas/'
  let cleanName = nombre.replace(/^\/?pruebas\//, '').replace(/^\//, '');
  let ruta = 'pruebas/' + cleanName;
  fetch(ruta)
    .then(resp => resp.text())
    .then(text => {
      questions = parseQuestions(text);
      if (questions.length === 0) {
        quizDiv.innerHTML = '<p style="color:red">No se encontraron preguntas válidas.</p>';
        return;
      }
      startIdxInput.max = questions.length;
      endIdxInput.max = questions.length;
      startIdxInput.value = 1;
      endIdxInput.value = questions.length;
      rangeSelector.style.display = 'block';
      quizDiv.innerHTML = '';
      scoreDiv.textContent = '';
      stopBtn.style.display = 'none';
      restartBtn.style.display = 'none';
      hideInstructions();
    });
}

function hideInstructions() {
  const instr = document.getElementById('instructions');
  if (instr) instr.style.display = 'none';
}