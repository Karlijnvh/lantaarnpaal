let toestand = 1
let timerEindtijd = input.runningTime() + 5000
basic.forever(function () {
    if (toestand == 1) {
        if (input.lightLevel() < 100) {
            if (input.runningTime() >= timerEindtijd) {
                basic.showLeds(`
                    # # # # #
                    # # # # #
                    # # # # #
                    # # # # #
                    # # # # #
                    `)
                timerEindtijd = input.runningTime() + 5000
                toestand = 2
            }
        }
    }
    if (toestand == 2) {
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
})
