let snelheid = 0
input.onButtonPressed(Button.A, function () {
    snelheid = 0
    while (snelheid < 1023) {
        pins.analogWritePin(AnalogPin.P0, snelheid)
        snelheid = snelheid + 1
    }
})
input.onGesture(Gesture.Shake, function () {
    snelheid = 100
    pins.analogWritePin(AnalogPin.P0, snelheid)
})
input.onButtonPressed(Button.B, function () {
    while (snelheid > 0) {
        pins.analogWritePin(AnalogPin.P0, snelheid)
        snelheid = snelheid - 1
    }
})
