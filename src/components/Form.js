import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [phoneNo, setPhoneNo] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [panNo, setPanNo] = useState('');
  const [aadharNo, setAadharNo] = useState('');
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();

  const countries = [
    { value: 'India', label: 'India' },
    { value: 'USA', label: 'USA' },
    { value: 'Canada', label: 'Canada' },
  ];

  const cities = [
    { value: 'Delhi', label: 'Delhi' },
    { value: 'Mumbai', label: 'Mumbai' },
    { value: 'Bangalore', label: 'Bangalore' },
  ];

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'firstName':
        setFirstName(value);
        break;
      case 'lastName':
        setLastName(value);
        break;
      case 'username':
        setUsername(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'phoneNo':
        setPhoneNo(value);
        break;
      case 'country':
        setCountry(value);
        break;
      case 'city':
        setCity(value);
        break;
      case 'panNo':
        setPanNo(value);
        break;
      case 'aadharNo':
        setAadharNo(value);
        break;
      default:
        break;
    }
  };

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const validateForm = () => {
    const errors = {};
    if (!firstName) {
      errors.firstName = 'First Name is required';
    }
    if (!lastName) {
      errors.lastName = 'Last Name is required';
    }
    if (!username) {
      errors.username = 'Username is required';
    }
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      errors.email = 'Invalid Email';
    }
    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 8) {
      errors.password = 'Password must be at least 8 characters';
    }
    if (!phoneNo) {
      errors.phoneNo = 'Phone Number is required';
    } else if (!/^\+?\d{1,3}?[-.]?\(?(?:\d{2,3})\)?[-.]?\d\d\d[-.]?\d\d\d\d$/.test(phoneNo)) {
      errors.phoneNo = 'Invalid Phone Number';
    }
    if (!country) {
      errors.country = 'Country is required';
    }
    if (!city) {
      errors.city = 'City is required';
    }
    if (!panNo) {
      errors.panNo = 'PAN Number is required';
    }
    if (!aadharNo) {
      errors.aadharNo = 'Aadhar Number is required';
    }
    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    validateForm();
    if (isFormValid) {
      navigate.push('/success', {
        state: {
          firstName,
          lastName,
          username,
          email,
          password,
          phoneNo,
          country,
          city,
          panNo,
          aadharNo,
        },
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name:</label>
        <input type="text" name="firstName" value={firstName} onChange={handleInputChange} />
        {errors.firstName && <div style={{ color: 'red' }}>{errors.firstName}</div>}
      </div>
      <div>
        <label>Last Name:</label>
        <input type="text" name="lastName" value={lastName} onChange={handleInputChange} />
        {errors.lastName && <div style={{ color: 'red' }}>{errors.lastName}</div>}
      </div>
      <div>
        <label>Username:</label>
        <input type="text" name="username" value={username} onChange={handleInputChange} />
        {errors.username && <div style={{ color: 'ed' }}>{errors.username}</div>}
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={email} onChange={handleInputChange} />
        {errors.email && <div style={{ color: 'ed' }}>{errors.email}</div>}
      </div>
      <div>
        <label>Password:</label>
        <input
          type={showPassword? 'text' : 'password'}
          name="password"
          value={password}
          onChange={handleInputChange}
        />
        <button type="button" onClick={handlePasswordToggle}>
          {showPassword? 'Hide' : 'Show'}
        </button>
        {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
      </div>
      <div>
        <label>Phone Number:</label>
        <input type="tel" name="phoneNo" value={phoneNo} onChange={handleInputChange} />
        {errors.phoneNo && <div style={{ color: 'red' }}>{errors.phoneNo}</div>}
      </div>
      <div>
        <label>Country:</label>
        <select name="country" value={country} onChange={handleInputChange}>
          {countries.map((country) => (
            <option value={country.value}>{country.label}</option>
          ))}
        </select>
        {errors.country && <div style={{ color: 'red' }}>{errors.country}</div>}
      </div>
      <div>
        <label>City:</label>
        <select name="city" value={city} onChange={handleInputChange}>
          {cities.map((city) => (
            <option value={city.value}>{city.label}</option>
          ))}
        </select>
        {errors.city && <div style={{ color: 'red' }}>{errors.city}</div>}
      </div>
      <div>
        <label>PAN Number:</label>
        <input type="text" name="panNo" value={panNo} onChange={handleInputChange} />
        {errors.panNo && <div style={{ color: 'red' }}>{errors.panNo}</div>}
      </div>
      <div>
        <label>Aadhar Number:</label>
        <input type="text" name="aadharNo" value={aadharNo} onChange={handleInputChange} />
        {errors.aadharNo && <div style={{ color: 'red' }}>{errors.aadharNo}</div>}
      </div>
      <button type="submit" disabled={!isFormValid}>
        Submit
      </button>
    </form>
  );
};

export default Form;