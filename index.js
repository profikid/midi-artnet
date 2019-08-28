var Mapper = require('./Mapper')
var Universe = require('./Universe') 
var Midi = require('./Midi') 
var Cube = require('./Cube')

var universes = [
    new Universe(1),
    new Universe(2, 7),
    new Universe(3),
    new Universe(4),
    new Universe(5),
    new Universe(6)
]

var mapper = new Mapper()
mapper.add(21,2, new Cube(1,1))
mapper.add(21, 2, new Cube(1, 31))
mapper.add(54, 5, 4)
mapper.add(76, 7, 6)

console.log(mapper)

let midi = new Midi()
let midiInput = midi.getDevices()
console.log(midiInput)
midi.initMidi(midiInput[0])