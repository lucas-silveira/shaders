#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

int newFunction(in vec4 aVec4,      // read-only
                out vec3 aVec3,     // write-only
                inout int aInt);    // read-write

void main() {
    vec3 color = vec3(0.0);
    gl_FragColor = vec4(color,1.0);
}