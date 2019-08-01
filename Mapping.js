var Mapper = require('./Mapper')

mapping = []

module.exports = class Mapper {
    constructor(midiNote, universe, cube){
                this.midiNote = midiNote
                this.universe = universe
                this.mapping = mapping
                this.cube = cube
                this.initMapper()
    }
    initMapper(){
                this.mapping.push( this.midiNote, [this.universe, this.cube] )
                console.log(mapping)
    }
}