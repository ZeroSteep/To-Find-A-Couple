import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Background, Rules, Settings, TableCell } from ":components";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Background>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/game" element={<TableCell />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/rules" element={<Rules />} />
      </Routes>
    </BrowserRouter>
  </Background>
);
