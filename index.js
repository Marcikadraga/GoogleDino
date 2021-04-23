let imgContainer = document.getElementById("imgContainer");
imgContainer.style.height = "100vh"
imgContainer.style.width = "100%"
imgContainer.style.backgroundColor = "white";
imgContainer.style.display = "flex";
imgContainer.style.justifyContent = "center";
imgContainer.style.alignItems = "center";
imgContainer.style.border = "3px solid black";

let dino0 = document.getElementById("dino0");
dino0.style.position = "absolute";
dino0.onclick = function () {
    run();
}

let dino1 = document.getElementById("dino1");
dino1.style.position = "absolute";
dino1.style.visibility = "hidden";

let dino2 = document.getElementById("dino2");
dino2.style.position = "absolute";
dino2.style.visibility = "hidden";
let num = 1000;
let counter = 0;
function run() {
    if (true) {
        setTimeout(function () {
            counter++;
            if (counter % 2 == 0) {
                dino1.style.visibility = "hidden";
                dino2.style.visibility = "visible";
            }
            else {
                dino1.style.visibility = "visible";
                dino2.style.visibility = "hidden";
            }
            run();
        }, 300);
    }
}


