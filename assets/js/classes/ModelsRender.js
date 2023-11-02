import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  AmbientLight,
  DirectionalLight,
} from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import WebGL from "three/addons/capabilities/WebGL.js";

export default class ModelsRender {
  constructor(container, fov, near, far, cameraDistance, modelPath) {
    this.container = container;
    this.fov = fov;
    this.near = near;
    this.far = far;
    this.cameraDistance = cameraDistance;
    this.modelPath = modelPath;

    this.init();
  }

  init() {
    if (WebGL.isWebGLAvailable()) {
      this.setScene();
      this.setCamera();
      this.setComposer();
      this.setAmbientLight();
      this.setControls();
      this.setModel();
      this.animate();

      window.addEventListener("resize", () => {
        this.camera.aspect =
          this.containerDimensions.width / this.containerDimensions.height;
        this.camera.updateProjectionMatrix();

        this.renderer.setSize(
          this.containerDimensions.width,
          this.containerDimensions.height
        );
      });
    } else {
      const warning = WebGL.getWebGLErrorMessage();
      this.container.appendChild(warning);
    }
  }

  setScene() {
    this.container.style = "z-index: 3;width: 50vw; height: 100vh";
    this.containerDimensions = this.container.getBoundingClientRect();
    this.renderer = new WebGLRenderer({ alpha: true });
    this.scene = new Scene();

    this.renderer.setSize(
      this.containerDimensions.width,
      this.containerDimensions.height
    );
    this.container.appendChild(this.renderer.domElement);
  }

  setCamera() {
    this.camera = new PerspectiveCamera(
      this.fov,
      this.containerDimensions.width / this.containerDimensions.height,
      this.near,
      this.far
    );
    this.camera.position.z = this.cameraDistance;
  }

  setAmbientLight() {
    const ambientLight = new AmbientLight(0x404040, 2.0);
    this.scene.add(ambientLight);
  }

  setComposer() {
    this.composer = new EffectComposer(this.renderer);
    this.composer.addPass(new RenderPass(this.scene, this.camera));
  }

  setControls() {
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
  }

  setModel() {
    const loader = new GLTFLoader();

    loader.load(
      this.modelPath,
      (gltf) => {
        const room = gltf.scene;
        room.rotation.x = -50;
        room.rotation.y = -100;

        const light = new DirectionalLight(0xffffff, Math.PI);
        light.position.z = 2;
        light.position.y = 6;

        room.anisotropy = this.renderer.capabilities.getMaxAnisotropy();
        this.scene.add(light);
        this.scene.add(room);
      },
      undefined,
      function (error) {
        console.error(error);
      }
    );
  }

  animate() {
    this.controls.update();

    this.composer.render();

    window.requestAnimationFrame(this.animate.bind(this));
  }
}
