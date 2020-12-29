let degrees = 0
basic.forever(function () {
    degrees = input.compassHeading()
    if (degrees < 11.25) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (degrees < 33.75) {
        basic.showLeds(`
            . # . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (degrees < 56.25) {
        basic.showLeds(`
            # . . . .
            . # . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (degrees < 78.75) {
        basic.showLeds(`
            . . . . .
            # . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (degrees < 101.25) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # . .
            . . . . .
            . . . . .
            `)
    } else if (degrees < 123.75) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            # . . . .
            . . . . .
            `)
    } else if (degrees < 146.25) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # . . .
            # . . . .
            `)
    } else if (degrees < 168.75) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . # . . .
            `)
    } else if (degrees < 191.25) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . # . .
            . . # . .
            `)
    } else if (degrees < 213.75) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . # .
            `)
    } else if (degrees == 10) {
    	
    } else if (degrees >= 247.5 - 11.25) {
    	
    } else if (degrees >= 270 - 11.25) {
    	
    } else if (degrees >= 292.5 - 11.25) {
    	
    } else if (degrees >= 315 - 11.25) {
    	
    } else if (degrees >= 337.5 - 11.25) {
    	
    } else if (degrees >= 360 - 11.25) {
    	
    } else {
    	
    }
    basic.pause(100)
})
