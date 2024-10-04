import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure to import Bootstrap CSS

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send the data to an API)
        alert(`Thank you for your message, ${name}!`);
        // Reset form
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="container mt-5" style={{ maxWidth: '600px' }}>
            <h1 className="mb-4">Contact Us</h1>
            <p>Phone: +123456789</p>
            <p>Email: contact@momjewelryshop.com</p>
            <p>Address: 123 Jewelry Lane, City, Country</p>

            <h2 className="mt-4">Send Us a Message</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message:</label>
                    <textarea
                        id="message"
                        className="form-control"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" className="btn btn-primary">
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default Contact;
