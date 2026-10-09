// Aion 2 Global S1 — Tableros Daevanion del Asesino (v8)
// Tableros reales del juego y ruta JcE de couga54 (https://couga54.github.io/aion2-guides/en/assassin/#daevanion),
// con los textos del cliente en español de metabot.gg/es_ES. Los datos los genera tools\extraer-tableros.ps1;
// el orden de clics se calcula en dvOrder().
// nodos n: [fila, columna, tipo (S inicio, G atributo, P pasiva, A activa, N especial), coste, en ruta, texto, id de habilidad]
// líneas l: [x1, y1, x2, y2, en ruta]
const DAEVANION = [{"id":41,"nombre":"Nezekan","nivel":12,"w":11,"h":11,"n":[[0,0,"N",4,1,"Velocidad de Hechizo +1,5%",0],[0,1,"G",1,1,"Ataque Adicional +3",0],[0,2,"G",1,1,"Resistencia Crítica +5",0],[0,4,"P",2,0,"Explotar debilidades +1",13720000],[0,5,"G",1,0,"Resistencia Crítica +5",0],[0,6,"A",3,0,"Caída sombría +1",13220000],[0,8,"P",2,0,"Aplicación de veneno +1",13730000],[0,9,"G",1,0,"Crítico +5",0],[0,10,"N",4,1,"Reducción de Tiempo de Enfriamiento +1,5%",0],[1,0,"G",1,0,"Crítico +5",0],[1,2,"A",3,1,"Estocada al corazón +1",13350000],[1,3,"G",1,1,"Puntos de Maná +50",0],[1,4,"G",1,1,"Defensa Adicional +30",0],[1,6,"G",1,0,"Puntos de Maná +50",0],[1,7,"G",1,0,"Defensa Adicional +30",0],[1,8,"G",1,0,"Resistencia Crítica +5",0],[1,10,"G",1,1,"Puntos de Maná +50",0],[2,0,"P",2,0,"Maximización de sexto sentido +1",13710000],[2,1,"G",1,0,"Defensa Adicional +30",0],[2,2,"G",1,0,"Puntos de Vida +100",0],[2,4,"G",1,1,"Crítico +5",0],[2,5,"A",3,0,"Ataque sigiloso +1",13070000],[2,6,"G",1,0,"Puntos de Vida +100",0],[2,8,"A",3,0,"Corte de destello +1",13050000],[2,9,"G",1,0,"Puntos de Vida +100",0],[2,10,"P",2,1,"Impacto trasero +1",13740000],[3,1,"G",1,0,"Puntos de Vida +100",0],[3,4,"G",1,1,"Resistencia Crítica +5",0],[3,6,"G",1,0,"Defensa Adicional +30",0],[3,8,"G",1,0,"Ataque Adicional +3",0],[3,10,"G",1,1,"Defensa Adicional +30",0],[4,0,"G",1,0,"Puntos de Maná +50",0],[4,1,"G",1,0,"Ataque Adicional +3",0],[4,2,"A",3,0,"Rugido bestial +1",13100000],[4,3,"G",1,0,"Puntos de Vida +100",0],[4,4,"G",1,1,"Puntos de Maná +50",0],[4,5,"G",1,1,"Ataque Adicional +3",0],[4,6,"G",1,0,"Resistencia Crítica +5",0],[4,7,"P",2,0,"Postura de agresión +1",13750000],[4,8,"G",1,0,"Puntos de Maná +50",0],[4,9,"G",1,0,"Crítico +5",0],[4,10,"G",1,1,"Resistencia Crítica +5",0],[5,0,"A",3,0,"Eliminación de impacto +1",13260000],[5,3,"G",1,0,"Defensa Adicional +30",0],[5,5,"S",0,1,"Inicio",0],[5,7,"G",1,0,"Ataque Adicional +3",0],[5,10,"A",3,1,"Desenfreno de tormenta +1",13340000],[6,0,"G",1,0,"Crítico +5",0],[6,1,"G",1,0,"Resistencia Crítica +5",0],[6,2,"G",1,0,"Puntos de Vida +100",0],[6,3,"P",2,0,"Impacto trasero +1",13740000],[6,4,"G",1,0,"Crítico +5",0],[6,5,"G",1,1,"Defensa Adicional +30",0],[6,6,"G",1,1,"Puntos de Vida +100",0],[6,7,"G",1,1,"Puntos de Maná +50",0],[6,8,"A",3,1,"Corte rápido +1",13010000],[6,9,"G",1,1,"Defensa Adicional +30",0],[6,10,"G",1,1,"Puntos de Vida +100",0],[7,0,"G",1,0,"Ataque Adicional +3",0],[7,2,"G",1,0,"Defensa Adicional +30",0],[7,4,"G",1,0,"Ataque Adicional +3",0],[7,6,"G",1,1,"Crítico +5",0],[7,9,"G",1,1,"Puntos de Maná +50",0],[8,0,"P",2,0,"Postura de agresión +1",13750000],[8,1,"G",1,0,"Puntos de Maná +50",0],[8,2,"A",3,0,"Infiltración +1",13360000],[8,4,"G",1,1,"Puntos de Maná +50",0],[8,5,"A",3,1,"Emboscada +1",13060000],[8,6,"G",1,1,"Resistencia Crítica +5",0],[8,8,"G",1,0,"Puntos de Maná +50",0],[8,9,"G",1,1,"Ataque Adicional +3",0],[8,10,"P",2,1,"Explotar debilidades +1",13720000],[9,0,"G",1,0,"Puntos de Vida +100",0],[9,2,"G",1,1,"Crítico +5",0],[9,3,"G",1,1,"Ataque Adicional +3",0],[9,4,"G",1,1,"Puntos de Vida +100",0],[9,6,"G",1,0,"Ataque Adicional +3",0],[9,7,"G",1,0,"Puntos de Vida +100",0],[9,8,"A",3,0,"Corte torbellino +1",13210000],[9,10,"G",1,1,"Resistencia Crítica +5",0],[10,0,"N",4,1,"Reducción de Tiempo de Enfriamiento +1,5%",0],[10,1,"G",1,1,"Resistencia Crítica +5",0],[10,2,"P",2,1,"Aplicación de veneno +1",13730000],[10,4,"A",3,1,"Explosión de insignia +1",13130000],[10,5,"G",1,0,"Crítico +5",0],[10,6,"P",2,0,"Maximización de sexto sentido +1",13710000],[10,8,"G",1,0,"Crítico +5",0],[10,9,"G",1,0,"Defensa Adicional +30",0],[10,10,"N",4,1,"Velocidad de Hechizo +1,5%",0]],"l":[[0,0,1,0,1],[0,0,0,1,0],[1,0,2,0,1],[2,0,2,1,1],[4,0,5,0,0],[4,0,4,1,0],[5,0,6,0,0],[6,0,6,1,0],[8,0,9,0,0],[8,0,8,1,0],[9,0,10,0,0],[10,0,10,1,1],[0,1,0,2,0],[2,1,3,1,1],[2,1,2,2,0],[3,1,4,1,1],[4,1,4,2,1],[6,1,7,1,0],[6,1,6,2,0],[7,1,8,1,0],[8,1,8,2,0],[10,1,10,2,1],[0,2,1,2,0],[1,2,2,2,0],[1,2,1,3,0],[4,2,5,2,0],[4,2,4,3,1],[5,2,6,2,0],[6,2,6,3,0],[8,2,9,2,0],[8,2,8,3,0],[9,2,10,2,0],[10,2,10,3,1],[1,3,1,4,0],[4,3,4,4,1],[6,3,6,4,0],[8,3,8,4,0],[10,3,10,4,1],[0,4,1,4,0],[0,4,0,5,0],[1,4,2,4,0],[2,4,3,4,0],[3,4,4,4,0],[3,4,3,5,0],[4,4,5,4,1],[5,4,6,4,0],[5,4,5,5,1],[6,4,7,4,0],[7,4,8,4,0],[7,4,7,5,0],[8,4,9,4,0],[9,4,10,4,0],[10,4,10,5,1],[0,5,0,6,0],[3,5,3,6,0],[5,5,5,6,1],[7,5,7,6,0],[10,5,10,6,1],[0,6,1,6,0],[0,6,0,7,0],[1,6,2,6,0],[2,6,3,6,0],[2,6,2,7,0],[3,6,4,6,0],[4,6,5,6,0],[4,6,4,7,0],[5,6,6,6,1],[6,6,7,6,1],[6,6,6,7,1],[7,6,8,6,1],[8,6,9,6,1],[9,6,10,6,1],[9,6,9,7,1],[0,7,0,8,0],[2,7,2,8,0],[4,7,4,8,0],[6,7,6,8,1],[9,7,9,8,1],[0,8,1,8,0],[0,8,0,9,0],[1,8,2,8,0],[2,8,2,9,0],[4,8,5,8,1],[4,8,4,9,1],[5,8,6,8,1],[6,8,6,9,0],[8,8,9,8,0],[8,8,8,9,0],[9,8,10,8,1],[10,8,10,9,1],[0,9,0,10,0],[2,9,3,9,1],[2,9,2,10,1],[3,9,4,9,1],[4,9,4,10,1],[6,9,7,9,0],[6,9,6,10,0],[7,9,8,9,0],[8,9,8,10,0],[10,9,10,10,1],[0,10,1,10,1],[1,10,2,10,1],[4,10,5,10,0],[5,10,6,10,0],[8,10,9,10,0],[9,10,10,10,0]]},{"id":42,"nombre":"Zikel","nivel":20,"w":11,"h":11,"n":[[0,0,"N",4,1,"Tolerancia a Daño +1,5%",0],[0,1,"G",1,0,"Crítico +5",0],[0,2,"G",1,0,"Puntos de Maná +50",0],[0,3,"G",1,0,"Resistencia Crítica +5",0],[0,4,"A",3,1,"Desenfreno de tormenta +1",13340000],[0,5,"G",1,1,"Defensa Adicional +30",0],[0,6,"P",2,1,"Acierto de impacto +1",13760000],[0,7,"G",1,1,"Ataque Adicional +3",0],[0,8,"A",3,1,"Explosión de insignia +1",13130000],[0,9,"G",1,1,"Defensa Adicional +30",0],[0,10,"N",4,1,"Amplificación de Daño +1,5%",0],[1,0,"G",1,1,"Ataque Adicional +3",0],[1,2,"P",2,0,"Determinación +1",13800000],[1,4,"G",1,1,"Puntos de Vida +100",0],[1,7,"G",1,0,"Puntos de Maná +50",0],[1,10,"G",1,0,"Crítico +5",0],[2,0,"A",3,1,"Corte rápido +1",13010000],[2,1,"G",1,1,"Puntos de Vida +100",0],[2,2,"G",1,1,"Defensa Adicional +30",0],[2,4,"G",1,1,"Ataque Adicional +3",0],[2,5,"G",1,0,"Puntos de Maná +50",0],[2,6,"A",3,0,"Ataque sigiloso +1",13070000],[2,7,"G",1,0,"Resistencia Crítica +5",0],[2,8,"G",1,0,"Puntos de Maná +50",0],[2,9,"P",2,0,"Pacto de resurrección +1",13790000],[2,10,"G",1,0,"Ataque Adicional +3",0],[3,0,"G",1,0,"Crítico +5",0],[3,2,"G",1,1,"Puntos de Maná +50",0],[3,3,"G",1,1,"Resistencia Crítica +5",0],[3,4,"P",2,1,"Grieta defensiva +1",13780000],[3,6,"G",1,0,"Crítico +5",0],[3,8,"G",1,0,"Crítico +5",0],[3,10,"G",1,0,"Resistencia Crítica +5",0],[4,0,"G",1,0,"Defensa Adicional +30",0],[4,1,"G",1,0,"Puntos de Vida +100",0],[4,2,"A",3,1,"Emboscada +1",13060000],[4,4,"G",1,1,"Crítico +5",0],[4,6,"G",1,0,"Puntos de Maná +50",0],[4,7,"P",2,0,"Postura de emboscada +1",13770000],[4,8,"G",1,0,"Puntos de Vida +100",0],[4,9,"G",1,0,"Ataque Adicional +3",0],[4,10,"A",3,0,"Rugido bestial +1",13100000],[5,1,"G",1,0,"Ataque Adicional +3",0],[5,4,"G",1,1,"Defensa Adicional +30",0],[5,5,"S",0,1,"Inicio",0],[5,6,"G",1,0,"Ataque Adicional +3",0],[5,9,"G",1,0,"Defensa Adicional +30",0],[6,0,"A",3,0,"Corte de destello +1",13050000],[6,1,"G",1,0,"Defensa Adicional +30",0],[6,2,"G",1,0,"Puntos de Maná +50",0],[6,3,"P",2,0,"Pacto de resurrección +1",13790000],[6,4,"G",1,1,"Puntos de Vida +100",0],[6,6,"G",1,0,"Resistencia Crítica +5",0],[6,8,"A",3,0,"Caída sombría +1",13220000],[6,9,"G",1,0,"Puntos de Maná +50",0],[6,10,"G",1,0,"Ataque Adicional +3",0],[7,0,"G",1,0,"Crítico +5",0],[7,2,"G",1,0,"Resistencia Crítica +5",0],[7,4,"G",1,1,"Resistencia Crítica +5",0],[7,6,"P",2,0,"Determinación +1",13800000],[7,7,"G",1,0,"Crítico +5",0],[7,8,"G",1,0,"Puntos de Vida +100",0],[7,10,"G",1,0,"Resistencia Crítica +5",0],[8,0,"G",1,0,"Defensa Adicional +30",0],[8,1,"P",2,0,"Postura de emboscada +1",13770000],[8,2,"G",1,0,"Puntos de Vida +100",0],[8,3,"G",1,1,"Crítico +5",0],[8,4,"A",3,1,"Infiltración +1",13360000],[8,5,"G",1,1,"Puntos de Vida +100",0],[8,6,"G",1,1,"Defensa Adicional +30",0],[8,8,"G",1,0,"Ataque Adicional +3",0],[8,9,"G",1,0,"Puntos de Maná +50",0],[8,10,"A",3,0,"Corte torbellino +1",13210000],[9,0,"G",1,0,"Resistencia Crítica +5",0],[9,3,"G",1,1,"Puntos de Maná +50",0],[9,6,"G",1,1,"Puntos de Maná +50",0],[9,8,"P",2,0,"Grieta defensiva +1",13780000],[9,10,"G",1,0,"Defensa Adicional +30",0],[10,0,"N",4,1,"Amplificación de Daño +1,5%",0],[10,1,"G",1,1,"Ataque Adicional +3",0],[10,2,"A",3,1,"Estocada al corazón +1",13350000],[10,3,"G",1,1,"Defensa Adicional +30",0],[10,4,"P",2,0,"Acierto de impacto +1",13760000],[10,5,"G",1,0,"Ataque Adicional +3",0],[10,6,"A",3,1,"Eliminación de impacto +1",13260000],[10,7,"G",1,1,"Crítico +5",0],[10,8,"G",1,1,"Puntos de Vida +100",0],[10,9,"G",1,1,"Resistencia Crítica +5",0],[10,10,"N",4,1,"Tolerancia a Daño +1,5%",0]],"l":[[0,0,1,0,0],[0,0,0,1,1],[1,0,2,0,0],[2,0,3,0,0],[2,0,2,1,0],[3,0,4,0,0],[4,0,5,0,1],[4,0,4,1,1],[5,0,6,0,1],[6,0,7,0,1],[7,0,8,0,1],[7,0,7,1,0],[8,0,9,0,1],[9,0,10,0,1],[10,0,10,1,0],[0,1,0,2,1],[2,1,2,2,0],[4,1,4,2,1],[7,1,7,2,0],[10,1,10,2,0],[0,2,1,2,1],[0,2,0,3,0],[1,2,2,2,1],[2,2,2,3,1],[4,2,5,2,0],[4,2,4,3,1],[5,2,6,2,0],[6,2,7,2,0],[6,2,6,3,0],[7,2,8,2,0],[8,2,9,2,0],[8,2,8,3,0],[9,2,10,2,0],[10,2,10,3,0],[0,3,0,4,0],[2,3,3,3,1],[2,3,2,4,1],[3,3,4,3,1],[4,3,4,4,1],[6,3,6,4,0],[8,3,8,4,0],[10,3,10,4,0],[0,4,1,4,0],[1,4,2,4,0],[1,4,1,5,0],[4,4,4,5,1],[6,4,7,4,0],[6,4,6,5,0],[7,4,8,4,0],[8,4,9,4,0],[9,4,10,4,0],[9,4,9,5,0],[1,5,1,6,0],[4,5,5,5,1],[4,5,4,6,1],[5,5,6,5,0],[6,5,6,6,0],[9,5,9,6,0],[0,6,1,6,0],[0,6,0,7,0],[1,6,2,6,0],[2,6,3,6,0],[2,6,2,7,0],[3,6,4,6,0],[4,6,4,7,1],[6,6,6,7,0],[8,6,9,6,0],[8,6,8,7,0],[9,6,10,6,0],[10,6,10,7,0],[0,7,0,8,0],[2,7,2,8,0],[4,7,4,8,1],[6,7,7,7,0],[6,7,6,8,0],[7,7,8,7,0],[8,7,8,8,0],[10,7,10,8,0],[0,8,1,8,0],[0,8,0,9,0],[1,8,2,8,0],[2,8,3,8,0],[3,8,4,8,1],[3,8,3,9,1],[4,8,5,8,1],[5,8,6,8,1],[6,8,6,9,1],[8,8,9,8,0],[8,8,8,9,0],[9,8,10,8,0],[10,8,10,9,0],[0,9,0,10,0],[3,9,3,10,1],[6,9,6,10,1],[8,9,8,10,0],[10,9,10,10,0],[0,10,1,10,1],[1,10,2,10,1],[2,10,3,10,1],[3,10,4,10,0],[4,10,5,10,0],[5,10,6,10,0],[6,10,7,10,1],[7,10,8,10,1],[8,10,9,10,1],[9,10,10,10,1]]},{"id":43,"nombre":"Vaizel","nivel":30,"w":11,"h":11,"n":[[0,0,"N",4,1,"Amplificación de Daño Crítico +1,5%",0],[0,1,"G",1,1,"Resistencia Crítica +5",0],[0,2,"P",2,1,"Maximización de sexto sentido +1",13710000],[0,4,"G",1,1,"Resistencia Crítica +5",0],[0,5,"A",3,1,"Desenfreno de tormenta +1",13340000],[0,6,"G",1,1,"Ataque Adicional +3",0],[0,7,"P",2,1,"Aplicación de veneno +1",13730000],[0,8,"G",1,1,"Resistencia Crítica +5",0],[0,9,"G",1,1,"Puntos de Vida +100",0],[0,10,"N",4,1,"Tolerancia a Daño Crítico +1,5%",0],[1,0,"G",1,0,"Crítico +5",0],[1,2,"G",1,1,"Ataque Adicional +3",0],[1,3,"G",1,1,"Crítico +5",0],[1,4,"G",1,1,"Puntos de Maná +50",0],[1,6,"G",1,1,"Defensa Adicional +30",0],[1,8,"G",1,0,"Defensa Adicional +30",0],[1,10,"G",1,0,"Puntos de Maná +50",0],[2,0,"G",1,0,"Defensa Adicional +30",0],[2,1,"A",3,0,"Ataque sigiloso +1",13070000],[2,2,"G",1,0,"Puntos de Vida +100",0],[2,4,"A",3,0,"Caída sombría +1",13220000],[2,5,"G",1,0,"Crítico +5",0],[2,6,"G",1,1,"Puntos de Maná +50",0],[2,7,"G",1,0,"Puntos de Vida +100",0],[2,8,"A",3,0,"Corte de destello +1",13050000],[2,9,"G",1,0,"Ataque Adicional +3",0],[2,10,"P",2,0,"Postura de agresión +1",13750000],[3,1,"G",1,0,"Resistencia Crítica +5",0],[3,4,"G",1,0,"Crítico +5",0],[3,6,"P",2,1,"Grieta defensiva +1",13780000],[3,9,"G",1,0,"Resistencia Crítica +5",0],[4,0,"G",1,0,"Ataque Adicional +3",0],[4,1,"G",1,0,"Puntos de Maná +50",0],[4,2,"G",1,0,"Defensa Adicional +30",0],[4,3,"P",2,0,"Pacto de resurrección +1",13790000],[4,4,"G",1,0,"Puntos de Vida +100",0],[4,5,"G",1,1,"Ataque Adicional +3",0],[4,6,"G",1,1,"Resistencia Crítica +5",0],[4,7,"G",1,1,"Defensa Adicional +30",0],[4,8,"A",3,1,"Estocada al corazón +1",13350000],[4,9,"G",1,1,"Puntos de Vida +100",0],[4,10,"G",1,1,"Crítico +5",0],[5,0,"A",3,0,"Corte torbellino +1",13210000],[5,3,"G",1,0,"Puntos de Maná +50",0],[5,5,"S",0,1,"Inicio",0],[5,7,"G",1,0,"Puntos de Vida +100",0],[5,10,"A",3,1,"Corte rápido +1",13010000],[6,0,"G",1,0,"Resistencia Crítica +5",0],[6,1,"G",1,1,"Puntos de Maná +50",0],[6,2,"A",3,1,"Explosión de insignia +1",13130000],[6,3,"G",1,1,"Ataque Adicional +3",0],[6,4,"G",1,1,"Crítico +5",0],[6,5,"G",1,1,"Defensa Adicional +30",0],[6,6,"G",1,1,"Puntos de Maná +50",0],[6,7,"P",2,0,"Determinación +1",13800000],[6,8,"G",1,0,"Ataque Adicional +3",0],[6,9,"G",1,0,"Puntos de Vida +100",0],[6,10,"G",1,0,"Defensa Adicional +30",0],[7,1,"G",1,1,"Crítico +5",0],[7,4,"P",2,0,"Acierto de impacto +1",13760000],[7,6,"G",1,1,"Resistencia Crítica +5",0],[7,9,"G",1,0,"Crítico +5",0],[8,0,"P",2,1,"Postura de emboscada +1",13770000],[8,1,"G",1,1,"Defensa Adicional +30",0],[8,2,"A",3,0,"Rugido bestial +1",13100000],[8,3,"G",1,0,"Resistencia Crítica +5",0],[8,4,"G",1,0,"Puntos de Vida +100",0],[8,5,"G",1,0,"Puntos de Maná +50",0],[8,6,"A",3,1,"Emboscada +1",13060000],[8,8,"G",1,0,"Puntos de Maná +50",0],[8,9,"A",3,0,"Infiltración +1",13360000],[8,10,"G",1,0,"Ataque Adicional +3",0],[9,0,"G",1,1,"Puntos de Vida +100",0],[9,2,"G",1,0,"Ataque Adicional +3",0],[9,4,"G",1,0,"Ataque Adicional +3",0],[9,6,"G",1,1,"Puntos de Vida +100",0],[9,7,"G",1,1,"Resistencia Crítica +5",0],[9,8,"G",1,1,"Defensa Adicional +30",0],[9,10,"G",1,0,"Resistencia Crítica +5",0],[10,0,"N",4,1,"Tolerancia a Daño Crítico +1,5%",0],[10,1,"G",1,0,"Puntos de Maná +50",0],[10,2,"G",1,0,"Crítico +5",0],[10,3,"P",2,0,"Impacto trasero +1",13740000],[10,4,"G",1,0,"Defensa Adicional +30",0],[10,5,"A",3,0,"Eliminación de impacto +1",13260000],[10,6,"G",1,0,"Crítico +5",0],[10,8,"P",2,1,"Explotar debilidades +1",13720000],[10,9,"G",1,1,"Crítico +5",0],[10,10,"N",4,1,"Amplificación de Daño Crítico +1,5%",0]],"l":[[0,0,1,0,1],[0,0,0,1,0],[1,0,2,0,1],[2,0,2,1,1],[4,0,5,0,1],[4,0,4,1,1],[5,0,6,0,1],[6,0,7,0,1],[6,0,6,1,1],[7,0,8,0,1],[8,0,9,0,1],[8,0,8,1,0],[9,0,10,0,1],[10,0,10,1,0],[0,1,0,2,0],[2,1,3,1,1],[2,1,2,2,0],[3,1,4,1,1],[4,1,4,2,0],[6,1,6,2,1],[8,1,8,2,0],[10,1,10,2,0],[0,2,1,2,0],[1,2,2,2,0],[1,2,1,3,0],[4,2,5,2,0],[4,2,4,3,0],[5,2,6,2,0],[6,2,7,2,0],[6,2,6,3,1],[7,2,8,2,0],[8,2,9,2,0],[9,2,10,2,0],[9,2,9,3,0],[1,3,1,4,0],[4,3,4,4,0],[6,3,6,4,1],[9,3,9,4,0],[0,4,1,4,0],[0,4,0,5,0],[1,4,2,4,0],[2,4,3,4,0],[3,4,4,4,0],[3,4,3,5,0],[4,4,5,4,0],[5,4,6,4,1],[5,4,5,5,1],[6,4,7,4,1],[7,4,8,4,1],[7,4,7,5,0],[8,4,9,4,1],[9,4,10,4,1],[10,4,10,5,1],[0,5,0,6,0],[3,5,3,6,0],[5,5,5,6,1],[7,5,7,6,0],[10,5,10,6,0],[0,6,1,6,0],[1,6,2,6,1],[1,6,1,7,1],[2,6,3,6,1],[3,6,4,6,1],[4,6,5,6,1],[4,6,4,7,0],[5,6,6,6,1],[6,6,7,6,0],[6,6,6,7,1],[7,6,8,6,0],[8,6,9,6,0],[9,6,10,6,0],[9,6,9,7,0],[1,7,1,8,1],[4,7,4,8,0],[6,7,6,8,1],[9,7,9,8,0],[0,8,1,8,1],[0,8,0,9,1],[1,8,2,8,0],[2,8,3,8,0],[2,8,2,9,0],[3,8,4,8,0],[4,8,5,8,0],[4,8,4,9,0],[5,8,6,8,0],[6,8,6,9,1],[8,8,9,8,0],[8,8,8,9,0],[9,8,10,8,0],[10,8,10,9,0],[0,9,0,10,1],[2,9,2,10,0],[4,9,4,10,0],[6,9,7,9,1],[6,9,6,10,0],[7,9,8,9,1],[8,9,8,10,1],[10,9,10,10,0],[0,10,1,10,0],[1,10,2,10,0],[2,10,3,10,0],[3,10,4,10,0],[4,10,5,10,0],[5,10,6,10,0],[8,10,9,10,1],[9,10,10,10,1]]},{"id":44,"nombre":"Triniel","nivel":40,"w":13,"h":13,"n":[[0,0,"N",4,1,"Resistencia a Multigolpe +1,5%",0],[0,1,"G",1,1,"Ataque Adicional +3",0],[0,2,"G",1,1,"Crítico +5",0],[0,5,"G",1,1,"Ataque Adicional +3",0],[0,6,"N",4,1,"Acierto de Multigolpe +1,5%",0],[0,7,"G",1,0,"Defensa Adicional +30",0],[0,10,"G",1,0,"Defensa Adicional +30",0],[0,11,"G",1,0,"Puntos de Vida +100",0],[0,12,"N",4,1,"Resistencia a Multigolpe +1,5%",0],[1,0,"G",1,0,"Puntos de Maná +50",0],[1,2,"A",3,1,"Emboscada +1",13060000],[1,3,"G",1,1,"Puntos de Maná +50",0],[1,4,"G",1,1,"Puntos de Vida +100",0],[1,5,"P",2,1,"Determinación +1",13800000],[1,7,"P",2,0,"Acierto de impacto +1",13760000],[1,8,"G",1,0,"Puntos de Maná +50",0],[1,9,"G",1,0,"Crítico +5",0],[1,10,"A",3,0,"Rugido bestial +1",13100000],[1,12,"G",1,1,"Crítico +5",0],[2,0,"G",1,0,"Crítico +5",0],[2,2,"G",1,1,"Puntos de Vida +100",0],[2,5,"G",1,0,"Defensa Adicional +30",0],[2,6,"G",1,0,"Puntos de Vida +100",0],[2,7,"G",1,0,"Resistencia Crítica +5",0],[2,10,"G",1,0,"Ataque Adicional +3",0],[2,12,"G",1,1,"Resistencia Crítica +5",0],[3,0,"A",3,1,"Desenfreno de tormenta +1",13340000],[3,1,"G",1,1,"Resistencia Crítica +5",0],[3,2,"G",1,1,"Puntos de Maná +50",0],[3,3,"P",2,0,"Explotar debilidades +1",13720000],[3,4,"G",1,0,"Resistencia Crítica +5",0],[3,5,"G",1,0,"Ataque Adicional +3",0],[3,7,"G",1,0,"Defensa Adicional +30",0],[3,8,"A",3,0,"Infiltración +1",13360000],[3,9,"G",1,0,"Crítico +5",0],[3,10,"G",1,0,"Puntos de Vida +100",0],[3,11,"G",1,1,"Puntos de Maná +50",0],[3,12,"P",2,1,"Impacto trasero +1",13740000],[4,2,"G",1,1,"Defensa Adicional +30",0],[4,4,"G",1,0,"Crítico +5",0],[4,8,"G",1,0,"Puntos de Vida +100",0],[4,11,"G",1,1,"Resistencia Crítica +5",0],[5,0,"G",1,0,"Resistencia Crítica +5",0],[5,1,"G",1,0,"Crítico +5",0],[5,2,"G",1,1,"Puntos de Vida +100",0],[5,3,"G",1,1,"Ataque Adicional +3",0],[5,4,"A",3,1,"Corte de destello +1",13050000],[5,5,"G",1,1,"Puntos de Maná +50",0],[5,6,"G",1,1,"Defensa Adicional +30",0],[5,7,"G",1,0,"Resistencia Crítica +5",0],[5,8,"G",1,0,"Puntos de Maná +50",0],[5,9,"G",1,0,"Crítico +5",0],[5,10,"P",2,0,"Postura de emboscada +1",13770000],[5,11,"G",1,1,"Defensa Adicional +30",0],[5,12,"G",1,1,"Puntos de Maná +50",0],[6,0,"A",3,0,"Caída sombría +1",13220000],[6,2,"G",1,1,"Defensa Adicional +30",0],[6,4,"G",1,0,"Defensa Adicional +30",0],[6,6,"S",0,1,"Inicio",0],[6,8,"G",1,0,"Ataque Adicional +3",0],[6,10,"G",1,0,"Ataque Adicional +3",0],[6,12,"A",3,1,"Explosión de insignia +1",13130000],[7,0,"G",1,0,"Puntos de Vida +100",0],[7,1,"G",1,1,"Ataque Adicional +3",0],[7,2,"P",2,1,"Postura de agresión +1",13750000],[7,3,"G",1,0,"Resistencia Crítica +5",0],[7,4,"G",1,0,"Puntos de Vida +100",0],[7,5,"G",1,0,"Crítico +5",0],[7,6,"G",1,1,"Ataque Adicional +3",0],[7,7,"G",1,1,"Puntos de Vida +100",0],[7,8,"A",3,1,"Estocada al corazón +1",13350000],[7,9,"G",1,1,"Defensa Adicional +30",0],[7,10,"G",1,1,"Puntos de Maná +50",0],[7,11,"G",1,1,"Resistencia Crítica +5",0],[7,12,"G",1,1,"Crítico +5",0],[8,1,"G",1,1,"Crítico +5",0],[8,4,"G",1,0,"Puntos de Maná +50",0],[8,8,"G",1,0,"Resistencia Crítica +5",0],[8,10,"G",1,1,"Ataque Adicional +3",0],[9,0,"P",2,1,"Aplicación de veneno +1",13730000],[9,1,"G",1,1,"Puntos de Vida +100",0],[9,2,"G",1,0,"Puntos de Maná +50",0],[9,3,"G",1,0,"Resistencia Crítica +5",0],[9,4,"A",3,0,"Corte torbellino +1",13210000],[9,5,"G",1,0,"Ataque Adicional +3",0],[9,7,"G",1,0,"Defensa Adicional +30",0],[9,8,"G",1,0,"Crítico +5",0],[9,9,"P",2,0,"Maximización de sexto sentido +1",13710000],[9,10,"G",1,1,"Puntos de Vida +100",0],[9,11,"G",1,0,"Crítico +5",0],[9,12,"A",3,0,"Eliminación de impacto +1",13260000],[10,0,"G",1,1,"Crítico +5",0],[10,2,"G",1,0,"Defensa Adicional +30",0],[10,5,"G",1,0,"Crítico +5",0],[10,6,"G",1,0,"Puntos de Maná +50",0],[10,7,"G",1,0,"Ataque Adicional +3",0],[10,10,"G",1,1,"Puntos de Maná +50",0],[10,12,"G",1,0,"Resistencia Crítica +5",0],[11,0,"G",1,1,"Resistencia Crítica +5",0],[11,2,"A",3,0,"Ataque sigiloso +1",13070000],[11,3,"G",1,0,"Resistencia Crítica +5",0],[11,4,"G",1,0,"Puntos de Vida +100",0],[11,5,"P",2,0,"Grieta defensiva +1",13780000],[11,7,"P",2,1,"Pacto de resurrección +1",13790000],[11,8,"G",1,1,"Puntos de Maná +50",0],[11,9,"G",1,1,"Puntos de Vida +100",0],[11,10,"A",3,1,"Corte rápido +1",13010000],[11,12,"G",1,0,"Puntos de Vida +100",0],[12,0,"N",4,1,"Acierto de Multigolpe +1,5%",0],[12,1,"G",1,0,"Puntos de Maná +50",0],[12,2,"G",1,0,"Ataque Adicional +3",0],[12,5,"G",1,0,"Ataque Adicional +3",0],[12,6,"N",4,1,"Resistencia a Multigolpe +1,5%",0],[12,7,"G",1,1,"Defensa Adicional +30",0],[12,10,"G",1,1,"Resistencia Crítica +5",0],[12,11,"G",1,1,"Defensa Adicional +30",0],[12,12,"N",4,1,"Acierto de Multigolpe +1,5%",0]],"l":[[0,0,1,0,1],[0,0,0,1,0],[1,0,2,0,1],[2,0,2,1,1],[5,0,6,0,1],[5,0,5,1,1],[6,0,7,0,0],[7,0,7,1,0],[10,0,11,0,0],[10,0,10,1,0],[11,0,12,0,0],[12,0,12,1,1],[0,1,0,2,0],[2,1,3,1,1],[2,1,2,2,1],[3,1,4,1,1],[4,1,5,1,1],[5,1,5,2,0],[7,1,8,1,0],[7,1,7,2,0],[8,1,9,1,0],[9,1,10,1,0],[10,1,10,2,0],[12,1,12,2,1],[0,2,0,3,0],[2,2,2,3,1],[5,2,6,2,0],[5,2,5,3,0],[6,2,7,2,0],[7,2,7,3,0],[10,2,10,3,0],[12,2,12,3,1],[0,3,1,3,1],[1,3,2,3,1],[2,3,3,3,0],[2,3,2,4,1],[3,3,4,3,0],[4,3,5,3,0],[4,3,4,4,0],[7,3,8,3,0],[8,3,9,3,0],[8,3,8,4,0],[9,3,10,3,0],[10,3,11,3,0],[11,3,12,3,1],[11,3,11,4,1],[2,4,2,5,1],[4,4,4,5,0],[8,4,8,5,0],[11,4,11,5,1],[0,5,1,5,0],[0,5,0,6,0],[1,5,2,5,0],[2,5,3,5,1],[2,5,2,6,1],[3,5,4,5,1],[4,5,5,5,1],[4,5,4,6,0],[5,5,6,5,1],[6,5,7,5,0],[6,5,6,6,1],[7,5,8,5,0],[8,5,9,5,0],[8,5,8,6,0],[9,5,10,5,0],[10,5,11,5,0],[10,5,10,6,0],[11,5,12,5,1],[12,5,12,6,1],[0,6,0,7,0],[2,6,2,7,1],[4,6,4,7,0],[6,6,6,7,1],[8,6,8,7,0],[10,6,10,7,0],[12,6,12,7,1],[0,7,1,7,0],[1,7,2,7,1],[1,7,1,8,1],[2,7,3,7,0],[3,7,4,7,0],[4,7,5,7,0],[4,7,4,8,0],[5,7,6,7,0],[6,7,7,7,1],[7,7,8,7,1],[8,7,9,7,1],[8,7,8,8,0],[9,7,10,7,1],[10,7,11,7,1],[10,7,10,8,1],[11,7,12,7,1],[1,8,1,9,1],[4,8,4,9,0],[8,8,8,9,0],[10,8,10,9,1],[0,9,1,9,1],[0,9,0,10,1],[1,9,2,9,0],[2,9,3,9,0],[2,9,2,10,0],[3,9,4,9,0],[4,9,5,9,0],[5,9,5,10,0],[7,9,8,9,0],[7,9,7,10,0],[8,9,9,9,0],[9,9,10,9,0],[10,9,11,9,0],[10,9,10,10,1],[11,9,12,9,0],[12,9,12,10,0],[0,10,0,11,1],[2,10,2,11,0],[5,10,6,10,0],[5,10,5,11,0],[6,10,7,10,0],[7,10,7,11,0],[10,10,10,11,1],[12,10,12,11,0],[0,11,0,12,1],[2,11,3,11,0],[2,11,2,12,0],[3,11,4,11,0],[4,11,5,11,0],[5,11,5,12,0],[7,11,8,11,1],[7,11,7,12,1],[8,11,9,11,1],[9,11,10,11,1],[10,11,10,12,1],[12,11,12,12,0],[0,12,1,12,0],[1,12,2,12,0],[5,12,6,12,0],[6,12,7,12,1],[10,12,11,12,1],[11,12,12,12,1]]},{"id":46,"nombre":"Azphel","nivel":45,"w":15,"h":15,"n":[[0,0,"N",4,0,"Tolerancia a Daño JcJ +1,5%",0],[0,1,"G",1,0,"Ataque JcJ +3",0],[0,2,"G",1,0,"Defensa JcJ +30",0],[0,3,"M",3,0,"Acierto de Efectos de Estado +1%",0],[0,5,"M",2,0,"Crítico JcJ +5, Resistencia Crítica JcJ +5",0],[0,6,"G",1,0,"Precisión JcJ +5",0],[0,7,"N",4,0,"Tolerancia a Daño JcJ +1,5%",0],[0,9,"M",2,0,"Crítico JcJ +5, Resistencia Crítica JcJ +5",0],[0,10,"G",1,0,"Evasión JcJ +3",0],[0,11,"M",3,0,"Resistencia a Efectos de Estado +1%",0],[0,12,"G",1,0,"Resistencia Crítica JcJ +5",0],[0,13,"G",1,0,"Ataque JcJ +3",0],[0,14,"N",4,0,"Amplificación de Daño JcJ +1,5%",0],[1,0,"G",1,0,"Crítico JcJ +5",0],[1,3,"G",1,0,"Evasión JcJ +3",0],[1,4,"G",1,0,"Ataque JcJ +3",0],[1,5,"G",1,0,"Defensa JcJ +30",0],[1,7,"G",1,0,"Evasión JcJ +3",0],[1,9,"G",1,0,"Precisión JcJ +5",0],[1,12,"G",1,0,"Defensa JcJ +30",0],[1,14,"G",1,0,"Precisión JcJ +5",0],[2,0,"M",2,0,"Precisión JcJ +5, Evasión JcJ +3",0],[2,1,"G",1,0,"Resistencia Crítica JcJ +5",0],[2,2,"G",1,0,"Precisión JcJ +5",0],[2,3,"M",2,0,"Ataque JcJ +3, Defensa JcJ +30",0],[2,5,"G",1,0,"Resistencia Crítica JcJ +5",0],[2,6,"M",2,0,"Precisión JcJ +5, Evasión JcJ +3",0],[2,7,"G",1,0,"Puntos de Maná +50",0],[2,8,"G",1,0,"Defensa JcJ +30",0],[2,9,"M",3,0,"Acierto de Efectos de Estado +1%",0],[2,10,"G",1,0,"Crítico JcJ +5",0],[2,11,"G",1,0,"Puntos de Vida +100",0],[2,12,"M",2,0,"Precisión JcJ +5, Evasión JcJ +3",0],[2,13,"G",1,0,"Crítico JcJ +5",0],[2,14,"M",2,0,"Ataque JcJ +3, Defensa JcJ +30",0],[3,2,"G",1,0,"Defensa JcJ +30",0],[3,6,"G",1,0,"Crítico JcJ +5",0],[3,8,"G",1,0,"Evasión JcJ +3",0],[3,10,"G",1,0,"Ataque JcJ +3",0],[3,12,"G",1,0,"Resistencia Crítica JcJ +5",0],[4,0,"M",3,0,"Acierto de Efectos de Estado +1%",0],[4,1,"G",1,0,"Ataque JcJ +3",0],[4,2,"G",1,0,"Evasión JcJ +3",0],[4,4,"M",3,0,"Resistencia a Efectos de Estado +1%",0],[4,5,"G",1,0,"Resistencia Crítica JcJ +5",0],[4,6,"G",1,0,"Defensa JcJ +30",0],[4,7,"M",3,0,"Acierto de Efectos de Estado +1%",0],[4,8,"G",1,0,"Resistencia Crítica JcJ +5",0],[4,9,"M",2,0,"Ataque JcJ +3, Defensa JcJ +30",0],[4,10,"G",1,0,"Evasión JcJ +3",0],[4,11,"G",1,0,"Defensa JcJ +30",0],[4,12,"M",3,0,"Resistencia a Efectos de Estado +1%",0],[5,0,"G",1,0,"Resistencia Crítica JcJ +5",0],[5,2,"M",2,0,"Crítico JcJ +5, Resistencia Crítica JcJ +5",0],[5,3,"G",1,0,"Precisión JcJ +5",0],[5,4,"G",1,0,"Crítico JcJ +5",0],[5,6,"G",1,0,"Precisión JcJ +5",0],[5,9,"G",1,0,"Precisión JcJ +5",0],[5,12,"G",1,0,"Crítico JcJ +5",0],[5,13,"G",1,0,"Precisión JcJ +5",0],[5,14,"M",2,0,"Crítico JcJ +5, Resistencia Crítica JcJ +5",0],[6,0,"G",1,0,"Crítico JcJ +5",0],[6,4,"G",1,0,"Ataque JcJ +3",0],[6,5,"G",1,0,"Evasión JcJ +3",0],[6,6,"M",2,0,"Ataque JcJ +3, Defensa JcJ +30",0],[6,7,"G",1,0,"Puntos de Vida +100",0],[6,8,"G",1,0,"Ataque JcJ +3",0],[6,9,"M",3,0,"Resistencia a Efectos de Estado +1%",0],[6,10,"G",1,0,"Defensa JcJ +30",0],[6,11,"G",1,0,"Puntos de Maná +50",0],[6,12,"M",2,0,"Precisión JcJ +5, Evasión JcJ +3",0],[6,14,"G",1,0,"Evasión JcJ +3",0],[7,0,"N",4,0,"Amplificación de Daño JcJ +1,5%",0],[7,1,"G",1,0,"Ataque JcJ +3",0],[7,2,"G",1,0,"Resistencia Crítica JcJ +5",0],[7,5,"G",1,0,"Crítico JcJ +5",0],[7,7,"S",0,1,"Inicio",0],[7,9,"G",1,0,"Crítico JcJ +5",0],[7,12,"G",1,0,"Resistencia Crítica JcJ +5",0],[7,13,"G",1,0,"Ataque JcJ +3",0],[7,14,"N",4,0,"Amplificación de Daño JcJ +1,5%",0],[8,0,"G",1,0,"Evasión JcJ +3",0],[8,2,"M",2,0,"Precisión JcJ +5, Evasión JcJ +3",0],[8,3,"G",1,0,"Puntos de Vida +100",0],[8,4,"G",1,0,"Defensa JcJ +30",0],[8,5,"M",3,0,"Resistencia a Efectos de Estado +1%",0],[8,6,"G",1,0,"Ataque JcJ +3",0],[8,7,"G",1,0,"Puntos de Maná +50",0],[8,8,"M",2,0,"Crítico JcJ +5, Resistencia Crítica JcJ +5",0],[8,9,"G",1,0,"Evasión JcJ +3",0],[8,10,"G",1,0,"Ataque JcJ +3",0],[8,14,"G",1,0,"Crítico JcJ +5",0],[9,0,"M",2,0,"Crítico JcJ +5, Resistencia Crítica JcJ +5",0],[9,1,"G",1,0,"Precisión JcJ +5",0],[9,2,"G",1,0,"Crítico JcJ +5",0],[9,5,"G",1,0,"Precisión JcJ +5",0],[9,8,"G",1,0,"Precisión JcJ +5",0],[9,10,"G",1,0,"Crítico JcJ +5",0],[9,11,"G",1,0,"Precisión JcJ +5",0],[9,12,"M",2,0,"Ataque JcJ +3, Defensa JcJ +30",0],[9,14,"G",1,0,"Resistencia Crítica JcJ +5",0],[10,2,"M",3,0,"Resistencia a Efectos de Estado +1%",0],[10,3,"G",1,0,"Defensa JcJ +30",0],[10,4,"G",1,0,"Evasión JcJ +3",0],[10,5,"M",2,0,"Ataque JcJ +3, Defensa JcJ +30",0],[10,6,"G",1,0,"Resistencia Crítica JcJ +5",0],[10,7,"M",3,0,"Acierto de Efectos de Estado +1%",0],[10,8,"G",1,0,"Defensa JcJ +30",0],[10,9,"G",1,0,"Resistencia Crítica JcJ +5",0],[10,10,"M",3,0,"Resistencia a Efectos de Estado +1%",0],[10,12,"G",1,0,"Evasión JcJ +3",0],[10,13,"G",1,0,"Ataque JcJ +3",0],[10,14,"M",3,0,"Acierto de Efectos de Estado +1%",0],[11,2,"G",1,0,"Resistencia Crítica JcJ +5",0],[11,4,"G",1,0,"Ataque JcJ +3",0],[11,6,"G",1,0,"Evasión JcJ +3",0],[11,8,"G",1,0,"Crítico JcJ +5",0],[11,12,"G",1,0,"Defensa JcJ +30",0],[12,0,"M",2,0,"Ataque JcJ +3, Defensa JcJ +30",0],[12,1,"G",1,0,"Crítico JcJ +5",0],[12,2,"M",2,0,"Precisión JcJ +5, Evasión JcJ +3",0],[12,3,"G",1,0,"Puntos de Maná +50",0],[12,4,"G",1,0,"Crítico JcJ +5",0],[12,5,"M",3,0,"Acierto de Efectos de Estado +1%",0],[12,6,"G",1,0,"Defensa JcJ +30",0],[12,7,"G",1,0,"Puntos de Vida +100",0],[12,8,"M",2,0,"Precisión JcJ +5, Evasión JcJ +3",0],[12,9,"G",1,0,"Resistencia Crítica JcJ +5",0],[12,11,"M",2,0,"Crítico JcJ +5, Resistencia Crítica JcJ +5",0],[12,12,"G",1,0,"Precisión JcJ +5",0],[12,13,"G",1,0,"Resistencia Crítica JcJ +5",0],[12,14,"M",2,0,"Precisión JcJ +5, Evasión JcJ +3",0],[13,0,"G",1,0,"Precisión JcJ +5",0],[13,2,"G",1,0,"Defensa JcJ +30",0],[13,5,"G",1,0,"Precisión JcJ +5",0],[13,7,"G",1,0,"Evasión JcJ +3",0],[13,9,"G",1,0,"Defensa JcJ +30",0],[13,10,"G",1,0,"Ataque JcJ +3",0],[13,11,"G",1,0,"Evasión JcJ +3",0],[13,14,"G",1,0,"Crítico JcJ +5",0],[14,0,"N",4,0,"Amplificación de Daño JcJ +1,5%",0],[14,1,"G",1,0,"Ataque JcJ +3",0],[14,2,"G",1,0,"Resistencia Crítica JcJ +5",0],[14,3,"M",3,0,"Resistencia a Efectos de Estado +1%",0],[14,4,"G",1,0,"Evasión JcJ +3",0],[14,5,"M",2,0,"Crítico JcJ +5, Resistencia Crítica JcJ +5",0],[14,7,"N",4,0,"Tolerancia a Daño JcJ +1,5%",0],[14,8,"G",1,0,"Precisión JcJ +5",0],[14,9,"M",2,0,"Ataque JcJ +3, Defensa JcJ +30",0],[14,11,"M",3,0,"Acierto de Efectos de Estado +1%",0],[14,12,"G",1,0,"Defensa JcJ +30",0],[14,13,"G",1,0,"Ataque JcJ +3",0],[14,14,"N",4,0,"Tolerancia a Daño JcJ +1,5%",0]],"l":[[0,0,1,0,0],[0,0,0,1,0],[1,0,2,0,0],[2,0,3,0,0],[3,0,3,1,0],[5,0,6,0,0],[5,0,5,1,0],[6,0,7,0,0],[7,0,7,1,0],[9,0,10,0,0],[9,0,9,1,0],[10,0,11,0,0],[11,0,12,0,0],[12,0,13,0,0],[12,0,12,1,0],[13,0,14,0,0],[14,0,14,1,0],[0,1,0,2,0],[3,1,4,1,0],[3,1,3,2,0],[4,1,5,1,0],[5,1,5,2,0],[7,1,7,2,0],[9,1,9,2,0],[12,1,12,2,0],[14,1,14,2,0],[0,2,1,2,0],[1,2,2,2,0],[2,2,3,2,0],[2,2,2,3,0],[5,2,6,2,0],[6,2,7,2,0],[6,2,6,3,0],[7,2,8,2,0],[8,2,9,2,0],[8,2,8,3,0],[9,2,10,2,0],[10,2,11,2,0],[10,2,10,3,0],[11,2,12,2,0],[12,2,13,2,0],[12,2,12,3,0],[13,2,14,2,0],[2,3,2,4,0],[6,3,6,4,0],[8,3,8,4,0],[10,3,10,4,0],[12,3,12,4,0],[0,4,1,4,0],[0,4,0,5,0],[1,4,2,4,0],[2,4,2,5,0],[4,4,5,4,0],[4,4,4,5,0],[5,4,6,4,0],[6,4,7,4,0],[6,4,6,5,0],[7,4,8,4,0],[8,4,9,4,0],[9,4,10,4,0],[9,4,9,5,0],[10,4,11,4,0],[11,4,12,4,0],[12,4,12,5,0],[0,5,0,6,0],[2,5,3,5,0],[3,5,4,5,0],[4,5,4,6,0],[6,5,6,6,0],[9,5,9,6,0],[12,5,13,5,0],[12,5,12,6,0],[13,5,14,5,0],[14,5,14,6,0],[0,6,0,7,0],[4,6,5,6,0],[5,6,6,6,0],[5,6,5,7,0],[6,6,7,6,0],[7,6,8,6,0],[7,6,7,7,0],[8,6,9,6,0],[9,6,10,6,0],[9,6,9,7,0],[10,6,11,6,0],[11,6,12,6,0],[12,6,12,7,0],[14,6,14,7,0],[0,7,1,7,0],[0,7,0,8,0],[1,7,2,7,0],[2,7,2,8,0],[5,7,5,8,0],[7,7,7,8,0],[9,7,9,8,0],[12,7,13,7,0],[13,7,14,7,0],[14,7,14,8,0],[0,8,0,9,0],[2,8,3,8,0],[2,8,2,9,0],[3,8,4,8,0],[4,8,5,8,0],[5,8,6,8,0],[5,8,5,9,0],[6,8,7,8,0],[7,8,8,8,0],[8,8,9,8,0],[8,8,8,9,0],[9,8,10,8,0],[10,8,10,9,0],[14,8,14,9,0],[0,9,1,9,0],[1,9,2,9,0],[2,9,2,10,0],[5,9,5,10,0],[8,9,8,10,0],[10,9,11,9,0],[10,9,10,10,0],[11,9,12,9,0],[12,9,12,10,0],[14,9,14,10,0],[2,10,3,10,0],[2,10,2,11,0],[3,10,4,10,0],[4,10,5,10,0],[4,10,4,11,0],[5,10,6,10,0],[6,10,7,10,0],[6,10,6,11,0],[7,10,8,10,0],[8,10,9,10,0],[8,10,8,11,0],[9,10,10,10,0],[12,10,13,10,0],[12,10,12,11,0],[13,10,14,10,0],[2,11,2,12,0],[4,11,4,12,0],[6,11,6,12,0],[8,11,8,12,0],[12,11,12,12,0],[0,12,1,12,0],[0,12,0,13,0],[1,12,2,12,0],[2,12,3,12,0],[2,12,2,13,0],[3,12,4,12,0],[4,12,5,12,0],[5,12,6,12,0],[5,12,5,13,0],[6,12,7,12,0],[7,12,8,12,0],[7,12,7,13,0],[8,12,9,12,0],[9,12,9,13,0],[11,12,12,12,0],[11,12,11,13,0],[12,12,13,12,0],[13,12,14,12,0],[14,12,14,13,0],[0,13,0,14,0],[2,13,2,14,0],[5,13,5,14,0],[7,13,7,14,0],[9,13,10,13,0],[9,13,9,14,0],[10,13,11,13,0],[11,13,11,14,0],[14,13,14,14,0],[0,14,1,14,0],[1,14,2,14,0],[2,14,3,14,0],[3,14,4,14,0],[4,14,5,14,0],[7,14,8,14,0],[8,14,9,14,0],[11,14,12,14,0],[12,14,13,14,0],[13,14,14,14,0]]}];

