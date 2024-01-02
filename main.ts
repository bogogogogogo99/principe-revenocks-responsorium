sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    scene.cameraShake(4, 500)
    otherSprite.destroy(effects.bubbles)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
    sprite.startEffect(effects.hearts, 100)
    music.baDing.play()
})
let projectile: Sprite = null
let choice = 0
scene.setBackgroundColor(13)
let mySprite = sprites.create(img`
    . . . . . . e e e e . . . . . . 
    . . . . e e e e e e e e . . . . 
    . . . e e e e e e e e e e . . . 
    . . e e e e e e e e e e e e . . 
    . . e e e e e e e e e e e e . . 
    . . e e e e e e e e e e e e . . 
    . . e e e 3 3 3 3 3 3 e e e . . 
    . e e e e 3 f 3 3 f 3 e e e e . 
    . e e e e 3 f 3 3 f 3 e e e e . 
    . . f e e 3 3 3 3 3 3 e e f . . 
    . . . f e e 3 3 3 3 e e f . . . 
    . . f f f f 1 1 1 1 f f f f . . 
    . . 3 d f f 1 1 1 1 f f d 3 . . 
    . . 3 3 f f f b b f f f 3 3 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
mySprite.setStayInScreen(true)
info.setLife(3)
game.onUpdateInterval(500, function () {
    choice = randint(1, 3)
    if (choice == 1) {
        projectile = sprites.createProjectileFromSide(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . e e . . . . . 
            . . . . . e e e e e e e e . . . 
            . . . . . e e e e e e e e . . . 
            . . . . . e e 3 3 3 3 e e . . . 
            . . . . . e e f 3 3 f e e . . . 
            . . . . . e e 3 3 3 3 e e . . . 
            . . . 9 9 9 9 3 3 3 3 9 9 9 9 9 
            . . d 9 9 9 9 9 9 9 9 9 9 9 9 9 
            . . . 9 9 9 9 9 9 9 9 9 9 9 9 9 
            . . . 9 9 9 9 9 9 9 9 9 9 9 9 . 
            . . . . . . 9 9 9 9 9 9 9 . . . 
            . . . . . . . . . . 9 9 . . . . 
            `, -60, 0)
    } else if (choice == 2) {
        projectile = sprites.createProjectileFromSide(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f f . . . . 
            . . . . f f f f f f f f f . . . 
            . . . . f f f 3 3 3 f f f f . . 
            . . . d f f 3 3 3 3 3 f f f . . 
            . . . f f f 3 f 3 f 3 f f f . . 
            . . . f f f 3 3 3 3 3 f f f . . 
            . . . f f f f 2 2 2 2 f f f . . 
            . . . f f f 2 2 2 2 2 f f . . . 
            . . . f f f 2 2 2 2 2 f . . . . 
            . . f f f f 2 2 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, 60, 0)
    } else {
        projectile = sprites.createProjectileFromSide(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . f 1 1 1 1 1 1 f . . . . 
            . . . . f 1 1 1 1 1 1 f . . . . 
            . . . . f 1 1 1 1 1 1 f . . . . 
            . . . 9 9 9 9 9 9 9 9 9 9 . . . 
            . . . f f f f f f f f f f . . . 
            . . . 9 9 9 9 9 9 9 9 9 9 . . . 
            . . . 9 9 9 9 9 9 9 9 9 9 . . . 
            . . . 9 9 9 9 9 9 9 9 9 9 . . . 
            . . . 9 9 9 9 9 9 9 9 9 9 . . . 
            . . . 9 9 9 9 9 9 9 9 9 9 . . . 
            . . . 9 9 9 9 9 9 9 9 9 . . . . 
            . . . f f f . f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            `, 55, 0)
        projectile.setKind(SpriteKind.Food)
    }
    projectile.y = randint(10, 110)
})
