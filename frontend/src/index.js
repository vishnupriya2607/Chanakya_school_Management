import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MyContextProvider } from "./context/MyContext";  // ✅ Ensure this is correctly imported

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MyContextProvider>  {/* ✅ Wrap the whole app with the provider */}
      <App />
    </MyContextProvider>
  </React.StrictMode>
);
