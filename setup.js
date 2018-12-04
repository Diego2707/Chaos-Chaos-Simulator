var setup = function()
{
    glSetup();
    loadImages();

    waitForImageLoad();

    setupObjects();
    setupMenus();
    text = document.getElementById("text");
    textCtx = text.getContext("2d");

    loadFinished = true;
}

function waitForImageLoad(){
    if (imagesLoading != 0)
        setTimeout(waitForImageLoad , 100);
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

    loadImage("resources/images/Kris_Sprites/spr_krisb_act/0.png", "kris_act1"),
    loadImage("resources/images/Kris_Sprites/spr_krisb_act/1.png", "kris_act2"),
    loadImage("resources/images/Kris_Sprites/spr_krisb_act/2.png", "kris_act3"),
    loadImage("resources/images/Kris_Sprites/spr_krisb_act/3.png", "kris_act4"),
    loadImage("resources/images/Kris_Sprites/spr_krisb_act/4.png", "kris_act5"),
    loadImage("resources/images/Kris_Sprites/spr_krisb_act/5.png", "kris_act6"),
    loadImage("resources/images/Kris_Sprites/spr_krisb_act/6.png", "kris_act7"),
    loadImage("resources/images/Kris_Sprites/spr_krisb_act/7.png", "kris_act8"),
    loadImage("resources/images/Kris_Sprites/spr_krisb_act/8.png", "kris_act9"),
    loadImage("resources/images/Kris_Sprites/spr_krisb_act/8.png", "kris_act10"),
    loadImage("resources/images/Kris_Sprites/spr_krisb_act/10.png", "kris_act11"),
    loadImage("resources/images/Kris_Sprites/spr_krisb_actready/0.png", "kris_actready1"),
    loadImage("resources/images/Kris_Sprites/spr_krisb_actready/1.png", "kris_actready2"),
    loadImage("resources/images/Kris_Sprites/spr_krisb_attack/0.png", "kris_attack1"),
    loadImage("resources/images/Kris_Sprites/spr_krisb_attack/1.png", "kris_attack2"),
    loadImage("resources/images/Kris_Sprites/spr_krisb_attack/2.png", "kris_attack3"),
    loadImage("resources/images/Kris_Sprites/spr_krisb_attack/3.png", "kris_attack4"),
    loadImage("resources/images/Kris_Sprites/spr_krisb_attack/4.png", "kris_attack5"),
    loadImage("resources/images/Kris_Sprites/spr_krisb_attack/5.png", "kris_attack6"),
    loadImage("resources/images/Kris_Sprites/spr_krisb_attack/6.png", "kris_attack7"),
    loadImage("resources/images/Kris_Sprites/spr_krisb_defend/0.png", "kris_defend1"),
    loadImage("resources/images/Kris_Sprites/spr_krisb_defend/1.png", "kris_defend2"),
    loadImage("resources/images/Kris_Sprites/spr_krisb_defend/2.png", "kris_defend3"),
    loadImage("resources/images/Kris_Sprites/spr_krisb_defend/3.png", "kris_defend4"),
    loadImage("resources/images/Kris_Sprites/spr_krisb_defend/4.png", "kris_defend5"),
    loadImage("resources/images/Kris_Sprites/spr_krisb_defend/5.png", "kris_defend6"),
    loadImage("resources/images/Kris_Sprites/spr_krisb_idle/0.png", "kris_idle1"),
    loadImage("resources/images/Kris_Sprites/spr_krisb_idle/1.png", "kris_idle2"),
    loadImage("resources/images/Kris_Sprites/spr_krisb_idle/2.png", "kris_idle3"),
    loadImage("resources/images/Kris_Sprites/spr_krisb_idle/3.png", "kris_idle4"),
    loadImage("resources/images/Kris_Sprites/spr_krisb_idle/4.png", "kris_idle5"),
    loadImage("resources/images/Kris_Sprites/spr_krisb_idle/5.png", "kris_idle6"),
    loadImage("resources/images/Kris_Sprites/spr_krisb_intro/0.png", "kris_intro1"),
    loadImage("resources/images/Kris_Sprites/spr_krisb_intro/1.png", "kris_intro2"),
    loadImage("resources/images/Kris_Sprites/spr_krisb_intro/2.png", "kris_intro3"),
    loadImage("resources/images/Kris_Sprites/spr_krisb_intro/3.png", "kris_intro4"),
    loadImage("resources/images/Kris_Sprites/spr_krisb_intro/4.png", "kris_intro5"),
    loadImage("resources/images/Kris_Sprites/spr_krisb_intro/5.png", "kris_intro6"),
    loadImage("resources/images/Kris_Sprites/spr_krisb_intro/6.png", "kris_intro7"),
    loadImage("resources/images/Kris_Sprites/spr_krisb_intro/7.png", "kris_intro8"),
    loadImage("resources/images/Kris_Sprites/spr_krisb_intro/8.png", "kris_intro9"),
    loadImage("resources/images/Kris_Sprites/spr_krisb_intro/9.png", "kris_intro10"),
    loadImage("resources/images/Kris_Sprites/spr_krisb_intro/10.png", "kris_intro11"),
    loadImage("resources/images/Kris_Sprites/spr_krisb_intro/11.png", "kris_intro12"),
    loadImage("resources/images/Kris_Sprites/spr_krisb_item/0.png", "kris_item1"),
    loadImage("resources/images/Kris_Sprites/spr_krisb_item/1.png", "kris_item2"),
    loadImage("resources/images/Kris_Sprites/spr_krisb_item/2.png", "kris_item3"),
    loadImage("resources/images/Kris_Sprites/spr_krisb_item/3.png", "kris_item4"),
    loadImage("resources/images/Kris_Sprites/spr_krisb_item/4.png", "kris_item5"),
    loadImage("resources/images/Kris_Sprites/spr_krisb_item/5.png", "kris_item6"),
    loadImage("resources/images/Kris_Sprites/spr_krisb_item/6.png", "kris_item7"),
    loadImage("resources/images/Kris_Sprites/spr_krisb_pirouette/0.png", "kris_pirouette1"),
    loadImage("resources/images/Kris_Sprites/spr_krisb_pirouette/1.png", "kris_pirouette2"),
    loadImage("resources/images/Kris_Sprites/spr_krisb_pirouette/2.png", "kris_pirouette3"),
    loadImage("resources/images/Kris_Sprites/spr_krisb_pirouette/3.png", "kris_pirouette4"),
    loadImage("resources/images/Kris_Sprites/spr_krisb_pirouette/4.png", "kris_pirouette5"),
    loadImage("resources/images/Kris_Sprites/spr_krisb_pirouette/5.png", "kris_pirouette6"),
    loadImage("resources/images/Kris_Sprites/spr_krisb_attackready.png", "kris_attackready"),
    loadImage("resources/images/Kris_Sprites/spr_krisb_defeat.png", "kris_defeat"),
    loadImage("resources/images/Kris_Sprites/spr_krisb_hurt.png", "kris_hurt"),
    loadImage("resources/images/Kris_Sprites/spr_krisb_itemready.png", "kris_itemready")
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
    initAnims();
    var blankImg = setSingleSpriteImg(images.blank);
    objects[0].push(setupSingleObject(0, 365, 0, 640, 480, blankImg, "sprite"));
    objects[0][objects[0].length-1].color = [0, 0, 0, 1];
    objects[0].push(setupSingleObject(0, 362, 0, 640, 480, setSingleSpriteImg(images.blank), "sprite"));
    objects[0][objects[0].length-1].color = [0.2, 0.13, 0.2, 1];

    //jevil x:477 y:134 to 124
    objects[1].push(setupSingleObject(477, 138, 0, 46*2, 48*2, jevilAnims, "Main"));
    objects[1].push(setupSingleObject(100, 100, 0, 63*2, 53*2, krisAnims, "Intro"));
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

