let dino0 = document.getElementById("dino0");

dino0.onclick = function () {
    run();
}

let dino1 = document.getElementById("dino1");
dino1.style.visibility = "hidden";

let dino2 = document.getElementById("dino2");
dino2.style.visibility = "hidden";
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
            // console.log(counter);
            run();
        }, 150);
    }
}

