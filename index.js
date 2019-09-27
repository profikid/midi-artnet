var Mapper = require('./Mapper')
var Cube = require('./Cube')

var mapper = new Mapper()
mapper.add(36, new Cube(1, 1))
mapper.add(37, new Cube(1, 8))
mapper.add(54, new Cube(5, 4))
mapper.add(76, new Cube(7, 6))

mapper.run()

console.log(mapper)