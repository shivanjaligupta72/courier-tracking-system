import { useState, useEffect } from "react";

function AddParcel() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [editID, setEditId] = useState(null);
  const [address, setAddress] = useState("");
  const [courier, setCourier] = useState("Standard Delivery");
  const [parcel, setParcel] = useState("Electronics");
  const [status, setStatus] = useState("Pending");
  const [pickup, setPickup] = useState("");
  const [deleveries, setDeleveries] = useState(() => {
    return JSON.parse(localStorage.getItem("deleveries")) || [];
  });

  useEffect(() => {
    localStorage.setItem("deleveries", JSON.stringify(deleveries));
  }, [deleveries]);

  function addParcel() {
    if (
      name.trim() === "" ||
      mobile.trim() === "" ||
      address.trim() === "" ||
      pickup.trim() === ""
    ) {
      alert("please, fill all required field");
      return;
    }
    if (!/^\d{10}$/.test(mobile)) {
      alert("Enter 10 digit mobile number");
      return;
    }
    const newParcel = {
      id: Date.now(),
      name,
      mobile,
      track: "TRK" + Math.floor(Math.random() * 10000),
      address,
      courier,
      parcel,
      pickup,
      status,
    };

    setDeleveries([...deleveries, newParcel]);

    setName("");
    setMobile("");

    setAddress("");
    setCourier("Standard Delivery");
    setParcel("Electronics");
    setPickup("");
    alert("Added Successfully!");
  }
  return (
    <>
      <div className="container ">
        <div className="row justify-content-center ">
          <div className="card ">
            <div className="card-body ">
              <h5 className="text-primary mb-4">
                <i className="bi bi-box-seam me-2"></i>
                Add New Parcel
              </h5>

              <label>Customer Name</label>
              <input
                type="text"
                placeholder="Enter Customer Name"
                className="form-control mb-2"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <label>Mobile Number</label>
              <input
                type="number"
                placeholder="Enter mobile number"
                className="form-control mb-2"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />

              <label>Address</label>
              <input
                type="text"
                placeholder="Enter Address"
                className="form-control mb-2"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />

              <label>Courier Type</label>
              <select
                className="form-select mb-2"
                value={courier}
                onChange={(e) => setCourier(e.target.value)}
              >
                <option>Standard Delivery</option>
                <option>Express Delivery</option>
                <option>Same Day Delivery</option>
                <option>International Courier</option>
              </select>

              <label>Parcel Type</label>
              <select
                className="form-select mb-2"
                value={parcel}
                onChange={(e) => setParcel(e.target.value)}
              >
                <option>Document</option>
                <option>Electronics</option>
                <option>Clothing</option>
                <option>Fragile Item</option>
              </select>

              <label>Status</label>
              <select
                className="form-select mb-2"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option>Pending</option>
                <option>Picked Up</option>
                <option>In Transit</option>
                <option>Out For Delivery</option>
                <option>Delivered</option>
                <option>Returned</option>
              </select>

              <label>Date</label>
              <input
                type="date"
                className="form-control mb-2"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
              />

              <button className="btn btn-primary mt-2" onClick={addParcel}>
                + Add Parcel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddParcel;
