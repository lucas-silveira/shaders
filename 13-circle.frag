#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main(){
	vec2 st = gl_FragCoord.xy/u_resolution;
    float pct = 0.0;

    // Perfect circle
    pct = step(0.5, distance(st,vec2(0.5)));
    // pct = smoothstep(0.4, 0.5, distance(st,vec2(0.5))); // blur effect
    // pct = step((sin(u_time)*0.5+1.)/2., distance(st,vec2(0.5))); // animated

    vec3 color = vec3(pct);

	gl_FragColor = vec4( color, 1.0 );
}
