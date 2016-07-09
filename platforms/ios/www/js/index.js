var existe_db
var db

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    alert("Hola");
	
	existe_db = window.localStorage.getItem("existe_db");
	db = window.openDatabase("agenda_curso","1.0","DB del curso de phonegap",200000);
	if (existe_db == null){
		creaDB();
	}
	
	}

function creaDB(){
	db.transaction(creaNuevaDB, errorDB, creaSuccess);
	
}
function creaNuevaDB(tx){
	alert("Crando Base de datos");
	tx.executeSql('DROP TABLE IF EXIST agenda_curso');
	
	var sql = "CREATE TABLE IF NOT EXIST agenda_curso ( " +
		"id INTEGER PRIMARY KEY AUTOINCREMENT, " +
		"nombre VARCHAR(50), " +
		"apellidos VARCHAR(50), " +
		"telefono VARCHAR(30), " +
		"categoria VARCHAR(30), " +
		"foto VARCHAR(2000), " +
		"email VARCHAR(30) ) "; 
		
		tx.executeSql(sql);
		
		tx.execiteSql("INSERT INTO agenda_curso (nombre,apellidos,telefono,categoria,foto,email) VALUES ('Ricardo','Juarez Duran','7861123214','familia','','ricardo@hotmail.com')");
		tx.execiteSql("INSERT INTO agenda_curso (nombre,apellidos,telefono,categoria,foto,email) VALUES ('oscar','Perez','7861553422','amigos','','oscar@hotmail.com')");
		tx.execiteSql("INSERT INTO agenda_curso (nombre,apellidos,telefono,categoria,foto,email) VALUES ('pepe','Lota','7861541236','trabajo','','ricardo@hotmail.com')");
}


function creaSuccess(){
		window.localStorage.setItem("existe_db",1);	
}

function errorBD(err){
 alert("Error DB: "+err);
}
