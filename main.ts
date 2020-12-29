let degrees = 0
basic.forever(function () {
    music.setBuiltInSpeakerEnabled(true)
    while (true) {
        degrees = input.compassHeading()
        if (degrees <= 11.25 || degrees >= 348.75) {
            basic.showLeds(`
                . . # . .
                . . # . .
                . . # . .
                . . . . .
                . . . . .
                `)
            soundExpression.hello.playUntilDone()
        } else if (degrees <= 33.75) {
            basic.showLeds(`
                . # . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
        } else if (degrees <= 56.25) {
            basic.showLeds(`
                # . . . .
                . # . . .
                . . # . .
                . . . . .
                . . . . .
                `)
        } else if (degrees <= 78.75) {
            basic.showLeds(`
                . . . . .
                # . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
        } else if (degrees <= 101.25) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # # # . .
                . . . . .
                . . . . .
                `)
        } else if (degrees <= 123.75) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                # . . . .
                . . . . .
                `)
        } else if (degrees <= 146.25) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . # . . .
                # . . . .
                `)
        } else if (degrees <= 168.75) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . # . . .
                `)
        } else if (degrees <= 191.25) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . # . .
                . . # . .
                `)
        } else if (degrees <= 213.75) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . # .
                `)
        } else if (degrees <= 236.25) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . # .
                . . . . #
                `)
        } else if (degrees <= 258.75) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . #
                . . . . .
                `)
        } else if (degrees <= 281.25) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # # #
                . . . . .
                . . . . .
                `)
        } else if (degrees <= 303.75) {
            basic.showLeds(`
                . . . . .
                . . . . #
                . . # . .
                . . . . .
                . . . . .
                `)
        } else if (degrees <= 326.25) {
            basic.showLeds(`
                . . . . #
                . . . # .
                . . # . .
                . . . . .
                . . . . .
                `)
        } else if (degrees <= 348.75) {
            basic.showLeds(`
                . . . # .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
        }
        basic.pause(100)
    }
})
