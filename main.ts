let gio = 0
let phut = 0
let giay = 2
basic.forever(function () {
    if (gio == 0 && (phut == 0 && giay == 0)) {
        basic.showString("HAPPY NEW YEAR !!!")
    } else {
        basic.pause(1000)
        if (giay > 0) {
            giay += -1
        } else {
            giay = 59
            if (phut > 0) {
                phut += -1
            } else {
                if (gio > 0) {
                    gio += -1
                }
            }
        }
        basic.showString("" + gio + ":" + phut + ":" + giay)
    }
})
