var Led = require('./Led')
var convert = require('color-convert');
var options = {
    host: 'localhost'
}
var artnet = require('artnet')(options);

var channelIndex = 1
var amountChannels = 30


module.exports = class Cube {
    constructor(universe, id){
        this.universe = universe
        this.id = id
        this.startChannel = channelIndex
        this.amountChannels = amountChannels
        channelIndex += amountChannels
        this.channels = []
    }

    play(velocity){

        let rbg = this.velocityToRBG(velocity)
        
        // herhaal de waardes 10 keer
        let values = Array(10).fill(rbg).flat()

        // 1.  de fade in/out  => check functional-easing en animation-timer, artnet heeft een limiet van 40 fps 

        // stuur de waardes naar artnet
        artnet.set(this.universe, this.startChannel, values)



    }


    // velocity naar RBG
    velocityToRBG(velocity){
         // convert hsl naar rgb waarbij de l door de velocity van midi bepaald wordt 
         let rgb = convert.hsl.rgb(235, 52, velocity / 127 * 100)
         // rgb naar rbg
         return [rgb[0], rgb[2], rgb[1]]
    }

}