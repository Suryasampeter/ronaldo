var btn = document.getElementById("changebtn")
var hex=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
var body = document.querySelector("body")
var hexColor ="#"


btn.addEventListener('click', (e)=>{
    console.log("clicked")
    var randomHexColor=generateRandomColor()
    
    body.style.background = randomHexColor
    body.style.color = "white"
})

function generateRandomNumber(){
    return Math.floor(Math.random()*hex.length)
}


function generateRandomColor(){
    hexColor="#"
    for(var i=0; i<6; i++){
        var randomNum= generateRandomNumber()
        hexColor = hexColor+hex[randomNum]
    }

    console.log(hexColor)

    return hexColor;
}