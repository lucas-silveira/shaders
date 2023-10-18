#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;

void main() {
    // Changing all components using sin function and time elapsed
    gl_FragColor = vec4(abs(sin(u_time)),abs(sin(u_time*0.5)),abs(sin(u_time*0.2)),1.0);
}