const tests = [
    {
        "nombre": "Examen de Digestivo Renal y Endócrino - 16 febrero 2022",
        "codigo": "digestivoRenal2022",
        "preguntas": [
            {
                "question": "Con respecto a las vías anabólicas:",
                "options": [
                    {
                        "option": " Son vías oxidativas",
                        "isCorrect": false
                    },
                    {
                        "option": " Son vías reductivas",
                        "isCorrect": true
                    },
                    {
                        "option": " Son vías reversibles",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Con respecto a los mecanismos renales y pulmonares de regulación del equilibrio ácido base:",
                "options": [
                    {
                        "option": " En condiciones de alcalosis respiratoria el riñon regula el componente respiratorio como mecanismo compensatorio",
                        "isCorrect": false
                    },
                    {
                        "option": " En condiciones de acidosis respiratoria el riñón elimina bicarbonato en la orina como mecanismo compensatorio",
                        "isCorrect": false
                    },
                    {
                        "option": " En condiciones de acidosis respiratoria el riñón regula el componente metabólico como mecanismo compensatorio",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "¿Cuál de los siguientes patrones de motilidad son característicos del esófago?",
                "options": [
                    {
                        "option": " de segmentación",
                        "isCorrect": false
                    },
                    {
                        "option": " de contracciones tipo haustras",
                        "isCorrect": false
                    },
                    {
                        "option": " propulsivos",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "Respecto al esófago:",
                "options": [
                    {
                        "option": " la sumbucosa puede presentar glándulas",
                        "isCorrect": true
                    },
                    {
                        "option": " la muscular está formada por tejido muscular liso en todos sus sectores",
                        "isCorrect": false
                    },
                    {
                        "option": " la mucosa tiene un epitelio simple con células secretoras",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Los aminoácidos pueden ser utilizados como fuente de energía y como precursores de la gluconeogénesis. Respecto al catabolismo de los aminoácidos es correcto afirmar:",
                "options": [
                    {
                        "option": " El grupo amino de los aminoácidos se transporta hasta el hígado como glutamato y aspartato",
                        "isCorrect": false
                    },
                    {
                        "option": " El grupo amino de los aminoácidos se transporta hasta el hígado como glutamina y alanina",
                        "isCorrect": true
                    },
                    {
                        "option": " El grupo amino de los aminoácidos se transporta hasta el hígado como alfa-cetoglutarato y asparagina",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Sobre el metabolismo del nitrógeno de los aminoácidos:",
                "options": [
                    {
                        "option": " En el hígado, el glutamato libera el amonio por acción de la glutamato deshidrogenasa.",
                        "isCorrect": true
                    },
                    {
                        "option": " En el hígado, el glutamato libera el amonio por acción de la glutaminasa.",
                        "isCorrect": false
                    },
                    {
                        "option": " En el hígado, el glutamato libera el amonio por acción de la glutamina sintasa.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Un paciente con vómitos excesivos puede sufrir una alcalosis metabólica. ¿A qué se debe este fenómeno?",
                "options": [
                    {
                        "option": " Aumento de HCO3- en el plasma",
                        "isCorrect": true
                    },
                    {
                        "option": " Aumento de ácido láctico en plasma",
                        "isCorrect": false
                    },
                    {
                        "option": " Aumento de CO2 en plasma",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "La digestión y absorción de lípidos se lleva a cabo en el tracto gastrointestinal. Indique la secuencia correcta de este proceso:",
                "options": [
                    {
                        "option": " Emulsificación en la boca, digestión por lipasas en el intestino delgado, y formación de micelas mixtas con sales biliares, digestión por lipasas en el estómago, absorción por difusión simple",
                        "isCorrect": false
                    },
                    {
                        "option": " Digestión por lipasas en la boca y estómago, emulsificación en el estomago, digestión por lipasas en el intestino delgado y formación de micelas mixtas con sales biliares, absorción por difusión simple",
                        "isCorrect": true
                    },
                    {
                        "option": " Digestión por lipasas en el intestino delgado, digestión por lipasas en la boca y estómago, emulsificación en el estómago y formación de micelas mixtas con sales biliares, absorción por difusión facilitada",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "En el tubo digestivo, el plexo de Auerbach se localiza en la capa:",
                "options": [
                    {
                        "option": " mucosa",
                        "isCorrect": false
                    },
                    {
                        "option": " muscular",
                        "isCorrect": true
                    },
                    {
                        "option": " adventicia",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "En el siguiente esquema (Figura 1 Fisiología) se representa un eje endócrino genérico. Indique la opción correcta:",
                "options": [
                    {
                        "option": " Si la hormona C es la IGF-1, la hormona A es la GHRH.",
                        "isCorrect": true
                    },
                    {
                        "option": " Si la hormona B es la prolactina, inhibe a la hormona A.",
                        "isCorrect": false
                    },
                    {
                        "option": " Si la neurohormona A es la GnRH, la hormona C es una hormona tiroidea.",
                        "isCorrect": false
                    }
                ],
                "image": 10
            },
            {
                "question": "A continuación, se muestra un esquema que representa uno de los principales mecanismos de absorción de monosacáridos a nivel del enterocito (Figura 12 Bioquímica). Complete los componentes del sistema.",
                "options": [
                    {
                        "option": " X= GLUT2, Y = K+",
                        "isCorrect": false
                    },
                    {
                        "option": " X= SGLT1, Y = Na+",
                        "isCorrect": true
                    },
                    {
                        "option": " X= GLUT5, Y = H+",
                        "isCorrect": false
                    }
                ],
                "image": 11
            },
            {
                "question": "Sobre el ciclo de la urea:",
                "options": [
                    {
                        "option": " Los átomos de nitrógeno de la urea producida en el ciclo de la urea provienen solo del amonio.",
                        "isCorrect": false
                    },
                    {
                        "option": " Los átomos de nitrógeno de la urea producida en el ciclo de la urea provienen del nitrito y de la arginina.",
                        "isCorrect": false
                    },
                    {
                        "option": " Los átomos de nitrógeno de la urea producida en el ciclo de la urea provienen del amonio y del aspartato.",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "Sobre el síndrome metabólico:",
                "options": [
                    {
                        "option": " La llegada de grandes cantidades de grasas a tejidos no adiposos en los que se depositan inhiben la gluconeogénesis.",
                        "isCorrect": false
                    },
                    {
                        "option": " La llegada de grandes cantidades de grasas a tejidos no adiposos en los que se depositan interfieren con la señal de la insulina.",
                        "isCorrect": true
                    },
                    {
                        "option": " La llegada de grandes cantidades de grasas a tejidos no adiposos en los que se depositan no afecta el transporte de la glucosa.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "A continuación, se muestra un esquema (Figura 32 Bioquímica) con el mecanismo de acción de un tipo de hormona. En número se encuentran señalados distintos componentes del sistema de transducción de señales. Según sus conocimientos es correcto afirmar:",
                "options": [
                    {
                        "option": " Los componentes 3 y 4 son los productos de la síntesis de la enzima efectora calmodulina: segundos mensajeros Calcio y proteínas quinasas activas.",
                        "isCorrect": false
                    },
                    {
                        "option": " Los componentes 3 y 4 son los productos de la síntesis de la enzima efectora adenilato-ciclasa: segundos mensajeros Calcio y AMPc",
                        "isCorrect": false
                    },
                    {
                        "option": " Los componentes 3 y 4 son los productos de la síntesis de la enzima efectora Fosfolipasa C: segundos mensajeros IP3 y diacilglicerol",
                        "isCorrect": true
                    }
                ],
                "image": 14
            },
            {
                "question": "La síntesis de angiotensina II se inhibe cuando:",
                "options": [
                    {
                        "option": " Aumentan los niveles plasmáticos de aldosterona.",
                        "isCorrect": false
                    },
                    {
                        "option": " Se produce un aumento de la osmolalidad de los líquidos corporales mayor al 1%.",
                        "isCorrect": true
                    },
                    {
                        "option": " Se estimula la secreción de renina.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Indique cuál de las siguientes estructuras forma parte del complejo yuxtaglomerular:",
                "options": [
                    {
                        "option": " espacio urinario",
                        "isCorrect": false
                    },
                    {
                        "option": " región macular del túbulo distal",
                        "isCorrect": true
                    },
                    {
                        "option": " glomérulo vascular",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "La hipercolesterolemia familiar es un trastorno genético causado por una mutación en el gen que codifica para el receptor de LDL. Señale qué consecuencias tiene esta mutación:",
                "options": [
                    {
                        "option": " Aumento del transporte retrógrado de colesterol (tej. extra-hepáticos hacia el hígado",
                        "isCorrect": false
                    },
                    {
                        "option": " Aumento de la absorción de colesterol de la dieta",
                        "isCorrect": false
                    },
                    {
                        "option": " Falta de inhibición de la síntesis endógena de colesterol",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "Sobre los efectos de la insulina y el glucagón en los tejidos:",
                "options": [
                    {
                        "option": " La insulina estimula la gluconeogénesis y la glucogenólisis en el músculo y en el hígado.",
                        "isCorrect": false
                    },
                    {
                        "option": " La insulina estimula la glucólisis y la glucogenogénesis en el músculo y en el hígado.",
                        "isCorrect": true
                    },
                    {
                        "option": " La insulina estimula la gluconeogénesis y la glucogenólisis en el tejido adiposo.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿Cuál de los siguientes componentes vasculares se localiza en la adenohipófisis?",
                "options": [
                    {
                        "option": " Las venas porta hipofisarias",
                        "isCorrect": false
                    },
                    {
                        "option": " El plexo capilar primario",
                        "isCorrect": false
                    },
                    {
                        "option": " El plexo capilar secundario",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "Acerca del perfil metabólico de los principales órganos durante el ayuno:",
                "options": [
                    {
                        "option": " el hígado sintetiza cuerpos cetónicos a partir de ácidos grasos para su utilización por el cerebro",
                        "isCorrect": true
                    },
                    {
                        "option": " el hígado sintetiza cuerpos cetónicos para su utilización por los glóbulos rojos",
                        "isCorrect": false
                    },
                    {
                        "option": " el hígado consume cuerpos cetónicos para la síntesis de glucosa",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Señale cuál de las siguientes características es propia de un sistema de señalización dependiente de hormonas:",
                "options": [
                    {
                        "option": " La señal endócrina llevada a cabo por la hormona es eliminada de forma eficiente por hidrolasas extracelulares",
                        "isCorrect": false
                    },
                    {
                        "option": " La señal endócrina llevada a cabo por la hormona actúa sobre células blanco alejadas del sitio de síntesis (glándulas",
                        "isCorrect": true
                    },
                    {
                        "option": " La señal endócrina llevada a cabo por la hormona es autócrina actuando siempre en el sitio de síntesis",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Sobre los quilomicrones y las HDL:",
                "options": [
                    {
                        "option": " Las HDLs no son capaces de transferir apolipoproteínas a otras lipoproteínas como las VLDL y LDL",
                        "isCorrect": false
                    },
                    {
                        "option": " Las HDLs transfieren apolipoproteínas, como la apoC y la apoE a las VLDL y LDL",
                        "isCorrect": true
                    },
                    {
                        "option": " Las HDLs transfieren triglicéridos a otras lipoproteínas como las VLDL y LDL",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "En la siguiente figura (Figura 31 Bioquímica) se esquematiza una molécula que es ingerida en la alimentación. Indique de que enzima es sustrato:",
                "options": [
                    {
                        "option": " α amilasa",
                        "isCorrect": true
                    },
                    {
                        "option": " Lipasa",
                        "isCorrect": false
                    },
                    {
                        "option": " Oligo-1,6-glucosidasa",
                        "isCorrect": false
                    }
                ],
                "image": 23
            },
            {
                "question": "Con respecto a los mecanismos de regulación del equilibrio ácido base es correcto afirmar:",
                "options": [
                    {
                        "option": " El buffer H3PO4/H2PO4- junto con el buffer CH3COOH/ CH3COO- son los principales amortiguadores de la sangre",
                        "isCorrect": false
                    },
                    {
                        "option": " El buffer NH4+/NH3 junto con el H3PO4/H2PO4- y aminoácidos son los principales amortiguadores de la sangre",
                        "isCorrect": false
                    },
                    {
                        "option": " El buffer H2CO3/HCO3- junto con la hemoglobina y las proteínas son los principales amortiguadores de la sangre",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "En el siguiente esquema (Figura 1 Fisiología) se representa un eje endócrino genérico. Indique la opción correcta:",
                "options": [
                    {
                        "option": " Si la hormona C es la IGF-1, la hormona A es la ACTH.",
                        "isCorrect": false
                    },
                    {
                        "option": " Si la neurohormona A es la GnRH, la hormona C es una hormona tiroidea.",
                        "isCorrect": false
                    },
                    {
                        "option": " Si la hormona B es la prolactina, B estimula a la hormona A.",
                        "isCorrect": true
                    }
                ],
                "image": 25
            },
            {
                "question": "Indique cuál de las estructuras mencionadas a continuación está presente en la vesícula biliar:",
                "options": [
                    {
                        "option": " mucosa formada por epitelio cilíndrico simple y lámina propia",
                        "isCorrect": true
                    },
                    {
                        "option": " muscular de la mucosa con 2 capas de músculo liso",
                        "isCorrect": false
                    },
                    {
                        "option": " submucosa formada por tejido conjuntivo denso irregular",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Con respecto a los procesos que suceden en el túbulo proximal:",
                "options": [
                    {
                        "option": " Se reabsorbe más sodio en proporción que agua.",
                        "isCorrect": false
                    },
                    {
                        "option": " Es impermeable al agua en ausencia de ADH.",
                        "isCorrect": false
                    },
                    {
                        "option": " No se modifica la osmolalidad del líquido tubular.",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "Se presenta la siguiente gasometría de un paciente con edema pulmonar severo (Figura 2 Bioquímica). Indique la alteración ácido base que presenta el paciente:",
                "options": [
                    {
                        "option": " Acidosis de orígen respiratorio compensada a nivel renal",
                        "isCorrect": false
                    },
                    {
                        "option": " Alcalosis respiratoria no compensada a nivel renal",
                        "isCorrect": false
                    },
                    {
                        "option": " Acidosis de orígen respiratorio no compensada a nivel renal",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "La siguiente acción biológica es ejercida por el cortisol:",
                "options": [
                    {
                        "option": " Aumenta la función reproductiva.",
                        "isCorrect": false
                    },
                    {
                        "option": " Disminuye la lipogénesis.",
                        "isCorrect": true
                    },
                    {
                        "option": " Aumenta la respuesta inflamatoria.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Las venas centroloblulillares o centrales en el hígado, ¿en el centro de qué lobulillos se localizan?",
                "options": [
                    {
                        "option": " de los lobulillos portales",
                        "isCorrect": false
                    },
                    {
                        "option": " de los lobulillos hepáticos clásicos",
                        "isCorrect": true
                    },
                    {
                        "option": " de los acinos hepáticos",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Frente a un aumento de la volemia, como mecanismo compensatorio se producirá:",
                "options": [
                    {
                        "option": " Un aumento de la secreción de ADH",
                        "isCorrect": false
                    },
                    {
                        "option": " Un aumento de la natriuresis",
                        "isCorrect": true
                    },
                    {
                        "option": " Una disminución de la diuresis",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "La síntesis de ácidos grasos comienza con:",
                "options": [
                    {
                        "option": " la síntesis de Malonil-CoA a partir de Acetil-CoA, catalizado por la Acetil-CoA carboxilasa.",
                        "isCorrect": true
                    },
                    {
                        "option": " La síntesis del Acil-CoA graso a partir del Acetil-CoA, catalizado por la Acil-CoA transferasa.",
                        "isCorrect": false
                    },
                    {
                        "option": " La síntesis de piruvato a partir del lactato, catalizado por el complejo de la piruvato deshidrogenasa.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "En cuanto a la glándula tiroides:",
                "options": [
                    {
                        "option": " La yodación de la tiroglobulina ocurre en el citoplasma de la célula folicular",
                        "isCorrect": false
                    },
                    {
                        "option": " Normalmente la mayor parte de tiroglobulina yodada se endocita y se degrada en lisosomas para liberar T3 y T4",
                        "isCorrect": true
                    },
                    {
                        "option": " Las células parafoliculares liberan tiroxina hacia el coloide",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Acerca las vías metabólicas y su regulación:",
                "options": [
                    {
                        "option": " Las vías catabólicas tienen como objetivo generar transportadores de electrones reducidos (NADH, NADPH, FADH2",
                        "isCorrect": true
                    },
                    {
                        "option": " Las vías catabólicas tienen como objetivo generar transportadores de electrones oxidados (NAD+, NADP+ y FAD",
                        "isCorrect": false
                    },
                    {
                        "option": " Las vías catabólicas tienen como objetivo generar intermediarios reducidos para la glucólisis y para la obtención de energía (ADP, GDP",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿Cuál de los siguientes sistemas degradación de proteínas consiste en la digestión inespecífica dentro de una vescícula?",
                "options": [
                    {
                        "option": " Sistema ubiquitina-proteasoma",
                        "isCorrect": true
                    },
                    {
                        "option": " Pepsina",
                        "isCorrect": false
                    },
                    {
                        "option": " Lisosomas",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "En el gráfico de la figura (Figura 6 Bioquímica), se muestra una curva de tolerancia a la glucosa para un paciente sano y uno con diabetes tipo II. En este estudio se mide la glicemia en ayunas y luego de administrar una carga de glucosa al paciente. Según los conocimientos adquiridos, es correcto afirmar:",
                "options": [
                    {
                        "option": " En el individuo diabético, la concentración de glucosa en sangre no disminuye por lo que no se está realizando gluconeogénesis ni glucogenolisis hepática",
                        "isCorrect": false
                    },
                    {
                        "option": " En el individuo normal, cuando baja la concentración de glucosa en sangre se libera glucagón que estimula la gluconeogénesis y la glucogenolisis hepática",
                        "isCorrect": true
                    },
                    {
                        "option": " En ambos individuos, los niveles de glucosa en ayuno se deben a la estimulación de la glucogenogenesis y la glucólisis",
                        "isCorrect": false
                    }
                ],
                "image": 36
            },
            {
                "question": "Con respecto a las vías catabólicas:",
                "options": [
                    {
                        "option": " Generan cofactores oxidados, NADP+",
                        "isCorrect": false
                    },
                    {
                        "option": " Generan cofactores reducidos, NADH y FADH2",
                        "isCorrect": true
                    },
                    {
                        "option": " Generan cofactores oxidados, NAD+ y FAD",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Cada órgano tiene un perfil metabólico característico. Sobre el perfil metabólico del tejido adiposo, indique la opción correcta:",
                "options": [
                    {
                        "option": " Almacena energía en forma de triglicéridos; consume glucosa y ácidos grasos como fuente de energía",
                        "isCorrect": true
                    },
                    {
                        "option": " Sintetiza nueva glucosa y lípidos; consume sólo glucosa como fuente de energía",
                        "isCorrect": false
                    },
                    {
                        "option": " Sintetiza glucógeno, puede consumir varias fuentes de energía (glucosa, ácidos grasos, cuerpos cetónicos",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Con respecto a la corteza de la glándula suprarrenal:",
                "options": [
                    {
                        "option": " la zona fascicular está formada por células cromafines",
                        "isCorrect": false
                    },
                    {
                        "option": " Las células de la zona fasciculada se organizan en cordones mayoritariamente perpendiculares a la superficie capsular",
                        "isCorrect": true
                    },
                    {
                        "option": " La zona glomerular es la capa más profunda",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "A nivel renal, los fármacos se secretan principalmente a nivel del:",
                "options": [
                    {
                        "option": " Túbulo proximal.",
                        "isCorrect": true
                    },
                    {
                        "option": " Asa de Henle.",
                        "isCorrect": false
                    },
                    {
                        "option": " Túbulo colector.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿Cuál de los siguientes secretagogos inhibe la secreción gástrica?",
                "options": [
                    {
                        "option": " Histamina.",
                        "isCorrect": false
                    },
                    {
                        "option": " Gastrina.",
                        "isCorrect": false
                    },
                    {
                        "option": " Somatostatina.",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "Acerca del proceso de degradación de los ácidos grasos (beta-oxidación):",
                "options": [
                    {
                        "option": " Los Acil-CoA grasos se producen en el citosol y se transportan a la mitocondria por el sistema de la carnitina por acción de la carnitina acil transferasa I.",
                        "isCorrect": true
                    },
                    {
                        "option": " Los Acil-CoA grasos se producen en la mitocondria",
                        "isCorrect": false
                    },
                    {
                        "option": " Los Acil-CoA grasos se producen en el citosol y se transportan a la mitocondria por difusión simple a través de las membranas mitocondriales.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Respecto a las fuerzas de Starling, en condiciones fisiológicas es correcto afirmar que:",
                "options": [
                    {
                        "option": " La presión oncótica glomerular aumenta luego de la filtración",
                        "isCorrect": true
                    },
                    {
                        "option": " La presión oncótica de la capsula de Bowman es mayor que la del capilar",
                        "isCorrect": false
                    },
                    {
                        "option": " La presión oncótica capilar favorece la filtración.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Respecto a las glándulas paratiroides:",
                "options": [
                    {
                        "option": " La hormona paratiroidea (PTH",
                        "isCorrect": false
                    },
                    {
                        "option": " Una de las funciones de la PTH es estimular la resorción ósea por parte de los osteoclastos",
                        "isCorrect": true
                    },
                    {
                        "option": " Las células oxífilas se caracterizan por su citoplasma basófilo",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿Cuál de los siguientes estímulos desencadena la secreción pancreática?",
                "options": [
                    {
                        "option": " La liberación de secretina desde el duodeno.",
                        "isCorrect": true
                    },
                    {
                        "option": " La llegada del quimo al estómago.",
                        "isCorrect": false
                    },
                    {
                        "option": " Un pH alcalino en el duodeno.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Indique dónde se localizan las arterias arciformes o arcuatas en el riñón:",
                "options": [
                    {
                        "option": " en la médula",
                        "isCorrect": false
                    },
                    {
                        "option": " en el límite entre la corteza y la médula",
                        "isCorrect": true
                    },
                    {
                        "option": " en el hilio renal",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Algunos fármacos utilizados en la práctica médica actúan interfiriendo los mecanismos de transducción de señales hormonales. Por ejemplo, la teofilina actúa inhibiendo la fosfodiesterasa de AMPc. ¿Cuál será el efecto a nivel intracelular?",
                "options": [
                    {
                        "option": " Disminución de [AMPc]",
                        "isCorrect": false
                    },
                    {
                        "option": " Aumento de [AMPc]",
                        "isCorrect": true
                    },
                    {
                        "option": " Activación de la protein-quinasa C, PKC",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "La iso-osmolalidad de los líquidos corporales está determinada por:",
                "options": [
                    {
                        "option": " La ausencia de proteínas en el líquido intersticial.",
                        "isCorrect": false
                    },
                    {
                        "option": " La presión coloidosmótica del líquido intersticial.",
                        "isCorrect": false
                    },
                    {
                        "option": " La permeabilidad al agua del endotelio capilar y las membranas celulares.",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "¿Cuál de los siguientes tipos celulares pertenecientes al epitelio intestinal contacta la lámina basal pero no alcanza la luz del órgano?",
                "options": [
                    {
                        "option": " Enterocito",
                        "isCorrect": false
                    },
                    {
                        "option": " Célula caliciforme",
                        "isCorrect": false
                    },
                    {
                        "option": " Célula enteroendócrina",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "¿Qué características nos permiten reconocer a una célula enteroendócrina en una micrografía electrónica de transmisión?",
                "options": [
                    {
                        "option": " una extensa red de canalículos intracelulares y un sistema membranoso tubulovesicular",
                        "isCorrect": false
                    },
                    {
                        "option": " gránulos de secreción que se acumulan en la región basal de la célula",
                        "isCorrect": true
                    },
                    {
                        "option": " abundante retículo endoplasmático rugoso en la región perinuclear",
                        "isCorrect": false
                    }
                ]
            }
        ]
    },
    {
        "nombre": "Tercer periodo de examen Digestivo, Renal y Endócrino – 20 de febrero de 2025",
        "codigo": "digestivoRenal2025",
        "preguntas": [
            {
                "question": "¿Cuál de las siguientes características se encuentra presente en los acinos mucosos de las glándulas salivales?",
                "options": [
                    {
                        "option": " Tener células con citoplasma apical PAS positivo.",
                        "isCorrect": true
                    },
                    {
                        "option": " Tener células con estrías basales.",
                        "isCorrect": false
                    },
                    {
                        "option": " Tener semilunas serosas.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿Qué célula de la mucosa gástrica posee abundantes mitocondrias y un canalículo intracelular muy desarrollado?",
                "options": [
                    {
                        "option": " Células principales.",
                        "isCorrect": false
                    },
                    {
                        "option": " Células enteroendócrinas.",
                        "isCorrect": false
                    },
                    {
                        "option": " Células oxínticas (parietales",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "Indique que característica define a la célula de Paneth:",
                "options": [
                    {
                        "option": " Presentar numerosas mitocondrias.",
                        "isCorrect": false
                    },
                    {
                        "option": " Presentar una alta tasa de renovación.",
                        "isCorrect": false
                    },
                    {
                        "option": " Localizarse en la base de la cripta de Lieberkühn.",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "¿Qué son las vellosidades intestinales?",
                "options": [
                    {
                        "option": " Prolongaciones digitiformes de la mucosa.",
                        "isCorrect": true
                    },
                    {
                        "option": " Pliegues que involucran mucosa y la submucosa.",
                        "isCorrect": false
                    },
                    {
                        "option": " Proyecciones de la membrana plasmática apical de los enterocitos.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Los lipocitos hepáticos (células Ito):",
                "options": [
                    {
                        "option": " Almacenan vitamina A.",
                        "isCorrect": true
                    },
                    {
                        "option": " Participan en la producción de bilis.",
                        "isCorrect": false
                    },
                    {
                        "option": " Se localizan dentro del espacio porta.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿Cuál característica corresponde a los sinusoides hepáticos?",
                "options": [
                    {
                        "option": " Lámina basal continua.",
                        "isCorrect": false
                    },
                    {
                        "option": " Revestimiento endotelial sin interrupciones.",
                        "isCorrect": false
                    },
                    {
                        "option": " Espacios grandes entre células endoteliales vecinas.",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "¿Cuál es la característica de las células que componen la médula de la glándula suprarrenal?",
                "options": [
                    {
                        "option": " Tener gotas de lípidos.",
                        "isCorrect": false
                    },
                    {
                        "option": " Tener gránulos de catecolaminas.",
                        "isCorrect": true
                    },
                    {
                        "option": " Tener masas densas de pigmentos lipocrómicos.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Una micrografía electrónica de transmisión permite determinar que el área yuxtanuclear de una célula endócrina presenta abundante retículo endoplasmático liso ocupando la mayor parte del citoplasma y mitocondrias con crestas tubulares. ¿Dónde se podría encontrar células con dicha ultraestructura?",
                "options": [
                    {
                        "option": " Corteza de glándula suprarrenal",
                        "isCorrect": true
                    },
                    {
                        "option": " Folículos tiroideos",
                        "isCorrect": false
                    },
                    {
                        "option": " Adenohipófisis",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "En una cirugía se extrae una muestra que contiene tanto glándula tiroidea como paratiroidea, la cual es utilizada para realizar preparados histológicos. Si estos preparados fueran inmunoteñidos utilizando un anticuerpo que reconoce específicamente la tiroblobulina, ¿dónde esperaría observar la marca?:",
                "options": [
                    {
                        "option": " En las células parafoliculares",
                        "isCorrect": false
                    },
                    {
                        "option": " En las células principales de la paratiroides",
                        "isCorrect": false
                    },
                    {
                        "option": " En el coloide en la luz de los folículos tiroideos",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "¿Qué son los cuerpos de Herring localizados en la hipófisis?:",
                "options": [
                    {
                        "option": " porciones terminales dilatadas de los pituicitos",
                        "isCorrect": false
                    },
                    {
                        "option": " sectores donde se acumulan gránulos neurosecretores",
                        "isCorrect": true
                    },
                    {
                        "option": " elementos celulares que están en contacto con sinusoides",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Los podocitos renales:",
                "options": [
                    {
                        "option": " son células epiteliales",
                        "isCorrect": true
                    },
                    {
                        "option": " constituyen la hoja parietal capsular",
                        "isCorrect": false
                    },
                    {
                        "option": " contienen gránulos de angiotensina",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Las células mesangiales glomerulares:",
                "options": [
                    {
                        "option": " están ubicadas entre los capilares glomerulares",
                        "isCorrect": true
                    },
                    {
                        "option": " presentan gránulos de renina en su citoplasma",
                        "isCorrect": false
                    },
                    {
                        "option": " son parte de la barrera de filtración",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Los datos de la siguiente gráfica fueron obtenidos de un individuo en el que cada 15 minutos se midió la concentración de un secretagogo en plasma. En el tiempo cero (0 min), el individuo ingirió una comida rica en proteínas. La disminución en dicha concentración luego de los 75 minutos, posiblemente corresponda a un aumento en la liberación de:",
                "options": [
                    {
                        "option": " Gastrina.",
                        "isCorrect": false
                    },
                    {
                        "option": " Histamina.",
                        "isCorrect": false
                    },
                    {
                        "option": " Somatostatina.",
                        "isCorrect": true
                    }
                ],
                "image": 13
            },
            {
                "question": "En relación a la motilidad a nivel del intestino delgado:",
                "options": [
                    {
                        "option": " En presencia de alimentos, aparece el complejo motor migrante.",
                        "isCorrect": false
                    },
                    {
                        "option": " En ausencia de alimentos se encuentra completamente relajado.",
                        "isCorrect": false
                    },
                    {
                        "option": " En presencia de alimentos hay movimientos de segmentación y peristalsis.",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "¿Cuál de las siguientes situaciones es más probable que inhiba la liberación de GH?",
                "options": [
                    {
                        "option": " Aumento de los ácidos grasos en plasma.",
                        "isCorrect": true
                    },
                    {
                        "option": " Disminución de la glucosa en plasma.",
                        "isCorrect": false
                    },
                    {
                        "option": " Ayuno.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "La oxitocina y la ADH tienen una de las siguientes características:",
                "options": [
                    {
                        "option": " Son liberadas desde la adenohipófisis.",
                        "isCorrect": false
                    },
                    {
                        "option": " Son sintetizadas principalmente en el núcleo supraquiasmático.",
                        "isCorrect": false
                    },
                    {
                        "option": " Son liberadas frente a la llegada de un potencial de acción a la terminal axónica.",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "Con respecto a las acciones del cortisol:",
                "options": [
                    {
                        "option": " Disminuye la glucemia.",
                        "isCorrect": false
                    },
                    {
                        "option": " Tiene efecto antinflamatorio.",
                        "isCorrect": true
                    },
                    {
                        "option": " Estimula la función reproductiva.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "La liberación de parathormona va a estimular:",
                "options": [
                    {
                        "option": " Disminución de la resorción ósea.",
                        "isCorrect": false
                    },
                    {
                        "option": " Aumento de la síntesis de calcitriol.",
                        "isCorrect": true
                    },
                    {
                        "option": " Aumento de la excreción renal de calcio.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Con respecto al proceso de filtración glomerular:",
                "options": [
                    {
                        "option": " Los aminoácidos no filtran por tener cargas positivas.",
                        "isCorrect": false
                    },
                    {
                        "option": " Las fenestras endoteliales están cargadas negativamente.",
                        "isCorrect": true
                    },
                    {
                        "option": " La seroalbúmina atraviesa libremente la barrera de filtración.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Con respecto a los procesos que ocurren en el túbulo proximal:",
                "options": [
                    {
                        "option": " La permeabilidad al agua está regulada a nivel hormonal.",
                        "isCorrect": false
                    },
                    {
                        "option": " El Na+ se transporta únicamente por mecanismos activos en esta región.",
                        "isCorrect": false
                    },
                    {
                        "option": " Al superarse el transporte máximo de glucosa, esta no se reabsorbe completamente.",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "Con respecto al asa de Henle:",
                "options": [
                    {
                        "option": " El líquido que llega desde el túbulo proximal es isotónico respecto al plasma.",
                        "isCorrect": true
                    },
                    {
                        "option": " El líquido que abandona el asa de Henle es hipertónico respecto al plasma.",
                        "isCorrect": false
                    },
                    {
                        "option": " El segmento ascendente delgado es permeable al agua.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Si disminuye el volumen circulante, se activan respuestas compensatorias. Marque la opción correcta:",
                "options": [
                    {
                        "option": " Se inhibe la síntesis y liberación de aldosterona.",
                        "isCorrect": false
                    },
                    {
                        "option": " Se estimula la síntesis y liberación del péptido natriurético auricular.",
                        "isCorrect": false
                    },
                    {
                        "option": " Se estimula la síntesis y liberación de angiotensinógeno y angiotensina 1.",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "Con respecto a los efectos de la ADH en una situación de ingesta excesiva de sal:",
                "options": [
                    {
                        "option": " Se promueve una disminución de la presión arterial.",
                        "isCorrect": false
                    },
                    {
                        "option": " Se estimula la síntesis e inserción de canales AQP-2.",
                        "isCorrect": true
                    },
                    {
                        "option": " Se produce una orina hipotónica con respecto al plasma.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Durante la digestión de lípidos, ¿qué función cumplen las sales biliares?",
                "options": [
                    {
                        "option": " Hidrolizan los triglicéridos en ácidos grasos y glicerol",
                        "isCorrect": false
                    },
                    {
                        "option": " Transportan los quilomicrones hacia la circulación portal",
                        "isCorrect": false
                    },
                    {
                        "option": " Facilitan la formación de micelas para la absorción de ácidos grasos y monoglicéridos",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "¿Cuál de los siguientes mecanismos de transporte es el principal responsable de la absorción de glucosa en el intestino delgado?",
                "options": [
                    {
                        "option": " Transporte activo primario mediado por ATPasa",
                        "isCorrect": false
                    },
                    {
                        "option": " Difusión facilitada a través del transportador GLUT4",
                        "isCorrect": false
                    },
                    {
                        "option": " Cotransporte activo secundario con sodio mediante SGLT1",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "La amilasa pancreática es una enzima responsable de la degradación de polisacáridos durante la digestión. ¿Cuáles son sus sustratos principales?",
                "options": [
                    {
                        "option": " Celulosa y almidón",
                        "isCorrect": false
                    },
                    {
                        "option": " Glucógeno y almidón",
                        "isCorrect": true
                    },
                    {
                        "option": " Glucógeno, celulosa y almidón",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿Cuál de los siguientes segundos mensajeros está involucrado en la vía de señalización del AMPc activada por receptores acoplados a proteínas G?",
                "options": [
                    {
                        "option": " Fosfatidilinositol trifosfato (PIP3",
                        "isCorrect": false
                    },
                    {
                        "option": " Adenosín monofosfato cíclico (AMPc",
                        "isCorrect": true
                    },
                    {
                        "option": " Calcio intracelular liberado desde el retículo endoplásmico",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Señale cuál de las siguientes características corresponde al mecanismo de señalización activada por la insulina.",
                "options": [
                    {
                        "option": " Es reconocido por receptores en la superficie de la membrana",
                        "isCorrect": true
                    },
                    {
                        "option": " La interacción con su receptor provoca la apertura de canales de Ca2+",
                        "isCorrect": false
                    },
                    {
                        "option": " La insulina forma un complejo con un receptor intracelular y se una regiones reguladoras en el ADN",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "El óxido nítrico (•NO) es un mediador producido en el endotelio vascular que promueve la vasodilatación aumentando la actividad guanilato ciclasa. El mecanismo de acción del viagra consiste en la inhibición de la actividad fosfodiesterasa de GMPc. ¿Cuál será el efecto de esta droga en el músculo liso vascular?",
                "options": [
                    {
                        "option": " Aumento de [GMPc]",
                        "isCorrect": true
                    },
                    {
                        "option": " Disminución de [AMPc]",
                        "isCorrect": false
                    },
                    {
                        "option": " Activación de la protein-quinasa C, PKC",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿Qué tejido es el principal responsable de la gluconeogénesis en condiciones de ayuno?",
                "options": [
                    {
                        "option": " Hígado",
                        "isCorrect": true
                    },
                    {
                        "option": " Tejido adiposo",
                        "isCorrect": false
                    },
                    {
                        "option": " Músculo esquelético",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿Qué coenzima es esencial para las reacciones de óxido-reducción en el ciclo de Krebs?",
                "options": [
                    {
                        "option": " NAD+",
                        "isCorrect": true
                    },
                    {
                        "option": " Biotina",
                        "isCorrect": false
                    },
                    {
                        "option": " Coenzima A",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿Cuál de las siguientes enzimas es un regulador clave la glucólisis y es inhibida por altos niveles de ATP?",
                "options": [
                    {
                        "option": " Glucosa-6-fosfatasa",
                        "isCorrect": false
                    },
                    {
                        "option": " Piruvato deshidrogenasa",
                        "isCorrect": false
                    },
                    {
                        "option": " Fosfofructoquinasa-1 (PFK-1",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "Respecto a la acción de la enzima glucoquinasa hepática:",
                "options": [
                    {
                        "option": " Presenta un bajo KM para la glucosa por lo que siempre actúa a velocidad máxima sin importar la concentración de glucosa plasmática",
                        "isCorrect": false
                    },
                    {
                        "option": " Presenta un bajo KM para la glucosa teniendo su máxima actividad a concentraciones plasmáticas de glucosa de ayuno nocturno",
                        "isCorrect": false
                    },
                    {
                        "option": " Presenta un alto KM para la glucosa actuando de forma eficiente cuando los niveles de glucosa plasmática son elevados",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "¿Qué hormona se libera en condiciones de baja concentración de glucosa en sangre y que efectos tiene en el metabolismo de la glucosa en el hígado?",
                "options": [
                    {
                        "option": " Insulina, inhibe la degradación del glucógeno y la síntesis de nueva glucosa; activa la glucólisis y la síntesis de glucógeno.",
                        "isCorrect": false
                    },
                    {
                        "option": " Glucagón, activa la degradación del glucógeno y la síntesis de nueva glucosa; inhibe la glucólisis y la síntesis de glucógeno.",
                        "isCorrect": true
                    },
                    {
                        "option": " Glucagón, inhibe la degradación del glucógeno y la síntesis de nueva glucosa; activa la glucólisis y la síntesis de glucógeno.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "El gráfico muestra cómo varían las concentraciones de glucosa, cuerpos cetónicos y ácidos grasos durante el ayuno. Sobre los procesos metabólicos que ocurren en el ayuno prolongado, indique la opción correcta:",
                "options": [
                    {
                        "option": " Hay un aumento en la concentración de cuerpos cetónicos que son utilizados por el hígado para la obtención de energía",
                        "isCorrect": false
                    },
                    {
                        "option": " Hay un aumento en la concentración de cuerpos cetónicos sintetizados por el hígado que son utilizados por tejidos extra-hepáticos para la obtención de energía",
                        "isCorrect": true
                    },
                    {
                        "option": " Hay un aumento en la concentración de ácidos grasos, que son sintetizados en el hígado a partir de glucosa y aminoácidos durante el ayuno",
                        "isCorrect": false
                    }
                ],
                "image": 35
            },
            {
                "question": "Sobre la captación de lípidos endógenos transportados por las LDL (ricas en colesterol y ésteres del colesterol) a nivel de los tejidos es correcto afirmar:",
                "options": [
                    {
                        "option": " Los tejidos extrahepáticos no tienen receptores para las LDL circulantes por lo que no captan esta lipoproteína.",
                        "isCorrect": false
                    },
                    {
                        "option": " Los tejidos extra hepáticos tienen el receptor apoB/E, que presenta regulación a la baja por colesterol, cuando este aumenta a nivel intracelular, disminuye el número de receptores en la membrana.",
                        "isCorrect": true
                    },
                    {
                        "option": " Los tejidos presentan los receptores “basureros” para la entrada de LDL los cuales no presentan regulación a la baja, por lo que no se inhiben permitiendo la entrada sin límites de las LDL.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Las lipoproteínas tienen un rol fundamental en el transporte de diferentes lípidos a los tejidos. Señale la opción correcta sobre las funciones de los distintos tipos de lipoproteínas.",
                "options": [
                    {
                        "option": " Las HDL transporta los ácidos grasos obtenidos en la dieta hacia el tejido adiposo",
                        "isCorrect": false
                    },
                    {
                        "option": " Los quilomicrones transporta los ácidos grasos obtenidos en la dieta hacia el tejido adiposo",
                        "isCorrect": true
                    },
                    {
                        "option": " Los quilomicrones transporta los ácidos grasos sintetizados en el organismo hacia el tejido adiposo",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿Como se metabolizan las lipoproteínas VLDL, sintetizadas en el hígado?",
                "options": [
                    {
                        "option": " Las VLDL son metabolizadas por la lipasa hepática, presente en el hígado, lo que genera los remanentes de quilomicrones.",
                        "isCorrect": false
                    },
                    {
                        "option": " Las VLDL son metabolizadas por la lipoproteína lipasa, presente en tejidos extrahepáticos, lo que genera las IDL y las LDL.",
                        "isCorrect": true
                    },
                    {
                        "option": " Las VLDL son metabolizadas por la colesterol-esterasa, presente en las HDL, lo que genera las IDL y las LDL.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿Cuál es el rendimiento de la beta-oxidación de una molécula de ácido graso de 16 átomos de carbono?",
                "options": [
                    {
                        "option": " Se generan 7 moléculas de Acetil-CoA, 6 NADH y 6 FADH2",
                        "isCorrect": false
                    },
                    {
                        "option": " Se generan 8 moléculas de Acetil-CoA, 7 NADH y 7 FADH2",
                        "isCorrect": true
                    },
                    {
                        "option": " Se generan 9 moléculas de Acetil-CoA, 8 NADH y 8 FADH2",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Para la síntesis de ácidos grasos, se requiere:",
                "options": [
                    {
                        "option": " Malonil-CoA, acetil-CoA, ATP y NADPH.",
                        "isCorrect": true
                    },
                    {
                        "option": " Piruvato, acetil-CoA, GTP y NADH.",
                        "isCorrect": false
                    },
                    {
                        "option": " Citrato, acetil-CoA, ADP y NADP+",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿Qué rol cumple la adiponectina secretada por el tejido adiposo en el metabolismo de la glucosa a nivel hepático?",
                "options": [
                    {
                        "option": " Inhibe la gluconeogénesis y estimula la glucólisis",
                        "isCorrect": true
                    },
                    {
                        "option": " Estimula la gluconeogénesis e inhibe la glucólisis",
                        "isCorrect": false
                    },
                    {
                        "option": " Inhibe la glucogenogenesis y estimula la lipogénesis.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Los pacientes con síndrome metabólico presentan resistencia a la insulina. ¿Como se encontrarán los niveles de glucosa y ácidos grasos en sangre?",
                "options": [
                    {
                        "option": " Glucosa disminuida, ácidos grasos normales",
                        "isCorrect": false
                    },
                    {
                        "option": " Glucosa normal, ácidos grasos disminuidos",
                        "isCorrect": false
                    },
                    {
                        "option": " Glucosa elevada, ácidos grasos elevados",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "¿Qué características presenta el tejido adiposo central en pacientes con síndrome metabólico?",
                "options": [
                    {
                        "option": " Adipocitos hipertrofiados con aumento del infiltrado inflamatorio y movilización de ácidos grasos",
                        "isCorrect": true
                    },
                    {
                        "option": " Adipocitos de menor tamaño con aumento de producción de citoquinas anti-inflamatorias",
                        "isCorrect": false
                    },
                    {
                        "option": " Adipocitos con aumento en la captación de glucosa y síntesis de ácidos grasos",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "El ciclo de la urea es un proceso que permite la eliminación de los grupos amino provenientes del catabolismo de los aminoácidos. Señale la opción correcta acerca de este proceso:",
                "options": [
                    {
                        "option": " Se produce en la matriz mitocondrial y citosol de los hepatocitos y consume ATP",
                        "isCorrect": true
                    },
                    {
                        "option": " Se produce en la matriz mitocondrial de las células renales eliminando urea en la orina",
                        "isCorrect": false
                    },
                    {
                        "option": " Se produce en el retículo endoplásmico de las células hepáticas regulado por la actividad de la enzima arginasa",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "El primer paso en el catabolismo de los aminoácidos es la desaminación. Indique la opción correcta acerca de este proceso",
                "options": [
                    {
                        "option": " La desaminación NO oxidativa se realiza en el hepatocito por la enzima glutamato sintasa",
                        "isCorrect": false
                    },
                    {
                        "option": " La transaminación se realiza exclusivamente a nivel de los hepatocitos para la síntesis de urea",
                        "isCorrect": false
                    },
                    {
                        "option": " La desaminación oxidativa se realiza en el hepatocito por la enzima glutamato deshidrogenasa dependiente de NAD(P",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "¿Cuál es la enzima reguladora del ciclo de la urea?",
                "options": [
                    {
                        "option": " Ureasa",
                        "isCorrect": false
                    },
                    {
                        "option": " Arginasa",
                        "isCorrect": false
                    },
                    {
                        "option": " Carbamoil fosfato sintasa",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "¿Cuál es el buffer del organismo cuyas concentraciones de sus componentes (ácido débil y base conjugada) se regulan de forma independiente?",
                "options": [
                    {
                        "option": " NH3/NH4+",
                        "isCorrect": false
                    },
                    {
                        "option": " H2PO4-/HPO42",
                        "isCorrect": false
                    },
                    {
                        "option": " H2CO3/HCO3-",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "A continuación, se presentan los valores de gasometría arterial de un individuo con insuficiencia respiratoria crónica: De acuerdo con los conocimientos adquiridos es correcto afirmar:",
                "options": [
                    {
                        "option": " Presenta acidosis metabólica compensada a nivel respiratorio",
                        "isCorrect": false
                    },
                    {
                        "option": " Presenta acidosis respiratoria compensada a nível metabólico",
                        "isCorrect": true
                    },
                    {
                        "option": " Presenta acidosis respiratoria no compensada a nível renal",
                        "isCorrect": false
                    }
                ],
                "image": 48
            },
            {
                "question": "Prediga como responde el sistema amortiguador bicarbonato frente a una acidosis metabólica",
                "options": [
                    {
                        "option": " Hiperventilando para aumentar el HCO3",
                        "isCorrect": false
                    },
                    {
                        "option": " Hiperventilando para disminuir el CO2 plasmático",
                        "isCorrect": true
                    },
                    {
                        "option": " Hipoventilando para aumentar el CO2 plasmático",
                        "isCorrect": false
                    }
                ]
            }
        ]
    },
    {
        "nombre": "Tercer periodo de examen Neurobiología - 17 febrero 2020",
        "codigo": "neurobiologia2020",
        "preguntas": [
            {
                "question": "En cuanto a las propiedades electrofisiológicas de las neuronas:",
                "options": [
                    {
                        "option": " Los potenciales receptoriales generalmente se propagan sin decremento a lo largo del axón.",
                        "isCorrect": false
                    },
                    {
                        "option": " La generación del potencial de acción no depende de la apertura de canales voltaje-dependiente.",
                        "isCorrect": false
                    },
                    {
                        "option": " En ausencia de Ca++ intracelular en la terminal presináptica, no es posible observar un potencial postsináptico excitatorio.",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "La siguiente figura corresponde a una diferencia de potencial en la membrana de una neurona postsináptica. Con respecto a dicha señal, marque la opción correcta:",
                "options": [
                    {
                        "option": " Corresponde a un potencial de acción.",
                        "isCorrect": false
                    },
                    {
                        "option": " Corresponde a un potencial electrotónico.",
                        "isCorrect": true
                    },
                    {
                        "option": " Es un potencial generado por el cierre de canales de calcio.",
                        "isCorrect": false
                    }
                ],
                "image": 2
            },
            {
                "question": "Si usted se encuentra frente a una situación de peligro repentina, es esperable que:",
                "options": [
                    {
                        "option": " Las pupilas aumenten su diámetro.",
                        "isCorrect": true
                    },
                    {
                        "option": " Se estimule el sistema nervioso parasimpático.",
                        "isCorrect": false
                    },
                    {
                        "option": " Se promueva el almacenamiento de nutrientes.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "El hipotálamo es un área crucial en el control de:",
                "options": [
                    {
                        "option": " la memoria.",
                        "isCorrect": false
                    },
                    {
                        "option": " la regulación de los ritmos circadianos.",
                        "isCorrect": true
                    },
                    {
                        "option": " la coordinación del acto motor voluntario.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿Cuál de las siguientes características es propia la sinapsis eléctrica?",
                "options": [
                    {
                        "option": " Bidireccionalidad.",
                        "isCorrect": true
                    },
                    {
                        "option": " Gran retardo sináptico.",
                        "isCorrect": false
                    },
                    {
                        "option": " La activación de receptores postsinápticos.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "En relación a los receptores de tipo ionotrópicos:",
                "options": [
                    {
                        "option": " Su activación estimula la producción directa de proteínas G.",
                        "isCorrect": false
                    },
                    {
                        "option": " Son macromoléculas distintas de los canales iónicos a los que afectan.",
                        "isCorrect": false
                    },
                    {
                        "option": " Generan respuestas postsinápticas más rápidas que lo receptores metabotrópicos.",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "En cuanto a los actos motores reflejos:",
                "options": [
                    {
                        "option": " El reflejo flexor o de retirada se caracteriza por ser monosináptico.",
                        "isCorrect": false
                    },
                    {
                        "option": " El reflejo miotático se activa cuando el músculo se estira más allá de su estado de referencia.",
                        "isCorrect": true
                    },
                    {
                        "option": " El reflejo miotático es desencadenado por estímulos nociceptivos sobre la superficie corporal.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Con respecto a los actos motores voluntarios:",
                "options": [
                    {
                        "option": " Se caracterizan por ser respuestas innatas que mantenemos invariadas a lo largo de nuestras vidas.",
                        "isCorrect": false
                    },
                    {
                        "option": " Se caracterizan por ofrecer una respuesta estereotipada frente a un estímulo determinado.",
                        "isCorrect": false
                    },
                    {
                        "option": " Su iniciación puede carecer de un estímulo externo que lo desencadene.",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "Respecto al sistema somatosensorial:",
                "options": [
                    {
                        "option": " Los campos receptoriales de las neuronas talámicas son de menor tamaño que los de las neuronas sensoriales primarias.",
                        "isCorrect": false
                    },
                    {
                        "option": " La información proveniente del tacto y la propiocepción alcanzan la corteza somatosensorial a través de una vía contralateral.",
                        "isCorrect": false
                    },
                    {
                        "option": " Aquellas regiones del cuerpo que presentan una mayor densidad de receptores por unidad de área, tienen una mayor representación en la corteza somasensorial.",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "Los sistemas sensoriales codifican la intensidad de un estímulo en función de:",
                "options": [
                    {
                        "option": " El tipo de receptor activado.",
                        "isCorrect": false
                    },
                    {
                        "option": " El tamaño del campo receptorial.",
                        "isCorrect": false
                    },
                    {
                        "option": " El número de receptores activados.",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "La distancia por la que deben estar separados dos estímulos táctiles para percibirse como dos estímulos individuales es menor en:",
                "options": [
                    {
                        "option": " las orejas.",
                        "isCorrect": false
                    },
                    {
                        "option": " la espalda.",
                        "isCorrect": false
                    },
                    {
                        "option": " la punta de los dedos.",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "La activación de los receptores postsinápticos metabotrópicos provoca:",
                "options": [
                    {
                        "option": " Respuestas postsinápticas rápidas.",
                        "isCorrect": false
                    },
                    {
                        "option": " La producción de segundos mensajeros.",
                        "isCorrect": true
                    },
                    {
                        "option": " Un cambio conformacional directo en los canales iónicos.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "En la siguiente figura se esquematiza un potencial postsináptico que podría haberse generado por el cierre de canales de:",
                "options": [
                    {
                        "option": " K+",
                        "isCorrect": true
                    },
                    {
                        "option": " Na+",
                        "isCorrect": false
                    },
                    {
                        "option": " Ca++",
                        "isCorrect": false
                    }
                ],
                "image": 13
            },
            {
                "question": "¿Qué tipo celular del tejido nervioso posee prolongaciones llamadas pies terminales que rodean los vasos sanguíneos?",
                "options": [
                    {
                        "option": " astrocito",
                        "isCorrect": true
                    },
                    {
                        "option": " microglía",
                        "isCorrect": false
                    },
                    {
                        "option": " oligodendrocito",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Las neuronas de mayor tamaño del sistema nervioso central se caracterizan por presentar:",
                "options": [
                    {
                        "option": " axón corto",
                        "isCorrect": false
                    },
                    {
                        "option": " núcleo heterocromático",
                        "isCorrect": false
                    },
                    {
                        "option": " grumos de Nissl en el soma",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "Indique a qué estructuras celulares corresponden los grumos de Nissl.",
                "options": [
                    {
                        "option": " neurofilamentos",
                        "isCorrect": false
                    },
                    {
                        "option": " vesículas sinápticas",
                        "isCorrect": false
                    },
                    {
                        "option": " RER y polirribosomas",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "¿Cómo clasificaría desde el punto de vista morfológico a una neurona sensitiva de un ganglio raquídeo?",
                "options": [
                    {
                        "option": " Bipolar",
                        "isCorrect": false
                    },
                    {
                        "option": " Multipolar",
                        "isCorrect": false
                    },
                    {
                        "option": " Pseudounipolar",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "¿Cómo se transporta una vesícula conteniendo neurotransmisores desde el soma a la terminal sináptica?",
                "options": [
                    {
                        "option": " Mediante transporte retrógrado utilizando dineínas",
                        "isCorrect": false
                    },
                    {
                        "option": " Deslizándose anclada a filamentos de actina",
                        "isCorrect": false
                    },
                    {
                        "option": " Unida a microtúbulos a través de kinesinas",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "En los axones mielínicos del sistema nervioso central:",
                "options": [
                    {
                        "option": " existe una lámina basal que los rodea",
                        "isCorrect": false
                    },
                    {
                        "option": " cada segmento internodal es mielinizado por una célula de Schwann",
                        "isCorrect": false
                    },
                    {
                        "option": " la región de los nodos de Ranvier contacta con prolongaciones astrocitarias",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "En el sistema nervioso periférico:",
                "options": [
                    {
                        "option": " los axones amielínicos están rodeados por citoplasma de la célula de Schwann",
                        "isCorrect": true
                    },
                    {
                        "option": " en la región de los nodos de Ranvier los axones contactan directamente con el endoneuro",
                        "isCorrect": false
                    },
                    {
                        "option": " una célula de Schwann extiende numerosas prolongaciones que rodean varios segmentos internodales",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "De las siguientes regiones de la corteza cerebral, ¿cuál se asemeja más en su estructura a la corteza cerebelosa?",
                "options": [
                    {
                        "option": " Neocortex",
                        "isCorrect": false
                    },
                    {
                        "option": " Paleocortex",
                        "isCorrect": false
                    },
                    {
                        "option": " Arquicortex",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "Con respecto a las neuronas de Purkinje de la corteza cerebelosa, marque la opción correcta:",
                "options": [
                    {
                        "option": " Su soma se localiza en la capa granular.",
                        "isCorrect": false
                    },
                    {
                        "option": " Son neuronas de axón corto (interneuronas",
                        "isCorrect": false
                    },
                    {
                        "option": " Su arborización dendrítica apical se distribuye en la capa molecular.",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "¿Cuál de los siguientes tipos de neuronas NO utiliza glutamato como neurotransmisor?",
                "options": [
                    {
                        "option": " Neurona piramidal del cerebro",
                        "isCorrect": false
                    },
                    {
                        "option": " Neurona de Purkinje del cerebelo",
                        "isCorrect": true
                    },
                    {
                        "option": " Neurona grano (o granular",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "En la médula espinal, ¿dónde se ubican los somas neuronales de mayor tamaño?",
                "options": [
                    {
                        "option": " En el asta anterior de la médula espinal",
                        "isCorrect": true
                    },
                    {
                        "option": " En el asta posterior de la médula espinal",
                        "isCorrect": false
                    },
                    {
                        "option": " En la sustancia gris central periependimaria",
                        "isCorrect": false
                    }
                ]
            }
        ]
    },
    {
        "nombre": "Segundo Periodo Examen Digestivo, renal y endócrino – 21 de diciembre 2022",
        "codigo": "dre2022Dic",
        "preguntas": [
            {
                "question": "La síntesis y liberación de hormona de crecimiento es:",
                "options": [
                    {
                        "option": " Estimulada por el factor de crecimiento insulínico tipo 1 (IGF-1",
                        "isCorrect": false
                    },
                    {
                        "option": " Inhibida por el factor de liberación de GH (GHRH",
                        "isCorrect": false
                    },
                    {
                        "option": " Estimulada por el ayuno.",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "En el siguiente esquema se representa un eje endócrino genérico. Indique la opción correcta:",
                "options": [
                    {
                        "option": " Si la neurohormona A es la GHRH, la hormona C es el cortisol.",
                        "isCorrect": false
                    },
                    {
                        "option": " Si la neurohormona A es la GnRH, la hormona C puede ser el estrógeno.",
                        "isCorrect": true
                    },
                    {
                        "option": " Si la hormona C es una hormona tiroidea, va a estimular a la hormona B.",
                        "isCorrect": false
                    }
                ],
                "image": 2
            },
            {
                "question": "Con respecto a la regulación de la secreción gástrica:",
                "options": [
                    {
                        "option": " La secreción gástrica se estimula por la histamina.",
                        "isCorrect": true
                    },
                    {
                        "option": " Los reflejos de distensión gástrica inhiben la secreción gástrica.",
                        "isCorrect": false
                    },
                    {
                        "option": " La secreción gástrica ocurre principalmente durante la fase intestinal.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Indique cuál de los siguientes compuestos estimulan la secreción de ácido en el estómago:",
                "options": [
                    {
                        "option": " Acetilcolina.",
                        "isCorrect": true
                    },
                    {
                        "option": " Somatostatina.",
                        "isCorrect": false
                    },
                    {
                        "option": " Noradrenalina.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "La respuesta fisiológica a una hipocalcemia incluye:",
                "options": [
                    {
                        "option": " Aumento de la formación ósea.",
                        "isCorrect": false
                    },
                    {
                        "option": " Inhibición de la síntesis de calcitriol.",
                        "isCorrect": false
                    },
                    {
                        "option": " Aumento de la reabsorción renal de calcio.",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "Un incremento en la liberación de cortisol provocará:",
                "options": [
                    {
                        "option": " Aumento de la masa muscular.",
                        "isCorrect": false
                    },
                    {
                        "option": " Aumento de la producción de glucógeno.",
                        "isCorrect": false
                    },
                    {
                        "option": " Disminución de la respuesta inflamatoria.",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "En condiciones fisiológicas en el túbulo proximal se reabsorbe:",
                "options": [
                    {
                        "option": " 1/3 de la glucosa filtrada.",
                        "isCorrect": false
                    },
                    {
                        "option": " 1/3 del Na+ filtrado.",
                        "isCorrect": false
                    },
                    {
                        "option": " 2/3 del agua filtrada.",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "La cantidad de agua excretada en la orina estará determinada por:",
                "options": [
                    {
                        "option": " Su reabsorción en el túbulo proximal.",
                        "isCorrect": false
                    },
                    {
                        "option": " Su reabsorción en el túbulo colector.",
                        "isCorrect": true
                    },
                    {
                        "option": " Su secreción en el asa de Henle.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Con respecto al proceso de filtración glomerular:",
                "options": [
                    {
                        "option": " La presión oncótica del espacio de Bowman se opone a la filtración.",
                        "isCorrect": false
                    },
                    {
                        "option": " Un aumento en la presión hidrostática capilar favorece la filtración.",
                        "isCorrect": true
                    },
                    {
                        "option": " Los cationes con un radio mayor a 15 A° filtran libremente.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Con respecto a los fenómenos que ocurren en la nefrona, es correcto afirmar que:",
                "options": [
                    {
                        "option": " La reabsorción es el pasaje de líquido o solutos del glomérulo hacia la Cápsula de Bowman.",
                        "isCorrect": false
                    },
                    {
                        "option": " La filtración es el pasaje de líquido o solutos de la luz tubular hacia los capilares peritubulares.",
                        "isCorrect": false
                    },
                    {
                        "option": " La secreción es el pasaje de líquido o solutos de los capilares peritubulares hacia la luz tubular.",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "Frente a una disminución en la osmolaridad plasmática:",
                "options": [
                    {
                        "option": " Disminuye la secreción de ADH.",
                        "isCorrect": true
                    },
                    {
                        "option": " Disminuye la secreción de renina.",
                        "isCorrect": false
                    },
                    {
                        "option": " Aumenta la reabsorción de H20 a nivel de túbulo colector.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Una caída de la volemia mayor al 10% desencadena:",
                "options": [
                    {
                        "option": " Un aumento de la secreción de ADH.",
                        "isCorrect": true
                    },
                    {
                        "option": " Una disminución de la secreción de renina.",
                        "isCorrect": false
                    },
                    {
                        "option": " Una disminución de la reabsorción de H20 a nivel de túbulo colector.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Acerca del destino del grupo amino de los aminoácidos durante su catabolismo:",
                "options": [
                    {
                        "option": " El grupo amino se transporta al hígado de forma libre donde se transforma en ácido úrico",
                        "isCorrect": false
                    },
                    {
                        "option": " El grupo amino se transporta al hígado como glutamato donde se transforma en glutamina",
                        "isCorrect": false
                    },
                    {
                        "option": " El grupo amino se transporta al hígado en la glutamina y la alanina donde se transforma en urea",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "Acerca del ciclo de la urea:",
                "options": [
                    {
                        "option": " Se produce a nivel mitocondrial en todos los tejidos y requiere NADH",
                        "isCorrect": false
                    },
                    {
                        "option": " Se produce a nivel de la mitocondria y citosol de los hepatocitos y requiere ATP",
                        "isCorrect": true
                    },
                    {
                        "option": " Se produce a nivel renal en el citosol de las células del asa ascendente y requiere ADP",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "La degradación de proteínas a nivel intracelular se lleva a cabo mediante:",
                "options": [
                    {
                        "option": " La acción de la tripsina a nivel de la matriz mitocondrial",
                        "isCorrect": false
                    },
                    {
                        "option": " La acción de las peptidasas a nivel del retículo endoplásmico",
                        "isCorrect": false
                    },
                    {
                        "option": " La acción del proteosoma y los lisosomas en el citosol celular",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "¿Cuales son los mecanismos compensatorios durante una acidosis de origen respiratorio?",
                "options": [
                    {
                        "option": " Aumento de la expresión de la bicarbonato sintasa y liasa a nivel renal",
                        "isCorrect": false
                    },
                    {
                        "option": " Aumento de la expresión de la glutaminasa y síntesis de nuevo bicarbonato a nivel renal",
                        "isCorrect": true
                    },
                    {
                        "option": " Aumento de la expresión de la glutamato deshidrogenasa y excreción de protones a nivel renal",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿Qué entiende por ácido de origen respiratorio?",
                "options": [
                    {
                        "option": " Es la generación de ácido láctico durante la respiración mitocondrial",
                        "isCorrect": false
                    },
                    {
                        "option": " Es la generación de CO2 en la cadena de transporte de electrones mitocondrial",
                        "isCorrect": false
                    },
                    {
                        "option": " Es la generación de CO2 en el ciclo de Krebs durante la degradación de nutrientes",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "Un hombre joven llega a la emergencia en estado de inconsciencia. La gasometría arterial indica los siguientes valores: (valores normales: pH=7.4, pCO2=40 mmHg, HCO3-=24 mEq/l) : </br>pH 7.25 pCO2 </br>60 mmHg </br>HCO3- 24 mEq/l </br>¿Cuál de las siguientes afirmaciones es correcta?",
                "options": [
                    {
                        "option": " Presenta una acidosis metabólica compensada",
                        "isCorrect": false
                    },
                    {
                        "option": " Presenta una acidosis respiratoria no compensada",
                        "isCorrect": true
                    },
                    {
                        "option": " Presenta una alcalosis de origen metabólico no compensada",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "La regulación del equilibrio ácido-base es fundamental para mantener la homeostasis del organismo. Indique la afirmación correcta:",
                "options": [
                    {
                        "option": " A nivel plasmático el principal sistema amortiguador es el buffer amonio (NH3+ + H+/NH4+",
                        "isCorrect": false
                    },
                    {
                        "option": " A nivel plasmático el principal sistema amortiguador es el buffer bicarbonato (HCO3- + H+/H2CO3",
                        "isCorrect": true
                    },
                    {
                        "option": " A nivel plasmático el principal sistema amortiguador son las proteínas y el buffer fosfato (HPO42- + H+/H2PO4-",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "En un individuo obeso con síndrome metabólico el tejido adiposo presenta alguna de las siguientes características:",
                "options": [
                    {
                        "option": " Mayor producción de adiponectina/leptina con aumento en la síntesis de ácidos grasos",
                        "isCorrect": false
                    },
                    {
                        "option": " Mayor producción de citoquinas anti-inflamatorias con aumento en la oxidación de ácidos grasos",
                        "isCorrect": false
                    },
                    {
                        "option": " Mayor producción de citoquinas pro-inflamatorias con aumento en la movilización de ácidos grasos",
                        "isCorrect": true
                    }
                ],
                "image": 21
            },
            {
                "question": "A continuación, se muestra la imagen de una biomolécula comúnmente presente en la dieta. Señale cuál de las siguientes enzimas participa de su degradación.",
                "options": [
                    {
                        "option": " Pepsina",
                        "isCorrect": true
                    },
                    {
                        "option": " Fosfolipasa A2",
                        "isCorrect": false
                    },
                    {
                        "option": " Amilasa salival",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Señale cuál de los siguientes producto de la digestión requiere de un transportador secundariamente activo para su absorción a nivel del enterocito.",
                "options": [
                    {
                        "option": " Fibra",
                        "isCorrect": false
                    },
                    {
                        "option": " Galactosa",
                        "isCorrect": true
                    },
                    {
                        "option": " Ácidos grasos",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿Cómo ocurre la absorción de agua a nivel intestinal?",
                "options": [
                    {
                        "option": " La absorción de glucosa genera un microgradiente de Na+ en la cara basolateral del enterocito favoreciendo el movimiento de agua.",
                        "isCorrect": true
                    },
                    {
                        "option": " La absorción de colesterol genera un microgradiente de Na+ en la cara basolateral del enterocito favoreciendo el movimiento de agua.",
                        "isCorrect": false
                    },
                    {
                        "option": " La absorción de micelas mixtas de lípidos genera un microgradiente de Na+ en la cara basolateral del enterocito favoreciendo el movimiento de agua.",
                        "isCorrect": false
                    }
                ],
                "image": 24
            },
            {
                "question": "A continuación, se muestra el mecanismo de acción de una hormona. Señale la opción correcta según el esquema.",
                "options": [
                    {
                        "option": " El componente 1 es una hormona liposoluble y el componente 2 un receptor intracelular",
                        "isCorrect": true
                    },
                    {
                        "option": " El componente 1 es una hormona hidrofílica y el componente 2 un segundo mensajero",
                        "isCorrect": false
                    },
                    {
                        "option": " El componente 1 es una hormona peptídica y el componente 2 un receptor acoplado a proteína G",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "De forma general, la señalización a través de hormonas implica qué:",
                "options": [
                    {
                        "option": " Cada célula posee receptores para todas las hormonas producidas en el organismo.",
                        "isCorrect": false
                    },
                    {
                        "option": " Una misma hormona puede generar efectos diferentes dependiendo del tejido blanco.",
                        "isCorrect": true
                    },
                    {
                        "option": " Un receptor es capaz de reconocer varias hormonas distintas y generar el mismo efecto a nivel intracelular.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Acerca del metabolismo de la glucosa, señale las diferencias funcionales entre el músculo esquelético y el hígado:",
                "options": [
                    {
                        "option": " El hígado es capaz de almacenar glucosa en forma de glucógeno mientras que el músculo esquelético no posee reservas.",
                        "isCorrect": false
                    },
                    {
                        "option": " El músculo carece de la enzima glucosa-6-fosfatasa y no puede aportar moléculas de glucosa durante una hipoglicemia, a diferencia del hepatocito.",
                        "isCorrect": true
                    },
                    {
                        "option": " El músculo es capaz de sintetizar triglicéridos y colesterol que exporta en lipoproteínas de alta densidad, mientras que el hígado solamente produce quilomicrones.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿Qué tienen en común la gluconeogénesis y las síntesis de ácidos grasos?",
                "options": [
                    {
                        "option": " Consumen ATP",
                        "isCorrect": true
                    },
                    {
                        "option": " Generan poder reductor",
                        "isCorrect": false
                    },
                    {
                        "option": " Ocurren exclusivamente en la mitocondria",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Cuando baja la concentración de glucosa en sangre, ¿que cambios ocurren a nivel del metabolismo?",
                "options": [
                    {
                        "option": " Se secreta glucagón, que actúa a nivel del hígado, generando la degradación del glucógeno y la activación de la gluconeogénesis.",
                        "isCorrect": true
                    },
                    {
                        "option": " Se secreta insulina, que actúa a nivel del músculo y tejido adiposo promoviendo la captación, almacenamiento como glucógeno y la utilización de la glucosa.",
                        "isCorrect": false
                    },
                    {
                        "option": " Se secreta glucagón, que actúa a nivel del músculo y tejido adiposo promoviendo su captación, almacenamiento como glucógeno y la utilización de la glucosa.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿Qué función cumplen los cuerpos cétonicos en el ayuno prolongado?",
                "options": [
                    {
                        "option": " Son utilizados por el tejido hepático como fuente de energía.",
                        "isCorrect": false
                    },
                    {
                        "option": " Son utilizados por los tejidos obligatorios como fuente de energía.",
                        "isCorrect": true
                    },
                    {
                        "option": " Son utilizados por el tejido hepático como fuente para sintetizar ácidos grasos.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Tanto la diabetes como la inanición a menudo provocan síntomas de acidosis. Esto es causado por:",
                "options": [
                    {
                        "option": " un consumo excesivo de cuerpos cetónicos para prevenir la alcalosis.",
                        "isCorrect": false
                    },
                    {
                        "option": " degradación de proteínas para formar alanina, glutamina y glutamato.",
                        "isCorrect": false
                    },
                    {
                        "option": " degradación de ácidos grasos para formar acetoacetato, β hidroxibutirato y acetato.",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "La gluconeogénesis es una ruta central del metabolismo para la regulación de la glicemia. ¿Cuáles son los sustratos de dicha ruta y donde ocurre?",
                "options": [
                    {
                        "option": " glucosa, glutamina, acetil-coA y proteínas glucogénicas; hígado y músculo.",
                        "isCorrect": false
                    },
                    {
                        "option": " ácidos grasos, glutamato y aminoácidos cetogénicos; músculo y tejido adiposo.",
                        "isCorrect": false
                    },
                    {
                        "option": " lactato, alanina, glicerol y aminoácidos glucogénicos; hígado y médula adrenal.",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "Para sintetizar ácidos grasos es necesario:",
                "options": [
                    {
                        "option": " sintetizar acetil-CoA, moléculas de piruvato, FADH2 y ATP.",
                        "isCorrect": false
                    },
                    {
                        "option": " sintetizar malonil-CoA, moléculas de acetil- CoA, NADPH Y ATP.",
                        "isCorrect": true
                    },
                    {
                        "option": " sintetizar piruvato-CoA, moléculas de malonil-CoA, NADH y GTP.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Cuando hay un exceso de energía en el hígado, se inhibe de β-oxidación de los ácidos grasos mediante:",
                "options": [
                    {
                        "option": " la activación de la carnitina acil-transferasa I por malonil-CoA.",
                        "isCorrect": false
                    },
                    {
                        "option": " la inhibición de la carnitina acil-transferasa I por malonil-CoA.",
                        "isCorrect": true
                    },
                    {
                        "option": " la inhibición de la acetil-CoA carboxilasa, enzima que sintetiza Malonil-CoA.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "El tejido adiposo puede comunicar que hay un exceso de energía al organismo por el siguiente mecanismo:",
                "options": [
                    {
                        "option": " secreción de adiponectina, que actúa a nivel del hígado inhibiendo la síntesis de nueva glucosa.",
                        "isCorrect": false
                    },
                    {
                        "option": " secreción de leptina, que actúa a nivel del cerebro, que secreta neuropéptidos que dan sensación de saciedad.",
                        "isCorrect": true
                    },
                    {
                        "option": " secreción de interleuquina 1-beta, que actúa a nivel de las células del sistema inmune, generando activación de la inmunidad.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Una persona presenta que presenta una mutación que genera un receptor apoB/E no funcional, va a presentar altos niveles en sangre de:",
                "options": [
                    {
                        "option": " LDL",
                        "isCorrect": true
                    },
                    {
                        "option": " VLDL",
                        "isCorrect": false
                    },
                    {
                        "option": " Quilomicrones",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Los tejidos que necesitan lípidos (músculo, tejido adiposo) van a expresar en el endotelio capilar:",
                "options": [
                    {
                        "option": " Lipoproteína lipasa",
                        "isCorrect": true
                    },
                    {
                        "option": " Lipasa sensible a hormona.",
                        "isCorrect": false
                    },
                    {
                        "option": " Lecitina-colesterol-acil- transferasa.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Indique cuáles son las lipoproteínas involucradas en el transporte de lípidos exógenos:",
                "options": [
                    {
                        "option": " HDL.",
                        "isCorrect": false
                    },
                    {
                        "option": " VLDL.",
                        "isCorrect": false
                    },
                    {
                        "option": " Quilomicrones.",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "Para que transcurra la beta oxidación de ácidos grasos:",
                "options": [
                    {
                        "option": " Los ácidos grasos deben transportare desde el citosol a la matriz mitocondrial por medio de la albumina",
                        "isCorrect": false
                    },
                    {
                        "option": " Los ácidos grasos deben transportarse desde el citosol a la matriz mitocondrial por medio de la carnitina",
                        "isCorrect": true
                    },
                    {
                        "option": " Los ácidos grasos deben transportarse desde el citosol a la matriz mitocondrial por medio de la Coenzima A",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "En un preparado histológico de riñón, ¿cuál de los siguientes elementos se pueden encontrar en la médula?",
                "options": [
                    {
                        "option": " tubos colectores",
                        "isCorrect": true
                    },
                    {
                        "option": " máculas densas",
                        "isCorrect": false
                    },
                    {
                        "option": " túbulos contorneados",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Al observar un preparado de riñón al microscopio óptico, se observa una serie de estructuras canaliculares de pared delgada formada por epitelio simple plano. A mayor aumento se distinguen dos tipos: -muchas de ellas son estructuras vasculares, con los núcleos del epitelio protruyentes hacia la luz y generalmente contienen células sanguíneas. -las otras estructuras, sin contenido luminal, cuyos núcleos celulares no protruyen hacia la luz, corresponden a:",
                "options": [
                    {
                        "option": " túbulos distales",
                        "isCorrect": false
                    },
                    {
                        "option": " túbulos colectores",
                        "isCorrect": false
                    },
                    {
                        "option": " túbulos intermedios",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "De los elementos mencionados a continuación, ¿cuáles son componentesfundamentales de los espacios porta del hígado?",
                "options": [
                    {
                        "option": " cordones de hepatocitos",
                        "isCorrect": false
                    },
                    {
                        "option": " ramas de la vena porta",
                        "isCorrect": true
                    },
                    {
                        "option": " células de Kupffer",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "En el hígado, ¿en qué sector se encuentran los canalículos biliares?",
                "options": [
                    {
                        "option": " en el espacio porta",
                        "isCorrect": false
                    },
                    {
                        "option": " en los lobulillos dentro de los sinusoides",
                        "isCorrect": false
                    },
                    {
                        "option": " en los lobulillos entre los hepatocitos",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "A nivel histológico, la pared de la vesícula biliar carece de:",
                "options": [
                    {
                        "option": " submucosa",
                        "isCorrect": true
                    },
                    {
                        "option": " lámina propia",
                        "isCorrect": false
                    },
                    {
                        "option": " muscular propia",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "En la lengua, las papilas filiformes:",
                "options": [
                    {
                        "option": " presentan corpúsculos gustativos.",
                        "isCorrect": false
                    },
                    {
                        "option": " se encuentran en su superficie ventral",
                        "isCorrect": false
                    },
                    {
                        "option": " son la variedad de papila más abundante",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "La glándula parótida y el sector exócrino del páncreas tienen muchas similitudes y varias diferencias. Indique cuál de los siguientes conductos excretores se encuentran abundantes en la parótida, pero NO existen en el páncreas:",
                "options": [
                    {
                        "option": " interlobulillares",
                        "isCorrect": false
                    },
                    {
                        "option": " intralobulillares estriados",
                        "isCorrect": true
                    },
                    {
                        "option": " intralobulillares intercalares",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "En una micrografía electrónica de transmisión de mucosa gástrica se distingue una célula que presenta abundantes mitocondrias y un llamativo sistema membranoso que incluye canalículos intracelulares comunicados con la superficie apical y una red túbulo vesicular compleja. En base a la descripción, consideramos que se trata de una célula:",
                "options": [
                    {
                        "option": " parietal",
                        "isCorrect": true
                    },
                    {
                        "option": " principal",
                        "isCorrect": false
                    },
                    {
                        "option": " mucosa del cuello",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Sobre los acinos del páncreas:",
                "options": [
                    {
                        "option": " su luz está ocupada por abundante mucus",
                        "isCorrect": false
                    },
                    {
                        "option": " contienen células centroacinares de gran tamaño y con abundantes gránulos secretorios",
                        "isCorrect": false
                    },
                    {
                        "option": " las células acinares tienen su sector apical más estrecho y su citoplasma basal es basófilo",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "¿Cuál de los siguientes tipos celulares tiene como función mantener la inmunidad innata de la mucosa intestinal mediante la secreción de sustancias antimicrobianas?",
                "options": [
                    {
                        "option": " células de Paneth",
                        "isCorrect": true
                    },
                    {
                        "option": " células caliciformes",
                        "isCorrect": false
                    },
                    {
                        "option": " células enteroendócrinas",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "En una micrografía electrónica de transmisión, las células secretoras de la corteza suprarrenal se caracterizan porque su citoplasma contiene:",
                "options": [
                    {
                        "option": " gránulos secretorios de centro denso y abundantes lisosomas",
                        "isCorrect": false
                    },
                    {
                        "option": " un extenso complejo de Golgi y abundante retículo endoplásmico rugoso",
                        "isCorrect": false
                    },
                    {
                        "option": " mitocondrias con crestas tubulares y abundante retículo endoplásmico liso",
                        "isCorrect": true
                    }
                ]
            }
        ]
    }
]
let questions = [];
let currentTest = null;
let current = 0;
let score = 0;
let answered = false;
let answeredCount = 0;
let quizRange = { start: 0, end: 0 };

const quizDiv = document.getElementById('quiz');
const scoreDiv = document.getElementById('score');
const restartBtn = document.getElementById('restartBtn');
const stopBtn = document.getElementById('stopBtn');
const rangeSelector = document.getElementById('rangeSelector');
const startIdxInput = document.getElementById('startIdx');
const endIdxInput = document.getElementById('endIdx');
const startQuizBtn = document.getElementById('startQuizBtn');
const pruebasList = document.getElementById('pruebasList');
const currentTestDiv = document.getElementById('currentTest');

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
    showQuestion();
});

function renderPruebasList() {
    if (!pruebasList) return;
    pruebasList.innerHTML = '<b>Pruebas disponibles:</b><br> ' + tests.map(t => `<button class="pruebaBtn" codigo='${t.codigo}'">${t.nombre}</button>`).join(' ');
    document.querySelectorAll('.pruebaBtn').forEach(btn => {
        btn.onclick = function () {
            loadPrueba(btn.getAttribute('codigo'));
        };
    });
}

renderPruebasList();

function loadPrueba(codigo) {
    const test = tests.find(t => t.codigo === codigo);
    questions = test.preguntas;
    currentTest = test;
    startIdxInput.max = questions.length;
    endIdxInput.max = questions.length;
    startIdxInput.value = 1;
    endIdxInput.value = questions.length;
    rangeSelector.style.display = 'block';
    quizDiv.innerHTML = '';
    scoreDiv.textContent = '';
    stopBtn.style.display = 'none';
    restartBtn.style.display = 'none';
    currentTestDiv.innerHTML = `<h2>${test.nombre}</h2>`;
}

function stopQuiz() {
    quizDiv.innerHTML = '<h2>¡Prueba detenida!</h2>';
    let percent = answeredCount > 0 ? ((score / answeredCount) * 100).toFixed(1) : 0;
    scoreDiv.textContent = `Puntaje: ${score} / ${answeredCount} (${percent}%)`;
    stopBtn.style.display = 'none';
    restartBtn.style.display = 'block';
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
    const progress = `<div class="progress">Pregunta ${current - quizRange.start + 1} de ${quizRange.end - quizRange.start + 1}</div>`;

    quizDiv.innerHTML = `${progress}<div class="question">${current + 1}. ${q.question}</div><div id="imgContainer"></div><div class="options"></div><div id="nextDiv"></div>`;
    // Buscar imagen asociada
    let image = questions[current].image;
    if (image) {
        const imgOb = document.createElement('img');
        imgOb.src = `./pruebas/imagenes/${currentTest.codigo}/${image}.png`;
        imgOb.alt = `Imagen ${image}`;
        imgOb.style.maxWidth = '300px';
        imgOb.style.display = 'block';
        document.getElementById('imgContainer').appendChild(imgOb);
    }

    const optionsDiv = quizDiv.querySelector('.options');
    q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.textContent = opt.option;
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
        if (q.options[i].isCorrect) btn.classList.add('correct');
        if (i === idx && !q.options[i].isCorrect) btn.classList.add('incorrect');
    });
    if (q.options[idx].isCorrect) {
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