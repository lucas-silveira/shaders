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
    // Normalizing the fragment coordinates by dividing its xy vector by screen resolution
	vec2 st = gl_FragCoord.xy/u_resolution;
    // Normalizing the mouse coordinates by dividing its xy vector by screen resolution
    vec2 mt = u_mouse.xy/u_resolution;
    
    float x = st.x*mt.x;
    float y = st.y*mt.y;
    gl_FragColor = vec4(x, y, 1.0,1.0);
}