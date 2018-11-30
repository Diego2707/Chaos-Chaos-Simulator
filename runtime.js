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

    //TEST DATA

    testObj = new object2D(250, 150, 0, 300, 300);
    //testObj2 = new object2D(70, 300, 0, 40, 60);

    var testAnim = [
        {Img: images.jevil_jump1, Tick: 3},
        {Img: images.jevil_jump2, Tick: 3},
        {Img: images.jevil_jump3, Tick: 3},
        {Img: images.jevil_jump4, Tick: 3},
        {Img: images.jevil_jump5, Tick: 3},
        {Img: images.jevil_jump6, Tick: 3},
        {Img: images.jevil_jump7, Tick: 3},
        {Img: images.jevil_jump8, Tick: 3}
    ];
    
    var testAnim2 = [
        {Img: images.jevil_tele_right1, Tick: 5},
        {Img: images.jevil_tele_right2, Tick: 5}
    ];

    testObj.addAnim("test", testAnim, loopTypes.SINGLE, "test2");
    testObj.addAnim("test2", testAnim2, loopTypes.STILL);

    testObj.setAnim("test2");

    //END TEST DATA

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
    testObj.update();
}

var render = function(dt)
{
    gl.clearColor(0.25, 0.42, 0.48, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    //TEST
    testObj.render();
}