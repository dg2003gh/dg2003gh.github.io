function toggleModal(modalTag) {
  const overlay = document.querySelector("#overlay");

  if (modalTag == null) return;
  overlay.classList.toggle("u-active");
  overlay.setAttribute("modal-target", `#${modalTag.id}`);
  document.body.classList.toggle("u-active");
  modalTag.classList.toggle("u-active");
}

document.querySelectorAll("[data-modal-target]").forEach((element) => {
  element.addEventListener("click", () => {
    let modalTag = document.querySelector(element.dataset.modalTarget);
    toggleModal(modalTag);
  });
});
