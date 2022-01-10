//https://teachablemachine.withgoogle.com/models/6u82q5VPi/
var prediction1 = "";
var prediction2 = "";
Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});
cam = document.getElementById("camera");

Webcam.attach(cam);

function webcamsnap() {
    Webcam.snap(function (data_uri) {
        document.getElementById("answer").innerHTML = "<img src= '" + data_uri + "'id='image'>";
    });
}


console.log("ml5 version= ", ml5.version);
var classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/6u82q5VPi/model.json', modelLoaded)
function modelLoaded() { console.log("model Loaded"); }
function speak() {
    synth = window.speechSynthesis;
    speakdata1 = "The first Prediction - " + prediction1;
    speakdata2 = "The second prediction - " + prediction2;
    utterThis = new SpeechSynthesisUtterance(speakdata1 + speakdata2)
    synth.speak(utterThis)
}
function predict() {
    img = document.getElementById("image");
    classifier.classify(img, gotResult)
}
function gotResult(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results)
        document.getElementById("result_gesture_name").innerHTML = results[0].label;
        document.getElementById("result_gesture_name2").innerHTML = results[1].label;
        prediction1 = results[0].label;
        prediction2 = results[1].label;
        speak();
        if (results[0].label == "Good") {
            document.getElementById("result_gesture_name").innerHTML = "Good &#128076;"
        }
        if (results[0].label == "Yo") {
            document.getElementById("result_gesture_name").innerHTML = "Yo &#129304;"
        }
        if (results[0].label == "Clap") {
            document.getElementById("result_gesture_name").innerHTML = "Clap &#128079;"
        }
        if (results[0].label == "Thumbs Up") {
            document.getElementById("result_gesture_name").innerHTML = "Thumbs Up &#128077;";
        }
        if (results[1].label == "Good") {
            document.getElementById("result_gesture_name2").innerHTML = "Good &#128076;";
        }
        if (results[1].label == "Yo") {
            document.getElementById("result_gesture_name2").innerHTML = "Yo &#129304;"
        }
        if (results[1].label == "Clap") {
            document.getElementById("result_gesture_name2").innerHTML = "Clap &#128079;"
        }
        if (results[1].label == "Thumbs Up") {
            document.getElementById("result_gesture_name2").innerHTML = "Thumbs Up &#128077;";
        }
    }
}
