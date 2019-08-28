var Mapping = require('./Mapping')

module.exports = class Mapper {
    constructor(){
        this.mappings = []
    }

    add(note, universe, cube) {
        this.mappings.push({note, universe, cube})
    }
    run(){
        // 1. midi input luisteren
        // 2. mappings[] filteren op midi msg[note]
        // 3. cube.play
    }
    // initMapping(){
    //     for (let index = this.midiNote; index < array.length; index++) {
    //         const element = array[index];
            
    //     }
    // }
    // getArt(midiNote) {
    //     var mappingIndex = this.mapping.map(x => x[0]).indexOf(midiNote)

    // }
}