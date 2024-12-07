function marriage(){
    marriage=window.prompt("SO DO YOU WANNA GET MARRIED TO HIM?")
    if (marriage=="Y"){
        window.alert("I LOVE YOU SOOO MUCH 💖")
     // Create a video element
 const video = document.createElement('video');
 video.setAttribute('controls', 'controls');
 video.setAttribute('width', '640');
 video.setAttribute('height', '360');
 
 // Create a source element
 const source = document.createElement('source');
 source.setAttribute('src', 'cat.mp4');
 source.setAttribute('type', 'video/mp4');
 
 // Append source to video
 video.appendChild(source);
 
 // Append video to the body
 document.body.appendChild(video);
 
 // Basic styling
 document.body.style.display = 'flex';
 document.body.style.flexDirection = 'column';
 document.body.style.alignItems = 'center';
 document.body.style.justifyContent = 'center';
 document.body.style.height = '100vh';
 document.body.style.backgroundColor = black;
 
 video.style.width = '100%';
 video.style.maxWidth = '640px';
 video.style.height = 'auto';
    }
    else {
         window.alert("PO DIIII 😼");
    }
    
}


window.alert("HII MAM !!!");
window.alert("REMEMBER THE FOLLOWING..!");
window.alert("`Y` FOR YES | `N` FOR NO");
result=window.prompt("DO YOU REALLY LOVE HIM?");
if (result=="Y"){
    marriage();
   
}

else if (result=="N"){
    angry_result=window.prompt("YOU ARE SURE THAT YOU HATE HIM RIGHT?");
    if (angry_result=="Y"){
    window.alert("YOU HAVE TO LOVE HIM MORE 😈");
 }
    else if (angry_result=="N"){
        marriage();
    }
}
else{
window.alert("Your Input Is Invalid as Your Points :)");
}