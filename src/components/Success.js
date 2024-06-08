import { Navigate, useNavigate } from 'react-router-dom';

function Success() {
  const { state } = useNavigate().location;

  if (!state) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <h1>Form Submission Successful!</h1>
      <p>First Name: {state.firstName}</p>
      <p>Last Name: {state.lastName}</p>
      <p>Username: {state.username}</p>
      <p>Email: {state.email}</p>
      <p>Password: {state.password}</p>
      <p>Phone Number: {state.phoneNo}</p>
      <p>Country: {state.country}</p>
      <p>City: {state.city}</p>
      <p>PAN Number: {state.panNo}</p>
      <p>Aadhar Number: {state.aadharNo}</p>
    </div>
  );
};

export default Success;