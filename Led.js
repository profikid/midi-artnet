var options = {
    host: 'localhost'
}
 var artnet = require('artnet')(options);

module.exports = class Led {
    constructor(id, universeIndex, value) {
              this.id = id
              this.universeIndex = universeIndex
              this.value = value
              this.send()
    }

    send() {
        artnet.set(this.universeIndex, this.value)
    }
}