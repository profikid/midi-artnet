var Cube = require('./Cube')

module.exports = class Universe {
    constructor(universe, amountCubes = 9){
        this.universe = universe
        this.amountCubes = amountCubes
        this.cubes = []
        this.initCubes()
    }
    
    initCubes(){
        for (let cubeIndex = 0; cubeIndex <= this.amountCubes; cubeIndex++) {
            this.cubes.push(new Cube(cubeIndex, this.universe, cubeIndex * 30 + 1))            
        }
    }
}