let puntuacion = 0
function Saludar(){
    return confirm("Hola, bienvenido a Pregunta2 un nuevo juego online, estás listo?")
}
function SelectorDeTema(Numero){
    const temas = ["Geografia", "Matematica", "Historia", "Deporte"]
    let PosicionActual = 0
    for(let i = 0; i < Numero; i++){
        PosicionActual = (PosicionActual + 1) % temas.length
    }
    return temas[PosicionActual]
}

function RealizarPregunta(Tema, i){
    let Respuesta = ""
    if(i == 0){
        switch (Tema){
            case "Geografia":
                Respuesta = prompt("Pregunta: ¿Cuál es el río más largo del mundo? ... a) Nilo; b)Amazonas")
                if (Respuesta == "b"){
                    puntuacion += 10
                }
                break
            case "Matematica":
                Respuesta = prompt("Pregunta: ¿Cuál es el valor de π (pi) aproximado a dos decimales? ... a)3.14; b)2.71")
                if (Respuesta == "a"){
                    puntuacion += 10
                }
                break
            case "Historia":
                Respuesta = prompt("Pregunta: ¿En qué año comenzó la Segunda Guerra Mundial? ... a)1939; b)1941")
                if (Respuesta == "a"){
                    puntuacion += 10
                }
                break
            case "Deporte":
                Respuesta = prompt("Pregunta: ¿En qué deporte se utiliza una pelota y una red en una cancha rectangular? ... a)Tenis; b)Baloncesto")
                if (Respuesta == "a"){
                    puntuacion += 10
                }
                break
        }
    }else if(i == 1){
        switch (Tema){
            case "Geografia":
                Respuesta = prompt("Pregunta: ¿Cuál es la capital de Australia? .. a)Sidney; b)Canberra")
                if (Respuesta == "b"){
                    puntuacion += 10
                } 
                break
            case "Matematica":
                Respuesta = prompt("Pregunta: ¿Cuál es la raíz cuadrada de 81? ... a)9; b)8")
                if (Respuesta == "a"){
                    puntuacion += 10
                } 
                break
            case "Historia":
                Respuesta = prompt("Pregunta: ¿Quién fue el primer presidente de los Estados Unidos? ... a)Thomas Jefferson; b)George Washington")
                if (Respuesta == "b"){
                    puntuacion += 10
                } 
                break
            case "Deporte":
                Respuesta = prompt("Pregunta: ¿Cuál es el evento deportivo más visto en el mundo? ... a)Superbowl; b)Copa Mundial de la FIFA")
                if (Respuesta == "b"){
                    puntuacion += 10
                } 
                break
        }
    }else{
        switch (Tema){
            case "Geografia":
                Respuesta = prompt("Pregunta: ¿En qué continente se encuentra el desierto del Sahara? ... a)Africa; b)Asia")
                if (Respuesta == "a"){
                    puntuacion += 10
                }
                break
            case "Matematica":
                Respuesta = prompt("Pregunta: ¿Qué es un número primo? ... a)Un numero divisible solo por 1 y por si mismo; b)Un número que tiene más de dos divisores")
                if (Respuesta == "a"){
                    puntuacion += 10
                }
                break
            case "Historia":
                Respuesta = prompt("Pregunta: ¿Qué civilización construyó las pirámides de Egipto? ... a)Los romanos; b)Los egipcios")
                if (Respuesta == "b"){
                    puntuacion += 10
                }
                break
            case "Deporte":
                Respuesta = prompt("Pregunta: ¿Cuántos jugadores hay en un equipo de fútbol en el campo? ... a)11; b)12")
                if (Respuesta == "a"){
                    puntuacion += 10
                }
                break
        }
    }
}

function Preguntas(i){
    let NumeroElegido = prompt("Por favor elije un número del 1 al 100 y diferente al anterior elegido")
    if (NumeroElegido <= 100 && NumeroElegido >= 0){
        let TemaPreguntar = SelectorDeTema(NumeroElegido)
        alert("Te tocó "+ TemaPreguntar)
        RealizarPregunta(TemaPreguntar, i)
    }else{
        alert("Te dije que del 1 al 100 >:(")
        return Preguntas(i)
    }
}
let Saludo = Saludar()
if (Saludo == true){
    alert("Vamos a realizar 3 preguntas en relacion a geografia, matematica, historia o deporte, cada respuesta correcta tendrá un valor de 10 puntos. Deberas elegir entre 2 opciones 'a' o 'b'")
    for(let i = 0; i < 3; i++){
        Preguntas(i)
    }
    alert("Felicitaciones tu puntuacion es de " + puntuacion + ". Gracias por jugar :)")
} else {
    alert("En otro momento será entonces :((")
}