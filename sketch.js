var player, wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10;
var wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall18;
var trophy

function setup() {
  createCanvas(400, 400)

  player = createSprite(100, 100, 10, 10)
  player.shapeColor = "white"

  trophy = createSprite(200, 200, 10, 10)
  trophy.shapeColor = "gold"

  obGroup = new Group()



}

function draw() {
  background(0)


  if (keyDown("up")) {
    player.y -= 5
  }

  if (keyDown("down")) {
    player.y += 5
  }

  if (keyDown("left")) {
    player.x -= 5
  }

  if (keyDown("right")) {
    player.x += 5
  }

  if (obGroup.isTouching(player)) {
    text("game over", 200, 300);
    obGroup.destroyEach();
    player.destroy();
    trophy.destroy()
  }
  if (player.displace(trophy)) {
    text("you win", 200, 300);
    obGroup.destroyEach();
    //player.destroy();
    trophy.destroy()
  }
  obs()

  drawSprites();
}





function obs() {
  var ob = createSprite(Math.round(random(10, 400)), 200, Math.round(random(10, 40)), Math.round(random(10, 40)))
  ob.lifetime = 5
  obGroup.add(ob)
}