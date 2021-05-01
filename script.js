function openPartyOver(){
    document.querySelector(".open-party .join").classList.add("join-visible");
}

function openPartyOut(){
    document.querySelector(".open-party .join").classList.remove("join-visible");
}


function muteVideo(){
    document.querySelector(".video").muted=true;
}

function unmuteVideo(){
    document.querySelector(".video").muted=false;
}

function myFunction() {
    var checkBox=document.querySelector("#stopAudio");
    if (checkBox.checked==true){
        muteVideo();
    } else {
        unmuteVideo();
    }
}

function myOtherFunction() {
    var checkBox=document.querySelector("#stopVideo");
    if (checkBox.checked==true){
        document.querySelector(".player").innerHTML="<audio class=\"video\" autoplay><source src=\"img/login.mp3\" type=\"audio/mpeg\"></audio>";
        document.querySelector(".video").play();
    } else {
        document.querySelector(".player").innerHTML="<video class= \"img-fluid video\" autoplay loop id=\"myVideo\"><source class=\"\" src=\"img/login.mp4\" type=\"video/mp4\"></video>";
        document.querySelector(".video").play();
    }
}