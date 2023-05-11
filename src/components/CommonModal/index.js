import React from "react";
import DefaultModal from "./components/DefaultModal";

const CommonModal = ({
  isOpen,
  handleClose,
  renderCustomModal,
  title,
  renderContent,
}) =>
  isOpen ? (
    renderCustomModal ? (
      renderCustomModal()
    ) : (
      <DefaultModal title={title} renderContent={renderContent} />
    )
  ) : null;

export default CommonModal;
