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
}