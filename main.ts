input.onButtonPressed(Button.A, function () {
    basic.showString("ON")
    onOff = 1
})
radio.onReceivedString(function (receivedString) {
    if (onOff == 1) {
        signal = radio.receivedPacket(RadioPacketProperty.SignalStrength)
        led.plotBarGraph(
        Math.map(signal, -95, -42, 0, 9),
        9
        )
        if (signal >= -63 && signal <= -25) {
            music.startMelody(music.builtInMelody(Melodies.Baddy), MelodyOptions.Once)
            basic.showIcon(IconNames.No)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.showIcon(IconNames.No)
        } else {
            basic.showIcon(IconNames.Yes)
        }
        if (radio.receivedPacket(RadioPacketProperty.SignalStrength) <= -30) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("OFF")
    onOff = 0
})
let signal = 0
let onOff = 0
radio.setGroup(1)
basic.forever(function () {
    if (onOff == 1) {
        radio.setTransmitPower(2)
        radio.sendString("2")
        basic.pause(200)
    } else {
        radio.setTransmitPower(0)
    }
})