// Iconos locales por id de habilidad (metabot.gg)
const DV_ICON = {
  13010000: 'quick_slice.webp', 13050000: 'flash_slice.webp', 13060000: 'ambush.webp',
  13070000: 'shadowstrike.webp', 13100000: 'savage_roar.webp', 13130000: 'insignia_explosion.webp',
  13210000: 'whirlwind_slice.webp', 13220000: 'shadow_fall.webp', 13260000: 'defiance.webp',
  13340000: 'storm_rampage.webp', 13350000: 'heart_gore.webp', 13360000: 'infiltrate.webp',
  13710000: 'sixth_sense.webp', 13720000: 'exploit_weakness.webp', 13730000: 'apply_poison.webp',
  13740000: 'rear_smite.webp', 13750000: 'assault_stance.webp', 13760000: 'impact_hit.webp',
  13770000: 'ambush_stance.webp', 13780000: 'defense_break.webp', 13790000: 'revitalization_contract.webp',
  13800000: 'determination.webp',
};

const DV_TIPO = {
  S: 'Inicio', G: 'Atributo · 1 pt', A: 'Habilidad activa +1 · 3 pts',
  P: 'Habilidad pasiva +1 · 2 pts', N: 'Nodo especial · 4 pts', M: 'Atributo mayor · 2-3 pts',
};

