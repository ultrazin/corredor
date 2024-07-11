var  leftBoundary,rightBoundary;
var pista, runner;


function preload(){
  //loadImage (carregarImagem) da pista)
  pistaImg = loadImage("path.png")
  //loadAnimation (carregarAnimação) de corrida para o menino
  runnerAnim = loadAnimation("jake3.png","jake2.png", "jake1.png")
}

function setup(){
  
  createCanvas(400,400);
 //crie um sprite para a pista 
  pista = createSprite(200,200)
//adicione uma imagem para a pista
pista.addImage(pistaImg);
//Faça com que a pista seja um fundo que se move dando a ela velocity Y.
 pista.velocityY = 4
pista.scale=1.2;

//crie um sprite de menino
runner= createSprite(100,200)
//adicione uma animação de corrida para ele
runner.addAnimation("running",runnerAnim)
runner.scale=0.5;
  
//crie um limite à esquerda
leftBoundary=createSprite(0,0,100,800);
//defina visibilidade como falsa para o limite à esquerda
leftBoundary.visible = false;
//crie um limite à direita
rightBoundary=createSprite(410,0,100,800);
//defina visibilidade como falsa para o limite à direita
rightBoundary.visible = false;
}

function draw() {
  background(0);
  pista.velocityY = 4;
  
  // mover o menino com o mouse usando mouseX
  
   runner.x =mouseX
  edges= createEdgeSprites();
  runner.collide(edges[3]);
  // colidir o menino com os limites invisíveis da esquerda e da direita
  
  runner.collide(leftBoundary);
  runner.collide(rightBoundary);

  //código para redefinir o fundo
  if(pista.y > 400 ){
    pista.y = height/2;
  }
  
  drawSprites();
}