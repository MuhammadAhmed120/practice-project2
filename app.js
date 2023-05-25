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