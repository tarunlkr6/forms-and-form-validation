import React, { useState } from "react"
import { useNavigate } from "react-router-dom";

const emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default function Form() {
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        phoneNo: '',
        country: '',
        city: '',
        panNo: '',
        aadharNo: '',
    })

    const validate = () => {
        let formErrors = {};
        if (!formData.firstName) formErrors.firstName = "First Name is required";
        if (!formData.lastName) formErrors.lastName = "Last Name is required";
        if (!formData.username) formErrors.username = "Username is required";
        if (!formData.email || !emailValidator.test(formData.email)) formErrors.email = "Email is required";
        if (!formData.phoneNo) formErrors.phoneNo = "Phone No is required";
        if (!formData.password) formErrors.password = "Password is required";
        if (!formData.country) formErrors.country = "Country is required";
        if (!formData.city) formErrors.city = "City is required";
        if (!formData.panNo) formErrors.panNo = "PAN number is required";
        if (!formData.aadharNo) formErrors.aadharNo = "Aadhar Number is required";

        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value, });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            navigate('/success', { state: { formData } });
        }
    }

    const handleToogle = () => {
        setShowPassword(!showPassword)
    }

    return (
        <form onSubmit={handleSubmit} className="form">
            <div>
                <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
            </div>
            <div className="error">
                {errors.firstName && <span>{errors.firstName}</span>}
            </div>
            <div>
                <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
            </div>
            <div className="error">
                {errors.lastName && <span>{errors.lastName}</span>}
            </div>
            <div>
                <input type="email" name="email" placeholder="Email Id" value={formData.email} onChange={handleChange} />
            </div>
            <div className="error">
                {errors.email && <span>{errors.email}</span>}
            </div>
            <div>
                <input type="tel" name="phoneNo" placeholder="Phone No." value={formData.phoneNo} onChange={handleChange} />
            </div>
            <div className="error">
                {errors.phoneNo && <span>{errors.phoneNo}</span>}
            </div>
            <div className="input-name">
                <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} />
            </div>
            <div className="error">
                {errors.username && <span>{errors.username}</span>}
            </div>
            <div>
                <input type={showPassword ? 'text' : 'password'} name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
            </div>
            <div className="error">{errors.password && <span>{errors.password}</span>}</div>
            <div>
                <input type="checkbox" onClick={handleToogle} onChange={handleChange} />
                <span id='check'>Show Password</span>
            </div>
            <div>
                <div>
                    <select name="country" value={formData.country} onChange={handleChange}>
                        <option value="">Select Country</option>
                        <option value="India">India</option>
                    </select>
                    <select name="city" value={formData.city} onChange={handleChange}>
                        <option value="">Select City</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Pune">Pune</option>
                        <option value="Surat">Surat</option>
                    </select>
                </div>
            </div>
            <div className='select-option'>{errors.country && <span>{errors.country} {errors.city && <span>{errors.city}</span>}</span>}</div>
            <div>
                <input type="text" name="panNo" placeholder="PAN Number" value={formData.panNo.toUpperCase()} onChange={handleChange} />

            </div>
            <div className="error">{errors.panNo && <span>{errors.panNo}</span>}</div>
            <div>
                <input type="text" name="aadharNo" placeholder="Aadhar Number" value={formData.aadharNo} onChange={handleChange} minLength={12} maxLength={12} pattern="[0-9]+" />

            </div>
            <div className="error">{errors.aadharNo && <span>{errors.aadharNo}</span>}</div>
            <button type="submit" disabled={Object.keys(errors).length > 0}>Submit</button>
        </form>
    );
}