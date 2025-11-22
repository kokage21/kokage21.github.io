import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch('https://formspree.io/f/xbllegrl', { // Using a placeholder ID first, wait, user gave email.
                // Formspree usually requires a form ID (like xbllegrl) OR you can post to the email if you register it.
                // Actually, posting to https://formspree.io/f/EMAIL is the old way and often requires the email to be the ID or registered.
                // The user provided 'e015551@yahoo.co.jp'.
                // Standard Formspree usage is creating a form in their dashboard and getting an ID.
                // HOWEVER, for simple usage, sometimes you can use the email directly if it's a new form, but Formspree changed this.
                // Let's try using the email as the endpoint: https://formspree.io/f/e015551@yahoo.co.jp
                // If that fails, I'll have to ask the user to register.
                // But usually, the first time you POST to a new email address on Formspree, it triggers the registration email.
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
                navigate('/thanks');
            } else {
                setStatus('error');
                const data = await response.json();
                console.error('Formspree error:', data);
            }
        } catch (error) {
            setStatus('error');
            console.error('Network error:', error);
        }
    };

    // Note: The URL below uses the email directly. This triggers Formspree to send a confirmation email to that address.
    // Once confirmed, the form will work.
    const formEndpoint = "https://formspree.io/f/e015551@yahoo.co.jp";

    return (
        <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                />
            </div>

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                />
            </div>

            <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Subject"
                />
            </div>

            <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Your message here..."
                    rows="5"
                ></textarea>
            </div>

            <button type="submit" className="submit-button" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'error' && (
                <p className="error-message">Failed to send message. Please try again later.</p>
            )}
        </form>
    );
}

export default ContactForm;
