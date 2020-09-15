var colors = ["rgb(240, 30, 128)", "rgb(24, 14, 128)", "rgb(20, 1, 128)", "rgb(240, 14, 12)", "rgb(40, 4, 128)", "rgb(24, 14, 1)"];

var square = document.querySelectorAll(".square");

var colorDisplay = document.querySelector("#colorDisplay");


var reset = document.querySelector("#botonReset");

nuevaPartida=6;

var clickedColor;



function resetear() {
        var colors = generateRandomColors(nuevaPartida);
        var pickedColor = pickColor(colors);
        
      document.getElementById("colorDisplay").textContent= pickedColor;

        for (let index = 0; index < colors.length; index++) {
                square[index].style.background = colors[index];
                  }
}
resetear();



function esIgual(event) {
        clickedColor = event.toElement.style.background; console.log(clickedColor, pickedColor)
        if (clickedColor === pickedColor) {
                
                document.getElementById("message").textContent = "Felicidades! Ganaste :D";
                alert("Sorpresa! Presiona Aceptar para continuar ;)")
                document.querySelector("h1").style.backgroundColor = pickedColor;
                changeColors(clickedColor);
               
        } else {
                event.toElement.style.background = "rgb(165, 97, 97)";
                document.getElementById("message").textContent = "Seguí intentando"
        }
}




function changeColors(cambioColor) {
        for (var index = 0; index < square.length; index++) {
                square[index].style.background = cambioColor
        }
}


function pickColor(square) {
        var random = Math.floor(Math.random() * square.length);
        return pickedColor = square[random];

}



function colorRandom() {
        var r = Math.floor(Math.random() * 255);
        var g = Math.floor(Math.random() * 255);
        var b = Math.floor(Math.random() * 255);
        return "rgb(" + r + ", " + g + ", " + b + ")";
        
}


function generateRandomColors(num) {
        var array = [];
        for (let index = 0; index < num; index++) {
                array[index] = colorRandom();
        }
        return array;
}



var facil = document.getElementById ("botonFacil");

var dificil = document.getElementById ("botonDificil");


facil.addEventListener("click", function(){
        nuevaPartida=3;
        dificil.classList.remove("selected");
        facil.classList.add("selected");
        document.getElementById('facil1').style.display = 'none';      
        document.getElementById('facil2').style.display = 'none';      
        document.getElementById('facil3').style.display = 'none';      

                var colors = generateRandomColors(3);
        
                var pickedColor = pickColor(colors);
              
        
                for (let index = 0; index < colors.length; index++) {
                        square[index].style.background = colors[index];
                }
      
        }
                       
        
        
)

dificil.addEventListener("click", function () {
        nuevaPartida=6;
        document.getElementById('facil1').style.display = 'block';      
        document.getElementById('facil2').style.display = 'block';      
        document.getElementById('facil3').style.display = 'block';
        facil.classList.remove("selected");
        dificil.classList.add("selected");
        resetear();
})



reset.addEventListener("click", function () {
        document.getElementById("message").textContent = ''
        resetear();
});
