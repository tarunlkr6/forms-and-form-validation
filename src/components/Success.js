import React from "react";
import { useLocation } from "react-router-dom";

export default function Success() {
    const location = useLocation();

    return (
        <div className="success">
            <h1>Submitted Details :</h1>
            <hr />
            <p><strong>First Name:</strong> {location.state.formData.firstName}</p>
            <p><strong>Last Name:</strong> {location.state.formData.lastName}</p>
            <p><strong>Username:</strong> {location.state.formData.username}</p>
            <p><strong>Password:</strong> ********</p>
            <p><strong>Email:</strong> {location.state.formData.email}</p>
            <p><strong>Phone Number:</strong> {location.state.formData.phoneNo}</p>
            <p><strong>Country:</strong> {location.state.formData.country}</p>
            <p><strong>City:</strong> {location.state.formData.city}</p>
            <p><strong>PAN Number:</strong> {location.state.formData.panNo}</p>
            <p><strong>Aadhar Number:</strong> {location.state.formData.aadharNo}</p>
        </div>
    );
}