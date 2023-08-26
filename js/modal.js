(() => {
  const refs = {
    openModalBtn: document.querySelectorAll(".js-modal-open"),
    closeModalBtn: document.querySelector(".js-modal-close"),
    modal: document.querySelector(".js-modal"),
  };

  refs.openModalBtn.forEach((element) => {
    element.addEventListener("click", toggleModal);
  });
  refs.closeModalBtn.addEventListener("click", toggleModal);

  //* Закривання по кліку на бекдроп
  refs.modal.addEventListener("click", removeModal);
  function removeModal(e) {
    if (e.target === e.currentTarget) {
      refs.modal.classList.add("is-hidden");
    }
  }

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    document.body.classList.toggle("modal-open");
  }
})();
