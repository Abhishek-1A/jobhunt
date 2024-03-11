import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

export const Context = createContext({ IsAuthorized: false });

const appWrapper = () => {
  const [IsAuthorized, setIsAuthorized] = useState(false);
  const [user, setuser] = useState({});

  return (
    <Context.Provider value={{ IsAuthorized, setIsAuthorized, user, setuser }}>
      <App />
    </Context.Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <appWrapper />
  </React.StrictMode>
);
