import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { servicesData } from '../../data/servicesData';

const Contact = () => {
    return (
        <section id="contact" className="py-20 text-white">
            {/* Removed bg-gradient-to-br and background colors */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>

                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-bold mb-6 text-yellow-400">Get In Touch</h3>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <MapPin className="mr-4 mt-1 flex-shrink-0" size={24} />
                                <div>
                                    <p className="font-semibold">InterPak Oilfield Services</p>
                                    <p>Plot # 338, Office # 5, Street # 4, Industrial Area I-9/3, Islamabad, Pakistan</p>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <Phone className="mr-4" size={24} />
                                <div>
                                    <p>+92-51-8484908</p>
                                    <p>Mobile: 0300-9560669 | 0334-5140572</p>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <Mail className="mr-4" size={24} />
                                <p>interpak_512@yahoo.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-lg shadow-lg p-8" style={{ background: 'rgba(255,255,255,0.9)' }}>
                        <h3 className="text-2xl font-bold mb-6 text-blue-900">Send Us a Message</h3>

                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [service, setService] = useState('');
    const [message, setMessage] = useState('');
    const [sending, setSending] = useState(false);
    const [status, setStatus] = useState(null);

    // Fixed receiver email as requested
    const RECEIVER_EMAIL = 'interpak_512@yahoo.com';

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus(null);

        // basic validation
        if (!name || !email || !message) {
            setStatus({ type: 'error', message: 'Please fill name, email and message.' });
            return;
        }

        const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
        const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
        const userId = process.env.REACT_APP_EMAILJS_USER_ID;

        // If EmailJS env vars are set, use EmailJS. Otherwise, fallback to opening the user's
        // email client via a mailto: link addressed to the provided Yahoo mailbox.
        if (!serviceId || !templateId || !userId) {
            // Mailto fallback
            try {
                const subject = `Website Contact: ${service || 'General'} from ${name}`;
                const bodyLines = [
                    `Name: ${name}`,
                    `Email: ${email}`,
                    `Service Interest: ${service || 'N/A'}`,
                    '',
                    message,
                ];
                const body = bodyLines.join('\n');

                // Open the user's default mail client with prefilled fields
                const mailto = `mailto:${encodeURIComponent(RECEIVER_EMAIL)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                window.location.href = mailto;

                setStatus({ type: 'success', message: `Your email client should open to send the message to ${RECEIVER_EMAIL}. If it doesn't, please email ${RECEIVER_EMAIL} manually.` });
                // Clear form fields (optional)
                setName(''); setEmail(''); setService(''); setMessage('');
            } catch (err) {
                setStatus({ type: 'error', message: `Unable to open mail client: ${err.message}. Please email ${RECEIVER_EMAIL} directly.` });
            }
            return;
        }

        setSending(true);

        const payload = {
            service_id: serviceId,
            template_id: templateId,
            user_id: userId,
            template_params: {
                from_name: name,
                from_email: email,
                to_email: RECEIVER_EMAIL,
                service_interest: service,
                message: message,
            }
        };

        try {
            const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (res.ok) {
                setStatus({ type: 'success', message: 'Message sent — we will get back to you shortly.' });
                setName(''); setEmail(''); setService(''); setMessage('');
            } else {
                const text = await res.text();
                setStatus({ type: 'error', message: `Failed to send message (${res.status}). ${text}` });
            }
        } catch (err) {
            setStatus({ type: 'error', message: `Error sending message: ${err.message}` });
        } finally {
            setSending(false);
        }
    };

    return (
        <form className="space-y-4" onSubmit={handleSubmit}>
            {status && (
                <div className={`p-3 rounded ${status.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {status.message}
                </div>
            )}

            <div>
                <label className="block text-gray-700 font-semibold mb-2">Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 text-black" />
            </div>

            <div>
                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 text-black" />
            </div>

            <div>
                <label className="block text-gray-700 font-semibold mb-2">Service Interest</label>
                <select value={service} onChange={(e) => setService(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 text-black">
                    <option value="">Select a service</option>
                    {servicesData.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                </select>
            </div>

            <div>
                <label className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 text-black"></textarea>
            </div>

            <button disabled={sending} type="submit" className={`w-full py-3 rounded-lg font-semibold transition ${sending ? 'bg-gray-400 text-white' : 'bg-dark-blue text-white hover:bg-primary-blue'}`}>
                {sending ? 'Sending...' : 'Send Message'}
            </button>
        </form>
    );
};
