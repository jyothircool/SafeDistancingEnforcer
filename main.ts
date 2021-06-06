radio.onReceivedString(function (receivedString) {
    signal = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    led.plotBarGraph(
    Math.map(signal, -95, -42, 0, 9),
    9
    )
})
let signal = 0
radio.setGroup(1)
radio.setTransmitPower(2)
basic.forever(function () {
    radio.sendString("2")
    basic.pause(200)
})
