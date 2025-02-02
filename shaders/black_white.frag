#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec4 value = texture(image, texcoord);

    float L = (0.299*value.r) + (0.587*value.g) + (0.114*value.b);

    FragColor = vec4(L, L, L, 1.0);
}
