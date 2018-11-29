class object2D
{
    constructor(x, y, z, width = 20, height = 20)
    {
        //basic values for object
        this.x = x;
        this.y = y;
        this.z = z;
        this.rotX = 0;
        this.rotY = 0;
        this.width = width;
        this.height = height;
        this.animationFrame = 0;

        //mark variables for later use
        this.currentAnim = null;
        this.currentImage = null;
        this.animations = new Array(); //initialize a new animations array

        //temp texture, delete later
        this.image = loadImage("resources/tempImage.png");
    }

    update()
    {
        if(keys.UP)
            this.y--;
        if(keys.DOWN)
            this.y++;
        if(keys.LEFT)
            this.x--;
        if(keys.RIGHT)
            this.x++;

        if(keys.Z)
            this.setAnim("test");
        if(keys.X)
            this.setAnim("test2");

        if(this.currentAnim != null)
        {
            this.image = this.currentAnim.Frames[this.animationFrame];

            if(this.currentAnim.Type != loopTypes.STILL && this.animationFrame < this.currentAnim.Frames.length)
            {
                this.animationFrame++;
            }

            if(this.currentAnim.Type == loopTypes.LOOP && this.animationFrame > this.currentAnim.Frames.length - 1)
            {
                this.animationFrame = 0;
            }
        }
    }

    render()
    {
        gl.useProgram(mainProgram);
        
        var modelUniformLoc = gl.getUniformLocation(mainProgram, "mModel");
        var viewUniformLoc = gl.getUniformLocation(mainProgram, "mView");
        var projUniformLoc = gl.getUniformLocation(mainProgram, "mProj");

        var viewMatrix = new Float32Array(16);
        var projMatrix = new Float32Array(16);
        //mat4.identity(modelMatrix);
        mat4.lookAt(viewMatrix, [0, 0, -5], [0, 0, 0,], [0, 1, 0]);
        mat4.ortho(projMatrix, 0.0, -800.0, 600.0, 0.0, -100, 1000);
        
        var modelMatrix = new Float32Array(16);
        
        var rot = quat.create();
        quat.rotateX(rot, rot, this.rotX);
        quat.rotateY(rot, rot, this.rotY);
        mat4.fromRotationTranslationScale(modelMatrix, rot, [this.x, this.y, this.z], [this.width, this.height, 0]);
        
        gl.uniformMatrix4fv(modelUniformLoc, gl.FALSE, modelMatrix);
        gl.uniformMatrix4fv(viewUniformLoc, gl.FALSE, viewMatrix);
        gl.uniformMatrix4fv(projUniformLoc, gl.FALSE, projMatrix);

        gl.bindBuffer(gl.ARRAY_BUFFER, boxVBO);
        gl.bindTexture(gl.TEXTURE_2D, this.image);

        gl.drawArrays(gl.TRIANGLES, 0, 6);

        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        gl.bindTexture(gl.TEXTURE_2D, null);
    }

    addAnim(name, images, type)
    {
        this.animations.push({Name: name, Frames: images, Type: type})
    }

    setAnim(name)
    {
        for(var i = 0; i < this.animations.length; i++)
        {
            if(this.animations[i].Name == name)
                this.currentAnim = this.animations[i];
        }
        this.animationFrame = 0;
        console.log(this.currentAnim);
    }
    
    set xpos(x)
    {
        this.x = x;
    }

    get xpos()
    {
        return this.x;
    }

    set ypos(y)
    {
        this.y = y;
    }

    get xpos()
    {
        return this.x;
    }
}

