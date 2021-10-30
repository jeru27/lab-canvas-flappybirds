/**
 * Archivo para variables que utiliza mi video juego
 * 
 */
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let frames = 0;
const gravity = 0.1;

// array pipes
let pipes = [];
let points = 0;
let diff = 1;
let requestID;


//audio
const audio = new Audio();
//audio.src=""

//audioend

// ejemplo para heroe

let dylanDefault = {
    vida: 3,
    status: "pequeno", 
    monedas: 0
}