input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendNumber(2)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(0)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(4)
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(3)
})
basic.showIcon(IconNames.Yes)
radio.setGroup(54)