const DV_NOTA = {
  41: 'Esquinas de Velocidad de Hechizo y Reducción de Enfriamiento.',
  42: 'Esquinas de Amplificación de Daño y Tolerancia a Daño.',
  43: '⭐ Tablero n.º 1 del Asesino en JcE: la Amplificación de Daño Crítico rinde desde el primer día, por eso su esquina va justo después de las tres habilidades clave.',
  44: 'Esquinas de Acierto y Resistencia de Multigolpe.',
  46: 'Tablero JcJ: solo da Amplificación y Tolerancia JcJ, sin habilidades. En JcE no gastes puntos aquí; termina antes los otros cuatro.',
};

// Prioridad del orden de clics (couga54): Estocada al corazón, Explosión de insignia y Corte rápido;
// luego Emboscada y Desenfreno de tormenta; luego los nodos naranjas. En Vaizel, el Daño Crítico entra con las tres primeras.
function dvPrio(board, n) {
  const [, , t, , , label, sk] = n;
  if ([13350000, 13130000, 13010000].includes(sk)) return 1;
  if (board.id === 43 && t === 'N' && /Amplificación de Daño Crítico/.test(label)) return 1;
  if ([13060000, 13340000].includes(sk)) return 2;
  if (t === 'N') return 3;
  if (t === 'A' || t === 'P') return 4;
  return 9;
}

