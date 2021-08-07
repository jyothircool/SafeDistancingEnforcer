radio.onReceivedString(function (receivedString) {
    signal = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    led.plotBarGraph(
    Math.map(signal, -95, -42, 0, 9),
    9
    )
    if (signal >= -73 && signal <= -35) {
        basic.showIcon(IconNames.No)
        music.playMelody("C5 B C5 B C5 B C5 B ", 500)
    } else {
        basic.showIcon(IconNames.Yes)
    }
})
let signal = 0
radio.setGroup(1)
radio.setTransmitPower(4)
basic.forever(function () {
    radio.sendString("2")
    basic.pause(200)
})
