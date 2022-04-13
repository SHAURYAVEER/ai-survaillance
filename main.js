status ="";
video ="";
objects=[];

function preload()
{
    video = createVideo('video.mp4');
    video.hide();
}
function setup()
{
    canvas= createCanvas(500,400);
    canvas.center();
}

function draw()
{
    image(video, 0, 0, 500, 400);
    if(status= "")
    {
        objectDetector.detect(video, gotResult);
        for(i=0; i<object.length; i++);
        document.getElementById("status").innerHTML = "Status : Object Detector";
        document.getElementById("noofobj").innerHTML = "Number of Objects Detected are :" + objects.length;
        fill("#FF0000");
        percent = floor(objects[i].confidence*100);
        text(objects[i].label+""+percent+"%"+objects[i].x+15+objects[i].y+15-15);
        noFill();
        stroke("#FF0000");
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].length);
    }

}

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById(id="status").innerHTML = "Status : Detecting Object";
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
    video.loop();
    video.speak();
    video.volume(0);
}

function gotResult(error, results)
{

    if(error)
    {
        console.error(error);
    } else {

        console.log(results);
        objects = results;
    }
    
}