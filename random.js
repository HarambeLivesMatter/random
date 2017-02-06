var namespace = "http://www.w3.org/2000/svg"


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createFirstScene() {
  var rando =  Math.random()
    if(rando > 0.5){
        makeImage("http://kingofwallpapers.com/snowing/snowing-002.jpg",0,0,400,400)    
    makeCircle(100,100,30,"white",1)
makeCircle(100,60,25,"white",1)
makeCircle(100,20,20,"white",1)
makeCircle(100,60,3,"black",1)
makeCircle(100,70,3,"black",1)
makeCircle(100,50,3,"black",1)
makeCircle(90,20,2,"black",1)
makeCircle(110,20,2,"black",1)
 makeLine(78,50 ,50, 75, "brown",3,1)
makeLine(122,50, 150,75,"brown",3,1)
makeLine(100,25, 120,25,"orange",1,1)
makeCircle(100,30,1,"black",1)
makeCircle(90,28,1,"black",1)
makeCircle(95,30,1,"black",1)
makeCircle(112,28,1,"black",1)
makeCircle(108,30,1,"black",1)
makeCircle(105,30,1,"black",1)
makeImage("http://vignette3.wikia.nocookie.net/clubpenguin/images/6/60/TopHatPuffleHat.png/revision/latest?cb=20131003112048",95,0,10,10)
}else if(rando < 0.5){
makeImage("http://kingofwallpapers.com/snowing/snowing-002.jpg",0,0,400,400)    
makeCircle(100,100,30,"white",1)
makeCircle(100,60,25,"white",1)
makeCircle(100,20,20,"white",1)
makeCircle(100,60,3,"black",1)
makeCircle(100,70,3,"black",1)
makeCircle(100,50,3,"black",1)
makeCircle(90,20,2,"black",1)
makeCircle(110,20,2,"black",1)
 makeLine(78,50 ,50, 75, "brown",3,1)
makeLine(122,50, 150,75,"brown",3,1)
makeLine(100,25, 120,25,"orange",1,1)
makeCircle(100,30,1,"blue",1)
makeCircle(90,28,1,"blue",1)
makeCircle(95,30,1,"blue",1)
makeCircle(112,28,1,"blue",1)
makeCircle(108,30,1,"blue",1)
makeCircle(105,30,1,"blue",1)
makeImage("http://vignette3.wikia.nocookie.net/clubpenguin/images/6/60/TopHatPuffleHat.png/revision/latest?cb=20131003112048",95,0,10,10)
}
}


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createSecondScene() {
    var number = Math.random()
    if(number > 0.5){
    makeRect(0,0,390,300,"black",1)
makeRect(20,150,50,150,"brown",1)
makeRect(35,130,20,20,"white",1)
makeEllipse(45, 120, 4, 10, "red", 1)
makeEllipse(45, 120, 2, 8, "orange", 1)
makeRect(240,150,50 ,150,"brown",1)
makeRect(255,130,20,20,"white",1)
makeEllipse(265,120,4,10,"red",1)
makeEllipse(265,120,2,8,"orange",1)
makeRect(65,150,180,150,"brown",1)
makeImage("https://img.clipartfox.com/ee8cb2242f97b42d1b5eba8ac069a197_melting-snowman-royalty-free-clipart-melting-snowman_1300-1025.jpeg",105,105,50,50,1)}
    else if (number < 0.5){
       makeRect(0,0,390,300,"black",1)
makeRect(20,150,50,150,"brown",1)
makeRect(35,130,20,20,"white",1)
makeEllipse(45, 120, 4, 10, "red", 1)
makeEllipse(45, 120, 2, 8, "orange", 1)
makeRect(240,150,50 ,150,"brown",1)
makeRect(255,130,20,20,"white",1)
makeEllipse(265,120,4,10,"red",1)
makeEllipse(265,120,2,8,"orange",1)
makeRect(65,150,180,150,"brown",1)
makeImage("https://img.clipartfox.com/ee8cb2242f97b42d1b5eba8ac069a197_melting-snowman-royalty-free-clipart-melting-snowman_1300-1025.jpeg",105,105,50,50,1)
    makeRect(210,130,20,20,"white",1)
makeEllipse(220,120,4,10,"red",1)
makeEllipse(220,120,2,8,"orange",1)
makeRect(70,130,20,20,"white",1)
makeEllipse(80,120,4,10,"red",1)
makeEllipse(80,120,2,8,"orange",1)
    }
    }

    



// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createThirdScene() {
    var hi = Math.random()
    if(hi > 0.5){
    makeRect(0,0,300,300,"lightblue",1)
makeRect(0,150,300,150,"yellow",1)
makeLine(150,150,150,100,"brown",2,1)
makeLine(120,150,120,100,"brown",2,1)
makeRect(70,50,120,50,"brown",1)
makeText("SnowMen Population:0", 75, 90, 10,  'Roboto', "white",1)
makeText("Nosnowmen Town",75,70,10,'Roboto',"white",1)
    }else if (hi < 0.5){
      makeRect(0,0,300,300,"white",1)
makeRect(0,150,300,150,"yellow",1)
makeLine(150,150,150,100,"brown",2,1)
makeLine(120,150,120,100,"brown",2,1)
makeRect(70,50,120,50,"brown",1)
makeText("SnowMen Population:0", 75, 90, 10,  'Roboto', "white",1)
makeText("Nosnowmen Town",75,70,10,'Roboto',"white",1)
makeImage("https://txtumbleweed100.com/img/tumbleweed.gif",10,100,50,50)
    }
}





// FILL IN THIS FUNCTION!
// This function is called whenever you press the "Go!" button.
function createRandomScene() {
    // Generate a random number between 0 and 1, and store it in a variable.
    var randoNumber = Math.random()
    // If the number is less than 0.33, call the function to create your first scene.
    
    if(randoNumber < 0.33){ 
        createFirstScene() 
    }
    
    // Else, if the number is less than 0.67, call the function to create your second scene.
    else if (randoNumber < 0.67){
        createSecondScene()
    }
    
    
    // Else, call the function to create your third scene.
    else { 
        createThirdScene()
    }
    
}



// DO NOT EDIT ANYTHING BELOW THIS LINE!
// These are the functions you should call to
// easily create shapes in JavaScript. Feel free
// to check them out if you're curious how they
// work, but don't change them!
// <3 Ms. Squires
function makeCircle(cx, cy, r, fill, opacity) {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", cx)
  circle.setAttribute("cy", cy)
  circle.setAttribute("r", r)
  circle.setAttribute("fill", fill)
  circle.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(circle)
  return circle
}

function makeRect(x, y, width, height, fill, opacity) {
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", x)
  rect.setAttribute("y", y)
  rect.setAttribute("width", width)
  rect.setAttribute("height", height)
  rect.setAttribute("fill", fill)
  rect.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(rect)
  return rect
}

function makeEllipse(cx, cy, rx, ry, fill, opacity) {
  var ellipse = document.createElementNS(namespace, "ellipse")
  ellipse.setAttribute("cx", cx)
  ellipse.setAttribute("cy", cy)
  ellipse.setAttribute("rx", rx)
  ellipse.setAttribute("ry", ry)
  ellipse.setAttribute("fill", fill)
  ellipse.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(ellipse)
  return ellipse
}

function makeLine(x1, y1, x2, y2, stroke, strokeWidth, opacity) {
  var line = document.createElementNS(namespace, "line")
  line.setAttribute("x1", x1)
  line.setAttribute("y1", y1)
  line.setAttribute("x2", x2)
  line.setAttribute("y2", y2)
  line.setAttribute("stroke", stroke)
  line.setAttribute("stroke-width", strokeWidth)
  line.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(line)
  return line
}

function makePolyline(points, stroke, strokeWidth, opacity) {
  var polyline = document.createElementNS(namespace, "polyline")
  polyline.setAttribute("points", points)
  polyline.setAttribute("stroke", stroke)
  polyline.setAttribute("stroke-width", strokeWidth)
  polyline.setAttribute("opacity", opacity)
  polyline.setAttribute("fill", "none")
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polyline)
  return polyline
}

function makePolygon(points, fill, opacity) {
  var polygon = document.createElementNS(namespace, "polygon")
  polygon.setAttribute("points", points)
  polygon.setAttribute("opacity", opacity)
  polygon.setAttribute("fill", fill)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polygon)
  return polygon
}

function makeText(message, x, y, fontSize, fontFamily, fill, opacity) {
  var text = document.createElementNS(namespace, "text")
  text.innerHTML = message
  text.setAttribute("x", x)
  text.setAttribute("y", y)
  text.setAttribute("font-size", fontSize)
  text.setAttribute("font-family", fontFamily)
  text.setAttribute("fill", fill)
  text.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(text)
  return text
}

function makeImage(url, x, y, width, height, opacity) {
  var image = document.createElementNS(namespace, "image")
  image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url)
  image.setAttribute("x", x)
  image.setAttribute("y", y)
  image.setAttribute("width", width)
  image.setAttribute("height", height)
  image.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(image)
  return image
}