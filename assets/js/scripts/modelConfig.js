import ModelsRender from "../classes/ModelsRender.js";

const container = document.getElementById("c-threejs__container");

const roomModel = new ModelsRender(
  container,
  75,
  0.01,
  1000,
  12,
  "/assets/models/scene.gltf"
);

innerWidth <= 700 ? roomModel.destructor() : roomModel.init();
