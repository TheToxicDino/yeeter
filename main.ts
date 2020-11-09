controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Player_1.vy == 0) {
        Player_1.vy = -175
    }
})
let Player_1: Sprite = null
tiles.setTilemap(tilemap`level_1`)
Player_1 = sprites.create(img`
    . . . . . . . e e e e . . . . . 
    . . . . . e e 4 5 5 5 e e . . . 
    . . . . e 4 5 6 2 2 7 6 6 e . . 
    . . . e 5 6 6 7 2 2 6 4 4 4 e . 
    . . e 5 2 2 7 6 6 4 5 5 5 5 4 . 
    . e 5 6 2 2 8 8 5 5 5 5 5 4 5 4 
    . e 5 6 7 7 8 5 4 5 4 5 5 5 5 4 
    e 4 5 8 6 6 5 5 5 5 5 5 4 5 5 4 
    e 5 c e 8 5 5 5 4 5 5 5 5 5 5 4 
    e 5 c c e 5 4 5 5 5 4 5 5 5 e . 
    e 5 c c 5 5 5 5 5 5 5 5 4 e . . 
    e 5 e c 5 4 5 4 5 5 5 e e . . . 
    e 5 e e 5 5 5 5 5 4 e 5 . . . . 
    4 5 4 e 5 5 5 5 e e . 5 . . . . 
    . 4 5 4 5 5 4 e 5 . . 5 . . . . 
    . . 4 4 e e e 5 5 . 5 5 . . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(Player_1)
Player_1.setPosition(6, 596)
controller.moveSprite(Player_1, 100, 0)
Player_1.ay = 300
game.onUpdate(function () {
	
})
