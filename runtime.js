var initGame = function()
{
    //setup webGL
    canvas = document.getElementById("screen");
    gl = canvas.getContext("webgl");

    if(!gl) //load experimental gl if normal isn't supported
    {
        console.log("WebGL not supported, running experimental webGL");
        gl.getContext("experimental-webgl");
    }

    if(!gl)
    {
        alert("ERROR: WebGL not supported on you browser. Game cannot load.");
        return;
    }
    
    setup();

    //start the game loop
    runGame();
    requestAnimationFrame(runGame);
}

//main tick loop
var runGame = function()
{
    requestAnimationFrame(runGame);
    //calc new dt
    var dt = Date.now() - oldTime;
    
    if(dt >= 33) //loop at 30fps/ups
    {
        oldTime = Date.now();
        update(dt);
        render(dt);
    }
}

var update = function(dt)
{
    for(var i = 0; i < objects.length; i++)
        for(var j = 0; j < objects[i].length; j++)
            objects[i][j].update();
    menu.update();
}

var render = function(dt)
{
    gl.clearColor(0.25, 0.42, 0.48, 1.0); //set clear color for main canvas
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT); //clear color and depth information
    textCtx.clearRect(0, 0, textCtx.canvas.width, textCtx.canvas.height); //clear text

    for(var i = 0; i < objects.length; i++)
        for(var j = 0; j < objects[i].length; j++)
            objects[i][j].render();
    menu.render();

    textCtx.font = "bold 32px Pixel";
    textCtx.fillStyle = "white";
    textCtx.fillText("* LET THE GAMES BEGIN!".split("").join(String.fromCharCode(8201)), 36, 405);
}