// Orden de clics: desde lo ya abierto, ir al nodo de la ruta con mejor prioridad por el camino más barato.
function dvOrder(board) {
  const N = board.n;
  const key = (r, c) => r + ',' + c;
  const at = {};
  N.forEach((n, i) => { at[key(n[0], n[1])] = i; });
  const adj = N.map(() => []);
  board.l.forEach(([x1, y1, x2, y2, on]) => {
    if (!on) return;
    const a = at[key(y1, x1)], b = at[key(y2, x2)];
    if (a === undefined || b === undefined) return;
    adj[a].push(b); adj[b].push(a);
  });
  const start = N.findIndex(n => n[2] === 'S');
  const owned = new Set([start]);
  const order = [];
  let left = N.map((n, i) => i).filter(i => N[i][4] && i !== start);
  while (left.length) {
    const dist = {}, prev = {}, done = new Set();
    owned.forEach(i => { dist[i] = 0; prev[i] = -1; });
    for (;;) {
      let best = -1, bd = Infinity;
      for (const k in dist) if (!done.has(+k) && dist[k] < bd) { bd = dist[k]; best = +k; }
      if (best < 0) break;
      done.add(best);
      adj[best].forEach(nb => {
        if (owned.has(nb)) return;
        const nd = bd + N[nb][3];
        if (dist[nb] === undefined || nd < dist[nb]) { dist[nb] = nd; prev[nb] = best; }
      });
    }
    const reach = left.filter(i => dist[i] !== undefined);
    if (!reach.length) break;
    reach.sort((a, b) => (dvPrio(board, N[a]) * 1000 + dist[a]) - (dvPrio(board, N[b]) * 1000 + dist[b]));
    const path = [];
    for (let x = reach[0]; !owned.has(x); x = prev[x]) path.unshift(x);
    path.forEach(x => { owned.add(x); order.push(x); });
    left = left.filter(i => !owned.has(i));
  }
  return order;
}

