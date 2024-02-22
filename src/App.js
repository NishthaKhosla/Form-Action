import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import FormAction from "./components/FormAction/FormAction";

const App = () => {
  const initialData = {
    name: "",
    age: "",
    address: "",
    email: "",
  };
  const [formData, setFormData] = useState(initialData);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home formData={formData} />} />
        <Route
          path="/form"
          element={<FormAction setFormData={setFormData} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
