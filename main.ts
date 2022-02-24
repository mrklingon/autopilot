function jibble () {
    for (let index = 0; index < 10; index++) {
        if (5 < randint(0, 10)) {
            for (let index = 0; index < randint(2, 6); index++) {
                goleft()
            }
        } else {
            for (let index = 0; index < randint(2, 6); index++) {
                goright()
            }
        }
        blast()
    }
}
input.touchD0.onEvent(ButtonEvent.Up, function () {
    blast()
})
input.touchD1.onEvent(ButtonEvent.Click, function () {
    pixel.setColor(0xff0000)
    droid += 1
    if (droid > 1) {
        droid = 0
    }
})
function blast () {
    pixel.setColor(0x00ff00)
    for (let index = 0; index < 4; index++) {
        keyboard.key("  ", KeyboardKeyEvent.Down)
        keyboard.key("  ", KeyboardKeyEvent.Up)
    }
    pixel.setColor(0x000000)
}
function goleft () {
    keyboard.functionKey(KeyboardFunctionKey.LeftArrow, KeyboardKeyEvent.Down)
    keyboard.functionKey(KeyboardFunctionKey.LeftArrow, KeyboardKeyEvent.Up)
}
function goright () {
    keyboard.functionKey(KeyboardFunctionKey.RightArrow, KeyboardKeyEvent.Down)
    keyboard.functionKey(KeyboardFunctionKey.RightArrow, KeyboardKeyEvent.Up)
}
let droid = 0
pixel.setColor(0x00ff00)
pixel.setBrightness(20)
droid = 0
pause(100)
pixel.setColor(0x000000)
forever(function () {
    if (1 == droid) {
        jibble()
    }
})
