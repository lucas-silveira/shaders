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
    // Step will return 0.0 for values less or equal to 0.5,
    // otherwise it will return 1.0
    float y = step(0.5, st.x);
    gl_FragColor = vec4(vec3(y),1.0);
}