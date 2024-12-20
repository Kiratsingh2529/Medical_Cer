import React from "react";
import ReactDOM from "react-dom/client"; // Import `createRoot` for React 18+
import "./index.css";
import MedicalCertificatePage from "./components/MedicalCertificatePage";

const root = ReactDOM.createRoot(document.getElementById("root")); // Use `createRoot`
root.render(
  <React.StrictMode>
    <MedicalCertificatePage />
  </React.StrictMode>
);
