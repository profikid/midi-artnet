var Mapping = require('./Mapping')
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

var mappings = [
    new Mapping(21, 2, 1),
    new Mapping(54, 5, 4),
    new Mapping(76, 7, 6)
]

console.log(mapping)

let midi = new Midi()
let midiInput = midi.getDevices()
console.log(midiInput)
midi.initMidi(midiInput[0])