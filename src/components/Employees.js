// $.ajax({
//   url: "https://randomuser.me/api/",
//   dataType: "json",
//   success: function (data) {
//     console.log(data);
//   },
// });

function Employees(result) {
  return (
    <tbody>
      <tr>
        <th>{result.name}</th>
        <th>{result.Email}</th>
        <th>{result.Birthday}</th>
        <th>{result.Address}</th>
        <th>{result.Phone}</th>
      </tr>
    </tbody>
  );
}

export default Employees;
