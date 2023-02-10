AFRAME.registerShader('texture-shader', {
  schema: {
    uMap: {
      type: 'map',
      is: 'uniform'
    }
  },
  vertexShader: `
    varying vec2 vUv;

    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }
  `,
  fragmentShader: `
    varying vec2 vUv;

    uniform sampler2D uMap;

    void main() {
        gl_FragColor = texture2D(uMap, vUv);
    }
  `
});
