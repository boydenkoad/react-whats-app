import "./App.css";
import { BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import AuthPage from "./pages/AuthPage/AuthPage";
import ChatPage from "./pages/ChatPage/ChatPage";
import MessengerPage from "./pages/MessengerPage/MessengerPage";

function App() {

  return (
    <div className="App">
      <span className="App__top"></span>
      <div className="App__module-window">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Navigate to={'/login'}/>}/>
          <Route path="/" element={<Navigate to={'/login'}/>}/>
          <Route path="/login" element={<AuthPage />} />
          <Route path="/messenger" element={<MessengerPage />} />
        </Routes>
      </BrowserRouter>
      </div>
      
    </div>
  );
}

export default App;
