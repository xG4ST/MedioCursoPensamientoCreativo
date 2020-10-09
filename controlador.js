//Instanciamos objetos de Dado y Jugador
var dado = new Dado();
var player1 = new Jugador("1");
var player2 = new Jugador("2");

//Eventos de click para cada Jugador
document.getElementById('btn1').addEventListener('click',jugar1);
document.getElementById('btn2').addEventListener('click',jugar2);
	
//Función Jugar
function jugar1()
{
	var id = "ficha1";
	var id2 = "r1";
	player1.recibirResultado(dado.lanzar(),id,id2);
}

function jugar2()
{
	var id = "ficha2";
	var id2 = "r2";
	player2.recibirResultado(dado.lanzar(),id,id2);
}