import React, { useState } from "react";
import Input from "./Input";

const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        if (!name || !email || !phone) {
            alert('Please fill the form');
        } else {
            alert(`Name: ${name}, Email: ${email}, Phone: ${phone}`); 
        }
    };

    const [isSubmitted, setIsSubmitted] = useState(false);

    return (
        <div className="container">
            <form onSubmit={(e) => handleSubmit(e)}>
                <Input
                    type="text"
                    placeholder="Name"
                    value={name}
                    label="name"
                    onChange={setName}
                />
                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    label="email"
                    onChange={setEmail}
                />
                <Input
                    type="phone"
                    placeholder="Phone No"
                    value={phone}
                    label="phone"
                    onChange={setPhone}
                />
                <button type="submit"
                style={{ backgroundColor: isSubmitted ? 'black' : '' }}
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Form;
