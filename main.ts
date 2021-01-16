input.onPinPressed(TouchPin.P0, function () {
    GPIO()
    basic.showArrow(ArrowNames.NorthEast)
})
input.onGesture(Gesture.TiltLeft, function () {
    for (let index = 0; index < 2; index++) {
        music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.OnceInBackground)
    }
    basic.pause(200)
    music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.OnceInBackground)
    basic.pause(200)
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.OnceInBackground)
})
input.onGesture(Gesture.EightG, function () {
    aihubenji()
})
function GPIO () {
    basic.showString("GPIO!")
    for (let index = 0; index < 3; index++) {
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.SmallHeart)
    }
}
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    input.calibrateCompass()
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("Hello!")
})
input.onGesture(Gesture.SixG, function () {
    aihubenji()
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(1, 16))
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showNumber(input.compassHeading())
})
function aihubenji () {
    basic.showString("aihubenji")
    basic.showIcon(IconNames.No)
}
input.onPinPressed(TouchPin.P2, function () {
    GPIO()
    basic.showArrow(ArrowNames.SouthWest)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("Bye")
})
radio.onReceivedString(function (receivedString) {
    soundExpression.twinkle.play()
    basic.showString(receivedString)
})
input.onGesture(Gesture.FreeFall, function () {
    aihubenji()
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("Happy!")
})
input.onPinPressed(TouchPin.P1, function () {
    light2()
})
function light2 () {
    if (input.lightLevel() < 10) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # # .
            . . # . .
            . # . . .
            `)
    } else {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
    }
}
input.onSound(DetectedSound.Loud, function () {
    input.setSoundThreshold(SoundThreshold.Loud, 150)
    for (let index = 0; index < 2; index++) {
        basic.showIcon(IconNames.SmallHeart)
        basic.showIcon(IconNames.Heart)
    }
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showNumber(input.temperature())
})
input.onGesture(Gesture.ThreeG, function () {
    basic.showNumber(randint(0, 1))
})
radio.setTransmitPower(6)
radio.setGroup(80)
basic.showString("Hello!I'm micro:bit")
