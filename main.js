var song="";
var song2="";
leftWristY=""
rightWristY=""

function setup(){
    canvas = createCanvas(600,500);
    canvas.position(650,250);
 
    video= createCapture(VIDEO);
    video.hide();
 
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotResults); 
 }

function draw(){
image(video,0,0,600,500);
}   

function preload() { 
    song = loadSound("music.mp3"); 
    song2= loadSound("music2.mp3"); 
}


function modelLoaded(){

    console.log("posenet has loaded");
 }
 
 function gotResults(results){
 if (results.length > 0){
    console.log(results);
 }
 leftWristY=results[0].pose.leftWrist.y;
 rightWristY=results[0].pose.rightWrist.y;
 console.log("left wrist Y coordinate is " +leftWristY+ " right wrist Y coordinate is " +rightWristY);
 }

