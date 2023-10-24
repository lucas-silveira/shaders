/*
    gl_FragCoord: Screen fragment coordinates (x, y).
*/
#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
	vec2 st = gl_FragCoord.xy/u_resolution;
    // Smooth interpolation between 0.1 and 0.9 (it's like a clamp with a curve)
    float y = smoothstep(0.1, 0.9, st.x);
    gl_FragColor = vec4(vec3(y),1.0);
}