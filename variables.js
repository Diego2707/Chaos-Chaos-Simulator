//
// Store all variables that need to be used across files.
//

//webgl instance
var canvas;
var gl;

//webgl objects
var mainProgram;
var boxVBO;

var squareVertices = 
[   //x, y, z  texture x, y
    0.0, 1.0, 0.0,   0, 1,
    1.0, 0.0, 0.0,   1, 0,
    0.0, 0.0, 0.0,   0, 0,

    0.0, 1.0, 0.0,   0, 1,
    1.0, 1.0, 0.0,   1, 1,
    1.0, 0.0, 0.0,   1, 0
];

//objects
var objects = 
[
    [], //GUI
    [], //Character
    [], //Particles
]

//animation information

var loadFinished = false;
var imagesLoading = 0;

var images = {};

var oldTime = Date.now();

var loopTypes = 
{
    STILL: 0,
    SINGLE: 1,
    LOOP: 2
}

//keypresses
var keyNumbers = 
{
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39,
    Z: 90,
    X: 88
}

var keys = 
{
    UP: false,
    DOWN: false,
    LEFT: false,
    RIGHT: false,
    Z: false,
    X: false
}

//menu information
var menu;

var text;
var textCtx;

//testing
var testObj;

var text;