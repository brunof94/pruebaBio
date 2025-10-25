const tests = [
    {
        "nombre": "Examen de Digestivo Renal y Endócrino - 16 febrero 2022",
        "codigo": "digestivoRenal2022",
        "area": "dre",
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
        "area": "dre",
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
        "area": "neuro",
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
            },
            {
                "question": "En la piel, los receptores sensoriales que tienen mayor tamaño son los receptores",
                "options": [
                    {
                        "option": " de Meissner",
                        "isCorrect": false
                    },
                    {
                        "option": " de Merkel",
                        "isCorrect": false
                    },
                    {
                        "option": " de Pacini",
                        "isCorrect": true
                    }
                ]
            }
        ]
    },
    {
        "nombre": "Segundo Periodo Examen Digestivo, renal y endócrino – 21 de diciembre 2022",
        "codigo": "dre2022Dic",
        "area": "dre",
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
                "question": "Un hombre joven llega a la emergencia en estado de inconsciencia. La gasometría arterial indica los siguientes valores: (valores normales: pH=7.4, pCO2=40 mmHg, HCO3-=24 mEq/l) : pH 7.25 pCO2 60 mmHg HCO3- 24 mEq/l ¿Cuál de las siguientes afirmaciones es correcta?",
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
                ]
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
                ],
                "image": 21
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
                ]
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
                ],
                "image": 24
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
            },
            {
                "question": "Acerca de las células parafoliculares de la tiroides:",
                "options": [
                    {
                        "option": " Se localizan en el interior folicular.",
                        "isCorrect": false
                    },
                    {
                        "option": " Acumulan su producto de secreción en gránulos.",
                        "isCorrect": true
                    },
                    {
                        "option": " La tiroglobulina es su principal producto de secreción.",
                        "isCorrect": false
                    }
                ]
            }
        ]
    },
    {
        "nombre": "Tercer periodo de examen Neurobiología – 14 de febrero 2023",
        "codigo": "neurobiologia2023",
        "area": "neuro",
        "preguntas": [
            {
                "question": "En una neurona multipolar:",
                "options": [
                    {
                        "option": " el axón se distingue porque aumenta su diámetro a medida que se aleja de soma",
                        "isCorrect": false
                    },
                    {
                        "option": " el sector inicial de las dendritas es más delgado que el del axón",
                        "isCorrect": false
                    },
                    {
                        "option": " las dendritas se ramifican cerca del soma",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "Luego de un daño al sistema nervioso central, ¿qué tipo celular adquiere capacidad fagocítica?",
                "options": [
                    {
                        "option": " microglías",
                        "isCorrect": true
                    },
                    {
                        "option": " astrocitos fibrosos",
                        "isCorrect": false
                    },
                    {
                        "option": " astrocitos protoplasmáticos",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿Cuál de los siguientes componentes es típico encontrar en el citoplasma de una microglía?",
                "options": [
                    {
                        "option": " grumos de Nissl",
                        "isCorrect": false
                    },
                    {
                        "option": " lisosomas y fagolisosomas",
                        "isCorrect": true
                    },
                    {
                        "option": " filamentos intermedios formados por GFAP",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿Cuál de los siguientes tipos celulares tiene prolongaciones terminales sobre los vasos sanguíneos en el sistema nervioso central?",
                "options": [
                    {
                        "option": " neuronas",
                        "isCorrect": false
                    },
                    {
                        "option": " astrocitos",
                        "isCorrect": true
                    },
                    {
                        "option": " microglía",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿Cómo se denomina el tejido conjuntivo que rodea directamente cada fibra nerviosa en un nervio?",
                "options": [
                    {
                        "option": " epineuro",
                        "isCorrect": false
                    },
                    {
                        "option": " perineuro",
                        "isCorrect": false
                    },
                    {
                        "option": " endoneuro",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "¿Cuál de las siguientes opciones es correcta con respecto a las motoneuronas de la médula espinal?",
                "options": [
                    {
                        "option": " sus dendritas son poco ramificadas y sin espinas",
                        "isCorrect": false
                    },
                    {
                        "option": " su axón tiene mielina formada en parte por oligodendrocitos y en parte por células de Schwann",
                        "isCorrect": true
                    },
                    {
                        "option": " su soma tiene ribosomas que no llegan a conformar grumos de Nissl visibles con microscopía óptica",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿Cuál de los siguientes segmentos de la médula espinal tiene una mayor cantidad de fibras en la sustancia blanca?",
                "options": [
                    {
                        "option": " cervical 2",
                        "isCorrect": true
                    },
                    {
                        "option": " lumbar 5",
                        "isCorrect": false
                    },
                    {
                        "option": " torácico 12",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿Cómo se denominan los receptores formados por un terminal nervioso rodeado de múltiples láminas conjuntivas concéntricas?",
                "options": [
                    {
                        "option": " corpúsculo de Meissner",
                        "isCorrect": false
                    },
                    {
                        "option": " corpúsculo de Paccini",
                        "isCorrect": true
                    },
                    {
                        "option": " huso neuromuscular",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Si se corta un axón largo, ¿en qué caso existe mayor posibilidad de regeneración?",
                "options": [
                    {
                        "option": " cuando no ocurre degeneración del segmento distal",
                        "isCorrect": false
                    },
                    {
                        "option": " cuando la lesión es lejos del soma neuronal",
                        "isCorrect": true
                    },
                    {
                        "option": " cuando no ocurre reacción local en la lesión",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿En qué capa de la corteza cerebelosa se localizan los glomérulos cerebelosos?",
                "options": [
                    {
                        "option": " capa granular",
                        "isCorrect": true
                    },
                    {
                        "option": " capa molecular",
                        "isCorrect": false
                    },
                    {
                        "option": " capa de Purkinje",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿Con qué parte de las células granulares contactan las fibras aferentes musgosas?",
                "options": [
                    {
                        "option": " axón",
                        "isCorrect": false
                    },
                    {
                        "option": " soma",
                        "isCorrect": false
                    },
                    {
                        "option": " dendritas",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "¿En qué capa del neocórtex del área motora primaria se localizan los somas de las neuronas cuyo axón alcanza la médula espinal?",
                "options": [
                    {
                        "option": " capa I",
                        "isCorrect": false
                    },
                    {
                        "option": " capa IV",
                        "isCorrect": false
                    },
                    {
                        "option": " capa V",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "Para que se desarrolle un potencial de acción en el cono axónico, ¿Cuál de los siguientes eventos ocurre primero?",
                "options": [
                    {
                        "option": " Despolarización supraumbral.",
                        "isCorrect": true
                    },
                    {
                        "option": " Apertura de canales de K+ dependientes de voltaje.",
                        "isCorrect": false
                    },
                    {
                        "option": " Inactivación de los canales de Na+ dependientes de voltaje.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "El sentido de propagación de un potencial de acción que se desarrolló en el cono axónico se verá favorecida por:",
                "options": [
                    {
                        "option": " La hiperpolarización del potencial de membrana en el frente de propagación.",
                        "isCorrect": false
                    },
                    {
                        "option": " La inactivación de los canales de Na+ dependientes de voltaje en el frente de propagación.",
                        "isCorrect": false
                    },
                    {
                        "option": " La cinética de cierre lenta de los canales de K+ dependientes de voltaje en la cola de propagación.",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "Cuando el potencial de membrana de una neurona permanece en reposo:",
                "options": [
                    {
                        "option": " La bomba de Na+/K+ ATPasa permanece inactiva.",
                        "isCorrect": false
                    },
                    {
                        "option": " Los canales de Na+ dependientes de voltaje se encuentran abiertos.",
                        "isCorrect": false
                    },
                    {
                        "option": " El flujo neto de iones entre el compartimiento intra y extracelular es 0.",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "La siguiente figura muestra dos tipos de sinapsis A (arriba) y B (abajo). Indique la opción correcta:",
                "options": [
                    {
                        "option": " La transmisión en A depende de la entrada de Ca++.",
                        "isCorrect": true
                    },
                    {
                        "option": " La latencia en la transmisión es menor en A que en B.",
                        "isCorrect": false
                    },
                    {
                        "option": " La sinapsis A puede transmitir potenciales subumbrales.",
                        "isCorrect": false
                    }
                ],
                "image": 16
            },
            {
                "question": "Respecto a las vías centrales del sistema somatosensorial nociceptivo:",
                "options": [
                    {
                        "option": " La tercera neurona de esta vía se encuentra a nivel medular.",
                        "isCorrect": false
                    },
                    {
                        "option": " La neurona aferente primaria de esta vía alcanza cortezas motoras.",
                        "isCorrect": false
                    },
                    {
                        "option": " Alcanza las cortezas somatosensoriales a través de una vía contralateral.",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "La siguiente figura muestra el potencial de membrana de una neurona postsináptica cuando el receptor se encuentra inactivo (izquierda) y activado (derecha) por la unión del neurotransmisor (triángulos). Indique la opción correcta:",
                "options": [
                    {
                        "option": " El receptor postsináptico es de tipo metabotrópico.",
                        "isCorrect": false
                    },
                    {
                        "option": " El receptor activado podría ser un canal selectivo para Cl-.",
                        "isCorrect": false
                    },
                    {
                        "option": " La activación del receptor aumenta la probabilidad de disparo de la neurona postsináptica.",
                        "isCorrect": true
                    }
                ],
                "image": 18
            },
            {
                "question": "¿Cuál de los siguientes receptores táctiles se encuentran ubicados en la profundidad de la piel y presentan adaptación rápida?",
                "options": [
                    {
                        "option": " Corpúsculos de Pacini.",
                        "isCorrect": true
                    },
                    {
                        "option": " Corpúsculo de Meissner.",
                        "isCorrect": false
                    },
                    {
                        "option": " Receptor disco de Merkel.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Los movimientos rítmicos se caracterizan por una de las siguientes características:",
                "options": [
                    {
                        "option": " Su inicio es involuntario.",
                        "isCorrect": false
                    },
                    {
                        "option": " Su finalización es voluntaria.",
                        "isCorrect": true
                    },
                    {
                        "option": " Su ejecución solo depende de aferencias y eferencias medulares.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "En relación a las vías centrales y cortezas motoras que modulan los diferentes tipos de movimientos motores:",
                "options": [
                    {
                        "option": " Las cortezas motoras carecen de aferencias de cortezas sensoriales.",
                        "isCorrect": false
                    },
                    {
                        "option": " Los axones del haz corticoespinal pueden enviar proyecciones al tronco encefálico.",
                        "isCorrect": true
                    },
                    {
                        "option": " Los axones motores del haz del sistema lateral del tronco encefálico hacen sinapsis con neuronas sensoriales a nivel medular.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿Cuál de los siguientes eventos ocurre durante el reflejo de retirada de un miembro inferior frente a un estímulo nocivo?",
                "options": [
                    {
                        "option": " Se contrae el músculo extensor del miembro opuesto al estimulado.",
                        "isCorrect": true
                    },
                    {
                        "option": " La información sensorial alcanza vías motoras a través de una vía monosináptica.",
                        "isCorrect": false
                    },
                    {
                        "option": " Las vías sensoriales que envían la información al sistema nervioso central solo modulan la actividad del miembro estimulado.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Respecto a los husos neuromusculares y a los órganos tendinosos de Golgi:",
                "options": [
                    {
                        "option": " Los husos neuromusculares sensan un aumento de la tensión del tendón.",
                        "isCorrect": false
                    },
                    {
                        "option": " El órgano tendinoso de Golgi sensa el estiramiento de las fibras musculares.",
                        "isCorrect": false
                    },
                    {
                        "option": " Un aumento en la tensión del tendón aumenta la actividad de la aferente sensorial del órgano tendinoso de Golgi.",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "La activación del sistema nervioso parasimpático tiene como consecuencia:",
                "options": [
                    {
                        "option": " La dilatación de las pupilas.",
                        "isCorrect": false
                    },
                    {
                        "option": " Una disminución de la frecuencia cardíaca.",
                        "isCorrect": true
                    },
                    {
                        "option": " Una relajación de la musculatura lisa intestinal.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "En el sistema nervioso autónomo, la sinapsis ganglionar tiene una de las siguientes características:",
                "options": [
                    {
                        "option": " La división simpática está mediada por noradrenalina y sus receptores son principalmente adrenérgicos.",
                        "isCorrect": false
                    },
                    {
                        "option": " Está mediada por noradrenalina en la división parasimpática y acetilcolina en la división simpática.",
                        "isCorrect": false
                    },
                    {
                        "option": " En ambas divisiones los receptores son principalmente colinérgicos.",
                        "isCorrect": true
                    }
                ]
            }
        ]
    },
    {
        "nombre": "Tercer periodo de examen Cardiovascular y Respiratorio – 20 de febrero 2025",
        "codigo": "cardiovascularrespiratorio2025",
        "area": "cardio",
        "preguntas": [
            {
                "question": "¿Qué caracteriza a la pared de la aorta?",
                "options": [
                    {
                        "option": " la ausencia de lámina basal endotelial",
                        "isCorrect": false
                    },
                    {
                        "option": " que el endotelio está formado por células cilíndricas",
                        "isCorrect": false
                    },
                    {
                        "option": " las abundantes láminas elásticas en su capa media",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "En un preparado histológico, una arteriola presentará en su pared:",
                "options": [
                    {
                        "option": " una limitante elástica interna y otra externa",
                        "isCorrect": false
                    },
                    {
                        "option": " 2 a 3 capas de células musculares lisas",
                        "isCorrect": true
                    },
                    {
                        "option": " una adventicia bien delimitada",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Podemos encontrar vasos sanguíneos capilares de tipo fenestrado en:",
                "options": [
                    {
                        "option": " las glándulas endócrinas",
                        "isCorrect": true
                    },
                    {
                        "option": " la sustancia gris del cerebro",
                        "isCorrect": false
                    },
                    {
                        "option": " el tejido muscular esquelético",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿En cuál de los siguientes sectores podemos encontrar células caliciformes en su epitelio?",
                "options": [
                    {
                        "option": " bronquios",
                        "isCorrect": true
                    },
                    {
                        "option": " conductos alveolares",
                        "isCorrect": false
                    },
                    {
                        "option": " bronquiolos respiratorios",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿Cuál de los siguientes tipos celulares NO participa en la barrera hemato-aérea?",
                "options": [
                    {
                        "option": " Neumocito tipo I",
                        "isCorrect": false
                    },
                    {
                        "option": " Macrófago alveolar",
                        "isCorrect": true
                    },
                    {
                        "option": " Endotelio de capilares",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "A partir de un individuo se realizó el siguiente diagrama presión-volumen para el ventrículo izquierdo. Sabiendo que la frecuencia cardíaca es de 60 ciclos por minuto, el gasto cardíaco del individuo será de:",
                "options": [
                    {
                        "option": " 2000 ml/min.",
                        "isCorrect": false
                    },
                    {
                        "option": " 4800 ml/min.",
                        "isCorrect": true
                    },
                    {
                        "option": " 6000 ml/min.",
                        "isCorrect": false
                    }
                ],
                "image": 6
            },
            {
                "question": "Un aumento de la poscarga tendrá la siguiente consecuencia a nivel cardiovascular:",
                "options": [
                    {
                        "option": " Aumento del volumen sistólico.",
                        "isCorrect": false
                    },
                    {
                        "option": " Disminución del gasto cardíaco.",
                        "isCorrect": true
                    },
                    {
                        "option": " Disminución de la presión aórtica.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "La velocidad a la que circula la sangre en el sistema circulatorio es:",
                "options": [
                    {
                        "option": " Máxima a nivel de los capilares.",
                        "isCorrect": false
                    },
                    {
                        "option": " Mínima a nivel de las grandes arterias.",
                        "isCorrect": false
                    },
                    {
                        "option": " Inversamente proporcional a la superficie de sección transversal total del vaso.",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "La rigidez arterial que puede ocurrir durante el envejecimiento puede determinar:",
                "options": [
                    {
                        "option": " Un flujo capilar discontinuo.",
                        "isCorrect": true
                    },
                    {
                        "option": " Una disminución de la presión arterial.",
                        "isCorrect": false
                    },
                    {
                        "option": " Una facilitación en la retracción de las arterias durante la diástole.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "En relación a la presión arterial:",
                "options": [
                    {
                        "option": " La presión de pulso es la presión diastólica más un tercio de la presión sistólica.",
                        "isCorrect": false
                    },
                    {
                        "option": " La presión arterial media es la diferencia entre la presión arterial sistólica y la diastólica.",
                        "isCorrect": false
                    },
                    {
                        "option": " Los valores máximos considerados normales de la presión arterial sistólica son 139 mmHg.",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "En condiciones normales, la saturación de la hemoglobina con oxígeno tiene una de las siguientes características:",
                "options": [
                    {
                        "option": " En la sangre venosa es cercana al 0%.",
                        "isCorrect": false
                    },
                    {
                        "option": " En la sangre arterial es cercana al 100%.",
                        "isCorrect": true
                    },
                    {
                        "option": " Es independiente de la presión parcial de dióxido de carbono.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "La principal forma de transportar dióxido de carbono es:",
                "options": [
                    {
                        "option": " En forma disuelta.",
                        "isCorrect": false
                    },
                    {
                        "option": " Unido a hemoglobina.",
                        "isCorrect": false
                    },
                    {
                        "option": " Como ion bicarbonato.",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "En la autorregulación miogénica, para mantener el flujo constante el músculo liso del vaso sanguíneo tenderá a:",
                "options": [
                    {
                        "option": " Relajarse en respuesta a un aumento de la presión sanguínea.",
                        "isCorrect": false
                    },
                    {
                        "option": " Relajarse en respuesta a una disminución en la presión sanguínea.",
                        "isCorrect": true
                    },
                    {
                        "option": " Contraerse en respuesta a una disminución de la presión sanguínea.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Con respecto al control endotelial del flujo sanguíneo:",
                "options": [
                    {
                        "option": " El óxido nítrico es un vasodilatador potente.",
                        "isCorrect": true
                    },
                    {
                        "option": " El principal mediador liberado por el endotelio es la adrenalina.",
                        "isCorrect": false
                    },
                    {
                        "option": " A mayor fuerza de cizallamiento, se producirá mayor vasoconstricción.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "La perfusión pulmonar de una persona que se encuentra de pie es menor en:",
                "options": [
                    {
                        "option": " El centro del pulmón.",
                        "isCorrect": false
                    },
                    {
                        "option": " La base del pulmón.",
                        "isCorrect": false
                    },
                    {
                        "option": " El ápice del pulmón.",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "A continuación, se muestra un esquema representativo de dos alveolos de diferente diámetro interconectados entre sí. Si la superficie interna de los mismos carece de surfactante pulmonar es correcto afirmar que:",
                "options": [
                    {
                        "option": " Se producirá el colapso de 2 sobre 1.",
                        "isCorrect": false
                    },
                    {
                        "option": " Se producirá el colapso de 1 sobre 2.",
                        "isCorrect": true
                    },
                    {
                        "option": " Se evita el colapso de 1 sobre 2.",
                        "isCorrect": false
                    }
                ],
                "image": 16
            },
            {
                "question": "¿Cuál de las siguientes alteraciones dará lugar a una diminución en la frecuencia respiratoria?",
                "options": [
                    {
                        "option": " Aumento en la PO₂.",
                        "isCorrect": true
                    },
                    {
                        "option": " Aumento en la [H+].",
                        "isCorrect": false
                    },
                    {
                        "option": " Aumento en la PCO₂.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Frente a un aumento en la actividad del centro apneústico, la frecuencia respiratoria puede:",
                "options": [
                    {
                        "option": " Aumentar.",
                        "isCorrect": false
                    },
                    {
                        "option": " Disminuir.",
                        "isCorrect": true
                    },
                    {
                        "option": " No modificarse.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Respecto al potencial de acción del miocardio ventricular:",
                "options": [
                    {
                        "option": " La despolarización rápida está dada por la salida de potasio",
                        "isCorrect": false
                    },
                    {
                        "option": " La fase 3 de repolarización está dada por la entrada de calcio.",
                        "isCorrect": false
                    },
                    {
                        "option": " La fase 2 (meseta",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "Respecto al potencial generado por un dipolo que se registra en un punto P suficientemente alejado del mismo:",
                "options": [
                    {
                        "option": " El potencial en el punto P depende de forma inversamente proporcional del momento dipolar.",
                        "isCorrect": false
                    },
                    {
                        "option": " Cuanto menos conductor sea el medio donde se emplaza el dipolo, mayor será el valor del potencial en P.",
                        "isCorrect": false
                    },
                    {
                        "option": " El potencial registrado en P es inversamente proporcional al cuadrado de la distancia (r",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "Respecto a las bases físicas del electrocardiograma:",
                "options": [
                    {
                        "option": " El electrocardiograma es un registro invasivo de la actividad cardíaca.",
                        "isCorrect": false
                    },
                    {
                        "option": " Se denomina automatismo a la capacidad de generar y transmitir impulsos eléctricos.",
                        "isCorrect": true
                    },
                    {
                        "option": " En un trazado electrocardiográfico la onda P corresponde a la despolarización de las aurículas y el complejo QRS a la repolarización de los ventrículos.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Con respecto a las bases físicas de la hemodinamia:",
                "options": [
                    {
                        "option": " Un líquido real es aquel que no presenta viscosidad.",
                        "isCorrect": true
                    },
                    {
                        "option": " Para un tubo cilíndrico, la velocidad de circulación es directamente proporcional a la superficie de sección.",
                        "isCorrect": false
                    },
                    {
                        "option": " Régimen estacionario es aquel en el cual la velocidad con que circula el líquido en cada punto de una línea de corriente es diferente.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Para un tubo de secciones variables, en posición horizontal, ubicado a la misma distancia del plano, por el que circula un líquido con régimen estacionario:",
                "options": [
                    {
                        "option": " La suma de la presión hidrostática más la presión cinemática determina la presión hidrodinámica.",
                        "isCorrect": true
                    },
                    {
                        "option": " Un líquido ideal es aquel que ofrece resistencia al desplazamiento y tiene un régimen de circulación laminar.",
                        "isCorrect": false
                    },
                    {
                        "option": " Existe una conversión entre la energía cinética y la energía potencial gravitatoria entre los sectores de distinta sección.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Respecto a la biofísica de la respiración:",
                "options": [
                    {
                        "option": " La inspiración requiere de la activación muscular, por tanto es un proceso activo.",
                        "isCorrect": true
                    },
                    {
                        "option": " La capacidad vital de un individuo queda determinada por la suma de todos los volúmenes excepto el volumen residual.",
                        "isCorrect": false
                    },
                    {
                        "option": " Según la ley de Graham, a temperatura constante, la presión de una masa dada de gas es inversamente proporcional a su volumen (V",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Con respecto a las presiones transmurales (PTM) en el aparato respiratorio:",
                "options": [
                    {
                        "option": " La PTM toracopulmonar es igual a la presión pleural menos la presión atmosférica.",
                        "isCorrect": false
                    },
                    {
                        "option": " La PTM torácica es igual a la presión atmosférica menos la presión pleural.",
                        "isCorrect": false
                    },
                    {
                        "option": " La PTM pulmonar es igual a la presión alveolar menos la presión pleural.",
                        "isCorrect": true
                    }
                ]
            }
        ]
    },
    {
        "nombre": "Tercer periodo de examen Digestivo, Renal y Endócrino – 20 de febrero de 2019",
        "codigo": "utis42019",
        "area": "todas",
        "preguntas": [
            {
                "question": "La siguiente figura corresponde a los cambios en los potenciales de membrana medidos en una neurona presináptica y una postsináptica. Indique la opción correcta:",
                "options": [
                    {
                        "option": "Los registros corresponden a una sinapsis eléctrica.",
                        "isCorrect": true
                    },
                    {
                        "option": "Los registros corresponden a una sinapsis química.",
                        "isCorrect": false
                    },
                    {
                        "option": "Los registros corresponden a una sinapsis inhibitoria.",
                        "isCorrect": false
                    }
                ],
                "image": 1
            },
            {
                "question": "La siguiente figura corresponde a una diferencia de potencial en la membrana de una neurona postsináptica. Con respecto a dicha señal:",
                "options": [
                    {
                        "option": "Desaparece por el bloqueo de canales de Na en la neurona postsináptica.",
                        "isCorrect": false
                    },
                    {
                        "option": "Es generada por la apertura de canales de Caen la neurona postsináptica.",
                        "isCorrect": false
                    },
                    {
                        "option": "Disminuye la probabilidad de disparo de la neurona postsináptica.",
                        "isCorrect": true
                    }
                ],
                "image": 2
            },
            {
                "question": "La acción de la división parasimpática en los diferentes órganos está determinada por:",
                "options": [
                    {
                        "option": " la liberación de noradrenalina a nivel de efector.",
                        "isCorrect": false
                    },
                    {
                        "option": " el tipo neurotransmisor liberado a nivel del efector.",
                        "isCorrect": false
                    },
                    {
                        "option": " la expresión del tipo de receptor a nivel del efector.",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "La acción de la división simpática a nivel del efector, es mayoritariamente mediado por receptores de tipo:",
                "options": [
                    {
                        "option": " adrenérgicos",
                        "isCorrect": true
                    },
                    {
                        "option": " muscarinicos",
                        "isCorrect": false
                    },
                    {
                        "option": " colinérgicos",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Respecto a la transducción sensitiva, marque la opción correcta:",
                "options": [
                    {
                        "option": " Es llevada a cabo por neuronas sensitivas talámicas.",
                        "isCorrect": false
                    },
                    {
                        "option": " Siempre produce un potencial de acción en la neurona aferente primaria.",
                        "isCorrect": false
                    },
                    {
                        "option": " Se define como el proceso por el cual un receptor transforma la energía de un estímulo en energía eléctrica.",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "La hiperalgesia se produce cuando:",
                "options": [
                    {
                        "option": " Un estímulo nociceptivo no produce dolor.",
                        "isCorrect": false
                    },
                    {
                        "option": " Un estímulo inocuo produce más dolor del habitual.",
                        "isCorrect": false
                    },
                    {
                        "option": " Un estímulo nociceptivo produce más dolor de lo normal.",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "En relación con la organización del sistema nervioso:",
                "options": [
                    {
                        "option": " El sistema nervioso central corresponde a la división que controla la función visceral involuntaria.",
                        "isCorrect": false
                    },
                    {
                        "option": " El sistema nervioso autónomo corresponde a la división que controla los movimientos voluntarios.",
                        "isCorrect": false
                    },
                    {
                        "option": " El sistema nervioso entérico es la división que se especializa en la coordinación de la motilidad del tubo digestivo y sus secreciones.",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "En cuanto a las diferentes áreas del cerebro y sus funciones asociadas:",
                "options": [
                    {
                        "option": " El hipotálamo regula las glándulas endocrinas vía la hipófisis y controla al sistema nervioso autónomo.",
                        "isCorrect": true
                    },
                    {
                        "option": " Los ganglios basales son un conjunto de áreas de la neocorteza que se especializan en el procesamiento de la información visual.",
                        "isCorrect": false
                    },
                    {
                        "option": " El lóbulo occipital se especializa en la toma de decisiones, la planificación, y la selección del plan motor acorde a las circunstancias de cada momento.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "La sinapsis neuromuscular se caracteriza por:",
                "options": [
                    {
                        "option": " Ser una sinapsis bidireccional.",
                        "isCorrect": false
                    },
                    {
                        "option": " Ser una sinapsis química colinérgica.",
                        "isCorrect": true
                    },
                    {
                        "option": " Presentar receptores muscarínicos postsinápticos.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Con respecto a las características de las unidades motoras:",
                "options": [
                    {
                        "option": " Durante un acto motor las primeras en ser reclutadas son las fatigables y de contracción rápida.",
                        "isCorrect": false
                    },
                    {
                        "option": " Una unidad motora se compone de una motoneurona y todas las fibras musculares que ella inerva.",
                        "isCorrect": true
                    },
                    {
                        "option": " Las resistentes a la fatiga y de contracción lenta se caracterizan por estar inervadas por motoneuronas grandes.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "En relación con las características de los actos motores reflejos:",
                "options": [
                    {
                        "option": " El reflejo miotático o de estiramiento se caracteriza por ser un reflejo polisináptico.",
                        "isCorrect": false
                    },
                    {
                        "option": " El reflejo de retirada puede desencadenarse por la activación de fibras nociceptivas.",
                        "isCorrect": true
                    },
                    {
                        "option": " Durante el reflejo flexor ambos miembros presentan el mismo patrón de activación de los músculos antagonistas.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "En cuanto a las principales vías descendentes de control motor y su función:",
                "options": [
                    {
                        "option": " La vía rubro-espinal controla los músculos axiales que participan en la postura.",
                        "isCorrect": false
                    },
                    {
                        "option": " La vía cortico-espinal controla músculos distales que intervienen en la manipulación fina.",
                        "isCorrect": true
                    },
                    {
                        "option": " La vía tecto-espinal controla los movimientos de los miembros inferiores durante la marcha.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿En qué sector del sistema nervioso se localizanlos astrocitosfibrosos?:",
                "options": [
                    {
                        "option": " En la sustancia gris",
                        "isCorrect": false
                    },
                    {
                        "option": " En la sustancia blanca",
                        "isCorrect": true
                    },
                    {
                        "option": " En el sistema nervioso periférico",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿Cuál es la función de la microglia en el sistema nervioso central (SNC)?",
                "options": [
                    {
                        "option": " Dan sostén a las neuronas",
                        "isCorrect": false
                    },
                    {
                        "option": " Forman la mielina",
                        "isCorrect": false
                    },
                    {
                        "option": " Función fagocítica",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "Con respecto a las características de las dendritas:",
                "options": [
                    {
                        "option": " Se ramifican en ángulo recto y diámetro constante.",
                        "isCorrect": false
                    },
                    {
                        "option": " Carecen de Retículo Endoplásmico Rugoso (RER",
                        "isCorrect": false
                    },
                    {
                        "option": " Pueden presentar espinas.",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "¿A qué célula del sistema nervioso central corresponde la siguiente descripción? “Células pequeñas, poco ramificadas con escaso citoplasma perinuclear que se pueden encontrar tanto en la sustancia gris como en la sustancia blanca y cuyas prolongaciones se bifurcan siguiendo el transcurso de las fibras axónicas”",
                "options": [
                    {
                        "option": " Oligodendrocitos",
                        "isCorrect": true
                    },
                    {
                        "option": " Célula de Schwann",
                        "isCorrect": false
                    },
                    {
                        "option": " Astrocitos protoplasmáticos",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "En el sistema nervioso central, la sustancia gris se caracteriza por:",
                "options": [
                    {
                        "option": " La ausencia de fibras mielínicas",
                        "isCorrect": false
                    },
                    {
                        "option": " La presencia de somas neuronales",
                        "isCorrect": true
                    },
                    {
                        "option": " La ausencia de capilares sanguíneos",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿Cuál de los componentes del citoesqueleto es el principal responsable deltransporte axoplásmico?",
                "options": [
                    {
                        "option": " Filamentos intermedios",
                        "isCorrect": false
                    },
                    {
                        "option": " Filamentos de actina",
                        "isCorrect": false
                    },
                    {
                        "option": " Microtúbulos",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "¿Qué estructuras forman la barrera hemato-encefalica?",
                "options": [
                    {
                        "option": " Uniones adherentes entre células endoteliales y prolongaciones de los astrocitos",
                        "isCorrect": false
                    },
                    {
                        "option": " Uniones adherentes entre células endoteliales y prolongaciones de oligodendrocitos",
                        "isCorrect": false
                    },
                    {
                        "option": " Uniones ocluyentes entre células endoteliales, lámina basal endotelial y prolongaciones terminales de los astrocitos",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "¿Cuál de las células esquematizadas a continuación corresponde a las neuronas ubicadas en el ganglio de la raíz dorsal de la médula espinal?",
                "options": [
                    {
                        "option": "A",
                        "isCorrect": false
                    },
                    {
                        "option": "B",
                        "isCorrect": false
                    },
                    {
                        "option": "C",
                        "isCorrect": true
                    }
                ],
                "image": 20
            },
            {
                "question": "En la corteza del cerebelo las fibras paralelas corresponden a:",
                "options": [
                    {
                        "option": " los axones de las células estrelladas profundas",
                        "isCorrect": false
                    },
                    {
                        "option": " los axones de los granos cerebelosos",
                        "isCorrect": true
                    },
                    {
                        "option": " los axones de las células de Purkinje",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Con respecto a los axones de las motoneuronas de la médula espinal:",
                "options": [
                    {
                        "option": " Forman el tracto piramidal",
                        "isCorrect": false
                    },
                    {
                        "option": " No abandonan la médula espinal",
                        "isCorrect": false
                    },
                    {
                        "option": " Forman la raíz anterior de la médula",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "La técnica de impregnación argéntica de Golgi:",
                "options": [
                    {
                        "option": " Pone de manifiesto la mielina de las fibras nerviosas",
                        "isCorrect": false
                    },
                    {
                        "option": " Pone de manifiesto el retículo endoplásmico rugoso de las neuronas",
                        "isCorrect": false
                    },
                    {
                        "option": " Marca aproximadamente un 5-10 % de las neuronas del tejido nervioso",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "¿Qué tipo de receptor sensorial se localiza en la dermis profunda o hipodermis que consiste en muchas capas concéntricas de fibroblastos y fibras colágenas rodeando una terminación nerviosa?",
                "options": [
                    {
                        "option": " Los corpúsculo de Meissner",
                        "isCorrect": false
                    },
                    {
                        "option": " Los husos neuromusculares",
                        "isCorrect": false
                    },
                    {
                        "option": " Los corpúsculos de Paccini",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "Las arterias musculares se caracterizan por poseer:",
                "options": [
                    {
                        "option": " Un endotelio más alto que las arterias elásticas",
                        "isCorrect": false
                    },
                    {
                        "option": " Un diámetro mayor que las de las arterias elásticas.",
                        "isCorrect": false
                    },
                    {
                        "option": " Una limitante elástica interna más evidente que la de las arterias elásticas",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "En los capilares sanguíneos se produce el intercambio de nutrientes, ¿qué elementos NO se encuentran formado su pared?",
                "options": [
                    {
                        "option": " Membrana basal",
                        "isCorrect": false
                    },
                    {
                        "option": " Células endoteliales.",
                        "isCorrect": false
                    },
                    {
                        "option": " Células musculares lisas.",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "El miocardio específico se diferencia del miocardio inespecífico porque: (indique lo correcto)",
                "options": [
                    {
                        "option": " Está constituido por células que se originan en el endodermo.",
                        "isCorrect": false
                    },
                    {
                        "option": " Posee mayor cantidad de uniones comunicantes (gap",
                        "isCorrect": true
                    },
                    {
                        "option": " No posee miofilamentos.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "En el intersticio pulmonar en condiciones normales se puede encontrar",
                "options": [
                    {
                        "option": " Macrófagos alveolares",
                        "isCorrect": false
                    },
                    {
                        "option": " Abundantes fibras elásticas",
                        "isCorrect": true
                    },
                    {
                        "option": " Abundantes fibras colágenas",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿En el epitelio de cuál sector del aparato respiratorio se encuentran las células de Clara?",
                "options": [
                    {
                        "option": " En la laringe",
                        "isCorrect": false
                    },
                    {
                        "option": " En los bronquios",
                        "isCorrect": false
                    },
                    {
                        "option": " En los bronquiolos",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "En relación a la circulación sanguínea, en la que se aplican las leyes que rigen el movimiento estacionario de los líquidos:",
                "options": [
                    {
                        "option": " Si a lo largo de un vaso el radio se duplica, la velocidad media de la sangre se reduce a la mitad.",
                        "isCorrect": true
                    },
                    {
                        "option": " La velocidad media de la sangre es mínima en los capilares porque la sección de un capilar es mínima.",
                        "isCorrect": false
                    },
                    {
                        "option": " La velocidad media de la sangre es máxima en la aorta porque la sección equivalente de dicho sector es máxima.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Con respecto a la ley de Poiseuille:",
                "options": [
                    {
                        "option": " Si el radio se duplica, y no cambian ni la viscosidad ni la longitud del vaso, entonces la resistencia viscosa aumenta 16 veces.",
                        "isCorrect": true
                    },
                    {
                        "option": " La resistencia viscosa es independiente de la geometría del sistema, depende de las características del líquido.",
                        "isCorrect": false
                    },
                    {
                        "option": " La resistencia viscosa y la viscosidad tienen la misma unidad.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿Qué sucede en el sistema respiratorio, cuando no existe ni entrada ni salida de aire?",
                "options": [
                    {
                        "option": " La presión transmural toracopulmonar es negativa.",
                        "isCorrect": false
                    },
                    {
                        "option": " La presión alveolar es igual a la presión atmosférica.",
                        "isCorrect": true
                    },
                    {
                        "option": " Hay un flujo aéreo en contra del gradiente de presión.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿Qué implicancias tiene la generación de un neumotórax en el sistema respiratorio?",
                "options": [
                    {
                        "option": " El tórax y el pulmón se comprimen.",
                        "isCorrect": false
                    },
                    {
                        "option": " El pulmón y el tórax se disocian y tienden a alcanzar su equilibrio mecánico.",
                        "isCorrect": true
                    },
                    {
                        "option": " Es necesario la contracción de los músculos espiratorios para evitar el colapso pulmonar.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Respecto al potencial generado por un dipolo que se registra en un punto P suficientemente alejado del mismo:",
                "options": [
                    {
                        "option": " Tiene una relación directamente proporcional con el producto del valor absoluto de la carga (|q|",
                        "isCorrect": true
                    },
                    {
                        "option": " Es directamente proporcional al coseno del ángulo entre el semieje negativo y la recta r (recta que une el centro del dipolo con el punto P",
                        "isCorrect": false
                    },
                    {
                        "option": " Es menor, cuanto más separadas estén las cargas entre sí, es decir, cuanto mayor es el brazo del dipolo.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Con respecto al trazado electrocardiográfico:",
                "options": [
                    {
                        "option": " La onda T representa la entrada de calcio al miocito ventricular por canales de calcio tipo T.",
                        "isCorrect": false
                    },
                    {
                        "option": " Los segmentos constituyen partes isoeléctricas y los intervalos están compuestos por ondas y segmentos.",
                        "isCorrect": true
                    },
                    {
                        "option": " La fase de despolarización del potencial de acción del nódulo sinusal se haya representada por la onda P.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "En individuos ancianos la presión arterial se ve incrementada principalmente por una disminución en:",
                "options": [
                    {
                        "option": " el gasto cardíaco",
                        "isCorrect": false
                    },
                    {
                        "option": " la distensibilidad de las arterias",
                        "isCorrect": true
                    },
                    {
                        "option": " la resistencia vascular periférica",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Si existe una gran rigidez arterial, el flujo sanguíneo a nivel capilar ocurre:",
                "options": [
                    {
                        "option": " en forma constante",
                        "isCorrect": false
                    },
                    {
                        "option": " principalmente en sístole",
                        "isCorrect": true
                    },
                    {
                        "option": " tanto en sístole como en diástole",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Con respecto al intercambio gaseoso:",
                "options": [
                    {
                        "option": " El O2 es más difusible que el CO2.",
                        "isCorrect": false
                    },
                    {
                        "option": " El intercambio gaseoso de O2 y CO2 a través de la barrera alveolo-capilar se da por difusión facilitada.",
                        "isCorrect": false
                    },
                    {
                        "option": " La composición de O2 alveolar está determinada por el equilibrio entre el agregado de O2 por la ventilación alveolar y su eliminación por flujo sanguíneo.",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "Con respecto al transporte de gases en sangre:",
                "options": [
                    {
                        "option": " La mayor parte del CO2 es transportado unido a la hemoglobina.",
                        "isCorrect": false
                    },
                    {
                        "option": " La mayor parte del O2 es transportado en forma de ión bicarbonato.",
                        "isCorrect": false
                    },
                    {
                        "option": " La hemoglobina tiene mayor afinidad por el monóxido de carbono (CO",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "En la siguiente figura se muestran los cambios de presión y volumen en el ventrículo izquierdo durante el ciclo cardíaco. Indique la opción correcta:",
                "options": [
                    {
                        "option": "Entre las fases A y B ocurre la apertura de la válvula aurículo-ventricular.",
                        "isCorrect": true
                    },
                    {
                        "option": "Entre las fases B y C ocurre el cierre de la válvula aórtica.",
                        "isCorrect": false
                    },
                    {
                        "option": "Entre las fases C y D ocurre el cierre de la válvula aurículo-ventricular.",
                        "isCorrect": false
                    }
                ],
                "image": 40
            },
            {
                "question": "La administración de acetilcolina tendrá el siguiente efecto a nivel cardíaco:",
                "options": [
                    {
                        "option": " Aumento de la frecuencia cardíaca.",
                        "isCorrect": false
                    },
                    {
                        "option": " Aumento del gasto cardíaco.",
                        "isCorrect": false
                    },
                    {
                        "option": " Disminución del inotropismo.",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "De acuerdo al control hemodinámico del flujo sanguíneo local, el mecanismo de autorregulación tiene como objetivo mantener constante:",
                "options": [
                    {
                        "option": " La presión arterial.",
                        "isCorrect": false
                    },
                    {
                        "option": " El flujo sanguíneo.",
                        "isCorrect": true
                    },
                    {
                        "option": " La resistencia vascular.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "En relación al flujo sanguíneo coronario a nivel del ventrículo izquierdo, es correcto afirmar que este es máximo durante:",
                "options": [
                    {
                        "option": " La sístole.",
                        "isCorrect": false
                    },
                    {
                        "option": " La diástole.",
                        "isCorrect": true
                    },
                    {
                        "option": " La eyección ventricular.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "En la siguiente gráfica se observa la curva presión-volumen pulmonar. El volumen pulmonar es expresado como el porcentaje de la capacidad pulmonar total. Es correcto afirmar que: Capacidadpulmonar total",
                "options": [
                    {
                        "option": " Para una presión determinada, el volumen pulmonar durante la inspiración es menor que durante la espiración.",
                        "isCorrect": true
                    },
                    {
                        "option": " Para una presión determinada, el volumen pulmonar durante la inspiración es mayor que durante la espiración.",
                        "isCorrect": false
                    },
                    {
                        "option": " A mayores presiones transpulmonares, la distensibilidad pulmonar se ve incrementada.",
                        "isCorrect": false
                    }
                ],
                "image": 44
            },
            {
                "question": "En relación a la mecánica ventilatoria durante la inspiración:",
                "options": [
                    {
                        "option": " La presión alveolar y la presión atmosférica son iguales.",
                        "isCorrect": false
                    },
                    {
                        "option": " La presión alveolar es menor que la presión atmosférica.",
                        "isCorrect": true
                    },
                    {
                        "option": " La presión alveolar es mayor que la presión atmosférica.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "En relación con los mecanismos involucrados en el control de la ventilación:",
                "options": [
                    {
                        "option": " Los quimiorreceptores centrales responden preferentemente a los cambios en la concentración de protones.",
                        "isCorrect": true
                    },
                    {
                        "option": " Los receptores “J” o yuxtacapilares responden enérgicamente frente a la aparición de sustancias irritantes.",
                        "isCorrect": false
                    },
                    {
                        "option": " Los quimiorreceptores periféricos responden enérgicamente frente al estiramiento excesivo de la caja torácica.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Con respecto a los grupos neuronales involucrados en la generación y el mantenimiento del ritmo respiratorio:",
                "options": [
                    {
                        "option": " El grupo Neumotáxico estimula la inspiración.",
                        "isCorrect": false
                    },
                    {
                        "option": " El grupo Apnéustico controla el punto de inactivación de la rampa inspiratoria.",
                        "isCorrect": false
                    },
                    {
                        "option": " El grupo respiratorio dorsal es responsable de generar la señal enrampa inspiratoria.",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "¿En cuál de los siguientes tipos de papilas de la lengua NO suelen encontrarse corpúsculos gustativos?",
                "options": [
                    {
                        "option": " Filiformes",
                        "isCorrect": true
                    },
                    {
                        "option": " Fungiformes",
                        "isCorrect": false
                    },
                    {
                        "option": " Caliciformes",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Las estriaciones que se observan en las células de los conductos estriados de las glándulas salivales se producen porque:",
                "options": [
                    {
                        "option": " Las células presentan microvellosidades muy largas en la membrana apical",
                        "isCorrect": false
                    },
                    {
                        "option": " Las células presentan abundantes cilias muy largas en la membrana apical",
                        "isCorrect": false
                    },
                    {
                        "option": " Las células presentan pliegues de la membrana basal en los que se disponen un gran número de mitocondrias elongadas.",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "Al microscopio óptico, las células principales (zimógenas) de la mucosa gástrica se caracterizan por observarse como:",
                "options": [
                    {
                        "option": " Células cúbicas con citoplasma claro vacuolado debido a la presencia de abundantes gotas lípidicas.",
                        "isCorrect": false
                    },
                    {
                        "option": " Células cúbicas, con citoplasma basófilo y núcleo redondo",
                        "isCorrect": true
                    },
                    {
                        "option": " Células cúbicas con citoplasma eosinófilo y con un núcleo central redondeado",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿En qué capa del tubo digestivo se encuentra el plexo nervioso de Meissner?",
                "options": [
                    {
                        "option": " En la mucosa",
                        "isCorrect": false
                    },
                    {
                        "option": " En la submucosa",
                        "isCorrect": true
                    },
                    {
                        "option": " En la capa muscular",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿En qué sector del tubo digestivo NO se observan glándulas en la submucosa?",
                "options": [
                    {
                        "option": " En el esófago",
                        "isCorrect": false
                    },
                    {
                        "option": " En el duodeno",
                        "isCorrect": false
                    },
                    {
                        "option": " En el yeyuno-ileon",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "¿Qué tipo de estructura histológica se encuentra en el centro del lobulillo clásico hepático?",
                "options": [
                    {
                        "option": " La triada portal",
                        "isCorrect": false
                    },
                    {
                        "option": " Un elemento venoso",
                        "isCorrect": true
                    },
                    {
                        "option": " Un elemento arterial",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿Qué estructuras del hígado posee macrófagos como parte de la pared?",
                "options": [
                    {
                        "option": " Los capilares sinusoides",
                        "isCorrect": true
                    },
                    {
                        "option": " Los canalículos biliares",
                        "isCorrect": false
                    },
                    {
                        "option": " Los conductos biliares",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿A qué se debe la coloración citoplasmática de las células basofilas de la adenohipófisis?",
                "options": [
                    {
                        "option": " Al contenido de sus gránulos",
                        "isCorrect": true
                    },
                    {
                        "option": " A la abundancia de retículo endoplásmico liso",
                        "isCorrect": false
                    },
                    {
                        "option": " A la presencia de un núcleo muy heterocromático",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿En qué órgano endócrinose encuentran las células denominadas espongiocitos?",
                "options": [
                    {
                        "option": " En la corteza suprarrenal",
                        "isCorrect": true
                    },
                    {
                        "option": " En la adenohipófisis",
                        "isCorrect": false
                    },
                    {
                        "option": " En la neurohipofisis",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿Cuál de estos tipos celulares se localiza en la neurohipófisis?",
                "options": [
                    {
                        "option": " Pituicitos",
                        "isCorrect": true
                    },
                    {
                        "option": " Células oxínticas",
                        "isCorrect": false
                    },
                    {
                        "option": " Células cromófobas",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿Cuáles de las siguientes células del riñón NO pertenecen al aparato yuxtaglomerular?",
                "options": [
                    {
                        "option": " Los podocitos.",
                        "isCorrect": true
                    },
                    {
                        "option": " Células del mesangioextraglomerular.",
                        "isCorrect": false
                    },
                    {
                        "option": " Células productoras de renina de la arteriola aferente.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿En qué estructura tubular renal se encuentra la macula densa?",
                "options": [
                    {
                        "option": " Túbulo proximal",
                        "isCorrect": false
                    },
                    {
                        "option": " Tubo colector",
                        "isCorrect": false
                    },
                    {
                        "option": " Túbulo distal",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "Frente a un ayuno, una persona adulta puede tener una de las siguientes características:",
                "options": [
                    {
                        "option": " disminuyen los niveles de cortisol.",
                        "isCorrect": false
                    },
                    {
                        "option": " aumento plasmático de hormona de crecimiento.",
                        "isCorrect": true
                    },
                    {
                        "option": " altos niveles plasmáticos delos factores de crecimiento de tipo insulina-1 (IGF-1",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Con respecto a la prolactina es correcto afirmar que:",
                "options": [
                    {
                        "option": " la dopamina promueve su síntesis y liberación.",
                        "isCorrect": false
                    },
                    {
                        "option": " es regulada por un eje de retroalimentación positiva.",
                        "isCorrect": false
                    },
                    {
                        "option": " su síntesis es principalmente inhibida por el hipotálamo.",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "¿Cuál de estas acciones fisiológicas esta mediada por el cortisol?",
                "options": [
                    {
                        "option": " Aumento de la glucemia.",
                        "isCorrect": true
                    },
                    {
                        "option": " Aumento de la respuesta inmune.",
                        "isCorrect": false
                    },
                    {
                        "option": " Aumento de la síntesis proteica muscular.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Indique cuál de las siguientes opciones es consecuencia de una disminución de los niveles fisiológicos de hormonas tiroideas:",
                "options": [
                    {
                        "option": " Aumento del tamaño de la tiroides.",
                        "isCorrect": true
                    },
                    {
                        "option": " Disminución de los niveles de TSH.",
                        "isCorrect": false
                    },
                    {
                        "option": " Aumento de la frecuencia respiratoria.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "De acuerdo a la secreción pancreática, es correcto afirmar que:",
                "options": [
                    {
                        "option": " Es estimulada frente a una disminución de la producción de ácido clorhídrico.",
                        "isCorrect": false
                    },
                    {
                        "option": " La Colestocistoquinina es un potente estimulador de la misma.",
                        "isCorrect": true
                    },
                    {
                        "option": " Tiene un aumento pronunciado durante los periodos de ayuno.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "La secreción gástrica se inhibe en una de las siguientes situaciones:",
                "options": [
                    {
                        "option": " Durante la fase intestinal.",
                        "isCorrect": true
                    },
                    {
                        "option": " Mediante la liberación de gastrina.",
                        "isCorrect": false
                    },
                    {
                        "option": " Mediante reflejos locales de distención.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Con respecto a la reabsorción de sodio en el túbulo proximal:",
                "options": [
                    {
                        "option": " está acoplada a la reabsorción de potasio.",
                        "isCorrect": false
                    },
                    {
                        "option": " depende del antitransporte con glucosa.",
                        "isCorrect": false
                    },
                    {
                        "option": " está acoplada a solutos orgánicos.",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "Las diferentes permeabilidades en los distintos segmentos tubulares determinan que el líquido tubular sea:",
                "options": [
                    {
                        "option": " hipoosmolar en el segmento descendente delgado.",
                        "isCorrect": false
                    },
                    {
                        "option": " hipoosmolar en el segmento ascendente delgado.",
                        "isCorrect": true
                    },
                    {
                        "option": " hiperosmolar en el segmento ascendentegrueso.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Respecto a los procesos fisiológicos descriptos a nivel de la nefrona:",
                "options": [
                    {
                        "option": " La reabsorción representa el pasaje de líquido y solutos desde la luz tubular a los capilares peritubulares.",
                        "isCorrect": true
                    },
                    {
                        "option": " La filtración representa el pasaje de líquido y solutos desde los capilares peritubulares a la luz tubular.",
                        "isCorrect": false
                    },
                    {
                        "option": " La excreción representa el pasaje de líquido y sustancia desde el glomérulo a la cápsula de Bowman.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "En ausencia de mecanismos de autorregulación renal, frente al aumento de la presión arterial se produce:",
                "options": [
                    {
                        "option": " Un aumento en la diuresis.",
                        "isCorrect": true
                    },
                    {
                        "option": " Una disminución en la diuresis.",
                        "isCorrect": false
                    },
                    {
                        "option": " Una disminución en el volumen del filtrado glomerular.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Respecto al control osmótico de la secreción de la hormona antidiurética (ADH):",
                "options": [
                    {
                        "option": " El aumento de la volemia estimula la secreción de ADH.",
                        "isCorrect": false
                    },
                    {
                        "option": " El aumento de la osmolaridad de los líquidos corporales, estimula la secreción de la ADH.",
                        "isCorrect": true
                    },
                    {
                        "option": " La disminución de la osmolaridad de los líquidos corporales estimula la secreción de la ADH.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Respecto al asa de Henle (HE), en las nefronas:",
                "options": [
                    {
                        "option": " La rama descendente del HE se caracteriza por presentar reabsorción pasiva de H20.",
                        "isCorrect": true
                    },
                    {
                        "option": " La rama descendente del HE se caracteriza por presentar mecanismos de transporte pasivo de NaCl.",
                        "isCorrect": false
                    },
                    {
                        "option": " La rama ascendente delgada se caracteriza por presentar mecanismos de transporte activo de NaCl",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Las sales biliares cumplen un rol fundamental en la digesto-absorción de lípidos, de acuerdo a su acción indique la opción correcta:",
                "options": [
                    {
                        "option": " Hidrolizan los ácidos grasos complejos y colesterol en el estomago",
                        "isCorrect": false
                    },
                    {
                        "option": " Son esenciales para la hidrólisis proteica activando al pepsinógeno",
                        "isCorrect": false
                    },
                    {
                        "option": " Solubilizan las micelas para que los ácidos grasos y mono acil-gliceroles sean absorbidos por los enterocitos",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "De acuerdo a los conocimientos adquiridos sobre la absorción de glucosa desde el lumen intestinal al enterocito es correcto afirmar:",
                "options": [
                    {
                        "option": " Se produce por transporte activo a través del transportador GLUT-5",
                        "isCorrect": false
                    },
                    {
                        "option": " Se produce por difusión simple a través de las membranas del enterocito",
                        "isCorrect": false
                    },
                    {
                        "option": " Se produce por transporte activo secundario a través del transportador SGLUT-1",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "En cuanto a la digesto-absorción de proteínas:",
                "options": [
                    {
                        "option": " Las proteínas se hidrolizan a nivel del enterocito por acción de la pepsina gástrica",
                        "isCorrect": false
                    },
                    {
                        "option": " Las proteínas son hidrolizadas por acción de la enteroquinasa presente en la membrana del enterocito.",
                        "isCorrect": false
                    },
                    {
                        "option": " Las proteínas se hidrolizan en las fases: gástrica, intestinal, a nivel de la membrana y del interior celular del enterocito.",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "De acuerdo a los mecanismos de acción hormonal:",
                "options": [
                    {
                        "option": " Las hormonas actúan de forma inespecífica sobre la misma célula en que son producidas",
                        "isCorrect": false
                    },
                    {
                        "option": " Los receptores para hormonas esteroideas se encuentran a nivel de la membrana plasmática",
                        "isCorrect": false
                    },
                    {
                        "option": " La respuesta celular a la hormona depende de la presencia de receptores específicos para la misma",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "La insulina es una hormona secretada a nivel del páncreas, indique la opción correcta acerca de su receptor en la célula blanco:",
                "options": [
                    {
                        "option": " El receptor de la insulina es tipo serpentina acoplado a proteína G que tiene como segundo mensajero el AMP-cíclico",
                        "isCorrect": false
                    },
                    {
                        "option": " El receptor de la insulina se encuentra a nivel de la membrana del retículo y su activación lleva a la generación de fosfo-lipasa c (PLPc",
                        "isCorrect": false
                    },
                    {
                        "option": " El receptor de la insulina se encuentra a nivel de membrana y tiene actividad tirosina-quinasa intrínseca fosforilando diferentes blancos",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "La regulación de las vías metabólicas antagónicas (utilización versus producción de un mismo metabolito) es fundamental para evitar los denominados “ciclos fútiles” (gasto neto de ATP). De acuerdo a dichos mecanismos es correcto afirmar:",
                "options": [
                    {
                        "option": " Las vías metabólicas antagónicas utilizan las mismas enzimas de la vía, pero en dirección contraria",
                        "isCorrect": false
                    },
                    {
                        "option": " Las vías metabólicas antagónicas no pueden ser reguladas de forma diferencial y ocurren al mismo tiempo a nivel celular",
                        "isCorrect": false
                    },
                    {
                        "option": " Las vías metabólicas antagónicas utilizan gran parte de la vía metabólica con la presencia de enzimas reguladoras diferentes para cada vía.",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "De acuerdo a los conocimientos adquiridos acerca del metabolismo energético:",
                "options": [
                    {
                        "option": " Las vías anabólicas producen ATP, NADPH, NADH, FADH2 y Acetil-CoA",
                        "isCorrect": false
                    },
                    {
                        "option": " Las vías catabólicas producen ATP, NADPH, NADH, FADH2 y Acetil-CoA",
                        "isCorrect": true
                    },
                    {
                        "option": " Las vías catabólicas producen ADP, NADP+, y NAD+",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿Cuál es el origen de los cuerpos cetónicos que se forman durante el ayuno prolongado o una diabetes no tratada?",
                "options": [
                    {
                        "option": " Se sintetizan en el hígado a partir de Acetil-CoA",
                        "isCorrect": true
                    },
                    {
                        "option": " Se sintetizan en el tejido adiposo para ser liberados al plasma",
                        "isCorrect": false
                    },
                    {
                        "option": " Se sintetizan en el cerebro a partir de la oxidación de la glucosa",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Luego de una comida rica en carbohidratos, el destino de la glucosa absorbida en el hígado será:",
                "options": [
                    {
                        "option": " Una parte se oxidará para obtener energía y el resto se convierte en glucógeno y triacilgicéridos",
                        "isCorrect": true
                    },
                    {
                        "option": " La glucosa se utilizará para sintetizar cuerpos cetónicos, que se exportarán a la sangre",
                        "isCorrect": false
                    },
                    {
                        "option": " La glucosa estimulará la degradación de las reservas de lípidos hepáticos",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "El tejido adiposo es uno de los blancos del glucagón. ¿Cuáles son los efectos de estar hormona sobre dicho tejido?",
                "options": [
                    {
                        "option": " Inhibición de la lipasa sensible a hormona y activación de la gluconeogénesis",
                        "isCorrect": false
                    },
                    {
                        "option": " Inhibición de la lipasa sensible a hormona y activación de síntesis de triglicéridos",
                        "isCorrect": false
                    },
                    {
                        "option": " Activación de la lipasa sensible a hormona, activación de la lipólisis y liberación de ácidos grasos al plasma",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "Un individuo no ha comido durante 12 h y luego ingiere rápidamente una bolsa grande de galletas. ¿Cuál de los siguientes efectos tendrá esa comida en el estado metabólico del individuo?",
                "options": [
                    {
                        "option": " Aumentará la velocidad de la gluconeogénesis",
                        "isCorrect": false
                    },
                    {
                        "option": " Se repondrán las reservas de glucógeno hepático",
                        "isCorrect": true
                    },
                    {
                        "option": " Disminuirá la conversión de ácidos grasos en triglicéridos",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿Cuáles son las fuentes de energía en los diferentes tejidos durante el ayuno prolongado?",
                "options": [
                    {
                        "option": " El tejido adiposo consume glucosa y cuerpos cetónicos para obtener de energía",
                        "isCorrect": false
                    },
                    {
                        "option": " El músculo consume glucosa y cuerpos cetónicos para obtener energía",
                        "isCorrect": false
                    },
                    {
                        "option": " El cerebro consume glucosa y cuerpos cetónicos para obtener energía",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "Para poder comenzar la degradación de los ácidos grasos, proceso conocido como β- oxidación, es necesario la activación de los ácidos grasos, que consiste en:",
                "options": [
                    {
                        "option": " Reacción del ácido graso con el malonil para dar palmitoil-CoA y ATP",
                        "isCorrect": false
                    },
                    {
                        "option": " Reacción del ácido graso con carnitina para dar acil graso-carnitina y ATP",
                        "isCorrect": false
                    },
                    {
                        "option": " Reacción del ácido graso con Coenzima-A que consume ATP para formar acil-CoA graso",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "Sobre la regulación de la enzima acetil-CoA carboxilasa que sintetiza malonil-CoA, primer paso para la síntesis de ácidos grasos, indique la opción correcta:",
                "options": [
                    {
                        "option": " Se activa por citrato, se inhibe por palmitoil-CoA",
                        "isCorrect": true
                    },
                    {
                        "option": " Se inhibe por citrato y por la acción de la insulina",
                        "isCorrect": false
                    },
                    {
                        "option": " Se activa por palmitoil-CoA y se inhibe por citrato",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿Qué se requiere para sintetizar ácidos grasos?",
                "options": [
                    {
                        "option": " Palmitoil-CoA, Acetil-CoA y FADH2",
                        "isCorrect": false
                    },
                    {
                        "option": " Acetil-CoA, acil-CoAgraso y NADH",
                        "isCorrect": false
                    },
                    {
                        "option": " Malonil-CoA, Acetil-CoA, ATP y NADPH",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "¿Cuál es la función principal de las lipoproteínas de alta densidad (HDL)?",
                "options": [
                    {
                        "option": " Captar el colesterol de las células extra-hepáticas y transportarlo al hígado",
                        "isCorrect": true
                    },
                    {
                        "option": " Captar el colesterol de las células hepáticas y transportarlo al tejido adiposo",
                        "isCorrect": false
                    },
                    {
                        "option": " Captar los triglicéridos proveniente de la dieta y transportarlo a los tejidos",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Sobre el metabolismo de las lipoproteínas VLDL, sintetizadas en el hígado:",
                "options": [
                    {
                        "option": " Las VLDL son sustrato de la lectin-colesterol Acil transferasa (LCAT",
                        "isCorrect": false
                    },
                    {
                        "option": " Las VLDL son sustrato de la lipoproteína lipasa en tejidos extrahepáticos, lo que da lugar a las IDL y LDL",
                        "isCorrect": true
                    },
                    {
                        "option": " Las VLDL son sustrato de la lipasa hepática que los transforma en remanentes de VLDL",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Señale cuál de los siguientes fenómenos se observa en un paciente con resistencia a la insulina:",
                "options": [
                    {
                        "option": " Gran movilización de ácidos grasos desde el tejido adiposo",
                        "isCorrect": true
                    },
                    {
                        "option": " Incapacidad de formar insulina a nivel del páncreas",
                        "isCorrect": false
                    },
                    {
                        "option": " Inhibición de la gluconeogénesis hepática",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿Qué características adopta el tejido adiposo de individuos obesos?",
                "options": [
                    {
                        "option": " El tejido adiposo produce bajos niveles de leptina, no es capaz de liberar ácidos grasos y disminuye la cantidad de macrófagos que infiltran el tejido",
                        "isCorrect": false
                    },
                    {
                        "option": " Los adipocitos proliferan y disminuyen su tamaño, captan grandes cantidades glucosa de la sangre y producen citoquinas anti-inflamatorias",
                        "isCorrect": false
                    },
                    {
                        "option": " Ocurre una hipertrofia de los adipocitos, aumento de infiltrado inmune y producción de citoquinas pro-inflamatorias.",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "La degradación intracelular de proteínas permite el recambio proteico normal, obtener energía a partir de aminoácidos y regular actividades enzimáticas entre otras funciones. Indique lo correcto acerca de las dos vías de degradación proteica intracelular: lisosomal y sistema ubiquitina-proteasoma.",
                "options": [
                    {
                        "option": " El sistema ubiquitina-proteasoma depende de vesículas para recibir las proteínas que se van a degradar",
                        "isCorrect": false
                    },
                    {
                        "option": " La degradación en los lisosomas se da a través de una captación selectiva de proteínas unidas a ácidos grasos",
                        "isCorrect": false
                    },
                    {
                        "option": " La degradación a través del sistema ubiquitina-proteasoma se da para proteínas marcadas para su degradación",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "A continuación, se muestra una de las reacciones más importantes del catabolismo proteico, señale la opción correcta en cuanto a la misma:",
                "options": [
                    {
                        "option": "Es catalizada por una transaminasa y depende del cofactor piridoxal fosfato (PLP",
                        "isCorrect": true
                    },
                    {
                        "option": "Es una desaminación oxidativa y requiere NADP+ como aceptor de electrones",
                        "isCorrect": false
                    },
                    {
                        "option": "Ocurre exclusivamente en la matriz mitocondrial de los hepatocitos.",
                        "isCorrect": false
                    }
                ],
                "image": 92
            },
            {
                "question": "El ciclo de la urea tiene lugar en el hepatocito y permite incorporar dos grupos amonio (NH4+) en una molécula de urea para su excreción por la orina. Señale la opción correcta acerca de este proceso:",
                "options": [
                    {
                        "option": " La síntesis de urea es un proceso que consume energía",
                        "isCorrect": true
                    },
                    {
                        "option": " Un aumento de la degradación de aminoácidos lleva a una disminución de las enzimas del ciclo",
                        "isCorrect": false
                    },
                    {
                        "option": " La urea libera dos grupos NH4+ a nivel renal por acción de la glutaminasa",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "El pH celular y de los fluídos extracelulares se mantiene gracias a poderosos sistemas amortiguadores ¿Cuál es el principal sistema amortiguador (buffer) a nivel intracelular?",
                "options": [
                    {
                        "option": " Buffer amonio",
                        "isCorrect": false
                    },
                    {
                        "option": " Buffer fosfato",
                        "isCorrect": true
                    },
                    {
                        "option": " Buffer bicarbonato",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Un paciente ingresa al hospital en estado de coma originado por una cetoacidosis diabética. ¿Cuál es la respuesta fisiológica del organismo para compensar la alteración del pH sanguíneo del paciente?",
                "options": [
                    {
                        "option": " hipoventilación para aumentar la concentración de CO2 en sangre",
                        "isCorrect": false
                    },
                    {
                        "option": " hiperventilación para disminuir la concentración de CO2 en sangre",
                        "isCorrect": true
                    },
                    {
                        "option": " Inhibición de la glutaminasa renal",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Un individuo de 54 años padece neumonía y presenta dificultad para respirar (disnea). Con los datos de la gasometría arterial indique qué trastorno sufre el paciente (valores normales: pH=7.4, pCO2=40 mmHg, HCO3-=24 mEq/l).</br>pH = 7.25</br>pCO2 = 70 mm Hg</br>pO2 = 30 mm Hg</br>HCO3- = 24 mEq/l",
                "options": [
                    {
                        "option": " Acidosis metabólica",
                        "isCorrect": false
                    },
                    {
                        "option": " Acidosis respiratoria compensada",
                        "isCorrect": false
                    },
                    {
                        "option": " Acidosis respiratoria no compensada",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "Sobre la regulación de la glicemia en el estado post-absortivo (luego de una comida):",
                "options": [
                    {
                        "option": " Se libera insulina, hormona que estimula la síntesis de glucógeno y de lípidos en el hígado",
                        "isCorrect": true
                    },
                    {
                        "option": " Se libera insulina, hormona que estimula la síntesis de glucosa en el tejido adiposo",
                        "isCorrect": false
                    },
                    {
                        "option": " Se libera insulina, hormona que estimula la gluconeogenesis en el hepatocito",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿Qué tipo de epitelio reviste las trompas de Falopio?",
                "options": [
                    {
                        "option": " Epitelio estratificado plano",
                        "isCorrect": false
                    },
                    {
                        "option": " Epitelio cilíndrico simple con células ciliadas",
                        "isCorrect": true
                    },
                    {
                        "option": " Epitelio seudoestratificado simple con estereocilias",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿Qué tipo de folículos ováricos sufren atresia?:",
                "options": [
                    {
                        "option": " Todos los tipos de folículos",
                        "isCorrect": true
                    },
                    {
                        "option": " Únicamente los folículos secundarios",
                        "isCorrect": false
                    },
                    {
                        "option": " Únicamente los que alcanzan un tamaño determinado, variable de acuerdo a las diferentes especies",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿Qué tipo de cambios morfológicos caracterizan la luteinización de las células de la granulosa y de la teca?",
                "options": [
                    {
                        "option": " Aumento del retículo liso y de gotas lipídicas citoplamáticas",
                        "isCorrect": true
                    },
                    {
                        "option": " Aumento del retículo rugoso y de los gránulos de secreción citoplasmáticos",
                        "isCorrect": false
                    },
                    {
                        "option": " Aumento de ribosomas libres, desarrollo del aparato de Golgi y de los lisosomas",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿Cuáles son las características de los ovocitos liberados por el ovario durante la ovulación?",
                "options": [
                    {
                        "option": " No poseen zona pelúcida",
                        "isCorrect": false
                    },
                    {
                        "option": " Poseen muy poco citoplasma",
                        "isCorrect": false
                    },
                    {
                        "option": " No han completado la meiosis",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "¿Qué células del testículo forman la barrera hemato-testicular?",
                "options": [
                    {
                        "option": " Células de Sértoli",
                        "isCorrect": true
                    },
                    {
                        "option": " Espermatogonias",
                        "isCorrect": false
                    },
                    {
                        "option": " Células endoteliales de los capilares",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "La pieza principal de la cola del espermatozoide carece de:",
                "options": [
                    {
                        "option": " Axonema",
                        "isCorrect": false
                    },
                    {
                        "option": " Fibras densas",
                        "isCorrect": false
                    },
                    {
                        "option": " Vaina mitocondrial",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "¿Qué tipo de epitelio reviste el epidídimo?",
                "options": [
                    {
                        "option": " Epitelio pseudoestratificado cilíndrico con estereocilios",
                        "isCorrect": true
                    },
                    {
                        "option": " Epitelio cilíndrico simple con microvellosidades cortas",
                        "isCorrect": false
                    },
                    {
                        "option": " Epitelio de transición",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Luego de la fecundación, el bloqueo rápido de la poliespermia se produce por:",
                "options": [
                    {
                        "option": " Cambios en el potencial de membrana del ovocito",
                        "isCorrect": true
                    },
                    {
                        "option": " La liberación de los gránulos corticales del ovocito.",
                        "isCorrect": false
                    },
                    {
                        "option": " Cambios en el potencial de membrana del espermatozoide.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿Qué tejidos forman el corion?",
                "options": [
                    {
                        "option": " Trofoblasto y mesodermo extraembrionario.",
                        "isCorrect": true
                    },
                    {
                        "option": " Trofoblasto y mesodermo intraembrionario.",
                        "isCorrect": false
                    },
                    {
                        "option": " Alantoides y amnios.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿Qué determina que una vellosidad placentaria se denomine terciaria?",
                "options": [
                    {
                        "option": " La presencia de sincitiotrofoblasto",
                        "isCorrect": false
                    },
                    {
                        "option": " La presencia de mesodermo extraembrionario",
                        "isCorrect": false
                    },
                    {
                        "option": " La presencia de vasos sanguíneos en el mesodermo extraembrionario",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "La compactación del embrión ocurre durante el proceso embrionario denominado:",
                "options": [
                    {
                        "option": " Gastrulación",
                        "isCorrect": false
                    },
                    {
                        "option": " Implantación",
                        "isCorrect": false
                    },
                    {
                        "option": " Segmentación",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "¿De qué capa provienen las células que darán origen al endodermo embrionario?",
                "options": [
                    {
                        "option": " Epiblasto.",
                        "isCorrect": true
                    },
                    {
                        "option": " Hipoblasto.",
                        "isCorrect": false
                    },
                    {
                        "option": " Citotrofoblasto.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Durante el proceso de gastrulación ¿Cómo se forma la notocorda?",
                "options": [
                    {
                        "option": " Por invaginación y posterior proliferación de células del ectodermo",
                        "isCorrect": false
                    },
                    {
                        "option": " Por células del epiblasto que migran por delante de la membrana oral",
                        "isCorrect": false
                    },
                    {
                        "option": " Por células del epiblasto que ingresan al embrión a través del nodo primitivo",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "De los siguientes procesos embrionarios, ¿cuál NO forma parte de la gastrulación?",
                "options": [
                    {
                        "option": " Diferenciación del trofoblasto",
                        "isCorrect": true
                    },
                    {
                        "option": " Aparición de la línea primitiva",
                        "isCorrect": false
                    },
                    {
                        "option": " Migración celular",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿De qué hoja embrionaria deriva la epidermis?",
                "options": [
                    {
                        "option": " Endodermo",
                        "isCorrect": false
                    },
                    {
                        "option": " Mesodermo",
                        "isCorrect": false
                    },
                    {
                        "option": " Ectodermo",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "Para la regulación del inicio de la transcripción es necesario:",
                "options": [
                    {
                        "option": " Una secuencia promotora",
                        "isCorrect": true
                    },
                    {
                        "option": " El ARN transferencia",
                        "isCorrect": false
                    },
                    {
                        "option": " La ADN polimerasa",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "El gen nanos:",
                "options": [
                    {
                        "option": " Es un gen que participa en la identidad de segmentos",
                        "isCorrect": false
                    },
                    {
                        "option": " Se traduce en la parte posterior del embrión",
                        "isCorrect": false
                    },
                    {
                        "option": " Forma parte de los genes de segmentación",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "En la siguiente figura se muestran las variaciones en los niveles hormonales de hormona folículo estimulante (FSH) y hormona luteinizante (LH) durante el ciclo sexual femenino. Indique la opción correcta:",
                "options": [
                    {
                        "option": "“1” se corresponde con el inicio de la fase folicular ovárica.",
                        "isCorrect": true
                    },
                    {
                        "option": "“2” se corresponde con el final de la fase lútea ovárica.",
                        "isCorrect": false
                    },
                    {
                        "option": "En “3” los niveles de estrógenos son mínimos.",
                        "isCorrect": false
                    }
                ],
                "image": 115
            },
            {
                "question": "Indique cuál de las siguientes opciones corresponde a la acción ejercida por la oxitocina durante la lactancia:",
                "options": [
                    {
                        "option": " Provocar la eyección láctea.",
                        "isCorrect": true
                    },
                    {
                        "option": " Desencadenar la lactogénesis.",
                        "isCorrect": false
                    },
                    {
                        "option": " Generar la amenorrea lactacional.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "La erección peneana se produce por:",
                "options": [
                    {
                        "option": " Vasoconstricción del musculo liso de las arterias helicinas de los cuerpos cavernosos.",
                        "isCorrect": false
                    },
                    {
                        "option": " Vasorrelajación del musculo liso de las arterias helicinas de los cuerpos cavernosos.",
                        "isCorrect": true
                    },
                    {
                        "option": " Aumento del tono simpático de la musculatura de las arterias helicinas.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "El vaciado del contenido de las glándulas bulbouretrales ocurre:",
                "options": [
                    {
                        "option": " Antes de la fase de emisión y eyaculación.",
                        "isCorrect": true
                    },
                    {
                        "option": " Durante la fase de emisión y eyaculación.",
                        "isCorrect": false
                    },
                    {
                        "option": " Luego de la fase de emisión y eyaculación.",
                        "isCorrect": false
                    }
                ]
            }
        ]
    },
    {
        "nombre": "Segundo periodo de examen Neurobiología – 19 de diciembre de 2024",
        "codigo": "neurobiologia2024",
        "area": "neuro",
        "preguntas": [
            {
                "question": "La siguiente figura muestra un esquema de una neurona y los fenómenos observados durante la propagación de un potencial de acción en una fibra mielínica (sentido de propagación de izquierda a derecha). Indique la opción correcta:",
                "options": [
                    {
                        "option": " El ion que sale del interior de la fibra en 1 es el Ca++.",
                        "isCorrect": false
                    },
                    {
                        "option": " El ion que ingresa al interior de la fibra en 2 es el Na+.",
                        "isCorrect": true
                    },
                    {
                        "option": " El ion que se mueve de 2 a 3 es el Cl-.",
                        "isCorrect": false
                    }
                ],
                "image": 1
            },
            {
                "question": "Con respecto a la organización del sistema nervioso central:",
                "options": [
                    {
                        "option": " El cerebelo regula los ciclos circadianos.",
                        "isCorrect": false
                    },
                    {
                        "option": " El hipotálamo realiza el ajuste fino de las habilidades motoras.",
                        "isCorrect": false
                    },
                    {
                        "option": " El tálamo procesa y modula la información sensitiva que va hacia la corteza.",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "La siguiente figura corresponde a los potenciales de membrana medidos en una neurona presináptica y una postsináptica en una situación experimental. Indique que maniobra puede haberse realizado:",
                "options": [
                    {
                        "option": " Bloqueo de los canales de Na+ en la neurona presináptica.",
                        "isCorrect": false
                    },
                    {
                        "option": " Bloqueo de los canales de Ca++ en la neurona presináptica.",
                        "isCorrect": true
                    },
                    {
                        "option": " Activación de los canales de Na+ en la neurona postsináptica.",
                        "isCorrect": false
                    }
                ],
                "image": 3
            },
            {
                "question": "En dos neuronas comunicadas mediante uniones GAP:",
                "options": [
                    {
                        "option": " El paso de corriente es dependiente de la superación del umbral en una de las neuronas.",
                        "isCorrect": false
                    },
                    {
                        "option": " Es esperable que haya un retraso en la sinapsis de 10 ms.",
                        "isCorrect": false
                    },
                    {
                        "option": " Se pueden transmitir corrientes hiperpolarizantes.",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "Los mecanorreceptores del sistema somatosensorial son sensibles a",
                "options": [
                    {
                        "option": " Deformaciones del tejido.",
                        "isCorrect": true
                    },
                    {
                        "option": " Foto-pigmentos.",
                        "isCorrect": false
                    },
                    {
                        "option": " Calor.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Con respecto a las cortezas somatosensoriales primarias, ¿cuál de las siguientes",
                "options": [
                    {
                        "isCorrect": false
                    },
                    {
                        "option": " Reciben información del tálamo.",
                        "isCorrect": false
                    },
                    {
                        "option": " No tienen organización somatotópica.",
                        "isCorrect": true
                    },
                    {
                        "option": " Reciben información de las cortezas motoras.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "El siguiente esquema corresponde al registro de la actividad de una neurona aferente sensorial primaria (registro inferior) en respuesta a la aplicación de un estímulo (registro superior). Es correcto afirmar que el receptor sensorial:",
                "options": [
                    {
                        "option": " No presenta adaptación.",
                        "isCorrect": false
                    },
                    {
                        "option": " Presenta adaptación lenta.",
                        "isCorrect": true
                    },
                    {
                        "option": " Presenta adaptación rápida.",
                        "isCorrect": false
                    }
                ],
                "image": 7
            },
            {
                "question": "Considerando que las unidades motoras se clasifican en: unidades motoras de contracción lenta y resistentes a la fatiga (LR), de contracción rápida y resistentes a la fatiga (RR), y de contracción rápida y fatigables (RF), ¿en qué orden se reclutan cuando un músculo debe realizar fuerza?",
                "options": [
                    {
                        "option": " LR – RR – RF.",
                        "isCorrect": true
                    },
                    {
                        "option": " LR– RF – RR.",
                        "isCorrect": false
                    },
                    {
                        "option": " RR – LR– RF.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "La marcha considera un movimiento:",
                "options": [
                    {
                        "option": " De inicio involuntario.",
                        "isCorrect": false
                    },
                    {
                        "option": " Reflejo durante el mantenimiento.",
                        "isCorrect": true
                    },
                    {
                        "option": " De ejecución rápida comparada con un reflejo.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Durante el reflejo de flexión del miembro inferior, ¿cuál de las siguientes afirmaciones es correcta?",
                "options": [
                    {
                        "option": " Se activan los músculos flexores en ambos miembros inferiores.",
                        "isCorrect": false
                    },
                    {
                        "option": " Se inhiben los músculos extensores de ambos miembros inferiores.",
                        "isCorrect": false
                    },
                    {
                        "option": " Se activan únicamente los músculos flexores del miembro estimulado.",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "¿Qué ocurre frente a un aumento en la tensión muscular?",
                "options": [
                    {
                        "option": " Aumenta la frecuencia de descarga del huso neuromuscular.",
                        "isCorrect": false
                    },
                    {
                        "option": " Aumenta la frecuencia de descarga del órgano tendinoso de Golgi.",
                        "isCorrect": true
                    },
                    {
                        "option": " Aumenta la amplitud de los potenciales de acción de la aferente sensorial primaria.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "La noradrenalina puede ser liberada desde:",
                "options": [
                    {
                        "option": " La terminal preganglionar simpática.",
                        "isCorrect": false
                    },
                    {
                        "option": " La neurona postganglionar simpática.",
                        "isCorrect": true
                    },
                    {
                        "option": " La terminal preganglionar parasimpática.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿Cuál es de los siguientes receptores es el predominante a nivel ganglionar del sistema nervioso parasimpático?",
                "options": [
                    {
                        "option": " Nicotínicos.",
                        "isCorrect": true
                    },
                    {
                        "option": " Adrenérgicos.",
                        "isCorrect": false
                    },
                    {
                        "option": " GABAérgicos.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Con respecto a las técnicas para estudiar el sistema nervioso:",
                "options": [
                    {
                        "option": " La hematoxilina-eosina en cortes histológicos permite la visualización de espinas dendríticas",
                        "isCorrect": false
                    },
                    {
                        "option": " Las técnicas mieloarquitecturales permiten diferenciar la sustancia gris de la sustancia blanca",
                        "isCorrect": true
                    },
                    {
                        "option": " La impregnación argéntica de Golgi permite identificar las neuronas por su núcleo eucromático",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿Cuál de los siguientes tipos celulares participa en la recaptación de neurotransmisores a nivel de las sinapsis en el sistema nervioso central?",
                "options": [
                    {
                        "option": " microglías ameboides",
                        "isCorrect": false
                    },
                    {
                        "option": " oligodendrocitos maduros",
                        "isCorrect": false
                    },
                    {
                        "option": " astrocitos protoplasmáticos",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "En un laboratorio están estudiando una muestra de cerebro y desean identificar distintos tipos celulares mediante inmunohistoquímica. Se cuenta con algunos anticuerpos primarios. Para detectar a los astrocitos deberíamos seleccionar anticuerpos que reconozcan cuál de las siguientes moléculas:",
                "options": [
                    {
                        "option": " proteína ácida fibrilar glial (GFAP",
                        "isCorrect": true
                    },
                    {
                        "option": " neurofilamentos de cadena liviana",
                        "isCorrect": false
                    },
                    {
                        "option": " proteína básica de mielina",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "En un nervio periférico:",
                "options": [
                    {
                        "option": " Los nodos de Ranvier son sectores de mielina compacta.",
                        "isCorrect": false
                    },
                    {
                        "option": " Cada internodo mielínico está formado por varias células de Schwann.",
                        "isCorrect": false
                    },
                    {
                        "option": " Los axones amielínicos se encuentran invaginados en surcos de las células de Schwann.",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "Con respecto a las fibras intrafusales del huso neuromuscular:",
                "options": [
                    {
                        "option": " Están rodeadas por una cápsula multilaminar",
                        "isCorrect": false
                    },
                    {
                        "option": " Su inervación es solamente motora, careciendo de inervación sensitiva",
                        "isCorrect": false
                    },
                    {
                        "option": " La disposición de sus núcleos es diferente a la de las fibras extrafusales",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "Con respecto a la médula espinal:",
                "options": [
                    {
                        "option": " Los somas neuronales de mayor tamaño se localizan en el asta ventral",
                        "isCorrect": true
                    },
                    {
                        "option": " La mayor parte de la sustancia blanca está formada por fibras de disposición transversal",
                        "isCorrect": false
                    },
                    {
                        "option": " Los somas neuronales cuyo axón se dirige a la periferia se localizan principalmente en el asta dorsal",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Luego de una lesión de médula espinal que afecta la sustancia blanca a nivel lumbar, ¿cuál de las siguientes eventos esperamos que ocurra a nivel del tejido en el sitio de la lesión?",
                "options": [
                    {
                        "option": " Muerte de las motoneuronas en la médula cervical",
                        "isCorrect": false
                    },
                    {
                        "option": " Proliferación de astrocitos y formación de cicatriz glial",
                        "isCorrect": true
                    },
                    {
                        "option": " Reparación de las fibras nerviosas a partir de las células de Schwann",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Con respecto a las neuronas de la corteza cerebelosa:",
                "options": [
                    {
                        "option": " las neuronas de Purkinje son las neuronas principales",
                        "isCorrect": true
                    },
                    {
                        "option": " las neuronas de Golgi tienen su soma en la capa molecular",
                        "isCorrect": false
                    },
                    {
                        "option": " las células en cesto son el principal componente de los glomérulos cerebelosos",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Con respecto a la glía de Bergmann de la corteza cerebelosa:",
                "options": [
                    {
                        "option": " Son un tipo de microglía típica de esta región del sistema nervioso",
                        "isCorrect": false
                    },
                    {
                        "option": " La mayor parte de sus prolongaciones se encuentran en la capa molecular",
                        "isCorrect": true
                    },
                    {
                        "option": " Su soma se ubica fundamentalmente en la parte profunda de la capa granular",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Acerca de las fibras de la corteza cerebelosa:",
                "options": [
                    {
                        "option": " Las fibras trepadoras son los axones de los granos",
                        "isCorrect": false
                    },
                    {
                        "option": " Las fibras paralelas son fibras aferentes provenientes de los núcleos cerebelosos",
                        "isCorrect": false
                    },
                    {
                        "option": " Las fibras musgosas son fibras aferentes que hacen sinapsis en la capa granular",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "Con respecto al neocórtex cerebral:",
                "options": [
                    {
                        "option": " En todas sus capas se encuentran neuronas de tipo multipolar",
                        "isCorrect": true
                    },
                    {
                        "option": " En la capa III los somas predominantes son de morfología fusiforme",
                        "isCorrect": false
                    },
                    {
                        "option": " La capa I es la que contiene mayor cantidad de neuronas piramidales",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿Cómo se denomina la capa I del arquicortex?",
                "options": [
                    {
                        "option": " piramidal",
                        "isCorrect": false
                    },
                    {
                        "option": " polimorfa",
                        "isCorrect": false
                    },
                    {
                        "option": " molecular",
                        "isCorrect": true
                    }
                ]
            }
        ]
    },
    {
        "nombre": "Segundo periodo de examen Neurobiología - 23 de diciembre de 2019",
        "codigo": "neurobiologia2019",
        "area": "neuro",
        "preguntas": [
            {
                "question": "En cuanto a las propiedades electrofisiológicas de las neuronas:",
                "options": [
                    {
                        "option": " La repolarización luego de un potencial de acción se debe principalmente a la salida de K+.",
                        "isCorrect": true
                    },
                    {
                        "option": " Durante el potencial de acción hay una entrada masiva de K+ al interior de la célula.",
                        "isCorrect": false
                    },
                    {
                        "option": " Los potenciales electrotónicos son señales estereotipadas de tipo todo o nada.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Con respecto a las funciones de los distintos lóbulos del cerebro:",
                "options": [
                    {
                        "option": " el lóbulo occipital controla principalmente las emociones.",
                        "isCorrect": false
                    },
                    {
                        "option": " el lóbulo frontal es vital en el procesamiento visual.",
                        "isCorrect": false
                    },
                    {
                        "option": " el lóbulo temporal procesa información auditiva.",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "El efecto excitatorio o inhibitorio de un neurotransmisor depende principalmente de:",
                "options": [
                    {
                        "option": " la cantidad de neurotransmisor liberado por la célula postsináptica.",
                        "isCorrect": false
                    },
                    {
                        "option": " el tipo de receptor expresado a nivel de la célula postsináptica.",
                        "isCorrect": true
                    },
                    {
                        "option": " el mecanismo de inactivación del efecto del neurotransmisor.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Los potenciales postsinápticos excitatorios pueden generarse por:",
                "options": [
                    {
                        "option": " La apertura de canales de Na+.",
                        "isCorrect": true
                    },
                    {
                        "option": " La apertura de canales de K+.",
                        "isCorrect": false
                    },
                    {
                        "option": " El cierre de canales de Ca++.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Si usted se encuentra frente a una situación de peligro repentina, es esperable que:",
                "options": [
                    {
                        "option": " Aumente la glucosa en sangre.",
                        "isCorrect": true
                    },
                    {
                        "option": " Disminuya la presión arterial.",
                        "isCorrect": false
                    },
                    {
                        "option": " Disminuya el diámetro pupilar.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "La división entérica del sistema nervioso autónomo (SNA):",
                "options": [
                    {
                        "option": " Es controlada principalmente por la división simpática.",
                        "isCorrect": false
                    },
                    {
                        "option": " El bloqueo de la acción de la acetilcolina reduce la motilidad intestinal.",
                        "isCorrect": true
                    },
                    {
                        "option": " La función principal del plexo submucoso es controlar la motilidad intestinal.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "En relación a las unidades motoras:",
                "options": [
                    {
                        "option": " Las fibras musculares pequeñas y rojas conforman las unidades motoras fatigables y de contracción rápida.",
                        "isCorrect": false
                    },
                    {
                        "option": " Las unidades motoras fatigables y de contracción rápida utilizan principalmente la vía oxidativa para generar ATP.",
                        "isCorrect": false
                    },
                    {
                        "option": " Las motoneuronas pequeñas y de bajo umbral de disparo conforman las unidades motoras resistentes a la fatiga y de contracción lenta.",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "En cuanto a la función de los husos neuromusculares:",
                "options": [
                    {
                        "option": " Sus aferentes primarias se activan durante estiramiento pasivo del músculo.",
                        "isCorrect": true
                    },
                    {
                        "option": " Se encuentran acoplados en serie a cada fibra muscular.",
                        "isCorrect": false
                    },
                    {
                        "option": " Están inervados por las motoneuronas Alfa.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Respecto a un receptor sensorial es correcto afirmar que:",
                "options": [
                    {
                        "option": " La despolarización del receptor genera siempre un potencial de acción.",
                        "isCorrect": false
                    },
                    {
                        "option": " La señal eléctrica producida por el receptor se conoce como potencial de receptor.",
                        "isCorrect": true
                    },
                    {
                        "option": " La amplitud y la duración del potencial de receptor son independientes de la intensidad y la duración del estímulo.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Si se realiza el estímulo de presión sobre un mecanorreceptor de adaptación rápida como se muestra en A, el registro de la actividad eléctrica de dicho receptor corresponde al registro observado en:",
                "options": [
                    {
                        "option": "1",
                        "isCorrect": true
                    },
                    {
                        "option": "2",
                        "isCorrect": false
                    },
                    {
                        "option": "3",
                        "isCorrect": false
                    }
                ],
                "image": 10
            },
            {
                "question": "La siguiente figura corresponde a los cambios en los potenciales de membrana medidos en una neurona presináptica (gráfico superior) y una postsináptica (gráfico inferior) de una sinapsis de tipo:",
                "options": [
                    {
                        "option": "Inhibitoria.",
                        "isCorrect": false
                    },
                    {
                        "option": "Química.",
                        "isCorrect": false
                    },
                    {
                        "option": "Eléctrica.",
                        "isCorrect": true
                    }
                ],
                "image": 11
            },
            {
                "question": "El proceso de acoplamiento éxito-contráctil que se da a nivel del músculo esquelético depende de:",
                "options": [
                    {
                        "option": " La hiperpolarización de la fibra muscular.",
                        "isCorrect": false
                    },
                    {
                        "option": " La liberación del Ca++ contenido en el retículo sarcoplásmico.",
                        "isCorrect": true
                    },
                    {
                        "option": " La propagación del potencial electrotónico desde el nervio hasta el músculo.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "En cuanto a las principales vías descendentes de control motor:",
                "options": [
                    {
                        "option": " La vía corticoespinal controla músculos distales que intervienen en la manipulación fina de los miembros.",
                        "isCorrect": true
                    },
                    {
                        "option": " La vía tectoespinal controla los movimientos de la lengua y la gesticulación relacionados a la comunicación.",
                        "isCorrect": false
                    },
                    {
                        "option": " La vía rubroespinal termina en motoneuronas espinales mediales que controlan músculos posturales y de la cabeza.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿Cómo se denomina a la región de sustancia gris entre los cuerpos neuronales que posee abundantes prolongaciones neuronales y gliales?",
                "options": [
                    {
                        "option": " Plexo",
                        "isCorrect": false
                    },
                    {
                        "option": " Intersticio",
                        "isCorrect": false
                    },
                    {
                        "option": " Neuropilo",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "¿Qué estructuras celulares se pueden visualizar con la impregnación argéntica de Cajal?",
                "options": [
                    {
                        "option": " Neurofibrillas",
                        "isCorrect": true
                    },
                    {
                        "option": " Vainas de mielina",
                        "isCorrect": false
                    },
                    {
                        "option": " Corpúsculos de Nissl",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "En el análisis de la morfología neuronal, las dendritas se identifican como:",
                "options": [
                    {
                        "option": " prolongaciones delgadas y de diámetro constante",
                        "isCorrect": false
                    },
                    {
                        "option": " prolongaciones cortas que se dividen en ángulo agudo",
                        "isCorrect": true
                    },
                    {
                        "option": " prolongaciones únicas y lisas que se dividen en ángulo recto",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿Qué proteínas participan en el transporte anterógrado de vesículas hacia la terminal axónica?",
                "options": [
                    {
                        "option": " Dineínas",
                        "isCorrect": false
                    },
                    {
                        "option": " Kinesinas",
                        "isCorrect": true
                    },
                    {
                        "option": " Neurofilamentos",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿Qué células forman parte de la barrera hemato-nerviosa de los nervios periféricos?",
                "options": [
                    {
                        "option": " Pies terminales astrocitarios",
                        "isCorrect": false
                    },
                    {
                        "option": " Células perineurales",
                        "isCorrect": true
                    },
                    {
                        "option": " Células satélite",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "En relación a la interacción de las células gliales con las fibras nerviosas en el sistema nervioso periférico:",
                "options": [
                    {
                        "option": " Los exones amielínicosse encuentran rodeados porcélulas de Schwann",
                        "isCorrect": true
                    },
                    {
                        "option": " Una célula de Schwann puede mielinizar muchos segmentos internodales",
                        "isCorrect": false
                    },
                    {
                        "option": " Los axones amielínicosse encuentran rodeados por prolongaciones de fibroblastos",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿Cómo se denomina el tejido conjuntivo que rodea a cada fibra nerviosa?",
                "options": [
                    {
                        "option": " Epineuro",
                        "isCorrect": false
                    },
                    {
                        "option": " Perineuro",
                        "isCorrect": false
                    },
                    {
                        "option": " Endoneuro",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "¿Cuál de los siguientes sectores de la médula espinal tiene la relación sustancia gris/sustancia blanca más baja?",
                "options": [
                    {
                        "option": " Sacro 3",
                        "isCorrect": false
                    },
                    {
                        "option": " Cervical 7",
                        "isCorrect": true
                    },
                    {
                        "option": " Torácico 12",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿Dónde se ubican los somas simpáticos preganglionares?",
                "options": [
                    {
                        "option": " En el asta anterior de la médula espinal",
                        "isCorrect": false
                    },
                    {
                        "option": " En el asta lateral de la médula espinal",
                        "isCorrect": true
                    },
                    {
                        "option": " En los ganglios espinales",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "En un preparado histológico de piel se observa una estructura ovoide grande compuesta por una terminación nerviosa rodeada de láminas concéntricas que forman una estructura capsular. Esta estructura corresponde a un corpúsculo:",
                "options": [
                    {
                        "option": " de Meissener",
                        "isCorrect": false
                    },
                    {
                        "option": " de Pacini",
                        "isCorrect": true
                    },
                    {
                        "option": " de Ruffini",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "La corteza cerebelosa se caracteriza por presentar una organización tri-laminar cuando se analiza con tinciones clásicas (Hematoxilina y Eosina o la técnica de Nissl). ¿En cuál de estas capas se establecen contactos sinápticos entre las fibras trepadoras y las neuronas de Purkinje?",
                "options": [
                    {
                        "option": " Capa granular",
                        "isCorrect": false
                    },
                    {
                        "option": " Capa molecular",
                        "isCorrect": true
                    },
                    {
                        "option": " Capa de células de Purkinje",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿Cuál de los siguientes rasgos NO es compartido por las neuronas piramidales de la neocorteza y las de Purkinje del cerebelo?",
                "options": [
                    {
                        "option": " Presencia de espinas dendríticas",
                        "isCorrect": false
                    },
                    {
                        "option": " Su axón proyecta fuera de la corteza",
                        "isCorrect": false
                    },
                    {
                        "option": " El tipo de neurotransmisor que almacenan",
                        "isCorrect": true
                    }
                ]
            }
        ]
    },
    {
        "nombre": "Segundo periodo de examen Neurobiología – 21 de diciembre de 2022",
        "codigo": "neurobiologia2022",
        "area": "neuro",
        "preguntas": [
            {
                "question": "¿Qué papel cumplen los canales de potasio dependientes de voltaje ubicados en el cono axónico neuronal?",
                "options": [
                    {
                        "option": " Participan de la fase de repolarización del potencial de membrana durante un potencial de acción.",
                        "isCorrect": true
                    },
                    {
                        "option": " Participan en la fase de despolarización de un potencial de acción.",
                        "isCorrect": false
                    },
                    {
                        "option": " Al abrirse, mantienen el potencial de membrana en reposo.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Durante la propagación de un potencial de acción iniciado en el cono axónico neuronal:",
                "options": [
                    {
                        "option": " En la cola de propagación, la membrana se encuentra hiperpolarizada.",
                        "isCorrect": true
                    },
                    {
                        "option": " En el frente de propagación, la membrana está hiperpolarizada.",
                        "isCorrect": false
                    },
                    {
                        "option": " En el frente de propagación, los canales de Na+ dependientes de voltaje se encuentran inactivos.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿Cuál de las siguientes características es verdadera para un potencial receptorial?",
                "options": [
                    {
                        "option": " Es una señal eléctrica activa.",
                        "isCorrect": false
                    },
                    {
                        "option": " Se propaga con decaimiento de su amplitud.",
                        "isCorrect": true
                    },
                    {
                        "option": " Su amplitud es independiente de la amplitud del estímulo.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "La siguiente figura corresponde a los cambios del potencial de membrana de una neurona postsináptica en una sinapsis química. Indique la opción correcta:",
                "options": [
                    {
                        "option": " La respuesta corresponde a un potencial postsináptico excitatorio.",
                        "isCorrect": false
                    },
                    {
                        "option": " Puede ser generado por el cierre de canales de Cl- en la neurona postsináptica.",
                        "isCorrect": false
                    },
                    {
                        "option": " Puede ser generado por la apertura de canales de K+ en la neurona postsináptica.",
                        "isCorrect": true
                    }
                ],
                "image": 4
            },
            {
                "question": "La siguiente característica es propia de los receptores de tipo metabotrópicos:",
                "options": [
                    {
                        "option": " Producen respuestas muy rápidas.",
                        "isCorrect": false
                    },
                    {
                        "option": " El receptor constituye un canal iónico.",
                        "isCorrect": false
                    },
                    {
                        "option": " Promueve la producción de segundos mensajeros.",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "Indique cuál de las siguientes características corresponde a un receptor sensorial:",
                "options": [
                    {
                        "option": " Se encuentran a nivel del tálamo.",
                        "isCorrect": false
                    },
                    {
                        "option": " Su activación genera señales eléctricas pasivas.",
                        "isCorrect": true
                    },
                    {
                        "option": " Experimentan una despolarización que es independiente de la intensidad del estímulo.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Respecto a las vías centrales del sistema somatosensorial táctil:",
                "options": [
                    {
                        "option": " La tercera neurona de esta vía se encuentra a nivel del tálamo.",
                        "isCorrect": true
                    },
                    {
                        "option": " La neurona aferente primaria de esta vía alcanza cortezas motoras.",
                        "isCorrect": false
                    },
                    {
                        "option": " Alcanza las cortezas somatosensoriales a través de una vía contralateral.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Los movimientos reflejos se caracterizan por:",
                "options": [
                    {
                        "option": " Ser de ejecución lenta.",
                        "isCorrect": false
                    },
                    {
                        "option": " Mejoran con la práctica y la repetición.",
                        "isCorrect": false
                    },
                    {
                        "option": " Su ejecución depende de aferencias y eferencias medulares.",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "En relación a las vías centrales y cortezas motoras que modulan los diferentes tipos de movimientos:",
                "options": [
                    {
                        "option": " Las cortezas motoras presentan somatotopía.",
                        "isCorrect": true
                    },
                    {
                        "option": " Los axones motores del haz del sistema lateral de tronco encefálico hacen sinapsis con neuronas sensoriales a nivel medular.",
                        "isCorrect": false
                    },
                    {
                        "option": " Como regla general, los axones que forman parte del haz corticomedular o corticoespinal siempre finalizan en el tronco encefálico.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿Cuál de los siguientes eventos ocurre durante el reflejo de retirada de un miembro inferior a un estímulo nocivo?",
                "options": [
                    {
                        "option": " Se contrae el músculo flexor del miembro estimulado.",
                        "isCorrect": true
                    },
                    {
                        "option": " Los músculos extensores de ambos miembros se relajan al mismo tiempo.",
                        "isCorrect": false
                    },
                    {
                        "option": " La información sensorial alcanza vías motoras a través de una vía monosináptica.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Respecto al huso neuromuscular y al órgano tendinoso de Golgi:",
                "options": [
                    {
                        "option": " El huso neuromuscular se encuentra en los tendones.",
                        "isCorrect": false
                    },
                    {
                        "option": " El órgano tendinoso de Golgi sensa un aumento en la tensión experimentada por el tendón.",
                        "isCorrect": true
                    },
                    {
                        "option": " Un acortamiento de la fibra muscular aumenta la actividad de la aferente sensorial del huso neuromuscular.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Con respecto a los neurotransmisores y receptores del sistema nervioso autónomo:",
                "options": [
                    {
                        "option": " A nivel ganglionar, la división simpática libera principalmente acetilcolina.",
                        "isCorrect": true
                    },
                    {
                        "option": " La noradrenalina se une principalmente a los receptores de tipo muscarínicos.",
                        "isCorrect": false
                    },
                    {
                        "option": " A nivel de la sinapsis neuro-efectora, la división parasimpática libera principalmente noradrenalina.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "El sistema nervioso simpático se activa principalmente en respuesta a:",
                "options": [
                    {
                        "option": " Un suceso inesperado.",
                        "isCorrect": true
                    },
                    {
                        "option": " La ingesta de alimento.",
                        "isCorrect": false
                    },
                    {
                        "option": " Un aumento de la presión arterial.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "La sustancia blanca del sistema nervioso central:",
                "options": [
                    {
                        "option": " Carece de vasos sanguíneos",
                        "isCorrect": false
                    },
                    {
                        "option": " Se organiza en núcleos y cortezas",
                        "isCorrect": false
                    },
                    {
                        "option": " Contiene predominantemente fibras mielínicas",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "En el sistema nervioso central, el neuropilo se caracteriza por presentar abundancia de:",
                "options": [
                    {
                        "option": " sinapsis",
                        "isCorrect": true
                    },
                    {
                        "option": " grumos de Nissl",
                        "isCorrect": false
                    },
                    {
                        "option": " somas neuronales",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "En una neurona multipolar, las dendritas en general:",
                "options": [
                    {
                        "option": " tienen un diámetro que disminuye al aumentar la distancia al soma",
                        "isCorrect": true
                    },
                    {
                        "option": " están rodeadas de vaina de mielina en su sector distal",
                        "isCorrect": false
                    },
                    {
                        "option": " casi no se ramifican, y si lo hacen es en ángulo recto",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Con respecto a las células de Schwann:",
                "options": [
                    {
                        "option": " la mayoría forman vaina de Schwann a un solo axón amielínico",
                        "isCorrect": false
                    },
                    {
                        "option": " pueden mielinizar de 10 – 50 axones cada una",
                        "isCorrect": false
                    },
                    {
                        "option": " rodean a los axones de los nervios periféricos",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "¿Qué componente de la barrera hematoencefálica es fundamental para disminuir la permeabilidad?",
                "options": [
                    {
                        "option": " uniones tipo desmosoma entre los pericitos",
                        "isCorrect": false
                    },
                    {
                        "option": " uniones ocluyentes entre las células endoteliales vasculares",
                        "isCorrect": true
                    },
                    {
                        "option": " uniones comunicantes entre los pies terminales de astrocitos",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Los corpúsculos de Paccini:",
                "options": [
                    {
                        "option": " Constan de una terminal nerviosa libre, sin estructuras prerreceptoriales",
                        "isCorrect": false
                    },
                    {
                        "option": " Reciben información sobre cambios en presión y vibración",
                        "isCorrect": true
                    },
                    {
                        "option": " Se encuentran en el epitelio estratificado de la epidermis",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "De los siguientes segmentos de la médula espinal, ¿cuáles tienen mayor área al corte transversal?",
                "options": [
                    {
                        "option": " cervicales",
                        "isCorrect": true
                    },
                    {
                        "option": " torácicos",
                        "isCorrect": false
                    },
                    {
                        "option": " sacros",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿En qué segmentos de la médula espinal se observa un asta lateral en la sustancia gris?",
                "options": [
                    {
                        "option": " torácicos",
                        "isCorrect": true
                    },
                    {
                        "option": " lumbares",
                        "isCorrect": false
                    },
                    {
                        "option": " cervicales",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿Cuál de los siguientes elementos celulares están presentes en los glomérulos cerebelosos?",
                "options": [
                    {
                        "option": " axones de fibras trepadoras",
                        "isCorrect": false
                    },
                    {
                        "option": " dendritas de las neuronas granulares",
                        "isCorrect": true
                    },
                    {
                        "option": " dendritas de células estrelladas profundas",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿En qué sector de las células de Purkinje predominan las sinapsis provenientes de las neuronas estrelladas profundas?",
                "options": [
                    {
                        "option": " en el soma",
                        "isCorrect": true
                    },
                    {
                        "option": " en las espinas dendríticas",
                        "isCorrect": false
                    },
                    {
                        "option": " en las dendritas distales",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Respecto a las neuronas piramidales del área motora primaria del neocortex:",
                "options": [
                    {
                        "option": " La gran mayoría tienen su soma en la capa molecular",
                        "isCorrect": false
                    },
                    {
                        "option": " Sus dendritas carecen de espinas, siendo lisas en su mayoría",
                        "isCorrect": false
                    },
                    {
                        "option": " Las que tienen su soma en la capa 5, tienen un axón que puede llegar hasta la médula espinal",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "En el asta de Amon del Arquicortex:",
                "options": [
                    {
                        "option": " La capa superficial carece de células gliales",
                        "isCorrect": false
                    },
                    {
                        "option": " La capa más profunda es la capa molecular",
                        "isCorrect": false
                    },
                    {
                        "option": " Las neuronas principales son las pirámides dobles",
                        "isCorrect": true
                    }
                ]
            }
        ]
    },
    {
        "nombre": "Primer periodo de examen Neurobiología – 25 de noviembre de 2023",
        "codigo": "neurobiologia2023b",
        "area": "neuro",
        "preguntas": [
            {
                "question": "En una situación experimental se ocasiona daño directo a nivel cerebral. Este tejido es procesado y teñido utilizando la técnica de del Río Hortega. Al visualizarlo se constata un elevado número de células con prolongaciones gruesas y cortas ¿Cuál sería tipo celular observado?",
                "options": [
                    {
                        "option": " Microglía.",
                        "isCorrect": true
                    },
                    {
                        "option": " Ependimocitos.",
                        "isCorrect": false
                    },
                    {
                        "option": " Oligodendrocitos.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Se presume que un paciente tiene una enfermedad desmielinizante. Indique que técnica histológica para microscopía óptica elegiría para teñir una biopsia de dicho paciente y corroborar la pérdida de fibras mielinizadas:",
                "options": [
                    {
                        "option": " Klüver Barrera.",
                        "isCorrect": true
                    },
                    {
                        "option": " Coloración de Nissl.",
                        "isCorrect": false
                    },
                    {
                        "option": " Impregnación argéntica de Cajal.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "En una preparación de tejido nervioso central teñido con la impregnación de Golgi se visualizan células que emiten prolongaciones que contactan con los vasos sanguíneos. ¿Cuál sería dicho tipo celular?",
                "options": [
                    {
                        "option": " Pericitos.",
                        "isCorrect": false
                    },
                    {
                        "option": " Astrocitos.",
                        "isCorrect": true
                    },
                    {
                        "option": " Microglía.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "En una micrografía electrónica de transmisión de un corte transversal de nervio ciático, se observa a una célula que contiene axones en invaginaciones individuales de su citoplasma. ¿Qué tipo de célula estaría observando?",
                "options": [
                    {
                        "option": " Microglía.",
                        "isCorrect": false
                    },
                    {
                        "option": " Oligodendrocito.",
                        "isCorrect": false
                    },
                    {
                        "option": " Célula de Schwann.",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "¿Cuál elemento tendría que observar para indicar la existencia de asimetría o simetría en una sinapsis química?:",
                "options": [
                    {
                        "option": " Presencia de mitocondrias.",
                        "isCorrect": false
                    },
                    {
                        "option": " Forma de las vesículas sinápticas.",
                        "isCorrect": false
                    },
                    {
                        "option": " Grosor de la densidad postsináptica.",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "En el proceso de formación de la mielina ¿Qué se origina por la fusión de las superficies externas de la membrana plasmática de la célula de Schwann?",
                "options": [
                    {
                        "option": " El nodo de Ranvier.",
                        "isCorrect": false
                    },
                    {
                        "option": " El mesaxón interno.",
                        "isCorrect": false
                    },
                    {
                        "option": " La línea intraperiódica.",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "Un nervio periférico se lesiona. Como consecuencia, los axones lesionados tienen una porción (la porción distal) completamente separada del soma neuronal y de la porción proximal axonal respectiva. En este caso ¿qué sucedería con las células de Schwann?",
                "options": [
                    {
                        "option": " Proliferan y forman una cicatriz que impide la regeneración axonal.",
                        "isCorrect": false
                    },
                    {
                        "option": " Quedan en estado quiescente hasta que ocurra la regeneración axonal.",
                        "isCorrect": false
                    },
                    {
                        "option": " Proliferan formando un tubo de células interdigitadas que participa de la regeneración axonal.",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "Utilizando una tinción con plata reducida es posible observar a nivel de la corteza cerebelosa, la presencia de una formación similar a una canastilla rodeando el soma de las células de Purkinje. ¿Dónde se localiza el soma de las células que originan dichas canastillas?",
                "options": [
                    {
                        "option": " En la capa granulosa.",
                        "isCorrect": false
                    },
                    {
                        "option": " En la capa molecular.",
                        "isCorrect": true
                    },
                    {
                        "option": " Entre las células de Purkinje.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "En la vaina de mielina que forma una célula de Schwann, ¿a qué se denominan hendiduras o cisuras de Schmidt-Lanterman?",
                "options": [
                    {
                        "option": " Zonas de separación entre dos segmentos internodales.",
                        "isCorrect": false
                    },
                    {
                        "option": " Prolongaciones con forma de lengüeta con citoplasma localizada en los extremos de un segmento internodal.",
                        "isCorrect": false
                    },
                    {
                        "option": " Interrupciones en la mielina dentro de un segmento internodal por separación de las líneas densas mayores con citoplasma.",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "Un elemento esencial de la barrera entre la sangre-líquido céfalo raquídeo es la existencia de uniones estrechas o zónulas oclusivas. Indique dónde se emplazan dichas uniones en la barrera mencionada:",
                "options": [
                    {
                        "option": " Entre las células ependimarias cilíndricas del plexo coroideo.",
                        "isCorrect": true
                    },
                    {
                        "option": " Entre las células endoteliales de los capilares del plexo coroideo.",
                        "isCorrect": false
                    },
                    {
                        "option": " Entre las células pia-aracnoideas de las vellosidades aracnoideas.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿Qué tipo de receptor sensorial se encuentra en las papilas dérmicas de la piel glabra y está constituido por células aplanadas dispuestas en múltiples pilas de láminas dentro de una delgada capa externa de tejido conectivo?",
                "options": [
                    {
                        "option": " Los corpúsculos de Ruffini",
                        "isCorrect": false
                    },
                    {
                        "option": " Los corpúsculos de Paccini",
                        "isCorrect": false
                    },
                    {
                        "option": " Los corpúsculos de Meissner",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "En relación con la presencia de glía a nivel de los ganglios de la raíz dorsal de la médula espinal:",
                "options": [
                    {
                        "option": " No existe glía en dichos ganglios.",
                        "isCorrect": false
                    },
                    {
                        "option": " Está compuesta por las células satélites.",
                        "isCorrect": true
                    },
                    {
                        "option": " Está compuesta principalmente por astrocitos.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "La siguiente figura muestra dos tipos de sinapsis A (arriba) y B (abajo) entre dos neuronas. Indique la opción correcta:",
                "options": [
                    {
                        "option": " La transmisión en A requiere de un potencial de acción en la célula presináptica.",
                        "isCorrect": true
                    },
                    {
                        "option": " La transmisión en B depende de la entrada de Ca++ en la célula presináptica.",
                        "isCorrect": false
                    },
                    {
                        "option": " La latencia de la transmisión es mayor en B que en A.",
                        "isCorrect": false
                    }
                ],
                "image": 13
            },
            {
                "question": "La siguiente figura muestra los cambios en el potencial de membrana de una neurona postsináptica generados por una sinapsis química. Con respecto a dicha señal:",
                "options": [
                    {
                        "option": " Puede deberse a la entrada de sodio en la neurona postsináptica.",
                        "isCorrect": false
                    },
                    {
                        "option": " Aumenta la probabilidad de disparo de la neurona postsináptica.",
                        "isCorrect": false
                    },
                    {
                        "option": " Puede ser generada por la apertura de canales de cloruro en la neurona postsináptica.",
                        "isCorrect": true
                    }
                ],
                "image": 14
            },
            {
                "question": "Cuando el potencial de membrana se encuentra en reposo:",
                "options": [
                    {
                        "option": " El flujo neto de iones a ambos lados de la membrana es 0.",
                        "isCorrect": true
                    },
                    {
                        "option": " Hay un flujo neto de salida de aniones al espacio extracelular.",
                        "isCorrect": false
                    },
                    {
                        "option": " Hay un flujo neto de entrada de cationes al interior de la neurona.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "En la siguiente figura se representa el cambio en el potencial de membrana durante un potencial de acción. En relación a la región del registro indicado con la flecha:",
                "options": [
                    {
                        "option": "Existe un flujo neto hacia afuera de iones de K+.",
                        "isCorrect": true
                    },
                    {
                        "option": "El potencial de membrana se encuentra despolarizado.",
                        "isCorrect": false
                    },
                    {
                        "option": "Los canales de Na+ dependientes de voltaje se encuentran abiertos.",
                        "isCorrect": false
                    }
                ],
                "image": 16
            },
            {
                "question": "En la siguiente figura se observa el registro de la actividad eléctrica de una neurona aferente sensorial primaria (registro superior) generada en respuesta a la aplicación de un estímulo sensorial (registro inferior). En relación a esta figura, responda si el registro de la actividad eléctrica corresponde al de un receptor:",
                "options": [
                    {
                        "option": " Sin adaptación.",
                        "isCorrect": false
                    },
                    {
                        "option": " Adaptación rápida.",
                        "isCorrect": true
                    },
                    {
                        "option": " Adaptación lenta.",
                        "isCorrect": false
                    }
                ],
                "image": 17
            },
            {
                "question": "La transducción de un estímulo sensorial se lleva a cabo en:",
                "options": [
                    {
                        "option": " El receptor sensorial.",
                        "isCorrect": true
                    },
                    {
                        "option": " La rama central de una motoneurona.",
                        "isCorrect": false
                    },
                    {
                        "option": " El axón de la neurona aferente sensorial primaria.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿Cuál de los siguientes actos motores se caracterizan por iniciar y finalizar de manera involuntaria?",
                "options": [
                    {
                        "option": " Rítmico.",
                        "isCorrect": false
                    },
                    {
                        "option": " Reflejo.",
                        "isCorrect": true
                    },
                    {
                        "option": " Voluntario.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "En relación a la organización de las cortezas motoras:",
                "options": [
                    {
                        "option": " Presentan organización somatotópica.",
                        "isCorrect": true
                    },
                    {
                        "option": " Envían las respuestas sensoriales a las cortezas somatosensoriales.",
                        "isCorrect": false
                    },
                    {
                        "option": " El haz cortico-espinal conecta la corteza motora primaria con el cerebelo.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Respecto al reflejo de flexión de retirada del miembro inferior:",
                "options": [
                    {
                        "option": " Su modulación depende de una vía neural polisináptica.",
                        "isCorrect": true
                    },
                    {
                        "option": " Su inicio depende de la actividad de motoneuronas de la corteza motora.",
                        "isCorrect": false
                    },
                    {
                        "option": " Se contrae al mismo tiempo el músculo flexor del miembro estimulado y del miembro opuesto.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿Cuál de los siguientes receptores responde a un aumento de la tensión muscular?",
                "options": [
                    {
                        "option": " Huso neuromuscular.",
                        "isCorrect": false
                    },
                    {
                        "option": " Corpúsculo de Pacini.",
                        "isCorrect": false
                    },
                    {
                        "option": " Órgano tendinoso de Golgi.",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "En relación a los sistemas sensoriales, es correcto afirmar que la localización de un estímulo es codificada por:",
                "options": [
                    {
                        "option": " El tipo de energía contenida por el estímulo.",
                        "isCorrect": false
                    },
                    {
                        "option": " La amplitud de los potenciales receptoriales.",
                        "isCorrect": false
                    },
                    {
                        "option": " La disposición espacial de los receptores activados dentro del órgano sensorial.",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "En relación al sistema nervioso autónomo, si usted se encuentra frente a una situación de peligro inesperada, es esperable que:",
                "options": [
                    {
                        "option": " Se promueva la digestión.",
                        "isCorrect": false
                    },
                    {
                        "option": " Se relajen los músculos bronquiales.",
                        "isCorrect": true
                    },
                    {
                        "option": " Disminuye el diámetro de la pupila.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "La sinapsis neuro-efectora de la división simpática es mediada por:",
                "options": [
                    {
                        "option": " Serotonina.",
                        "isCorrect": false
                    },
                    {
                        "option": " Acetilcolina.",
                        "isCorrect": false
                    },
                    {
                        "option": " Noradrenalina.",
                        "isCorrect": true
                    }
                ]
            }
        ]
    },
    {
        "nombre": "Tercer periodo de examen Neurobiología – 20 de febrero 2024",
        "codigo": "neurobiologia2024b",
        "area": "neuro",
        "preguntas": [
            {
                "question": "1.Analizando una muestra de tejido nervioso con microscopía electrónica, se reconoce una región con numerosas prolongaciones gliales y neuronales (incluyendo dendritas, axones mielínicos y amielínicos) y varias sinapsis. ¿Cuál de las siguientes regiones del tejido nervioso estaría siendo observada?:",
                "options": [
                    {
                        "option": " Sustancia gris.",
                        "isCorrect": false
                    },
                    {
                        "option": " Plexo coroideo.",
                        "isCorrect": false
                    },
                    {
                        "option": " Sustancia blanca.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "2.¿Cuál de los siguientes componentes neuronales NO se encuentra formando parte del neuropilo?",
                "options": [
                    {
                        "option": " Somas.",
                        "isCorrect": false
                    },
                    {
                        "option": " Axones.",
                        "isCorrect": false
                    },
                    {
                        "option": " Dendritas.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "3.Al analizar una muestra de tejido nervioso con microscopía electrónica, se identifica un soma neuronal del cual emerge una prolongación gruesa que presenta retículo endoplasmático rugoso y mitocondrias en su interior. Esta prolongación se ramifica a corta distancia del soma en ángulo agudo, generando dos prolongaciones de menor calibre que la original. ¿A qué estructura corresponde la descripción?",
                "options": [
                    {
                        "option": " Dendrita.",
                        "isCorrect": false
                    },
                    {
                        "option": " Axón mielínico.",
                        "isCorrect": false
                    },
                    {
                        "option": " Axón amielínico.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "4.Usted forma parte de un laboratorio que investiga el efecto de distintas toxinas naturales sobre el sistema nervioso. Se le ha asignado la tarea de estudiar si cierto compuesto afecta la complejidad del árbol dendrítico de las neuronas piramidales de la corteza cerebral, utilizando ratas como modelo experimental. Luego de exponer a estos animales al compuesto, debe disecar el cerebro y realizar cortes histológicos para estudiar dicha población neuronal. ¿Cuál de las siguientes técnicas histológicas sería la más adecuada para realizar el análisis mencionado?",
                "options": [
                    {
                        "option": " Técnica de Nissl.",
                        "isCorrect": false
                    },
                    {
                        "option": " Técnica de Klüver-Barrera.",
                        "isCorrect": false
                    },
                    {
                        "option": " Impregnación argéntica de Golgi.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "5.En los nervios periféricos se pueden encontrar axones mielínicos y axones amielínicos. ¿Qué estructura o elemento rodea a los axones amielínicos en un nervio periférico?",
                "options": [
                    {
                        "option": " Endoneuro.",
                        "isCorrect": false
                    },
                    {
                        "option": " Mielina no compacta.",
                        "isCorrect": false
                    },
                    {
                        "option": " Citoplasma de una célula de Schwann.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "6.Respecto a la sustancia gris de la médula espinal, ¿en cuál lámina de Rexed esperaría encontrar abundantes neuronas de soma pequeño involucradas en el procesamiento de información sensorial del dolor y temperatura?",
                "options": [
                    {
                        "option": " Lámina II.",
                        "isCorrect": false
                    },
                    {
                        "option": " Lámina VII.",
                        "isCorrect": false
                    },
                    {
                        "option": " Lámina IX.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "7.Un individuo sufrió un accidente de tránsito que lesionó la médula espinal toráxica a nivel del cordón posterior de sustancia blanca, provocando degeneración axonal en el sitio de la lesión. ¿Dónde se encuentran los somas de las principales neuronas cuyos axones fueron dañados por este tipo de lesión?",
                "options": [
                    {
                        "option": " Asta dorsal.",
                        "isCorrect": false
                    },
                    {
                        "option": " Asta ventral.",
                        "isCorrect": false
                    },
                    {
                        "option": " Ganglio espinal.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "8.En la situación descrita en la pregunta anterior, ¿cuál esperaría que pudiese ser una de las consecuencias de la lesión en el paciente?",
                "options": [
                    {
                        "option": " Parálisis en los miembros superiores.",
                        "isCorrect": false
                    },
                    {
                        "option": " Pérdida del tacto fino, discriminativo, en los miembros inferiores.",
                        "isCorrect": false
                    },
                    {
                        "option": " Pérdida del tacto fino, discriminativo, en los miembros superiores.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "9.Los glomérulos cerebelosos son complejos sinápticos de gran tamaño que involucran a los siguientes tipos celulares y estructuras:",
                "options": [
                    {
                        "option": " Fibra musgosa, célula granular, célula de Golgi.",
                        "isCorrect": false
                    },
                    {
                        "option": " Fibra musgosa, célula de Purkinje, célula granular.",
                        "isCorrect": false
                    },
                    {
                        "option": " Fibra trepadora, célula de Purkinje, célula de Golgi.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "10. ¿En qué región del cerebelo se localiza el soma de la glía de Bergmann?:",
                "options": [
                    {
                        "option": " En la sustancia blanca en el eje de cada laminilla cerebelosa.",
                        "isCorrect": false
                    },
                    {
                        "option": " En la capa de células de Purkinje de la corteza cerebelosa.",
                        "isCorrect": false
                    },
                    {
                        "option": " En la capa granular de la corteza cerebelosa.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "11. ¿Cuál de las siguientes capas de la corteza cerebral (del tipo neocórtex) juega un papel crucial en la recepción de información sensorial?:",
                "options": [
                    {
                        "option": " Capa I.",
                        "isCorrect": false
                    },
                    {
                        "option": " Capa IV.",
                        "isCorrect": false
                    },
                    {
                        "option": " Capa V.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "12. ¿En cuál región del hipocampo abundan neuronas de soma pequeño, árbol dendrítico cónico que proyecta hacia la capa molecular y axón que emerge del polo opuesto?:",
                "options": [
                    {
                        "option": " Giro dentado.",
                        "isCorrect": false
                    },
                    {
                        "option": " CA1 del Asta de Amón.",
                        "isCorrect": false
                    },
                    {
                        "option": " CA3 del Asta de Amón.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "13. La siguiente figura muestra el cambio en el potencial de membrana de una neurona en 15 ms de duración. Indique la opción correcta:",
                "options": [
                    {
                        "option": " La respuesta observada es un potencial de acción.",
                        "isCorrect": false
                    },
                    {
                        "option": " La respuesta es un potencial postsináptico inhibitorio.",
                        "isCorrect": false
                    },
                    {
                        "option": " Esta respuesta puede deberse a la entrada de Ca++ a la neurona.",
                        "isCorrect": false
                    }
                ],
                "image": 13
            },
            {
                "question": "14. La siguiente figura esquematiza dos tipos de sinapsis A y B, indique la opción correcta:",
                "options": [
                    {
                        "option": " La transmisión en A ocurre a través de receptores metabotrópicos.",
                        "isCorrect": false
                    },
                    {
                        "option": " La señal en B puede amplificarse varias veces.",
                        "isCorrect": false
                    },
                    {
                        "option": " La transmisión es más rápida en B que en A.",
                        "isCorrect": false
                    }
                ],
                "image": 14
            },
            {
                "question": "15. El hipotálamo es un área crucial en el control de:",
                "options": [
                    {
                        "option": " La propiocepción.",
                        "isCorrect": false
                    },
                    {
                        "option": " La regulación del sueño.",
                        "isCorrect": false
                    },
                    {
                        "option": " La ejecución de actos motores complejos.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "16. La sinapsis ganglionar de la división simpática es mediada principalmente por:",
                "options": [
                    {
                        "option": " Noradrenalina.",
                        "isCorrect": false
                    },
                    {
                        "option": " Serotonina.",
                        "isCorrect": false
                    },
                    {
                        "option": " Acetilcolina.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "17. En relación a la hiperpolarización neuronal:",
                "options": [
                    {
                        "option": " Se genera por entrada neta de cationes al interior de la neurona.",
                        "isCorrect": false
                    },
                    {
                        "option": " Aumenta la probabilidad de que se genera un potencial de acción.",
                        "isCorrect": false
                    },
                    {
                        "option": " Representa un aumento en la diferencia del potencial de membrana intra y extracelular.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "18. En la siguiente figura se representa el cambio en el potencial de membrana durante un potencial de acción. En relación a esta gráfica, es correcto afirmar que:",
                "options": [
                    {
                        "option": " En el pico del registro, los canales de Na+ están activos.",
                        "isCorrect": false
                    },
                    {
                        "option": " Durante la fase ascendente, hay una entrada neta de Cl-.",
                        "isCorrect": false
                    },
                    {
                        "option": " Durante la fase descendente, hay una salida neta de K+.",
                        "isCorrect": false
                    }
                ],
                "image": 18
            },
            {
                "question": "19. Supongamos que usted registra la actividad eléctrica de una neurona aferente primaria que presenta adaptación rápida, que se encuentra censando información de un estímulo de amplitud constante. Usted esperaría registrar la actividad neuronal:",
                "options": [
                    {
                        "option": " Solo al inicio y al final del estímulo.",
                        "isCorrect": false
                    },
                    {
                        "option": " Mientras el estímulo es constante.",
                        "isCorrect": false
                    },
                    {
                        "option": " Solo al final del estímulo.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "20. En relación al circuito neuronal que envía información nociceptiva a las cortezas somatosensoriales:",
                "options": [
                    {
                        "option": " Censa información de los órganos tendinosos de Golgi.",
                        "isCorrect": false
                    },
                    {
                        "option": " Se define como un circuito contralateral.",
                        "isCorrect": false
                    },
                    {
                        "option": " No pasa por el tálamo.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "21. En relación a los actos motores reflejos:",
                "options": [
                    {
                        "option": " Su mantenimiento es voluntario.",
                        "isCorrect": false
                    },
                    {
                        "option": " Se inician de manera involuntaria.",
                        "isCorrect": false
                    },
                    {
                        "option": " Inician y finalizan de forma voluntaria.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "22. En una neurona unipolar que recibe una sinapsis axo-dendritca, es correcto afirmar que el polo de salida está representado por:",
                "options": [
                    {
                        "option": " El axón.",
                        "isCorrect": false
                    },
                    {
                        "option": " El soma.",
                        "isCorrect": false
                    },
                    {
                        "option": " Las dendritas.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "23. Cuando se produce el reflejo de retirada del miembro frente a un estímulo nocivo:",
                "options": [
                    {
                        "option": " Se contrae al mismo tiempo el músculo flexor del miembro estimulado y no estimulado.",
                        "isCorrect": false
                    },
                    {
                        "option": " Involucra una vía neuronal polisináptica.",
                        "isCorrect": false
                    },
                    {
                        "option": " Es un movimiento de ejecución lenta.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "24. El huso neuromuscular censa cambios en:",
                "options": [
                    {
                        "option": " La tensión de la fibra muscular.",
                        "isCorrect": false
                    },
                    {
                        "option": " La longitud de la fibra muscular.",
                        "isCorrect": false
                    },
                    {
                        "option": " La temperatura de la fibra muscular.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "25. En relación a las cortezas somatosensoriales:",
                "options": [
                    {
                        "option": " Cuanto mayor sea el número de receptores que inerven una región, menor será la repre- sentación de esta región en la corteza.",
                        "isCorrect": false
                    },
                    {
                        "option": " La información nociceptiva alcanza la corteza sin pasar por el tálamo.",
                        "isCorrect": false
                    },
                    {
                        "option": " Presenta somatotopía.",
                        "isCorrect": false
                    }
                ]
            }
        ]
    },
    {
        "nombre": "Tercer Periodo Examen Digestivo, renal y endócrino – 14 de febrero 2023",
        "codigo": "dre2023",
        "area": "dre",
        "preguntas": [
            {
                "question": "La lengua presenta…",
                "options": [
                    {
                        "option": " papilas linguales en su cara ventral",
                        "isCorrect": false
                    },
                    {
                        "option": " una capa muscular de la mucosa formada por fibras musculares lisas",
                        "isCorrect": false
                    },
                    {
                        "option": " fibras musculares estriadas esqueléticas orientadas en múltiples direcciones",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "Indique en cuál de los órganos mencionados la pared carece de submucosa:",
                "options": [
                    {
                        "option": " duodeno",
                        "isCorrect": false
                    },
                    {
                        "option": " estómago",
                        "isCorrect": false
                    },
                    {
                        "option": " vesícula biliar",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "El sector proximal del esófago se puede distinguir histológicamente por presentar:",
                "options": [
                    {
                        "option": " una serosa como túnica externa",
                        "isCorrect": false
                    },
                    {
                        "option": " músculo estriado esquelético en su túnica muscular",
                        "isCorrect": true
                    },
                    {
                        "option": " una transición de epitelio estratificado plano a cilíndrico simple en su mucosa",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "En un preparado de estómago coloreado con hematoxilina y eosina se distingue en la mucosa, una célula redondeada, más grande que sus vecinas, con abundante citoplasma eosinófilo y núcleo redondeado de ubicación central. El tipo celular descrito corresponde a:",
                "options": [
                    {
                        "option": " una célula mucosa",
                        "isCorrect": false
                    },
                    {
                        "option": " una célula parietal",
                        "isCorrect": true
                    },
                    {
                        "option": " una célula principal",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿Cuáles son las células más abundantes en el epitelio del intestino delgado?",
                "options": [
                    {
                        "option": " células absortivas (enterocitos",
                        "isCorrect": true
                    },
                    {
                        "option": " células caliciformes",
                        "isCorrect": false
                    },
                    {
                        "option": " células de Paneth",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿Cuál de los siguientes elementos se localizan en los espacios porta del hígado?",
                "options": [
                    {
                        "option": " cordones de hepatocitos",
                        "isCorrect": false
                    },
                    {
                        "option": " sinusoides hepáticos",
                        "isCorrect": false
                    },
                    {
                        "option": " conductos biliares",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "En el corpúsculo renal ¿cuál de las siguientes células se encuentra en contacto con la lámina basal de los capilares glomerulares?",
                "options": [
                    {
                        "option": " podocitos",
                        "isCorrect": true
                    },
                    {
                        "option": " células mesangiales",
                        "isCorrect": false
                    },
                    {
                        "option": " células yuxtaglomerulares",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Seleccione cuál de los siguientes túbulos renales se encuentra tanto en la corteza como en la médula del riñón:",
                "options": [
                    {
                        "option": " contorneados proximales",
                        "isCorrect": false
                    },
                    {
                        "option": " intermedios (delgados",
                        "isCorrect": false
                    },
                    {
                        "option": " colectores",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "¿En cuál de los siguientes casos encontramos un urotelio con mayor número de capas celulares?",
                "options": [
                    {
                        "option": " en la vejiga vacía",
                        "isCorrect": true
                    },
                    {
                        "option": " en la vejiga llena",
                        "isCorrect": false
                    },
                    {
                        "option": " en el uréter",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "En la adenohipófisis, las células secretoras:",
                "options": [
                    {
                        "option": " se disponen formando alvéolos",
                        "isCorrect": false
                    },
                    {
                        "option": " almacenan su producto de secreción en gránulos",
                        "isCorrect": true
                    },
                    {
                        "option": " se caracterizan por su abundante retículo endoplásmico liso",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Las células cromafines de la médula suprarrenal almacenan noradrenalina y adrenalina en:",
                "options": [
                    {
                        "option": " lisosomas de contenido heterogéneo",
                        "isCorrect": false
                    },
                    {
                        "option": " gránulos electrondensos",
                        "isCorrect": true
                    },
                    {
                        "option": " inclusiones lipídicas",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "En un preparado coloreado con hematoxilina y eosina se observa una glándula anexa al tubo digestivo. Su mayor parte es basófila, formada por acinos serosos y sus conductos. Se distinguen, además, algunos sectores eosinófilos dispersos, compuestos por cordones y acúmulos de células de varios tipos asociadas con abundantes capilares sanguíneos. Dos productos de secreción de la glándula descrita son:",
                "options": [
                    {
                        "option": " cortisol y aldosterona",
                        "isCorrect": false
                    },
                    {
                        "option": " bilirrubina y sales biliares",
                        "isCorrect": false
                    },
                    {
                        "option": " insulina y enzimas hidrolíticas",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "Con respecto a la prolactina en condiciones de no lactancia:",
                "options": [
                    {
                        "option": " La dopamina inhibe su síntesis y liberación.",
                        "isCorrect": true
                    },
                    {
                        "option": " Es regulada por un eje de retroalimentación positiva.",
                        "isCorrect": false
                    },
                    {
                        "option": " Su síntesis es principalmente estimulada por el hipotálamo.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "En el siguiente esquema se representa un eje endócrino genérico. Indique la opción correcta:",
                "options": [
                    {
                        "option": " Si la hormona B es la TSH, puede estimular a la hormona A.",
                        "isCorrect": false
                    },
                    {
                        "option": " Si la hormona C es el cortisol, B es la hormona de crecimiento.",
                        "isCorrect": false
                    },
                    {
                        "option": " Si la hormona C es el estradiol, puede estimular o inhibir a la hormona B.",
                        "isCorrect": true
                    }
                ],
                "image": 14
            },
            {
                "question": "Como parte de la respuesta fisiológica a un aumento de la calcemia, aumentará la liberación de la siguiente hormona:",
                "options": [
                    {
                        "option": " Parathormona.",
                        "isCorrect": false
                    },
                    {
                        "option": " Calcitonina.",
                        "isCorrect": true
                    },
                    {
                        "option": " Calcitriol.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Niveles altos de hormonas tiroideas pueden generar:",
                "options": [
                    {
                        "option": " Un aumento de los niveles de TSH.",
                        "isCorrect": false
                    },
                    {
                        "option": " Un aumento de la frecuencia cardíaca.",
                        "isCorrect": true
                    },
                    {
                        "option": " Una disminución de la tasa metabólica basal.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Con respecto a los procesos que suceden a lo largo del túbulo en las nefronas:",
                "options": [
                    {
                        "option": " La rama descendente del asa de Henle es impermeable al agua.",
                        "isCorrect": false
                    },
                    {
                        "option": " Al salir del túbulo proximal, el líquido tubular es hiperosmótico con respecto al plasma.",
                        "isCorrect": false
                    },
                    {
                        "option": " A lo largo de la rama descendente del asa de Henle el líquido tubular aumenta su osmolalidad.",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "Con respecto a los procesos que suceden a lo largo del túbulo en las nefronas:",
                "options": [
                    {
                        "option": " Las proteínas se reabsorben en su mayoría en el túbulo colector.",
                        "isCorrect": false
                    },
                    {
                        "option": " La carga de glucosa excretada en la orina es menor que la de urea.",
                        "isCorrect": true
                    },
                    {
                        "option": " La carga de aminoácidos excretada en la orina es mayor que la de urea.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Frente a un aumento en la osmolaridad plasmática:",
                "options": [
                    {
                        "option": " Disminuye la secreción de ADH.",
                        "isCorrect": false
                    },
                    {
                        "option": " Disminuye la secreción de renina.",
                        "isCorrect": true
                    },
                    {
                        "option": " Disminuye la reabsorción de H20 a nivel de túbulo colector.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Un aumento de la volemia mayor al 10% desencadena:",
                "options": [
                    {
                        "option": " Una disminución de la secreción de ADH.",
                        "isCorrect": true
                    },
                    {
                        "option": " Un aumento de la secreción de renina.",
                        "isCorrect": false
                    },
                    {
                        "option": " Un aumento en la reabsorción de H20.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Si el clearance de una sustancia es igual a cero, es correcto afirmar que dicha sustancia:",
                "options": [
                    {
                        "option": " Tendrá niveles detectables en la orina.",
                        "isCorrect": false
                    },
                    {
                        "option": " Se reabsorbe un 100%.",
                        "isCorrect": true
                    },
                    {
                        "option": " Solo se secreta.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Con respecto a las fuerzas involucradas en el mecanismo de ultrafiltración glomerular:",
                "options": [
                    {
                        "option": " Un aumento en la presión oncótica en el capilar glomerular favorece la filtración.",
                        "isCorrect": false
                    },
                    {
                        "option": " Un aumento en la presión oncótica en la cápsula de Bowman se opone a la filtración.",
                        "isCorrect": false
                    },
                    {
                        "option": " Una disminución de la presión hidrostática en el capilar glomerular disminuye la filtración.",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "La principal función del peristaltismo en el aparato digestivo es:",
                "options": [
                    {
                        "option": " Triturar el quimo.",
                        "isCorrect": false
                    },
                    {
                        "option": " Desplazar el contenido.",
                        "isCorrect": true
                    },
                    {
                        "option": " Favorecer la absorción de nutrientes en el esófago.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "El bloqueo de la bomba de protones en una célula parietal del estómago generará, el efecto será el siguiente:",
                "options": [
                    {
                        "option": " Menor producción de pepsinógeno.",
                        "isCorrect": false
                    },
                    {
                        "option": " Disminución de la secreción de HCl.",
                        "isCorrect": true
                    },
                    {
                        "option": " Disminución de la producción de gastrina.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "En la siguiente figura se observa la concentración de glucosa en sangre en un individuo luego de ingerir una carga de glucosa. ¿En qué tiempo esperaría observar un pico máximo de la secreción de insulina?",
                "options": [
                    {
                        "option": " Tiempo = 20 min",
                        "isCorrect": false
                    },
                    {
                        "option": " Tiempo = 60 min",
                        "isCorrect": true
                    },
                    {
                        "option": " Tiempo = 180 min",
                        "isCorrect": false
                    }
                ],
                "image": 25
            },
            {
                "question": "Señale cuál de los siguientes fenómenos se activa por acción de la insulina en el músculo:",
                "options": [
                    {
                        "option": " Inhibición de las enzimas clave de la glucólisis",
                        "isCorrect": false
                    },
                    {
                        "option": " Traslocación de receptores GLUT4 en la membrana para aumentar la captación de glucosa.",
                        "isCorrect": true
                    },
                    {
                        "option": " Aumento de la velocidad de la glucógeno fosforilasa para la degradación del glucógeno muscular.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "El glucagón es una de las hormonas fundamentales en la regulación de la glicemia, señale cuál de las siguientes afirmaciones sobre esta hormona es la correcta.",
                "options": [
                    {
                        "option": " Es una hormona lipofílica y actúa regulando la expresión génica a largo plazo.",
                        "isCorrect": false
                    },
                    {
                        "option": " Se libera cuando desciende la glucosa en sangre y tiene acción hiperglicemiante.",
                        "isCorrect": true
                    },
                    {
                        "option": " El músculo es su principal tejido blanco, estimulando la degradación de glucógeno muscular y liberación de glucosa a la circulación.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿En qué contexto/s se observa un aumento de cuerpos cetónicos en sangre?",
                "options": [
                    {
                        "option": " Hiperinsulinemia",
                        "isCorrect": false
                    },
                    {
                        "option": " Estado post-prandial",
                        "isCorrect": false
                    },
                    {
                        "option": " Diabetes y ayuno prolongado",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "¿Cómo se compara la ß-oxidación y la glucólisis?",
                "options": [
                    {
                        "option": " Ambas vías generan ATP en 2 de sus reacciones.",
                        "isCorrect": false
                    },
                    {
                        "option": " Son vías reductivas que consumen NAD+, reduciéndolo a NADH.",
                        "isCorrect": false
                    },
                    {
                        "option": " La oxidación de un ácido graso rinde más energía que la oxidación de una molécula de glucosa.",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "¿Cuáles son los sustratos necesarios para la síntesis de lípidos?",
                "options": [
                    {
                        "option": " Piruvato, NADPH y NADH",
                        "isCorrect": false
                    },
                    {
                        "option": " Acetil-CoA, NADPH y ATP",
                        "isCorrect": true
                    },
                    {
                        "option": " CO2, NADPH y carnitina",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿Cuál es el rol de la lipoprotein-lipasa (LPL) en el metabolismo de lípidos?",
                "options": [
                    {
                        "option": " Está presente en la secreción pancreática y participa de la digestión de los lípidos de la dieta.",
                        "isCorrect": false
                    },
                    {
                        "option": " Es capaz es de hidrolizar los triglicéridos almacenados en los adipocitos en respuesta a la acción del glucagón.",
                        "isCorrect": false
                    },
                    {
                        "option": " Se encuentra en el endotelio capilar de tejidos como el músculo y el tejido adiposo y cataliza la hidrólisis de triglicéridos en los quilomicrones y las VLDLs.",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "¿Cómo se transfiere el colesterol de las lipoproteínas LDL a las células?",
                "options": [
                    {
                        "option": " El receptor unido a la LDL se internaliza completamente, liberando el colesterol en el interior celular.",
                        "isCorrect": true
                    },
                    {
                        "option": " El receptor cataliza la transferencia, únicamente, del colesterol desde el espacio extracelular hacia el interior de la célula.",
                        "isCorrect": false
                    },
                    {
                        "option": " El colesterol se esterifica a los fosfolípidos de la membrana y luego una colesterol- esterasa lo libera hacia el interior de la célula.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿Qué componentes principales forman la placa de ateroma?",
                "options": [
                    {
                        "option": " HDL, plaquetas y glóbulos rojos.",
                        "isCorrect": false
                    },
                    {
                        "option": " Lípidos, células espumosas, calcio.",
                        "isCorrect": true
                    },
                    {
                        "option": " Colesterol libre, quilomicrones y neutrófilos.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿Qué reacción cataliza la carbamoilfosfato sintasa mitocondrial?",
                "options": [
                    {
                        "option": " la síntesis de carbamoilfosfato a partir de amonio y bicarbonato, requiere ATP y es el primer paso del ciclo de la urea.",
                        "isCorrect": true
                    },
                    {
                        "option": " La síntesis de glutamato a partir de amonio y α-cetoglutarato, requiere ATP y es el primer paso del ciclo de la urea.",
                        "isCorrect": false
                    },
                    {
                        "option": " La síntesis de glutamina a partir de amonio y glutamato, requiere ATP y es el primer paso del ciclo de la urea.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿Cuál es el primer paso en la desaminación de la mayoría de los aminoácidos y cual es el producto de esa reacción?",
                "options": [
                    {
                        "option": " Transaminación, α- cetoácido y un nuevo aminoácido.",
                        "isCorrect": true
                    },
                    {
                        "option": " Síntesis de glutamina, glutamina y un nuevo aminoácido.",
                        "isCorrect": false
                    },
                    {
                        "option": " Desaminación oxidativa, α- cetoácido y un nuevo aminoácido.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Existen varios mecanismos para la degradación de proteínas.",
                "options": [
                    {
                        "option": " las proteínas extracelulares se degradan vía lisosoma y las proteínas intracelulares vía proteosoma.",
                        "isCorrect": true
                    },
                    {
                        "option": " las proteínas extracelulares se degradan vía proteosoma y las proteínas intracelulares vía lisosoma.",
                        "isCorrect": false
                    },
                    {
                        "option": " las proteínas extracelulares e intracelulares se degradan por proteasas extracelulares.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Los grupos aminos de los aminoácidos se transportan al hígado. ¿Cómo se capturan los grupos aminos en los tejidos extra-hepáticos?",
                "options": [
                    {
                        "option": " Mediante la síntesis de α- cetoglutarato en los tejidos extra-hepáticos y la de glutamato en el músculo",
                        "isCorrect": false
                    },
                    {
                        "option": " Mediante la síntesis de alanina en tejidos extra-hepáticos y la de glutamina en el músculo",
                        "isCorrect": false
                    },
                    {
                        "option": " Mediante la síntesis de glutamina en tejidos extra-hepáticos y la de alanina en el músculo",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "La obesidad central es clave para el desarrollo del síndrome metabólico. Esto se debe a:",
                "options": [
                    {
                        "option": " La disminución de los ácidos grasos en la circulación genera resistencia a la insulina en los tejidos.",
                        "isCorrect": false
                    },
                    {
                        "option": " El aumento de los ácidos grasos en la circulación genera resistencia a la insulina en los tejidos.",
                        "isCorrect": true
                    },
                    {
                        "option": " El aumento de los ácidos grasos en la circulación genera sensibilidad a la insulina en los tejidos.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿Cuál de los siguientes parámetros está en la definición del síndrome metabólico?",
                "options": [
                    {
                        "option": " Niveles elevados de HDL y de LDL bajos",
                        "isCorrect": false
                    },
                    {
                        "option": " Niveles bajos de HDL y de LDL elevados",
                        "isCorrect": true
                    },
                    {
                        "option": " Niveles bajos de triglicéridos y de HDL",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Un estudiante está nervioso por tener que rendir un examen importante y experimenta una crisis de ansiedad, hiperventilando sostenidamente durante una hora, ¿qué trastorno podría sufrir?",
                "options": [
                    {
                        "option": " Alcalosis metabólica.",
                        "isCorrect": false
                    },
                    {
                        "option": " Acidosis respiratoria.",
                        "isCorrect": false
                    },
                    {
                        "option": " Alcalosis respiratoria.",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "Se encuentra a un paciente que no responde a los estímulos. Se le realiza una gasometría arterial y presenta los siguientes resultados: pH 7.12, pCO2 90 mmHg y HCO3- 22 mEq/L (valores normales pH=7.4, pCO2=35-40 mmHg, HCO3-=22-24 mEq/l) . El médico interpreta que presenta:",
                "options": [
                    {
                        "option": " Acidosis respiratoria compensada",
                        "isCorrect": false
                    },
                    {
                        "option": " Acidosis metabólica no compensada",
                        "isCorrect": false
                    },
                    {
                        "option": " Acidosis respiratoria no compensada",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "Los sistemas amortiguadores en el organismo son vitales para mantener el equilibrio ácido base. Sobre los distintos sistemas amortiguadores del organismo es correcto afirmar:",
                "options": [
                    {
                        "option": " El buffer fosfato (H2PO4-/HPO42- + H+",
                        "isCorrect": false
                    },
                    {
                        "option": " El buffer fosfato (H2PO4-/HPO42- + H+",
                        "isCorrect": true
                    },
                    {
                        "option": " El buffer bicarbonato (H2CO3/HCO3- + H+",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Los glucidos son la única fuente para la obtención de energía en algunos tejidos. Indique la opción correcta acerca de su absorción de la dieta:",
                "options": [
                    {
                        "option": " Se absorben a nivel intestinal como di- y trisacáridos",
                        "isCorrect": false
                    },
                    {
                        "option": " Se absorben a nivel intestinal como monosacáridos",
                        "isCorrect": true
                    },
                    {
                        "option": " Se absorben a nivel intestinal como polisacáridos",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Acerca de la digestión final de los glúcidos:",
                "options": [
                    {
                        "option": " Se da por la amilasa salival presente en la luz intestinal",
                        "isCorrect": false
                    },
                    {
                        "option": " Se da por la amilasa pancreática en la membrana del enterocito",
                        "isCorrect": false
                    },
                    {
                        "option": " Se da por las disacaridasas presentes en la membrana del enterocito",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "El transporte de la glucosa desde la luz intestinal al citosol del enterocito está dado por:",
                "options": [
                    {
                        "option": " Co transporte con Na+ y difusión simple a traves por el transportador GLUT 1",
                        "isCorrect": false
                    },
                    {
                        "option": " Co transporte con Mg2+ y transporte facilitado por el transportador GLUT 2",
                        "isCorrect": false
                    },
                    {
                        "option": " Co transporte con Na+ y transporte activo secundario por el transportador SGLT1",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "Acerca de la absorción y transporte de los ácidos grasos provenientes de la dieta:",
                "options": [
                    {
                        "option": " Se absorben por cotransporte con glicerol y se transportan en la albúmina",
                        "isCorrect": false
                    },
                    {
                        "option": " Se absorben por difusión simple y se transportan a la circulación en los quilomicrones",
                        "isCorrect": true
                    },
                    {
                        "option": " Se absorben a traves de transportadores específicos y circulan de forma lbre en la circulación",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Si tiene que rehidratar a una persona, ¿por cual de las siguientes soluciones optaría?",
                "options": [
                    {
                        "option": " Solución de almidón en agua conteniendo sales de Ca2+",
                        "isCorrect": false
                    },
                    {
                        "option": " Solución de fructosa en agua conteniendo sales de Li+",
                        "isCorrect": false
                    },
                    {
                        "option": " Solución de glucosa en agua conteniedo sales de Na+",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "Acerca de los sistemas de señalización por hormonas hidrofílicas",
                "options": [
                    {
                        "option": " Se unen a receptores a nivel intracelular activando la transcripción de genes diana",
                        "isCorrect": false
                    },
                    {
                        "option": " EL complejo hormona-receptor circula libre en el plasma y activa la translocación de res en la célula diana",
                        "isCorrect": false
                    },
                    {
                        "option": " Se unen a receptores específicos localizados a nivel de la membrana plasmática activando a nivel intracelular diferentes cascadas de quinasas",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "Acerca de las vías metabóicas y su regulación",
                "options": [
                    {
                        "option": " Cuando la vía anabólica de un compuesto está activa su vía catabólica se inhibe",
                        "isCorrect": true
                    },
                    {
                        "option": " Las vías anabólicas y catabólicas de un mismo compuesto se regulan de forma independiente estando activas siempre",
                        "isCorrect": false
                    },
                    {
                        "option": " Las vías catabólicas y anabólicas de un mismo compuesto no requieren ser reguladas ya que se producen siempre en compartimentos celulares diferentes",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "El hígado es responsable de mantener la glicemia en plasma. Sobre el perfil metabólico del hígado en esta función es correcto afirmar:",
                "options": [
                    {
                        "option": " En ayuno, oxida cuerpos cetónicos y utiliza los ácidos grasos para la síntesis de glucógeno",
                        "isCorrect": false
                    },
                    {
                        "option": " En ayuno, oxida fructosa para la obtención de energía utilizando el Acetil-CoA para sintetizar glucosa",
                        "isCorrect": false
                    },
                    {
                        "option": " En ayuno, oxida ácidos grasos para obtener energía y sintetiza glucosa a partir de glucógeno, glicerol y aminoácidos",
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
    pruebasList.innerHTML = '<b>Pruebas disponibles:</b><br> ' + tests.map(t => `<button class="pruebaBtn" codigo='${t.codigo}'">${t.nombre} - ${t.preguntas.length}</button>`).join(' ');
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
    const isRandom = document.getElementById('randomOrder').checked;
    if (isRandom) {
        q.options = q.options.sort(() => Math.random() - 0.5);
    }
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