//I don't want to do file loading so this'll do for now

//shader loading code
var loadShader = function(code, type)
{
    var shader = gl.createShader(type);
    gl.shaderSource(shader, code);
    gl.compileShader(shader);
    if(!gl.getShaderParameter(shader, gl.COMPILE_STATUS))
    {
        console.error("Error in shader compilation: " + gl.getShaderInfoLog(shader));
        return;
    }
    return shader;
}

//program linking code
var linkProgram = function(vertexShader, fragmentShader)
{
    var program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program)
    if(!gl.getProgramParameter(program, gl.LINK_STATUS))
    {
        console.error("Error in shader linking: " + gl.getProgramInfoLog(program));
    }

    gl.validateProgram(program)
    if(!gl.getProgramParameter(program, gl.VALIDATE_STATUS))
    {
        console.error("Program vailed to validate: " + gl.getProgramInfoLog(program));
    }
    
    return program;
}

//primary shaders
var primaryVertexShaderCode = 
`
precision mediump float;

attribute vec3 vPos;
attribute vec2 tPos;

varying vec2 fragTexPos;

uniform mat4 mModel;
uniform mat4 mView;
uniform mat4 mProj;

void main()
{
    fragTexPos = tPos;
    gl_Position = mProj * mView * mModel * vec4(vPos, 1.0);
}
`

var primaryFragmentShaderCode = 
`
precision mediump float;

varying vec2 fragTexPos;

uniform sampler2D sampler;
uniform vec4 color;

void main()
{
    vec4 texColor = texture2D(sampler, fragTexPos) * color;
    if(texColor.a < 0.1)
        discard;
    gl_FragColor = texColor;
}
`