function dvGet(k, def) { try { const v = localStorage.getItem(k); return v === null ? def : v; } catch (e) { return def; } }
function dvSet(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
function dvEsc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;'); }

function dvShape(n, extraClass) {
  const [r, c, t, , on, label, sk] = n;
  const x = c + 0.5, y = r + 0.5;
  const cls = 'dv-node t' + t + (on ? ' on' : ' off') + (extraClass || '');
  if (t === 'S') return `<g class="${cls}"><circle cx="${x}" cy="${y}" r="0.5" fill="url(#dvGlow)"/><circle cx="${x}" cy="${y}" r="0.34" class="dv-start"/></g>`;
  if (t === 'G') return `<g class="${cls}"><circle cx="${x}" cy="${y}" r="0.19" class="dv-stat"/></g>`;
  if (t === 'M') return `<g class="${cls}"><circle cx="${x}" cy="${y}" r="0.26" class="dv-stat"/><circle cx="${x}" cy="${y}" r="0.12" class="dv-stat-core"/></g>`;
  if (t === 'N') return `<g class="${cls}"><rect x="${x - 0.25}" y="${y - 0.25}" width="0.5" height="0.5" rx="0.06" transform="rotate(45 ${x} ${y})" class="dv-special"/></g>`;
  const img = DV_ICON[sk] ? `<image href="icons/${DV_ICON[sk]}" x="${x - 0.31}" y="${y - 0.31}" width="0.62" height="0.62" preserveAspectRatio="xMidYMid slice"/>` : '';
  return `<g class="${cls}"><rect x="${x - 0.34}" y="${y - 0.34}" width="0.68" height="0.68" rx="0.08" class="dv-skillbg"/>${img}<rect x="${x - 0.34}" y="${y - 0.34}" width="0.68" height="0.68" rx="0.08" class="dv-skillframe"/></g>`;
}

function dvBadge(n, step) {
  const [r, c, t] = n;
  const big = t !== 'G';
  const x = c + 0.5 + (big ? 0.3 : 0), y = r + 0.5 - (big ? 0.3 : 0);
  return `<g class="dv-badge" data-step="${step}"><circle cx="${x}" cy="${y}" r="${big ? 0.17 : 0.19}"/><text x="${x}" y="${y}" dy="0.065" font-size="${step > 9 ? 0.17 : 0.2}">${step}</text></g>`;
}

function dvBoardSVG(board, order) {
  const { w, h, n, l } = board;
  const stepOf = {};
  order.forEach((idx, s) => { stepOf[idx] = s + 1; });
  let s = `<svg class="dv-svg" viewBox="0 0 ${w} ${h}" role="img" aria-label="Tablero ${board.nombre}">`;
  s += `<defs><radialGradient id="dvGlow"><stop offset="0" stop-color="#ffe9a8" stop-opacity="0.9"/><stop offset="1" stop-color="#e8b65a" stop-opacity="0"/></radialGradient>
        <radialGradient id="dvBg"><stop offset="0" stop-color="#2a2a22"/><stop offset="0.55" stop-color="#11141b"/><stop offset="1" stop-color="#0a0c11"/></radialGradient></defs>`;
  s += `<rect width="${w}" height="${h}" fill="url(#dvBg)"/>`;
  for (let k = 1; k <= Math.floor(w / 2); k++) s += `<circle cx="${w / 2}" cy="${h / 2}" r="${k}" class="dv-ring"/>`;
  l.filter(x => !x[4]).forEach(([x1, y1, x2, y2]) => { s += `<line x1="${x1 + 0.5}" y1="${y1 + 0.5}" x2="${x2 + 0.5}" y2="${y2 + 0.5}" class="dv-line"/>`; });
  l.filter(x => x[4]).forEach(([x1, y1, x2, y2]) => { s += `<line x1="${x1 + 0.5}" y1="${y1 + 0.5}" x2="${x2 + 0.5}" y2="${y2 + 0.5}" class="dv-line on"/>`; });
  n.forEach((node, i) => { s += `<g class="dv-hit" data-i="${i}">${dvShape(node)}</g>`; });
  order.forEach((idx, k) => { s += `<g class="dv-hit" data-i="${idx}">${dvBadge(n[idx], k + 1)}</g>`; });
  s += `<circle class="dv-next-ring" r="0.45" cx="-5" cy="-5"/></svg>`;
  return s;
}

// Suma de lo que da la ruta completa: habilidades +N y atributos totales
function dvResumen(board, order) {
  const skills = {}, stats = {};
  order.forEach(i => {
    const [, , t, , , label, sk] = board.n[i];
    if (t === 'A' || t === 'P') {
      const name = label.replace(/ \+\d+$/, '');
      skills[name] = skills[name] || { n: 0, sk, t };
      skills[name].n++;
    } else {
      const m = label.match(/^(.*) \+([\d,]+)(\s?%)?$/);
      if (!m) return;
      const name = m[1], pct = !!m[3];
      stats[name] = stats[name] || { v: 0, pct };
      stats[name].v += parseFloat(m[2].replace(',', '.'));
    }
  });
  const fmt = v => (Math.round(v * 10) / 10).toString().replace('.', ',');
  const sk = Object.entries(skills).sort((a, b) => b[1].n - a[1].n || a[0].localeCompare(b[0]))
    .map(([name, o]) => `<li class="dv-chip ${o.t === 'P' ? 'pas' : 'act'}">${DV_ICON[o.sk] ? `<img src="icons/${DV_ICON[o.sk]}" alt="">` : ''}${dvEsc(name)} <b>+${o.n}</b></li>`).join('');
  const st = Object.entries(stats).sort((a, b) => (b[1].pct - a[1].pct) || a[0].localeCompare(b[0]))
    .map(([name, o]) => `<li class="dv-chip ${o.pct ? 'esp' : ''}">${dvEsc(name)} <b>+${fmt(o.v)}${o.pct ? ' %' : ''}</b></li>`).join('');
  return `<div class="dv-sum"><h5>Habilidades que sube</h5><ul>${sk}</ul><h5>Atributos que suma</h5><ul>${st}</ul></div>`;
}

function buildAllBoards() {
  const container = document.getElementById('boardsContainer');
  if (!container) return;
  const boards = DAEVANION.map(b => {
    const order = dvOrder(b);
    const cost = order.reduce((s, i) => s + b.n[i][3], 0);
    return { ...b, order, cost };
  });
  const total = boards.reduce((s, b) => s + b.cost, 0);

  container.innerHTML = `
    <div class="dv">
      <div class="dv-tabs" role="tablist">
        ${boards.map((b, i) => `<button type="button" role="tab" class="dv-tab${i === 0 ? ' active' : ''}" data-b="${i}">
          <b>${b.nombre}</b><span>Nv. ${b.nivel} · <i>${b.cost} pts</i></span></button>`).join('')}
      </div>
      <div class="dv-body">
        <div class="dv-stage"></div>
        <div class="dv-side">
          <div class="dv-info" aria-live="polite"></div>
          <div class="dv-ctrl">
            <div class="dv-ctrl-row">
              <button type="button" class="dv-btn" data-d="-1" aria-label="Paso anterior">←</button>
              <div class="dv-count"></div>
              <button type="button" class="dv-btn" data-d="1" aria-label="Paso siguiente">→</button>
            </div>
            <input type="range" class="dv-range" min="0" value="0" aria-label="Pasos hechos">
            <p class="dv-hint">Mueve la barra hasta los puntos que ya gastaste: los pasos hechos se ponen en verde y el siguiente clic parpadea en el tablero.</p>
          </div>
        </div>
      </div>
      <div class="dv-foot">
        <span><b>${total}</b> puntos en total (ruta JcE de couga54)</span>
        <span class="dv-legend">
          <span><i class="k k-stat"></i>atributo · 1</span>
          <span><i class="k k-pas"></i>pasiva · 2</span>
          <span><i class="k k-act"></i>activa · 3</span>
          <span><i class="k k-esp"></i>especial · 4</span>
          <span><i class="k k-ruta"></i>ruta</span>
          <span><i class="k k-num">7</i>orden de clic</span>
        </span>
      </div>
      <div class="dv-note"></div>
      <details class="dv-list-wrap" open><summary>Orden de clics, paso a paso</summary><ol class="dv-list"></ol></details>
      <div class="dv-sumwrap"></div>
    </div>`;

  const $ = sel => container.querySelector(sel);
  let cur = 0, done = 0;

  function info(i) {
    const b = boards[cur];
    const n = b.n[i];
    const k = b.order.indexOf(i);
    const where = n[2] === 'S' ? 'Punto de partida, gratis.'
      : k >= 0 ? `Paso <b>${k + 1}</b> de ${b.order.length} · llevas <b>${b.order.slice(0, k + 1).reduce((s, j) => s + b.n[j][3], 0)}</b> pts al tomarlo`
      : 'Fuera de la ruta: no lo tomes.';
    $('.dv-info').innerHTML = `<div class="dv-info-t">${dvEsc(n[5])}</div><div class="dv-info-m">${DV_TIPO[n[2]]}</div><div class="dv-info-w">${where}</div>`;
  }

  function nextInfo() {
    const b = boards[cur];
    if (!b.order.length) { $('.dv-info').innerHTML = `<div class="dv-info-t">Sin ruta JcE</div><div class="dv-info-w">${DV_NOTA[b.id]}</div>`; return; }
    if (done >= b.order.length) { $('.dv-info').innerHTML = `<div class="dv-info-t">✓ Tablero terminado</div><div class="dv-info-w">Tienes los ${b.cost} pts de la ruta.</div>`; return; }
    const i = b.order[done], n = b.n[i];
    $('.dv-info').innerHTML = `<div class="dv-info-k">Siguiente clic · paso ${done + 1}</div><div class="dv-info-t">${dvEsc(n[5])}</div><div class="dv-info-m">${DV_TIPO[n[2]]}</div>`;
  }

  function paint() {
    const b = boards[cur];
    const spent = b.order.slice(0, done).reduce((s, i) => s + b.n[i][3], 0);
    $('.dv-count').innerHTML = b.order.length
      ? `Paso <b>${done}</b> / ${b.order.length}<small>${spent} / ${b.cost} pts</small>` : `<small>0 pts en JcE</small>`;
    $('.dv-range').max = b.order.length;
    $('.dv-range').value = done;
    container.querySelectorAll('.dv-btn')[0].disabled = done <= 0;
    container.querySelectorAll('.dv-btn')[1].disabled = done >= b.order.length;
    const svg = $('.dv-svg');
    svg.querySelectorAll('.dv-badge').forEach(g => {
      const st = +g.dataset.step;
      g.classList.toggle('done', st <= done);
      g.classList.toggle('next', st === done + 1);
    });
    const ring = svg.querySelector('.dv-next-ring');
    if (done < b.order.length) {
      const n = b.n[b.order[done]];
      ring.setAttribute('cx', n[1] + 0.5); ring.setAttribute('cy', n[0] + 0.5);
      ring.style.display = '';
    } else ring.style.display = 'none';
    container.querySelectorAll('.dv-list li').forEach((li, k) => {
      li.classList.toggle('done', k < done);
      li.classList.toggle('next', k === done);
    });
    nextInfo();
    dvSet('aion2_dv8_' + b.id, String(done));
  }

  function show(bi) {
    cur = bi;
    const b = boards[bi];
    container.querySelectorAll('.dv-tab').forEach((t, k) => { t.classList.toggle('active', k === bi); t.setAttribute('aria-selected', k === bi); });
    $('.dv-stage').innerHTML = dvBoardSVG(b, b.order);
    $('.dv-note').innerHTML = DV_NOTA[b.id] || '';
    let acc = 0;
    $('.dv-list').innerHTML = b.order.map((i, k) => {
      const n = b.n[i]; acc += n[3];
      const ico = DV_ICON[n[6]] ? `<img src="icons/${DV_ICON[n[6]]}" alt="">` : `<i class="k ${n[2] === 'N' ? 'k-esp' : 'k-stat'}"></i>`;
      return `<li data-k="${k}" class="t${n[2]}"><span class="no">${k + 1}</span>${ico}<span class="tx">${dvEsc(n[5])}</span><span class="pt">${n[3]} · ${acc}</span></li>`;
    }).join('');
    $('.dv-list-wrap').style.display = b.order.length ? '' : 'none';
    $('.dv-ctrl').style.display = b.order.length ? '' : 'none';
    $('.dv-sumwrap').innerHTML = b.order.length ? dvResumen(b, b.order) : '';
    done = Math.min(b.order.length, Math.max(0, parseInt(dvGet('aion2_dv8_' + b.id, '0'), 10) || 0));
    paint();
  }

  container.addEventListener('click', e => {
    const tab = e.target.closest('.dv-tab');
    if (tab) { show(+tab.dataset.b); return; }
    const btn = e.target.closest('.dv-btn');
    if (btn) { done = Math.max(0, Math.min(boards[cur].order.length, done + +btn.dataset.d)); paint(); return; }
    const li = e.target.closest('.dv-list li');
    if (li) { const k = +li.dataset.k; done = (done === k + 1) ? k : k + 1; paint(); return; }
    const hit = e.target.closest('.dv-hit');
    if (hit) info(+hit.dataset.i);
  });
  container.addEventListener('mouseover', e => { const hit = e.target.closest('.dv-hit'); if (hit) info(+hit.dataset.i); });
  $('.dv-stage').addEventListener('mouseleave', nextInfo);
  $('.dv-range').addEventListener('input', e => { done = +e.target.value; paint(); });

  show(0);
}

window.buildAllBoards = buildAllBoards;
document.addEventListener('DOMContentLoaded', buildAllBoards);
