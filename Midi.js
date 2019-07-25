var easymidi = require('easymidi')
var Channel = require('./Channel')

module.exports = class Midi {
    constructor(midiInputs){
        this.midiInputs = midiInputs
        this.channels = []
        // this.initMidi()
    }

    getDevices(){
        let inputs = easymidi.getInputs()
        return inputs
    }

    initMidi(){
        let inputs = easymidi.getInputs()
        let input = new easymidi.Input(this.midiInputs = inputs[0])
        input.on('noteon', function(msg) {
            // this.channels.push(new Channel(1, 1, msg["velocity"]))
            console.log(msg["velocity"])
        })
        input.on('noteoff', function(msg){
            // this.channels.push(new Channel(1, 1, msg["velocity"]))
            console.log(msg)
        })
    }
}