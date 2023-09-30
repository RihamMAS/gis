
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


// Scene
const scene = new THREE.Scene();

// // Object
const geometry = new THREE.BoxGeometry(50, 50, 50);
const material = new THREE.MeshBasicMaterial({ color: 0xE28F5D });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const canvas = document.getElementById("canvas")
canvas.append(scene)


// const geometry = new THREE.CapsuleGeometry( 50, 1, 40, 50 ); 
// const material = new THREE.MeshBasicMaterial( {color: 0xE28F5D} ); 
// const capsule = new THREE.Mesh( geometry, material ); scene.add( capsule );


// Sizes
// const sizes = {
//     width: 1000,
//     height: 1000,
// }

// Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);
renderer.setClearColor(0xCCC6DE);




//LIGHT
// const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
// scene.add(ambientLight);

// const skyLight = new THREE.HemisphereLight(0xffffff, 0x000000, 1);
// skyLight.position.set(0, -1, 4);
// scene.add(skyLight);

// const skyLight2 = new THREE.HemisphereLight(0xffffff, 0xff0000, 1.2);
// skyLight2.position.set(0, -1, 4);
// scene.add(skyLight2);



// Orbit Controls
const controls = new OrbitControls(camera, renderer.domElement);
camera.position.set(100, 100, 100);
controls.update();

// Add Directional Light
// const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
// directionalLight.position.set(0, 1, 0); // You can adjust the position as needed
// scene.add(directionalLight);

function animate() {
    requestAnimationFrame(animate);

    // Required if controls.enableDamping or controls.autoRotate are set to true
    controls.update();

    renderer.render(scene, camera);
}

animate();

