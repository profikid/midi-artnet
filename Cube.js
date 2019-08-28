var Channel = require('./Channel')

module.exports = class Cube {
    constructor(id, startChannelIndex){
        this.id = id
        this.startChannelIndex = startChannelIndex
        this.amountChannels = 30
        this.channels = []
        this.initChannels()
    }

    initChannels(){
        let endChannelIndex = this.startChannelIndex + this.amountChannels
        for (let index = this.startChannelIndex; index < endChannelIndex; index++) {
            this.channels.push(new Channel(index, 240))       
        }
    }

    play(universe, velocity){


        // 0. velocity naar RBG => color-convert-npm
        // 1. van elke led (is een eigen class met de RBG waardes welke het verstuurd) voer de fade in/out uit over artnet => check functional-easing npm

    }

    velocityToRBG(velocity) {
        // color convert hsl
        var result
        
        return result
    }


}