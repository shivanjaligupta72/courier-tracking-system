import { useState } from "react";

function InTransit() {
  const [deleveries] = useState(() => {
    return JSON.parse(localStorage.getItem("deleveries")) || [];
  });

  const inTransitParcels = deleveries.filter(
    (parcel) => parcel.status === "In Transit",
  );

  return (
    <div className="card">
      <div className="card-body">
        <h5>
          <i className="bi bi-truck me-2"></i>
          In Transit Parcels
        </h5>

        <table className="table table-bordered mt-3">
          <thead>
            <tr>
              <th className="text-center">Tracking ID</th>
              <th className="text-center">Name</th>
              <th className="text-center">Status</th>
            </tr>
          </thead>

          <tbody className="text-center">
            {inTransitParcels.map((parcel) => (
              <tr key={parcel.id}>
                <td className="text-center">{parcel.track}</td>
                <td className="text-center">{parcel.name}</td>
                <td className="text-center">{parcel.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default InTransit;
