import { useEffect, useRef, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Employees() {

  const [employees, setEmployees] = useState([]);

  const idRef = useRef();
  const nameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const avatarRef = useRef();

  useEffect(() => {
    fetch("https://reqres.in/api/users")
    .then(res => res.json())
    .then(json => setEmployees(json.data))
  }, []);

  const addEmployee = () => {
    if (idRef.current.value === "") {
      toast("Please add employee ID");
      return;
    }

    if (Number.isNaN(Number(idRef.current.value))) {
      toast("Please check employee ID. It should contain only numbers");
      return;
    }

    if (nameRef.current.value === "" || lastNameRef.current.value === "") {
      toast("Please add employee name");
      return;
    }

    const letterValidator = /^[A-Za-z\s']+$/;
    if (letterValidator.test(nameRef.current.value) === false || letterValidator.test(lastNameRef.current.value) === false) {
      toast("Employee name can contain only letters");
      return;
    }

    const emailValidator = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailValidator.test(emailRef.current.value) === false) {
      toast("Please check employee email address");
    }

    if (emailRef.current.value === "") {
      toast("Please add employee email");
      return;
    }

    if (avatarRef.current.value === "") {
      toast("Please add employee photo");
      return;
    }
    const newEmployee = {
      id: Number(idRef.current.value),
      email: emailRef.current.value,
      first_name: nameRef.current.value,
      last_name: lastNameRef.current.value,
      avatar: avatarRef.current.value
    }
/*     setEmployees([...employees, newEmployee]); */
    employees.push(newEmployee);
    setEmployees(employees.slice());
    toast("New employee was added!");
  }

  const deleteEmployee = (index) => {
    employees.splice(index,1);
    setEmployees(employees.slice());
  }

  return (<div>
    <div className="container">
      <h2 className="mb-4">Employees</h2>
      <Table className="table table-hover table-bordered table-sortable">
        <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Avatar</th>
          <th scope="col">Actions</th>
        </tr>
        </thead>
        <tbody>
        {employees.map((employee, index) => (
          <tr key={employee.id}>
            <td>{employee.id}</td>
            <td>{employee.first_name + " " + employee.last_name}</td>
            <td>{employee.email}</td>
            <td><img src={employee.avatar} alt="" /></td>
            <td>
              <button onClick={() => deleteEmployee(index)}>x</button>
            </td>
          </tr>
        ))}
        <tr className="input-row">
          <td><input ref={idRef} type="text" placeholder="ID" className="form-control"/></td>
          <td><input ref={nameRef} type="text" placeholder="Name" className="form-control"/>
          <input ref={lastNameRef} type="text" placeholder="Last name" className="form-control"/></td>
          <td><input ref={emailRef} type="text" placeholder="Email" className="form-control"/></td>
          <td><input ref={avatarRef} type="text" placeholder="Avatar" className="form-control"/></td>
          <td><Button type="submit" variant="success" onClick={() => addEmployee(setEmployees)}>Add</Button></td>
        </tr>
        </tbody>
      </Table>
    </div>
    <ToastContainer />
  </div>)
}

export default Employees;