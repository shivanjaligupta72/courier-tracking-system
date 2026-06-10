import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import AddParcel from "./pages/AddParcel";
import AllParcel from "./pages/AllParcel";
import InTransit from "./pages/InTransit";

import Delivered from "./pages/Delivered";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <div className="col-md-10 p-3 ">
            <Routes>
              <Route path="/" element={<Dashboard />} />

              <Route path="/add-parcel" element={<AddParcel />} />

              <Route path="/all-parcel" element={<AllParcel />} />
              <Route path="/about" element={<About />} />
              <Route path="/inTransit" element={<InTransit />} />
              <Route path="/delivered" element={<Delivered />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
