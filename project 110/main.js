//https://teachablemachine.withgoogle.com/models/HqccuJQ3I/

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
var camera = document.getElementById("camera");

Webcam.attach(camera);

