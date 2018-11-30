var setup = function()
{
    glSetup();
    loadImages();
}

var glSetup = function()
{
    gl.viewport(0, 0, canvas.width, canvas.height);

    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    //gl.enable(gl.CULL_FACE);
    gl.enable(gl.DEPTH_TEST);
    //gl.frontFace(gl.CCW);
    //gl.cullFace(gl.BACK);

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
    images = 
    {
        jevil_main:         loadImage("resources/Jevil_Sprites/spr_joker_main/0.png"),
        jevil_main_laugh:   loadImage("resources/Jevil_Sprites/spr_joker_main/1.png"),
        jevil_main_tired:   loadImage("resources/Jevil_Sprites/spr_joker_tired.png"),              
        jevil_jump1:        loadImage("resources/Jevil_Sprites/spr_joker_dance/0.png"),
        jevil_jump2:        loadImage("resources/Jevil_Sprites/spr_joker_dance/1.png"),
        jevil_jump3:        loadImage("resources/Jevil_Sprites/spr_joker_dance/2.png"),
        jevil_jump4:        loadImage("resources/Jevil_Sprites/spr_joker_dance/3.png"),
        jevil_jump5:        loadImage("resources/Jevil_Sprites/spr_joker_dance/4.png"),
        jevil_jump6:        loadImage("resources/Jevil_Sprites/spr_joker_dance/5.png"),
        jevil_jump7:        loadImage("resources/Jevil_Sprites/spr_joker_dance/6.png"),
        jevil_jump8:        loadImage("resources/Jevil_Sprites/spr_joker_dance/7.png"),
        chain_link:         loadImage("resources/Jevil_Sprites/spr_jokerchain.png"),
        jevil_damage_body:  loadImage("resources/Jevil_Sprites/spr_jokerbody.png"),
        jevil_damage_head1: loadImage("resources/Jevil_Sprites/spr_jokerhead/0.png"),
        jevil_damage_head2: loadImage("resources/Jevil_Sprites/spr_jokerhead/1.png"),
        jevil_damage_head3: loadImage("resources/Jevil_Sprites/spr_jokerhead/2.png"),
        jevil_damage_head4: loadImage("resources/Jevil_Sprites/spr_jokerhead/3.png"),
        jevil_tele_left1:   loadImage("resources/Jevil_Sprites/spr_joker_teleport/0.png"),
        jevil_tele_left2:   loadImage("resources/Jevil_Sprites/spr_joker_teleport/1.png"),
        jevil_tele_right1:  loadImage("resources/Jevil_Sprites/spr_joker_teleport_r/0.png"),
        jevil_tele_right2:  loadImage("resources/Jevil_Sprites/spr_joker_teleport_r/1.png"),
    }
}