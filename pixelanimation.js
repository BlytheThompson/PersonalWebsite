// script.js
// Three.js setup
let scene, camera, renderer;
let particles = [];

function init() {
  // Create scene
  scene = new THREE.Scene();

  // Create camera
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    1,
    1000
  );
  camera.position.z = 400;

  // Create renderer
  renderer = new THREE.WebGLRenderer({ canvas: document.querySelector("#canvas") });
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Create particles
  const particleCount = 1000;
  const geometry = new THREE.CircleGeometry(1, 32);
  const material = new THREE.MeshBasicMaterial({ color: 0xffffff });

  for (let i = 0; i < particleCount; i++) {
    const particle = new THREE.Mesh(geometry, material);
    particle.position.x = Math.random() * 800 - 400;
    particle.position.y = Math.random() * 800 - 400;
    particle.position.z = Math.random() * 800 - 400;
    scene.add(particle);
    particles.push(particle);
  }

  animate();
}

function animate() {
  requestAnimationFrame(animate);

  // Rotate the particles
  particles.forEach((particle) => {
    particle.rotation.x += 0.01;
    particle.rotation.y += 0.01;
  });

  // Render the scene
  renderer.render(scene, camera);
}

// Initialize the Three.js scene when the window loads
window.addEventListener("load", init);