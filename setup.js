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

    loadImage("resources/images/Kris_Sprites/spr_krisb_act/0.png", "kris_act1");
    loadImage("resources/images/Kris_Sprites/spr_krisb_act/1.png", "kris_act2");
    loadImage("resources/images/Kris_Sprites/spr_krisb_act/2.png", "kris_act3");
    loadImage("resources/images/Kris_Sprites/spr_krisb_act/3.png", "kris_act4");
    loadImage("resources/images/Kris_Sprites/spr_krisb_act/4.png", "kris_act5");
    loadImage("resources/images/Kris_Sprites/spr_krisb_act/5.png", "kris_act6");
    loadImage("resources/images/Kris_Sprites/spr_krisb_act/6.png", "kris_act7");
    loadImage("resources/images/Kris_Sprites/spr_krisb_act/7.png", "kris_act8");
    loadImage("resources/images/Kris_Sprites/spr_krisb_act/8.png", "kris_act9");
    loadImage("resources/images/Kris_Sprites/spr_krisb_act/8.png", "kris_act10");
    loadImage("resources/images/Kris_Sprites/spr_krisb_act/10.png", "kris_act11");
    loadImage("resources/images/Kris_Sprites/spr_krisb_actready/0.png", "kris_actready1");
    loadImage("resources/images/Kris_Sprites/spr_krisb_actready/1.png", "kris_actready2");
    loadImage("resources/images/Kris_Sprites/spr_krisb_attack/0.png", "kris_attack1");
    loadImage("resources/images/Kris_Sprites/spr_krisb_attack/1.png", "kris_attack2");
    loadImage("resources/images/Kris_Sprites/spr_krisb_attack/2.png", "kris_attack3");
    loadImage("resources/images/Kris_Sprites/spr_krisb_attack/3.png", "kris_attack4");
    loadImage("resources/images/Kris_Sprites/spr_krisb_attack/4.png", "kris_attack5");
    loadImage("resources/images/Kris_Sprites/spr_krisb_attack/5.png", "kris_attack6");
    loadImage("resources/images/Kris_Sprites/spr_krisb_attack/6.png", "kris_attack7");
    loadImage("resources/images/Kris_Sprites/spr_krisb_defend/0.png", "kris_defend1");
    loadImage("resources/images/Kris_Sprites/spr_krisb_defend/1.png", "kris_defend2");
    loadImage("resources/images/Kris_Sprites/spr_krisb_defend/2.png", "kris_defend3");
    loadImage("resources/images/Kris_Sprites/spr_krisb_defend/3.png", "kris_defend4");
    loadImage("resources/images/Kris_Sprites/spr_krisb_defend/4.png", "kris_defend5");
    loadImage("resources/images/Kris_Sprites/spr_krisb_defend/5.png", "kris_defend6");
    loadImage("resources/images/Kris_Sprites/spr_krisb_idle/0.png", "kris_idle1");
    loadImage("resources/images/Kris_Sprites/spr_krisb_idle/1.png", "kris_idle2");
    loadImage("resources/images/Kris_Sprites/spr_krisb_idle/2.png", "kris_idle3");
    loadImage("resources/images/Kris_Sprites/spr_krisb_idle/3.png", "kris_idle4");
    loadImage("resources/images/Kris_Sprites/spr_krisb_idle/4.png", "kris_idle5");
    loadImage("resources/images/Kris_Sprites/spr_krisb_idle/5.png", "kris_idle6");
    loadImage("resources/images/Kris_Sprites/spr_krisb_intro/0.png", "kris_intro1");
    loadImage("resources/images/Kris_Sprites/spr_krisb_intro/1.png", "kris_intro2");
    loadImage("resources/images/Kris_Sprites/spr_krisb_intro/2.png", "kris_intro3");
    loadImage("resources/images/Kris_Sprites/spr_krisb_intro/3.png", "kris_intro4");
    loadImage("resources/images/Kris_Sprites/spr_krisb_intro/4.png", "kris_intro5");
    loadImage("resources/images/Kris_Sprites/spr_krisb_intro/5.png", "kris_intro6");
    loadImage("resources/images/Kris_Sprites/spr_krisb_intro/6.png", "kris_intro7");
    loadImage("resources/images/Kris_Sprites/spr_krisb_intro/7.png", "kris_intro8");
    loadImage("resources/images/Kris_Sprites/spr_krisb_intro/8.png", "kris_intro9");
    loadImage("resources/images/Kris_Sprites/spr_krisb_intro/9.png", "kris_intro10");
    loadImage("resources/images/Kris_Sprites/spr_krisb_intro/10.png", "kris_intro11");
    loadImage("resources/images/Kris_Sprites/spr_krisb_intro/11.png", "kris_intro12");
    loadImage("resources/images/Kris_Sprites/spr_krisb_item/0.png", "kris_item1");
    loadImage("resources/images/Kris_Sprites/spr_krisb_item/1.png", "kris_item2");
    loadImage("resources/images/Kris_Sprites/spr_krisb_item/2.png", "kris_item3");
    loadImage("resources/images/Kris_Sprites/spr_krisb_item/3.png", "kris_item4");
    loadImage("resources/images/Kris_Sprites/spr_krisb_item/4.png", "kris_item5");
    loadImage("resources/images/Kris_Sprites/spr_krisb_item/5.png", "kris_item6");
    loadImage("resources/images/Kris_Sprites/spr_krisb_item/6.png", "kris_item7");
    loadImage("resources/images/Kris_Sprites/spr_krisb_pirouette/0.png", "kris_pirouette1");
    loadImage("resources/images/Kris_Sprites/spr_krisb_pirouette/1.png", "kris_pirouette2");
    loadImage("resources/images/Kris_Sprites/spr_krisb_pirouette/2.png", "kris_pirouette3");
    loadImage("resources/images/Kris_Sprites/spr_krisb_pirouette/3.png", "kris_pirouette4");
    loadImage("resources/images/Kris_Sprites/spr_krisb_pirouette/4.png", "kris_pirouette5");
    loadImage("resources/images/Kris_Sprites/spr_krisb_pirouette/5.png", "kris_pirouette6");
    loadImage("resources/images/Kris_Sprites/spr_krisb_attackready.png", "kris_attackready");
    loadImage("resources/images/Kris_Sprites/spr_krisb_defeat.png", "kris_defeat");
    loadImage("resources/images/Kris_Sprites/spr_krisb_hurt.png", "kris_hurt");
    loadImage("resources/images/Kris_Sprites/spr_krisb_itemready.png", "kris_itemready");

    loadImage("resources/images/Susie_Sprites/spr_susieb_act/0.png", "susie_act1");
    loadImage("resources/images/Susie_Sprites/spr_susieb_act/1.png", "susie_act2");
    loadImage("resources/images/Susie_Sprites/spr_susieb_act/2.png", "susie_act3");
    loadImage("resources/images/Susie_Sprites/spr_susieb_act/3.png", "susie_act4");
    loadImage("resources/images/Susie_Sprites/spr_susieb_act/4.png", "susie_act5");
    loadImage("resources/images/Susie_Sprites/spr_susieb_act/5.png", "susie_act6");
    loadImage("resources/images/Susie_Sprites/spr_susieb_act/6.png", "susie_act7");
    loadImage("resources/images/Susie_Sprites/spr_susieb_act/7.png", "susie_act8");
    loadImage("resources/images/Susie_Sprites/spr_susieb_act/8.png", "susie_act9");
    loadImage("resources/images/Susie_Sprites/spr_susieb_act/9.png", "susie_act10");
    loadImage("resources/images/Susie_Sprites/spr_susieb_act/10.png", "susie_act11");
    loadImage("resources/images/Susie_Sprites/spr_susieb_attack/0.png", "susie_attack1");
    loadImage("resources/images/Susie_Sprites/spr_susieb_attack/1.png", "susie_attack2");
    loadImage("resources/images/Susie_Sprites/spr_susieb_attack/2.png", "susie_attack3");
    loadImage("resources/images/Susie_Sprites/spr_susieb_attack/3.png", "susie_attack4");
    loadImage("resources/images/Susie_Sprites/spr_susieb_attack/4.png", "susie_attack5");
    loadImage("resources/images/Susie_Sprites/spr_susieb_attack/5.png", "susie_attack6");
    loadImage("resources/images/Susie_Sprites/spr_susieb_defend/0.png", "susie_defend1");
    loadImage("resources/images/Susie_Sprites/spr_susieb_defend/1.png", "susie_defend2");
    loadImage("resources/images/Susie_Sprites/spr_susieb_defend/2.png", "susie_defend3");
    loadImage("resources/images/Susie_Sprites/spr_susieb_defend/3.png", "susie_defend4");
    loadImage("resources/images/Susie_Sprites/spr_susieb_defend/4.png", "susie_defend5");
    loadImage("resources/images/Susie_Sprites/spr_susieb_defend/5.png", "susie_defend6");
    loadImage("resources/images/Susie_Sprites/spr_susieb_idle/0.png", "susie_idle1");
    loadImage("resources/images/Susie_Sprites/spr_susieb_idle/1.png", "susie_idle2");
    loadImage("resources/images/Susie_Sprites/spr_susieb_idle/2.png", "susie_idle3");
    loadImage("resources/images/Susie_Sprites/spr_susieb_idle/3.png", "susie_idle4");
    loadImage("resources/images/Susie_Sprites/spr_susieb_item/0.png", "susie_item1");
    loadImage("resources/images/Susie_Sprites/spr_susieb_item/1.png", "susie_item2");
    loadImage("resources/images/Susie_Sprites/spr_susieb_item/2.png", "susie_item3");
    loadImage("resources/images/Susie_Sprites/spr_susieb_item/3.png", "susie_item4");
    loadImage("resources/images/Susie_Sprites/spr_susieb_itemready/0.png", "susie_itemready1");
    loadImage("resources/images/Susie_Sprites/spr_susieb_itemready/1.png", "susie_itemready2");
    loadImage("resources/images/Susie_Sprites/spr_susieb_spell/0.png", "susie_spell1");
    loadImage("resources/images/Susie_Sprites/spr_susieb_spell/1.png", "susie_spell2");
    loadImage("resources/images/Susie_Sprites/spr_susieb_spell/2.png", "susie_spell3");
    loadImage("resources/images/Susie_Sprites/spr_susieb_spell/3.png", "susie_spell4");
    loadImage("resources/images/Susie_Sprites/spr_susieb_spell/4.png", "susie_spell5");
    loadImage("resources/images/Susie_Sprites/spr_susieb_spell/5.png", "susie_spell6");
    loadImage("resources/images/Susie_Sprites/spr_susieb_spell/6.png", "susie_spell7");
    loadImage("resources/images/Susie_Sprites/spr_susieb_spell/7.png", "susie_spell8");
    loadImage("resources/images/Susie_Sprites/spr_susieb_spell/8.png", "susie_spell9");
    loadImage("resources/images/Susie_Sprites/spr_susieb_spellready/0.png", "susie_spellready1");
    loadImage("resources/images/Susie_Sprites/spr_susieb_spellready/1.png", "susie_spellready2");
    loadImage("resources/images/Susie_Sprites/spr_susieb_spellready/2.png", "susie_spellready3");
    loadImage("resources/images/Susie_Sprites/spr_susieb_spellready/3.png", "susie_spellready4");
    loadImage("resources/images/Susie_Sprites/spr_susieb_actready.png", "susie_actready");
    loadImage("resources/images/Susie_Sprites/spr_susieb_attackready.png", "susie_attackready");
    loadImage("resources/images/Susie_Sprites/spr_susieb_defeat.png", "susie_defeat");
    loadImage("resources/images/Susie_Sprites/spr_susieb_hurt.png", "susie_hurt");

    loadImage("resources/images/Ralsei_Sprites/spr_ralseib_act/0.png", "ralsei_act1");
    loadImage("resources/images/Ralsei_Sprites/spr_ralseib_act/1.png", "ralsei_act2");
    loadImage("resources/images/Ralsei_Sprites/spr_ralseib_act/2.png", "ralsei_act3");
    loadImage("resources/images/Ralsei_Sprites/spr_ralseib_act/3.png", "ralsei_act4");
    loadImage("resources/images/Ralsei_Sprites/spr_ralseib_act/4.png", "ralsei_act5");
    loadImage("resources/images/Ralsei_Sprites/spr_ralseib_act/5.png", "ralsei_act6");
    loadImage("resources/images/Ralsei_Sprites/spr_ralseib_act/6.png", "ralsei_act7");
    loadImage("resources/images/Ralsei_Sprites/spr_ralseib_act/7.png", "ralsei_act8");
    loadImage("resources/images/Ralsei_Sprites/spr_ralseib_act/8.png", "ralsei_act9");
    loadImage("resources/images/Ralsei_Sprites/spr_ralseib_act/9.png", "ralsei_act10");
    loadImage("resources/images/Ralsei_Sprites/spr_ralseib_act/10.png", "ralsei_act11");
    loadImage("resources/images/Ralsei_Sprites/spr_ralseib_attack/0.png", "ralsei_attack1");
    loadImage("resources/images/Ralsei_Sprites/spr_ralseib_attack/1.png", "ralsei_attack2");
    loadImage("resources/images/Ralsei_Sprites/spr_ralseib_attack/2.png", "ralsei_attack3");
    loadImage("resources/images/Ralsei_Sprites/spr_ralseib_attack/3.png", "ralsei_attack4");
    loadImage("resources/images/Ralsei_Sprites/spr_ralseib_attack/4.png", "ralsei_attack5");
    loadImage("resources/images/Ralsei_Sprites/spr_ralseib_attack/5.png", "ralsei_attack6");
    loadImage("resources/images/Ralsei_Sprites/spr_ralseib_battleintro/0.png", "ralsei_intro1");
    loadImage("resources/images/Ralsei_Sprites/spr_ralseib_battleintro/1.png", "ralsei_intro2");
    loadImage("resources/images/Ralsei_Sprites/spr_ralseib_battleintro/2.png", "ralsei_intro3");
    loadImage("resources/images/Ralsei_Sprites/spr_ralseib_battleintro/3.png", "ralsei_intro4");
    loadImage("resources/images/Ralsei_Sprites/spr_ralseib_battleintro/4.png", "ralsei_intro5");
    loadImage("resources/images/Ralsei_Sprites/spr_ralseib_battleintro/5.png", "ralsei_intro6");
    loadImage("resources/images/Ralsei_Sprites/spr_ralseib_battleintro/6.png", "ralsei_intro7");
    loadImage("resources/images/Ralsei_Sprites/spr_ralseib_battleintro/7.png", "ralsei_intro8");
    loadImage("resources/images/Ralsei_Sprites/spr_ralseib_battleintro/8.png", "ralsei_intro9");
    loadImage("resources/images/Ralsei_Sprites/spr_ralseib_defend/0.png", "ralsei_defend1");
    loadImage("resources/images/Ralsei_Sprites/spr_ralseib_defend/1.png", "ralsei_defend2");
    loadImage("resources/images/Ralsei_Sprites/spr_ralseib_defend/2.png", "ralsei_defend3");
    loadImage("resources/images/Ralsei_Sprites/spr_ralseib_defend/3.png", "ralsei_defend4");
    loadImage("resources/images/Ralsei_Sprites/spr_ralseib_defend/4.png", "ralsei_defend5");
    loadImage("resources/images/Ralsei_Sprites/spr_ralseib_defend/5.png", "ralsei_defend6");
    loadImage("resources/images/Ralsei_Sprites/spr_ralseib_defend/6.png", "ralsei_defend7");
    loadImage("resources/images/Ralsei_Sprites/spr_ralseib_defend/7.png", "ralsei_defend8");
    loadImage("resources/images/Ralsei_Sprites/spr_ralseib_idle/0.png", "ralsei_idle1");
    loadImage("resources/images/Ralsei_Sprites/spr_ralseib_idle/1.png", "ralsei_idle2");
    loadImage("resources/images/Ralsei_Sprites/spr_ralseib_idle/2.png", "ralsei_idle3");
    loadImage("resources/images/Ralsei_Sprites/spr_ralseib_idle/3.png", "ralsei_idle4");
    loadImage("resources/images/Ralsei_Sprites/spr_ralseib_idle/4.png", "ralsei_idle5");
    loadImage("resources/images/Ralsei_Sprites/spr_ralseib_item/0.png", "ralsei_item1");
    loadImage("resources/images/Ralsei_Sprites/spr_ralseib_item/1.png", "ralsei_item2");
    loadImage("resources/images/Ralsei_Sprites/spr_ralseib_item/2.png", "ralsei_item3");
    loadImage("resources/images/Ralsei_Sprites/spr_ralseib_item/3.png", "ralsei_item4");
    loadImage("resources/images/Ralsei_Sprites/spr_ralseib_item/4.png", "ralsei_item5");
    loadImage("resources/images/Ralsei_Sprites/spr_ralseib_item/5.png", "ralsei_item6");
    loadImage("resources/images/Ralsei_Sprites/spr_ralseib_item/6.png", "ralsei_item7");
    loadImage("resources/images/Ralsei_Sprites/spr_ralseib_item/7.png", "ralsei_item8");
    loadImage("resources/images/Ralsei_Sprites/spr_ralseib_spell/0.png", "ralsei_spell1");
    loadImage("resources/images/Ralsei_Sprites/spr_ralseib_spell/1.png", "ralsei_spell2");
    loadImage("resources/images/Ralsei_Sprites/spr_ralseib_spell/2.png", "ralsei_spell3");
    loadImage("resources/images/Ralsei_Sprites/spr_ralseib_spell/3.png", "ralsei_spell4");
    loadImage("resources/images/Ralsei_Sprites/spr_ralseib_spell/4.png", "ralsei_spell5");
    loadImage("resources/images/Ralsei_Sprites/spr_ralseib_spell/5.png", "ralsei_spell6");
    loadImage("resources/images/Ralsei_Sprites/spr_ralseib_spell/6.png", "ralsei_spell7");
    loadImage("resources/images/Ralsei_Sprites/spr_ralseib_spell/7.png", "ralsei_spell8");
    loadImage("resources/images/Ralsei_Sprites/spr_ralseib_spell/8.png", "ralsei_spell9");
    loadImage("resources/images/Ralsei_Sprites/spr_ralseib_spell/9.png", "ralsei_spell10");
    loadImage("resources/images/Ralsei_Sprites/spr_ralseib_spellready/0.png", "ralsei_spellready1");
    loadImage("resources/images/Ralsei_Sprites/spr_ralseib_spellready/1.png", "ralsei_spellready2");
    loadImage("resources/images/Ralsei_Sprites/spr_ralseib_spellready/2.png", "ralsei_spellready3");
    loadImage("resources/images/Ralsei_Sprites/spr_ralseib_spellready/3.png", "ralsei_spellready4");
    loadImage("resources/images/Ralsei_Sprites/spr_ralseib_actready.png", "ralsei_actready");
    loadImage("resources/images/Ralsei_Sprites/spr_ralseib_attackready.png", "ralsei_attackready");
    loadImage("resources/images/Ralsei_Sprites/spr_ralseib_defeat.png", "ralsei_defeat");
    loadImage("resources/images/Ralsei_Sprites/spr_ralseib_itemready.png", "ralsei_itemready");
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
    objects[1].push(setupSingleObject(477, 138, 3, 46*2, 48*2, jevilAnims, "Main"));
    objects[1].push(setupSingleObject(100, 100, 2, 63*2, 53*2, krisAnims, "Intro"));
    objects[1].push(setupSingleObject(100, 110, 1, 103*2, 77*2, susieAnims, "Intro"));
    objects[1].push(setupSingleObject(100, 200, 0, 77*2, 55*2, ralseiAnims, "Intro"));
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

