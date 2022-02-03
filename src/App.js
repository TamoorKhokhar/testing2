// import Student from "./Student.js";
// import { useState } from "react";
// import { useState } from "react";
function App() {
  // const [data, setdata] = useState("tamoor");
  // const [data1, setData1] = useState(22);
  // function updateData() {
  //   setdata("Tamoor Islam");
  // }
  // function updateDataAge() {
  //   setData1(24);

  //how to update any prop

  // const [name, setState] = useState("Tamoor");
  // function UpdateName() {
  //   setState("Tamoor Khokhar");
  // }

  //How to get value using inpu
  // const [data, setState] = useState(null);
  // const [Print, setPrint] = useState(false);

  // function getData(e) {
  //   console.log(e.target.value);
  //   setState(e.target.value);
  // }
  // function printData(e) {
  //   setPrint(true);
  // }

  //HIDESHOW
  // let [status, setStatus] = useState(true);
  // function hideData() {
  //   setStatus(false);
  // }
  // function showData() {
  //   setStatus(!status);
  // }

  return (
    // <div>
    //   <h1>
    //     Hello My name is {data} and my age is {data1}
    //   </h1>
    //   <button onClick={updateData}>Update</button>
    //   <button onClick={updateDataAge}>Age</button>
    // </div>

    <div>
      {/* <div>
        <Student name={names} />
        <button onClick={UpdateName}>Update Name</button> 

         <Student
          name={"shaoor"}
          age={"23"}
          email={"tamoor11@gmail.com"}
          adress={"ghazi road"}
          phoneno={"092344"}
        /> 
      </div>  */}
      {/* How to get value using input */}
      {/* <h1>GET INPUT BOX VALUE</h1>
      {Print ? <h2>{data}</h2> : null5}
      <input type="text" onChange={getData} />
      <button onClick={printData}>ADD DATA</button> */}
      {/* 
//HIDESHOW and toggle */}
      {/* <h1>HIDESHOW ELEMENT</h1>
      {status ? <h2>Hello World</h2> : null}
      {/* <button onClick={hideData}>HIDE</button> */}
      {/* <button onClick={showData}>Toogle</button> */}
    </div>
  );
}
export default App;
