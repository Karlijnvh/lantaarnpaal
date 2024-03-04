let timerEindtijd = 0
let toestand = 1
basic.forever(function () {
    if (toestand == 1) {
        if (input.lightLevel() < 100) {
            toestand = 2
            timerEindtijd = input.runningTime() + 5000
        }
    }
    if (toestand == 2) {
        if (input.runningTime() >= timerEindtijd) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            toestand = 3
        }
        if (input.lightLevel() >= 100) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            toestand = 1
        }
        if (input.lightLevel() >= 100) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            toestand = 1
        }
    }
    if (toestand == 3) {
        if (input.lightLevel() >= 100) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            toestand = 1
        }
        if (input.lightLevel() < 100) {
            toestand = 1
        }
    }
})
