import { useState } from "react";
function Delivered() {
  const [deleveries] = useState(() => {
    return JSON.parse(localStorage.getItem("deleveries")) || [];
  });

  const deleveredParcels = deleveries.filter(
    (parcel) => parcel.status === "Delivered",
  );

  return (
    <div className="card">
      <div className="card-body">
        <h5>
          <i className="bi bi-check-circle-fill fs-1 text-success"></i>Delivered
          Parcels
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
            {deleveredParcels.map((parcel) => (
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

export default Delivered;
