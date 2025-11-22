
import React from 'react';

function ContactForm() {
    return (
        <form
            action="https://formspree.io/f/mrbdednw"
            method="POST"
            className="contact-form"
        >
            {/* Redirect to Thanks page after submission */}
            <input type="hidden" name="_next" value="https://kokage21.github.io/#/thanks" />

            {/* Spam protection (honeypot) */}
            <input type="text" name="_gotcha" style={{ display: 'none' }} />

            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
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
                    required
                    placeholder="Subject"
                />
            </div>

            <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Your message here..."
                    rows="5"
                ></textarea>
            </div>

            <button type="submit" className="submit-button">
                Send Message
            </button>
        </form>
    );
}

export default ContactForm;
