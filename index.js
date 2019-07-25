var Universe = require('./Universe') 
var Midi = require('./Midi') 

var universes = [
    new Universe(1),
    new Universe(2, 7),
    new Universe(3),
    new Universe(4),
    new Universe(5),
    new Universe(6)
]

let midi = new Midi()
let midiInput = midi.getDevices()
console.log(midiInput)
midi.initMidi(midiInput[0])