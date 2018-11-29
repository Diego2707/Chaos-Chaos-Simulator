window.onkeydown = function(e)
{
    if(e.keyCode == keyNumbers.UP)
        keys.UP = true;
    if(e.keyCode == keyNumbers.DOWN)
        keys.DOWN = true;
    if(e.keyCode == keyNumbers.LEFT)
        keys.LEFT = true;
    if(e.keyCode == keyNumbers.RIGHT)
        keys.RIGHT = true;
    if(e.keyCode == keyNumbers.Z)
        keys.Z = true;
    if(e.keyCode == keyNumbers.X)
        keys.X = true;
}

window.onkeyup = function(e)
{
    if(e.keyCode == keyNumbers.UP)
        keys.UP = false;
    if(e.keyCode == keyNumbers.DOWN)
        keys.DOWN = false;
    if(e.keyCode == keyNumbers.LEFT)
        keys.LEFT = false;
    if(e.keyCode == keyNumbers.RIGHT)
        keys.RIGHT = false;
    if(e.keyCode == keyNumbers.Z)
        keys.Z = false;
    if(e.keyCode == keyNumbers.X)
        keys.X = false;
}

window.onkeypress = function(e)
{
    if(e.keyCode == keyNumbers.UP)
        keys.UP = true;
    if(e.keyCode == keyNumbers.DOWN)
        keys.DOWN = true;
    if(e.keyCode == keyNumbers.LEFT)
        keys.LEFT = true;
    if(e.keyCode == keyNumbers.RIGHT)
        keys.RIGHT = true;
    if(e.keyCode == keyNumbers.Z)
        keys.Z = true;
    if(e.keyCode == keyNumbers.X)
        keys.X = true;
}