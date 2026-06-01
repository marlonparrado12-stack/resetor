radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    basic.pause(100)
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        # . . . #
        # . . . #
        `)
})
basic.forever(function () {
    radio.setGroup(31)
})
