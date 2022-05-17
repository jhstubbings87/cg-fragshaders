#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec4 new_color = texture(image, texcoord);

    new_color.r = round(new_color.r*4.0) / 4.0;
    new_color.g = round(new_color.g*4.0) / 4.0;
    new_color.b = round(new_color.b*4.0) / 4.0;

    FragColor = new_color;
}
