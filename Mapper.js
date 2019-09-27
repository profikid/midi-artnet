var easymidi = require('easymidi') 

module.exports = class Mapper {
    constructor(){
        // eerst een array opzetten
        this.mappings = []
    }

    // met deze functie kunnen we de midi noten koppelen naar een cube (new Cube(u,c)) welke op zijn 
    // buurt weer een universe en een cube (met daar weer in kanalen) bevat
    add(note, cube) {
        this.mappings.push({note, cube})
    }

    run(){
        // midi input opzetten
        let inputs = easymidi.getInputs()
        // midi input selecteren
        let input = new easymidi.Input(this.midiInputs = inputs[0])
        
        // midi input luisteren - note on
        input.on('noteon', ({velocity, note}) => {
      
            // filter this.mappings, let op de scope! 
            let filteredMappings = this.mappings.filter(el => el.note === note)
            console.table(filteredMappings)

            // en dan elke overeenkomt naar de cube sturen om te playen
            filteredMappings.forEach(m => m.cube.play(velocity))    
        })

        // midi input luisteren - note off
        input.on('noteoff', ({velocity, note}) => {
            // filter this.mappings, let op de scope! 
            let filteredMappings = this.mappings.filter(el => el.note === note)

            // en dan elke overeenkomt naar de cube sturen om te playen
            filteredMappings.forEach(m => m.cube.play(velocity))    
        })
    }
}