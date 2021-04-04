import Employees from "./Employees";

function EmpTable() {
  return (
    <section className="section">
      <div className="columns is-centered">
        <div className="column is-narrow table-container">
          <table className="table is-narrow" style={{margin: "auto"}}>
            <thead>
              <tr>
                <th title="picture" className="has-text-centered">Picture</th>
                <th title="name" className="has-text-centered">Name</th>
                <th title="email" className="has-text-centered">Email</th>
                <th title="birthday" className="has-text-centered">Birthday</th>
                <th title="address" className="has-text-centered">Address</th>
                <th title="phone" className="has-text-centered">Phone</th>
              </tr>
            </thead>
            <Employees />
          </table>
        </div>
      </div> 
    </section>
  )
}

export default EmpTable;
