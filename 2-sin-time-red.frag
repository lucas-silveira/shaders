#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;

void main() {
    // Changing the red component using sin function and time elapsed
    gl_FragColor = vec4(abs(sin(u_time)), 0.0, 0.0, 1.0);
}