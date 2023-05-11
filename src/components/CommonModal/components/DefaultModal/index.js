import React from "react";

const DefaultModal = ({ title, renderContent }) => {
  return (
    <div>
      <h1>{title}</h1>
      {renderContent()}
    </div>
  );
};

export default DefaultModal;
