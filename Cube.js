var artnetOptions = {
    host: 'localhost'
}
var AnimationTimer = require('animation-timer').AnimationTimer
var Easer = require('functional-easing').Easer
var convert = require('color-convert')
var artnet = require('artnet')(artnetOptions)
var lerp = require('lerp')
var arrayMove = require('array-move')


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

    play(velocity, universe, startChannel){

        // we krijgen wel de goede universe en startChannel binnen! 
        console.log('playVel: ' + velocity)
        console.log('playUni: ' + universe)
        console.log('playStartChan: ' + startChannel)

        // Hier moet de gekozen hsv waarde komen welke vervolgens via een easing functie een mooie fade in/out krijgt
        let hsvinput = [0, 45, 100]

        // selecteer de easing preset, opties op: https://www.npmjs.com/package/functional-easing#easerusingpreset
        var easer = new Easer().using('ease-in-sine')

        // zorg dat de easing wordt uitgevoerd
        var animation = new AnimationTimer().duration('2000ms') // Kan ms, s of in m
            
            // here we wrap our tick handler with our easer..
            .on('tick', easer(function(velocity){
                // every tick, this function will be called and 'time' will be already 'eased'
                hsvinput[2] = lerp(1, 100, velocity)
                console.log('hsvinput: ' + hsvinput)

                // voer de conversie uit 
                // let rbg = this.velocityToRBG(hsvinput)   //  <= hierbij gaat het fout met de scope van de functies
                
                let rgb = convert.hsv.rgb(hsvinput)
                let rbg = arrayMove(rgb, 1, 2)

                console.log('rgb: ' + rbg)

                // herhaal de waardes 10 keer
                let values = Array(10).fill(rbg).flat()

                console.log('values: ' + values)


                // stuur de waardes naar artnet
                artnet.set(this.universe, this.startChannel, values) // <= HOE KRIJG IK HIER UNIVERSE EN STARTCHANNEL BINNEN?
            }))
            .play()
    }

    // velocity naar RBG
    velocityToRBG(hsvfade){
         // convert hsv naar rgb waarbij de l door de velocity van midi bepaald wordt 
         let rgb = convert.hsv.rgb(hsvfade)
         // rgb naar rbg
         return [rgb[0], rgb[2], rgb[1]]
    }

}