var streams = [];
var fadeInterval = 1.6;
var symbolSize = 30;
var nextLetter = 0

function setup() {
  createCanvas(
    window.innerHeight,
    window.innerWidth,
    
  );
  
  background(0)
 
  var y = 0;
  for (var i = 0; i <= width / symbolSize; i++) {
    var stream = new Stream();
    stream.generateSymbols( random(-2000, 0), y);
    streams.push(stream);
    y += symbolSize * 2
  }

  textFont('Consolas');
  textSize(symbolSize);
}

function draw() {
  background(0, 150);
  streams.forEach(function(stream) {
    stream.render();
  });
}

function Symbol(x, y, speed, first, opacity) {
  this.x = x;
  this.y = y;
  this.value;

  this.speed = speed;
  this.first = first;
  this.opacity = opacity;

  this.switchInterval = round(random(20, 100));


  this.setToRandomSymbol = function() {
  
    if (frameCount % this.switchInterval == 0) {
      for(var i = 0; i < 7; i++){
        console.log(i)
      }
      var random = Math.floor(Math.random()*6)
      var array = ["jessica", "web developer", "coding","html" ,"css", "javascript",]
      this.value = array[random]
    }
  }

  this.rain = function() {
    this.x = (this.x >= height) ? 0 : this.x += this.speed;
  }

}

function Stream() {
  this.symbols = [];
  this.totalSymbols = round(random(1,1 ));
  this.speed = random(3, 7);

  this.generateSymbols = function(x, y) {
    var opacity = 255;
    var first = round(random(0, 4)) == 1;
    for (var i =0; i <= this.totalSymbols; i++) {
      symbol = new Symbol(
        x,
        y,
        this.speed,
        first,
        opacity
      );
      symbol.setToRandomSymbol();
      this.symbols.push(symbol);
      opacity -= (255 / this.totalSymbols) / fadeInterval;
      x -= (symbolSize* 10);
      first = false;
    }
  }

  this.render = function() {
    this.symbols.forEach(function(symbol) {
      if (symbol.first) {
        fill(140, 255, 170, symbol.opacity);
      } else {
        fill(0, 255, 70, symbol.opacity);
      }
      text(symbol.value, symbol.x,symbol.y,);
      symbol.rain();
      // symbol.setToRandomSymbol();
    });
  }
}

