import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage/AuthPage";
import ChatPage from "./pages/ChatPage/ChatPage";
import { useState } from "react";

function App() {
  let idInstance = "1101822620";
  let apiTokenInstance = "3786495705ac4f7abfd3ea3a0fdcf4792e935767808b45139c";

  return (
    <div className="App">
      <span className="App__top"></span>
      <div className="App__module-window">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthPage />} />
          <Route path="/login" element={<AuthPage />} />
          <Route path="/chat" element={<ChatPage />} />
        </Routes>
      </BrowserRouter>
      </div>
      
    </div>
  );
}

export default App;
