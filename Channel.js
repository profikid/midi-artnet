var options = {
    host: 'localhost'
}
 var artnet = require('artnet')(options);

module.exports = class Channels {
    constructor(id, universeIndex, value) {
              this.id = id
              this.universeIndex = universeIndex
              this.value = value
            //   console.log('universeIndex ' + this.id )
              this.send()
    }

    send() {
        artnet.set(this.universeIndex, this.value)
    }
}