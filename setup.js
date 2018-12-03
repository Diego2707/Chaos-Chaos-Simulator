var setup = function()
{
    glSetup();
    loadImages();
    setupMenus();
    setupObjects();

    text = document.getElementById("text");
    textCtx = text.getContext("2d");
}

var glSetup = function()
{
    gl.viewport(0, 0, canvas.width, canvas.height);

    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    //gl.enable(gl.CULL_FACE);
    gl.enable(gl.DEPTH_TEST);
    gl.enable(gl.BLEND);
    //gl.frontFace(gl.CCW);
    //gl.cullFace(gl.BACK);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    //setup shaders
    mainProgram = linkProgram(loadShader(primaryVertexShaderCode, gl.VERTEX_SHADER, gl), loadShader(primaryFragmentShaderCode, gl.FRAGMENT_SHADER, gl), gl);
    
    boxVBO = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, boxVBO);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(squareVertices), gl.STATIC_DRAW);
    
    var posAttribLoc = gl.getAttribLocation(mainProgram, "vPos");
    gl.vertexAttribPointer(
        posAttribLoc,
        3,
        gl.FLOAT,
        gl.FALSE,
        5 * Float32Array.BYTES_PER_ELEMENT,
        0
    );

    var texAttribLoc = gl.getAttribLocation(mainProgram, "tPos");
    gl.vertexAttribPointer(
        texAttribLoc,
        2,
        gl.FLOAT,
        gl.FALSE,
        5 * Float32Array.BYTES_PER_ELEMENT,
        3 * Float32Array.BYTES_PER_ELEMENT
    );
    
    gl.enableVertexAttribArray(posAttribLoc);
    gl.enableVertexAttribArray(texAttribLoc);
}

var loadImages = function()
{
    loadImage("resources/images/tempImage.png", "temp");
    loadImage("resources/images/blank.png", "blank");

    loadImage("resources/images/GUI Icons/spr_tpmeter.png", "tp_meter");

    loadImage("resources/images/Jevil_Sprites/spr_joker_main/0.png", "jevil_main");
    loadImage("resources/images/Jevil_Sprites/spr_joker_main/1.png", "jevil_main_laugh");
    loadImage("resources/images/Jevil_Sprites/spr_joker_tired.png", "jevil_main_tired");
    loadImage("resources/images/Jevil_Sprites/spr_joker_dance/0.png", "jevil_jump1");
    loadImage("resources/images/Jevil_Sprites/spr_joker_dance/1.png", "jevil_jump2");
    loadImage("resources/images/Jevil_Sprites/spr_joker_dance/2.png", "jevil_jump3");
    loadImage("resources/images/Jevil_Sprites/spr_joker_dance/3.png", "jevil_jump4");
    loadImage("resources/images/Jevil_Sprites/spr_joker_dance/4.png", "jevil_jump5");
    loadImage("resources/images/Jevil_Sprites/spr_joker_dance/5.png", "jevil_jump6");
    loadImage("resources/images/Jevil_Sprites/spr_joker_dance/6.png", "jevil_jump7");
    loadImage("resources/images/Jevil_Sprites/spr_joker_dance/7.png", "jevil_jump8");
    loadImage("resources/images/Jevil_Sprites/spr_jokerchain.png", "chain_link");
    loadImage("resources/images/Jevil_Sprites/spr_jokerbody.png", "jevil_damage_body");
    loadImage("resources/images/Jevil_Sprites/spr_jokerhead/0.png", "jevil_damage_head1");
    loadImage("resources/images/Jevil_Sprites/spr_jokerhead/1.png", "jevil_damage_head2");
    loadImage("resources/images/Jevil_Sprites/spr_jokerhead/2.png", "jevil_damage_head3");
    loadImage("resources/images/Jevil_Sprites/spr_jokerhead/3.png", "jevil_damage_head4");
    loadImage("resources/images/Jevil_Sprites/spr_joker_teleport/0.png", "jevil_tele_left1");
    loadImage("resources/images/Jevil_Sprites/spr_joker_teleport/1.png", "jevil_tele_left2");
    loadImage("resources/images/Jevil_Sprites/spr_joker_teleport_r/0.png", "jevil_tele_right1");
    loadImage("resources/images/Jevil_Sprites/spr_joker_teleport_r/1.png", "jevil_tele_right2");
}

var setupMenus = function()
{
    menu = new Menu();
    menu.addMenu("test1", [{Text: "To test 2", Dest: "test2"}, {Text: "To test 3", Dest: "test3"}]);
    menu.addMenu("test2", [{Text: "empty"}], {Name: "test1", Select: 0});
    menu.addMenu("test3", [{Text: "empty"}], {Name: "test1", Select: 1});
    menu.setMenu("test1");
}

var loadImage = function(path, name)
{
    imagesLoading++;
    var img = new Image();
    img.src = path;
    images[name] = gl.createTexture();
    img.onload = function()
    {
        gl.bindTexture(gl.TEXTURE_2D, images[name]);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        gl.bindTexture(gl.TEXTURE_2D, null);
        imagesLoading--;
    }
}

var setupObjects = function()
{
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

    var temp = [
        {Img: images.tp_meter, Tick: 1}
    ];

    objects[1].push(setupSingleObject(30, 200, 0, 30, 70, [{Name: "sprite", Frames: temp, Type: loopTypes.STILL, Exit: null}], "sprite"));

    objects[1].push(setupSingleObject(250, 150, 0, 300, 200, [{Name: "test", Frames: testAnim, Type: loopTypes.SINGLE, Exit: "test2"}, {Name: "test2", Frames: testAnim2, Type: loopTypes.STILL, Exit: null}], "test2"))
}

var setupSingleObject = function(x, y, z, width, height, animations, currentAnim = null)
{
    var obj = new object2D(x, y, z, width, height);
    animations.forEach(element => {
        obj.addAnim(element.Name, element.Frames, element.Type, element.Exit);
    });
    if(currentAnim != null)
        obj.setAnim(currentAnim);
    return obj;
}