import React, { useState, useEffect, Component } from "react";
import axios from "axios";
import Services from "./../pages/services/Services";

// class Test extends Component {
//   state = {
//     services: [],
//   };

// //   async componentDidMount() {
// //     const result = await axios.get("http://localhost:3003/service");
// //     this.setState({
// //       services: result,
// //     });
// //   }
//     loadService = async () => {
//       const result = await axios.get("http://localhost:3003/service");
//       this.setState({
//         services: result,
//       });
//     };
//   render() {
//     return (
//       <>
//         <h2>hello from test</h2>
//         {console.log("this is one time running")}

//         <ul>
//           {this.state.services.map((item) => {
//             return <li key={item.id}>{item.title}</li>;
//           })}
//         </ul>
//       </>
//     );
//   }
// }

const Test = () => {
  // const [Service, setService] = useState([
  //   { title: "shahzeb" },
  //   { title: "qasim" },
  // ]);

  const [service, setService] = useState([]);

  useEffect(() => {
    loadSercices();
  }, []);

  const loadSercices = async () => {
    const response = await axios.get("http://localhost:3003/services");
    setService(response.data);
  };

  return (
    <>
      <h2>Hello from test</h2>
      <table className="table border shadow">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
          </tr>
        </thead>
        <tbody>
          {service.map((user) => (
            <tr>
              <th scope="row">{user.id}</th>
              <td>{user.title}</td>
              <td>{user.img}</td>

              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Test;
