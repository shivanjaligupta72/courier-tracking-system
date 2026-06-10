import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
function Dashboard() {
  const deleveries = JSON.parse(localStorage.getItem("deleveries")) || [];

  const pending = deleveries.filter((d) => d.status === "Pending").length;

  const inTransit = deleveries.filter((d) => d.status === "In Transit").length;

  const delivered = deleveries.filter((d) => d.status === "Delivered").length;

  const returned = deleveries.filter((d) => d.status === "Returned").length;
  const totalParcels = deleveries.length;

  const chartData = [
    {
      status: "pending",
      count: pending,
    },
    {
      status: "In Transit",
      count: inTransit,
    },
    {
      status: "Delevered",
      count: delivered,
    },
    {
      status: "Returned",
      count: returned,
    },
  ];

  const COLORS = [
    "#ffc107", // Pending - Yellow
    "#0dcaf0", // In Transit - Blue
    "#198754", // Delivered - Green
    "#dc3545", // Returned - Red
  ];

  return (
    <>
      <div className="d-flex justify-content-between align-items-center p-3 bg-white shadow-sm mb-3">
        <h5 className="mb-0">
          <i className="bi bi-bar-chart me-2"></i>
          Dashboard
        </h5>

        <div>👤 Admin</div>
      </div>

      <div className="row row-cols-1 row-cols-md-5 g-3">
        <div className="col">
          <div className="card text-center">
            <div className="card-body">
              <i className="bi bi-box-seam fs-1 text-primary"></i>
              <h5> Total Parcels</h5>
              <h3>{totalParcels}</h3>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card text-center ">
            <div className="card-body">
              <i className="bi bi-hourglass-split fs-1 text-warning"></i>
              <h5>Pending</h5>
              <h3>{pending}</h3>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card text-center">
            <div className="card-body">
              <i className="bi bi-truck fs-1 text-info"></i>
              <h5>In Transit</h5>
              <h3>{inTransit}</h3>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card text-center">
            <div className="card-body">
              <i className="bi bi-check-circle-fill fs-1 text-success"></i>
              <h5>Delivered</h5>
              <h3>{delivered}</h3>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card text-center">
            <div className="card-body">
              <i className="bi bi-arrow-return-left fs-1 text-danger"></i>
              <h5>Returned</h5>
              <h3>{returned}</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="card mt-2">
        <div className="card-body">
          <h5>Parcel Status Chart</h5>
          <div className=" d-flex justify-content-center">
            <PieChart width={400} height={300}>
              <Pie
                data={chartData}
                dataKey="count"
                nameKey="status"
                outerRadius={100}
                label
              >
                {chartData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>

              <Tooltip />
              <Legend />
            </PieChart>
          </div>
        </div>
      </div>

      <div className="card mt-2  ">
        <div className="card-body">
          <h5>Recent Parcels (Latest 5)</h5>

          <div className="table-responsive">
            <table className="table table-bordered table-striped mt-3">
              <thead>
                <tr>
                  <th className="text-center">S.No</th>
                  <th className="text-center">Tracking ID</th>
                  <th className="text-center">Name</th>
                  <th className="text-center">Mobile</th>
                  <th className="text-center">Address</th>
                  <th className="text-center">Courier Type</th>
                  <th className="text-center">Parcel</th>
                  <th className="text-center">Status</th>
                  <th className="text-center">Pickup Date</th>
                </tr>
              </thead>

              <tbody>
                {deleveries
                  .slice(-5)
                  .reverse()
                  .map((delevery, index) => (
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

export default Dashboard;
