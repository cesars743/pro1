

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var wall1 = createSprite(100, 125, 10 , 250)
var wall2 = createSprite(25, 100, 50, 10)
var wall3 = createSprite(100, 300, 300, 10)
var wall4 = createSprite(100, 375, 10, 50)
var wall5 = createSprite(75, 150, 50, 10)
var wall6 = createSprite(25, 200, 50, 10)
var wall7 = createSprite(175, 200, 150, 10)
var wall8 = createSprite(200, 250, 100, 10)
var wall9 = createSprite(300, 325, 10, 150)
var wall10 = createSprite(325, 300, 50, 10)
var wall11 = createSprite(350, 200, 10, 200)
var wall12 = createSprite(300, 175, 10, 50)
var wall13 = createSprite(275, 50, 250, 10)
var wall14 = createSprite(275, 100, 150, 10)
var wall15 = createSprite(225, 150, 150, 10)
var wall16 = createSprite(150, 100, 10, 100)
var wall17 = createSprite(250, 350, 100, 10)
var wall18 = createSprite(150, 375, 10, 50)
var wall19 = createSprite(375, 350, 50, 10)
var wall20 = createSprite(385, 100, 25, 10)
var wall21 = createSprite(115, 150, 25, 10)
var wall22 = createSprite(250, 15, 10, 25)
var sofia =createSprite(50, 350, 10, 10)
var juan =createSprite(50, 50, 10, 10)
var cup1 =createSprite(400, 25, 40, 20)
var cup2 =createSprite(400, 375, 40, 20)

wall1.shapeColor=("red")
wall2.shapeColor=("red")
wall3.shapeColor=("red")
wall4.shapeColor=("red")
wall5.shapeColor=("red")
wall6.shapeColor=("red")
wall7.shapeColor=("red")
wall8.shapeColor=("red")
wall9.shapeColor=("red")
wall10.shapeColor=("red")
wall11.shapeColor=("red")
wall12.shapeColor=("red")
wall13.shapeColor=("red")
wall14.shapeColor=("red")
wall15.shapeColor=("red")
wall16.shapeColor=("red")
wall17.shapeColor=("red")
wall18.shapeColor=("red")
wall19.shapeColor=("red")
wall20.shapeColor=("red")
wall21.shapeColor=("red")
wall22.shapeColor=("red")
sofia.shapeColor=("orange")
juan.shapeColor=("green")
cup1.shapeColor=("green")
cup2.shapeColor=("orange")

createEdgeSprites()

function draw() {
background("black")

sofia.collide(edges)
sofia.bounceOff(wall1)
sofia.bounceOff(wall2)
sofia.bounceOff(wall3)
sofia.bounceOff(wall4)
sofia.bounceOff(wall5)
sofia.bounceOff(wall6)
sofia.bounceOff(wall7)
sofia.bounceOff(wall8)
sofia.bounceOff(wall9)
sofia.bounceOff(wall10)
sofia.bounceOff(wall11)
sofia.bounceOff(wall12)
sofia.bounceOff(wall13)
sofia.bounceOff(wall14)
sofia.bounceOff(wall15)
sofia.bounceOff(wall16)
sofia.bounceOff(wall17)
sofia.bounceOff(wall18)
sofia.bounceOff(wall19)
sofia.bounceOff(wall20)
sofia.bounceOff(wall21)
sofia.bounceOff(wall22)

juan.collide(edges)
juan.bounceOff(wall1)
juan.bounceOff(wall2)
juan.bounceOff(wall3)
juan.bounceOff(wall4)
juan.bounceOff(wall5)
juan.bounceOff(wall6)
juan.bounceOff(wall7)
juan.bounceOff(wall8)
juan.bounceOff(wall9)
juan.bounceOff(wall10)
juan.bounceOff(wall11)
juan.bounceOff(wall12)
juan.bounceOff(wall13)
juan.bounceOff(wall14)
juan.bounceOff(wall15)
juan.bounceOff(wall16)
juan.bounceOff(wall17)
juan.bounceOff(wall18)
juan.bounceOff(wall19)
juan.bounceOff(wall20)
juan.bounceOff(wall21)
juan.bounceOff(wall22)


if (sofia, juan.collide(cup1, cup2))
{
background("write")
  
}


if (keyDown("up")){
sofia.y=sofia.y-5
}
if (keyDown("down")){
sofia.y=sofia.y+5
}
if (keyDown("left")){
sofia.x=sofia.x-5
}
if (keyDown("right")){
sofia.x=sofia.x+5
}
if (keyDown("up")){
juan.y=juan.y-5
}
if (keyDown("down")){
juan.y=juan.y+5
}
if (keyDown("left")){
juan.x=juan.x-5
}
if (keyDown("right")){
juan.x=juan.x+5
}

drawSprites()  

}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
