import Employees from "./Employees";

function EmpTable() {
  return (
    <section className="section">
      <div className="columns is-centered">
        <div className="column is-narrow table-container">
          <table className="table is-narrow" style={{margin: "auto"}}>
            <thead>
              <tr>
                <th title="picture">Picture</th>
                <th title="name">Name</th>
                <th title="email">Email</th>
                <th title="birthday">Birthday</th>
                <th title="address">Address</th>
                <th title="phone">Phone</th>
              </tr>
            </thead>
            <Employees />
          </table>
        </div>
      </div> 
    </section>
  );
}

export default EmpTable;
