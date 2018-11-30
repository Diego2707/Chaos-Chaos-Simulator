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
        this.animTick = 0; //tick between frame change

        //mark variables for later use
        this.currentAnim = null;
        this.currentImage = null;
        this.animations = new Array(); //initialize a new animations array

        //temp texture, delete later
        
        this.image = images.temp;
    }

    //any tick-based code goes here
    update()
    {
        //these keys are just tests, a different movement system will be used in the final
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

        //update the animation
        if(this.currentAnim != null)
        {
            //set the loaded image to the frame spot in active animation
            this.image = this.currentAnim.Frames[this.animationFrame].Img;

            //if anim type is nonstatic, update frame
            if(this.currentAnim.Type != loopTypes.STILL && this.animationFrame < this.currentAnim.Frames.length)
            {
                if(this.animTick < this.currentAnim.Frames[this.animationFrame].Tick)
                    this.animTick++;
                else
                {
                    this.animationFrame++;
                    this.animTick = 0;
                }
            }

            //logic for when frame passes anim length
            if(this.animationFrame > this.currentAnim.Frames.length - 1)
            {
                if(this.currentAnim.Type == loopTypes.SINGLE) //only applies to one-time run anims
                {
                    //if anim is set to transition, set new anim to active. Otherwise freeze animation on last frame
                    if(this.currentAnim.Next == null)
                        this.animationFrame--;
                    else{
                        this.setAnim(this.currentAnim.Next);
                    }
                }
                else if(this.currentAnim.Type == loopTypes.LOOP)
                    this.animationFrame = 0; //loop back to start
            }
        }
    }

    //drawing logic for any object. Most gl logic is in this method, as rendering only occurs within classes
    render()
    {
        //use shader
        gl.useProgram(mainProgram);
        
        //find where the matrix uniforms are
        var modelUniformLoc = gl.getUniformLocation(mainProgram, "mModel");
        var viewUniformLoc = gl.getUniformLocation(mainProgram, "mView");
        var projUniformLoc = gl.getUniformLocation(mainProgram, "mProj");

        //setup arrays for movements
        var viewMatrix = new Float32Array(16);
        var projMatrix = new Float32Array(16);
        var modelMatrix = new Float32Array(16);

        //create a quat to handle rotations
        var rot = quat.create();
        quat.rotateX(rot, rot, this.rotX);
        quat.rotateY(rot, rot, this.rotY);

        mat4.lookAt(viewMatrix, [0, 0, -5], [0, 0, 0,], [0, 1, 0]); //viewspace (camera) set
        mat4.ortho(projMatrix, 0.0, -640.0, 480.0, 0.0, -100, 1000); //projection. deltarune is in ortho, so no need for fov
        mat4.fromRotationTranslationScale(modelMatrix, rot, [this.x, this.y, this.z], [this.width, this.height, 0]); //main movement, alter object directly
        
        //set uniforms
        gl.uniformMatrix4fv(modelUniformLoc, gl.FALSE, modelMatrix);
        gl.uniformMatrix4fv(viewUniformLoc, gl.FALSE, viewMatrix);
        gl.uniformMatrix4fv(projUniformLoc, gl.FALSE, projMatrix);

        //set working texture and buffer
        gl.bindBuffer(gl.ARRAY_BUFFER, boxVBO);
        gl.bindTexture(gl.TEXTURE_2D, this.image);

        //draw object
        gl.drawArrays(gl.TRIANGLES, 0, 6);

        //unbind buffer and texture
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        gl.bindTexture(gl.TEXTURE_2D, null);
    }

    //util function for attaching animations to the object
    addAnim(name, images, type, next = null)
    {
        this.animations.push({Name: name, Frames: images, Type: type, Next: next})
    }

    //setup current animation to run, based on animation name
    setAnim(name, resetAnim = true)
    {
        //look for animation with the matching name
        for(var i = 0; i < this.animations.length; i++)
        {
            if(this.animations[i].Name == name)
                this.currentAnim = this.animations[i]; //set animation to active
        }
        if(resetAnim)
            this.animationFrame = 0; //reset frame count for the animation
    }

    //getter for both x and y
    getLoc()
    {
        return {x: this.x, y: this.y};
    }

    //setter for x and y (might turn into multiple functions for different set types)
    setLocloc()
    {
        this.x = loc.x;
        this.y = loc.y;
    }
}

