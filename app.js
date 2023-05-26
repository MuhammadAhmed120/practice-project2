var posterName = document.querySelectorAll(".name")[0];
var postValue = document.querySelectorAll(".post-input")[0];
var postDiv = document.querySelectorAll(".posts")[0];

function addPost(){
    var posterValue = posterName.value;
    var post = `
        <li class="posted">
            <span class="posted-name-con">
                Posted by   
                <input type="text" value="${posterValue}" class="posted-name" disabled/>
            </span>
            <br />
            <p class="posted-content">${postValue.value}</p>  
        </li>
    `

    
    postDiv.innerHTML += post;
    postValue.value = "";
}
// postValue.style.color = "white";

var blackColor = false;
function colorChange(colorpick) {
    if (colorpick === "black") {
        postValue.style.backgroundColor = "black";
        postValue.style.color = "white";
    } else if (colorpick === "pink") {
        postValue.style.backgroundColor = "pink";
        postValue.style.color = "white";
    } else if (colorpick === "orange") {
        postValue.style.backgroundColor = "orange";
        postValue.style.color = "black";
    } else if (colorpick === "brown") {
        postValue.style.backgroundColor = "brown";
        postValue.style.color = "white";
    } else if (colorpick === "blue") {
        postValue.style.backgroundColor = "blue";
        postValue.style.color = "white";
    } else if (colorpick === "yellow") {
        postValue.style.backgroundColor = "yellow";
        postValue.style.color = "black";
    } else if (colorpick === "purple") {
        postValue.style.backgroundColor = "purple";
        postValue.style.color = "white";
    } else if (colorpick === "green") {
        postValue.style.backgroundColor = "green";
        postValue.style.color = "white";
    } else if (colorpick === "red") {
        postValue.style.backgroundColor = "red";
        postValue.style.color = "white";
    } else if (colorpick === "gray") {
        postValue.style.backgroundColor = "gray";
        postValue.style.color = "white";
    }
}
