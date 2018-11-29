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

    testObj = new object2D(250, 150, 0, 300, 300);
    //testObj2 = new object2D(70, 300, 0, 40, 60);

    var testAnim = [
        images.jevil_jump1,
        images.jevil_jump2,
        images.jevil_jump3,
        images.jevil_jump4,
        images.jevil_jump5,
        images.jevil_jump6,
        images.jevil_jump7,
        images.jevil_jump8,
    ];
    
    var testAnim2 = [
        images.jevil_tele_right1,
        images.jevil_tele_right2,
    ]

    testObj.addAnim("test", testAnim, loopTypes.LOOP);
    testObj.addAnim("test2", testAnim2, loopTypes.STILL);

    testObj.setAnim("test2");

    //start the game loop
    runGame();
    requestAnimationFrame(runGame);
}

var runGame = function()
{
    requestAnimationFrame(runGame);
    update();
    render();
}

var update = function()
{
    var dt = Date.now() - oldTime;
    
    if(dt >= 70)
    {
        oldTime = Date.now();
        testObj.update();
    }
}

var render = function()
{
    
    
    gl.clearColor(0.25, 0.42, 0.48, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    
    var today = new Date();

    
    //mat4.fromScaling(modelMatrix, [200, 300, 1]);
    //var move = new Float32Array(16);
    //testObj2.xpos = 300 + today.getMilliseconds()/2;
    testObj.render();
    //testObj2.render();
}

/*
 mat4.identity(dest);
 mat4.translate(dest, vec);
 let quatMat = mat4.create();
 quat4.toMat4(quat, quatMat);
 mat4.multiply(dest, quatMat)
*/