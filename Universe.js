var Cube = require('./Cube')

module.exports = class Universe {
    constructor(id, amountCubes = 9){
        this.id = id
        this.universeIndex = id
        this.amountCubes = amountCubes
        this.cubes = []
        this.initCubes()
    }
    
    initCubes(){
        for (let cubeIndex = 0; cubeIndex <= this.amountCubes; cubeIndex++) {
            this.cubes.push(new Cube(cubeIndex, this.universeIndex, cubeIndex * 30 + 1))            
        }
    }
}