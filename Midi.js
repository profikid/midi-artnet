var easymidi = require('easymidi')

module.exports = class Midi {
    constructor(midiInputs){
        this.midiInputs = midiInputs
    }

    getDevices(){
        let inputs = easymidi.getInputs()
        return inputs
    }
}