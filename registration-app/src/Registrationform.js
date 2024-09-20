import React, { useState } from 'react';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        userId: '',
        password: '',
        name: '',
        country: '',
        zipCode: '',
        email: '',
        gender: '', // Ensure gender is initialized properly
        language: [],
        about: '',
    });

    const [errors, setErrors] = useState({});

    // Handling form data changes
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === 'checkbox') {
            setFormData({
                ...formData,
                language: checked
                    ? [...formData.language, value]
                    : formData.language.filter((lang) => lang !== value),
            });
        } else if (type === 'radio') {
            setFormData({
                ...formData,
                gender: value,
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    // Form Validation
    const validate = () => {
        let formErrors = {};

        if (!formData.userId || formData.userId.length < 5 || formData.userId.length > 12) {
            formErrors.userId = 'Required and must be of length 5 to 12.';
        }
        if (!formData.password || formData.password.length < 7 || formData.password.length > 12) {
            formErrors.password = 'Required and must be of length 7 to 12.';
        }
        if (!formData.name || !/^[a-zA-Z]+$/.test(formData.name)) {
            formErrors.name = 'Required and alphabets only.';
        }
        if (!formData.country) {
            formErrors.country = 'Required. Must select a country.';
        }
        if (!formData.zipCode || !/^\d+$/.test(formData.zipCode)) {
            formErrors.zipCode = 'Required. Must be numeric only.';
        }
        if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) {
            formErrors.email = 'Required. Must be a valid email.';
        }
        if (!formData.gender) {
            formErrors.gender = 'Required.';
        }
        if (formData.language.length === 0) {
            formErrors.language = 'Required.';
        }

        return formErrors;
    };

    // Handling form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validate();

        if (Object.keys(formErrors).length === 0) {
            setErrors({}); // Clear errors
            alert('Form submitted successfully!');
            console.log('Form Data: ', formData);
        } else {
            setErrors(formErrors); // Set errors
        }
    };

    return (
        <div>
            <h1 id='title'>Registration Form</h1>
            <form onSubmit={handleSubmit}>

                {/* User ID Div */}
                <div className='userid'>
                    <label>User ID:</label>
                    <input
                        type="text"
                        name="userId"
                        value={formData.userId}
                        onChange={handleChange}
                    />
                    {errors.userId && <span className="error">{errors.userId}</span>}
                </div>

                {/* Password Div */}
                <div className='password'>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {errors.password && <span className="error">{errors.password}</span>}
                </div>

                {/* Name Div */}
                <div className='name'>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {errors.name && <span className="error">{errors.name}</span>}
                </div>

                {/* Country Div */}
                <div className='country'>
                    <label>Country:</label>
                    <select name="country" value={formData.country} onChange={handleChange}>
                        <option value="">Please select a country</option>
                        <option value="US">USA</option>
                        <option value="UK">UK</option>
                        <option value="PK">Pakistan</option>
                    </select>
                    {errors.country && <span className="error">{errors.country}</span>}
                </div>

                {/* Zip Code Div */}
                <div className='zipcode'>
                    <label>ZIP Code:</label>
                    <input
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                    />
                    {errors.zipCode && <span className="error">{errors.zipCode}</span>}
                </div>

                {/* Email Div */}
                <div className='email'>
                    <label>Email:</label>
                    <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>

                {/* Gender Div */}
                <div className='gender'>
                    <label>Gender:</label>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="Male"
                            checked={formData.gender === 'Male'}
                            onChange={handleChange}
                        />
                        Male
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="Female"
                            checked={formData.gender === 'Female'}
                            onChange={handleChange}
                        />
                        Female
                    </label>
                    {errors.gender && <span className="error">{errors.gender}</span>}
                </div>

                {/* Language Div */}
                <div className='language'>
                    <label>Language:</label>
                    <label>
                        <input
                            type="checkbox"
                            name="language"
                            value="English"
                            checked={formData.language.includes("English")}
                            onChange={handleChange}
                        />
                        English
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="language"
                            value="Non English"
                            checked={formData.language.includes("Non English")}
                            onChange={handleChange}
                        />
                        Non English
                    </label>
                    {errors.language && <span className="error">{errors.language}</span>}
                </div>

                {/* About Div */}
                <div className='about'>
                    <label>About (Optional):</label>
                    <textarea
                        name="about"
                        value={formData.about}
                        onChange={handleChange}
                    />
                </div>

                {/* Button Div */}
                <div className='button'>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default RegistrationForm;
