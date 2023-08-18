import { Modal } from "./Modal";

export default () => {
  const modal = new Modal({
    isOpen: (modal) => {
    },
    isClose: (modal) => {
    },
    beforeOpen: (instance, data) => {
      const windowModal = instance.modalContainer;
      const modal = windowModal.dataset.target === "modal-success";
      const modalError = windowModal.dataset.target === "modal-error";

      if (modal) {
        const title = windowModal.querySelector('.modal__result-desc');
        title.textContent = data;
      }

      if (modalError) {
        const title = windowModal.querySelector('.modal__result-desc');
        title.textContent = data;
      }

     // window.tochka_API.modal.onOpen("modal-success", false, false, "Текст текст текст");
    }
  });

  window.tochka_API.modal = modal;
};
