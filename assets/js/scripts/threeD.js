import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";

const container = document.getElementById("c-threejs__container");
container.style = "z-index: 3;width: 50vw; height: 100vh";
const containerDimensions = container.getBoundingClientRect();

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  containerDimensions.width / containerDimensions.height,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({ alpha: true });
const controls = new OrbitControls(camera, renderer.domElement);

renderer.setSize(containerDimensions.width, containerDimensions.height);
container.appendChild(renderer.domElement);

const ambientLight = new THREE.AmbientLight(0x404040, 2.0);
scene.add(ambientLight);

const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));

const loader = new GLTFLoader();

loader.load(
  "/assets/models/scene.gltf",
  function (gltf) {
    const room = gltf.scene;
    room.rotation.x = -50;
    room.rotation.y = -100;

    const light = new THREE.DirectionalLight(0xffffff, Math.PI);
    light.position.z = 2;
    light.position.y = 6;
    /*     const helper = new THREE.DirectionalLightHelper(light);
    scene.add(helper); */
    room.anisotropy = renderer.capabilities.getMaxAnisotropy();
    scene.add(light);
    scene.add(room);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);
camera.position.z = 14;

window.addEventListener(
  "resize",
  () => {
    camera.aspect = containerDimensions.width / containerDimensions.height;
    camera.updateProjectionMatrix();
    renderer.setSize(containerDimensions.width, containerDimensions.height);
    composer.render();
  },
  false
);

function animate() {
  requestAnimationFrame(animate);

  controls.update();

  composer.render();
}

animate();
