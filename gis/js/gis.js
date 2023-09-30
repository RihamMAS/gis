
function video(n) {
    document.getElementById("slider").src = n ;
}

// GAME SECTION

let itemsrc = null;

function drag(event) {
    itemsrc = event.target.src;
    // console.log(itemsrc);
    document.getElementById(".graphic").classList.add("drag");   
    // event.target.classList.add("drag")
}

function drop(event, mapId) {
    var img = document.createElement("img");
    img.src = itemsrc;

    // Get the corresponding "map" element by its unique class
    const mapElement = document.querySelector(`.${mapId}`);

    // Append the image to the correct "map" element
    mapElement.appendChild(img);

    // Reset the drag class
    // document.getElementById("graphic").classList.remove('drag');

    document.getElementById(".graphic").innerHTML = "" 
    document.getElementById(".graphic").appendChild(img)
    document.getElementById(".graphic").classList.remove('drag');

}


function allowdrop(event){
    event.preventDefault()
}



console.log("hello")