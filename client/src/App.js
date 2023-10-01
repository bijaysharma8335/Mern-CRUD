import AddContact from "./components/AddContact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DisplayContact from "./components/DisplayContact";
import EditContact from "./components/EditContact";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DisplayContact />} />{" "}
                <Route path="/add" element={<AddContact />} />
                <Route path="/edit/:id" element={<EditContact />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
