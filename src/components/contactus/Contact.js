import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faPhone, faComment } from '@fortawesome/free-solid-svg-icons';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './Contact.css';

/**
 * Renders a contact form with fields for name, email, phone, and message.
 * @returns {JSX.Element} The rendered contact form.
 */
function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    /**
     * Handles form submission by logging the form data to the console.
     * @param {Event} event - The form submission event.
     */
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Phone:', phone);
        console.log('Message:', message);
    };

    return (
        <div className="contact-container">
            <h1 className="contact-heading">Contact Us</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="name">
                        <FontAwesomeIcon icon={faUser} className="mr-2" />
                        Name
                    </Label>
                    <Input type="text" name="name" id="name" value={name} onChange={(event) => setName(event.target.value)} placeholder="Enter your name" required />
                </FormGroup>
                <FormGroup>
                    <Label for="email">
                        <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                        Email
                    </Label>
                    <Input type="email" name="email" id="email" value={email} onChange={(event) => setEmail(event.targaet.value)} placeholder="Enter your email" required />
                </FormGroup>
                <FormGroup>
                    <Label for="phone">
                        <FontAwesomeIcon icon={faPhone} className="mr-2" />
                        Phone
                    </Label>
                    <Input type="tel" name="phone" id="phone" value={phone} onChange={(event) => setPhone(event.target.value)} placeholder="Enter your phone number" />
                </FormGroup>
                <FormGroup>
                    <Label for="message">
                        <FontAwesomeIcon icon={faComment} className="mr-2" />
                        Message
                    </Label>
                    <Input type="textarea" name="message" id="message" value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Enter your message" required />
                </FormGroup>
                <Button color="primary" type="submit">Submit</Button>
            </Form>
        </div>
    );
}

export default Contact;