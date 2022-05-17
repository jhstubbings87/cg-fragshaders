#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec2 scaled_texcoord = (2.0*texcoord) - 1.0;
    float theta = atan(scaled_texcoord.y, scaled_texcoord.x);
    float radius = pow(length(scaled_texcoord), 1.5);

    vec2 new_texcoord = vec2(radius*cos(theta), radius*sin(theta));
    vec2 rescaled_texcoord = 0.5*(new_texcoord + 1.0);

    FragColor = texture(image, rescaled_texcoord);
}
