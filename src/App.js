import "./App.css";
import KYCModal from "./components/KYCModal";
import CommonModal from "./components/CommonModal";
import { useState } from "react";

function App() {
  const [isKYCModalOpen, setisKYCModalOpen] = useState(false);

  const handleSubmit = () => {
    setisKYCModalOpen(true);
  };

  const handleCloseKYCModal = () => {
    setisKYCModalOpen(false);
  };

  const renderSumSub = () => <KYCModal />;

  return (
    <div className="App">
      <button onClick={handleSubmit}>Open KYC Modal</button>
      {/* Only pass title & renderContent if not using custom modal */}
      {/* No need to pass renderCustomModal if not using custom Modal */}
      <CommonModal
        isOpen={isKYCModalOpen}
        handleClose={handleCloseKYCModal}
        renderCustomModal={renderSumSub}
      />
    </div>
  );
}

export default App;
