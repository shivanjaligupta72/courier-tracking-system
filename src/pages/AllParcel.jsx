import { useState } from "react";

function AllParcel() {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [deleveries, setDeleveries] = useState(() => {
    return JSON.parse(localStorage.getItem("deleveries")) || [];
  });

  const filteredParcels = deleveries
    .filter(
      (delevery) =>
        delevery.track.toLowerCase().includes(search.toLowerCase()) ||
        delevery.name.toLowerCase().includes(search.toLowerCase()),
    )
    .sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      }

      if (sortBy === "status") {
        return a.status.localeCompare(b.status);
      }

      if (sortBy === "date") {
        return new Date(a.pickup) - new Date(b.pickup);
      }

      return 0;
    });
  function deleteParcel(id) {
    const updated = deleveries.filter((delevery) => delevery.id !== id);

    setDeleveries(updated);
    localStorage.setItem("deleveries", JSON.stringify(updated));
    alert("deleted successfully!");
  }

  function editParcel(id) {
    const updated = deleveries.map((delevery) => {
      if (delevery.id === id) {
        const name = prompt("Enter Name", delevery.name);

        const mobile = prompt("Enter Mobile", delevery.mobile);

        const address = prompt("Enter Address", delevery.address);

        const courier = prompt("Enter Courier Type", delevery.courier);

        const parcel = prompt("Enter Parcel Type", delevery.parcel);

        const status = prompt("Enter Status", delevery.status);

        const pickup = prompt("Enter Pickup Date", delevery.pickup);

        return {
          ...delevery,
          name: name || delevery.name,
          mobile: mobile || delevery.mobile,
          address: address || delevery.address,
          courier: courier || delevery.courier,
          parcel: parcel || delevery.parcel,
          status: status || delevery.status,
          pickup: pickup || delevery.pickup,
        };
      }

      return delevery;
    });

    setDeleveries(updated);

    localStorage.setItem("deleveries", JSON.stringify(updated));
  }

  return (
    <>
      <div className="table-responsive">
        <div className="card">
          <div className="card-body">
            <h5>All Parcels</h5>
            <select
              className="form-select mb-3"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="">Sort By</option>
              <option value="name">Name</option>
              <option value="status">Status</option>
              <option value="date">Pickup Date</option>
            </select>
            <input
              type="text"
              placeholder="🔍Search by Tracking ID or Name  "
              className="form-control mb-3"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <table className="table table-bordered table-striped table-hover mt-3">
              <thead className="table-info">
                <tr className="align-center">
                  <th className="text-center">S.No</th>
                  <th className="text-center">Tracking ID</th>
                  <th className="text-center">Name</th>
                  <th className="text-center">Mobile</th>
                  <th className="text-center">Address</th>
                  <th className="text-center">Courier Type</th>
                  <th className="text-center">Parcel</th>
                  <th className="text-center">Status</th>
                  <th className="text-center">Pickup Date</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>

              <tbody>
                {filteredParcels.map((delevery, index) => (
                  <tr key={delevery.id}>
                    <td className="text-center">{index + 1}</td>
                    <td className="text-center">{delevery.track}</td>
                    <td className="text-center">{delevery.name}</td>
                    <td className="text-center">{delevery.mobile}</td>
                    <td className="text-center">{delevery.address}</td>
                    <td className="text-center">{delevery.courier}</td>
                    <td className="text-center">{delevery.parcel}</td>
                    <td className="text-center">{delevery.status}</td>
                    <td className="text-center">{delevery.pickup}</td>

                    <td>
                      <button
                        className="btn btn-danger btn-sm me-1 mb-2 "
                        onClick={() => deleteParcel(delevery.id)}
                      >
                        <i className="bi bi-trash"></i>
                      </button>

                      <button
                        className="btn btn-warning btn-sm"
                        onClick={() => editParcel(delevery.id)}
                      >
                        <i className="bi bi-pencil-square"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {deleveries.length === 0 && (
              <p className="text-center text-muted">No Parcels Found</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default AllParcel;
