radio.onReceivedString(function (receivedString) {
    signal = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    led.plotBarGraph(
    Math.map(signal, -95, -42, 0, 9),
    9
    )
    if (signal >= -73 && signal <= -35) {
        basic.showIcon(IconNames.No)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showIcon(IconNames.No)
        music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
    } else {
        basic.showIcon(IconNames.Yes)
    }
})
let signal = 0
radio.setGroup(1)
radio.setTransmitPower(2)
basic.forever(function () {
    radio.sendString("2")
    basic.pause(200)
})
