import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      className="col-md-2  text-start text-white vh-100 p-3"
      style={{ backgroundColor: "#001f3f" }}
    >
      <h5 className="mb-5">
        <i className="bi bi-box-seam me-2"></i>
        Courier Tracking
      </h5>

      <ul className="nav flex-column">
        <li className="nav-item mb-3">
          <Link to="/" className="text-decoration-none text-white">
            <i className="bi bi-house-door me-2"></i>
            Dashboard
          </Link>
        </li>

        <li className="nav-item mb-3">
          <Link to="/add-parcel" className="text-decoration-none text-white">
            <i className="bi bi-plus-circle me-2"></i>
            Add Parcel
          </Link>
        </li>

        <li className="nav-item mb-3">
          <Link to="/all-parcel" className="text-decoration-none text-white">
            <i className="bi bi-border-all me-2"></i>
            All Parcels
          </Link>
        </li>
        <li className=" nav-item mb-3">
          <Link to="/delivered" className="text-decoration-none text-white">
            <i className="bi bi-check-circle me-2"></i>Delivered Parcels
          </Link>
        </li>
        <li className="nav-item mb-3  ">
          <Link to="/inTransit" className="text-decoration-none text-white">
            <i className="bi bi-truck me-2"></i>In Transit
          </Link>
        </li>
        <li className="nav-item mb-3  ">
          <i className="bi bi-gear me-2"></i>Setting
        </li>
        <li className="nav-Item mb-3">
          <Link to="/about" className="text-decoration-none text-white">
            <i className="bi bi-info-circle me-2"></i>About
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
