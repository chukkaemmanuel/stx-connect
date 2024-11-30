import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import { UserContextProvider } from "./contexts/UserContext";

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
