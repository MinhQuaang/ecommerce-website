import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<h1>Trang chủ đây</h1>}></Route>
        <Route path="/category" element={<h1>Category</h1>} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
