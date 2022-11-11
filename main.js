Webcam.set({
    width:350 ,
    height:300,
    img_format:'png',
    img_quality:80
});

camera=document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("captured_image").innerHTML='<img id="captured_img" src="'+data_uri+'">';

    });
}