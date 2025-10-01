import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState(null); // null | 'ok' | 'error'

    const handleSubscribe = (e) => {
        e.preventDefault();
        // Simple front-end validation
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setStatus('error');
            return;
        }

        // Simulate subscription success (replace with API call)
        setStatus('ok');
        setEmail('');
        setTimeout(() => setStatus(null), 4000);
    };

    return (
        <footer className="bg-black">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-extrabold text-sky-300">SafeSphere</h3>
                        <p className="mt-3 text-sm text-white">
                            Speak up safely, report anonymously, and help create a secure learning environment where every
                            student feels safe.
                        </p>

                        <div className="flex items-center mt-4 space-x-3">
                            <a href="#" aria-label="Facebook" className="text-white/70 hover:text-sky-300 transition">
                                <FaFacebookF />
                            </a>
                            <a href="#" aria-label="Instagram" className="text-white/70 hover:text-pink-400 transition">
                                <FaInstagram />
                            </a>
                            <a href="#" aria-label="Twitter" className="text-white/70 hover:text-sky-300 transition">
                                <FaTwitter />
                            </a>
                            <a href="#" aria-label="LinkedIn" className="text-white/70 hover:text-sky-300 transition">
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-sky-300">Quick Links</h4>
                        <ul className="mt-4 space-y-2 text-sm text-white">
                            <li>
                                <Link to="/" className="hover:text-sky-300 transition">Home</Link>
                            </li>
                            <li>
                                <Link to="/about" className="hover:text-sky-300 transition">About</Link>
                            </li>
                            <li>
                                <Link to="/report" className="hover:text-sky-300 transition">Report</Link>
                            </li>
                            <li>
                                <Link to="/dashboard" className="hover:text-sky-300 transition">Dashboard</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="hover:text-sky-300 transition">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources / Contact */}
                    <div>
                        <h4 className="text-lg font-semibold text-sky-300">Contact</h4>
                        <address className="not-italic mt-4 text-sm text-white">
                            123 Campus Road<br />
                            Sonipat, Haryana
                        </address>
                        <a href="mailto:support@safesphere.com" className="block mt-3 text-sm text-white hover:text-sky-300">support@safesphere.com</a>
                        <a href="tel:+1234567890" className="block mt-1 text-sm text-white hover:text-sky-300">+1 234 567 890</a>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-lg font-semibold text-sky-300">Stay Updated</h4>
                        <p className="mt-3 text-sm text-white">Subscribe to get tips, safety updates, and resources for a safer student life.</p>

                        <form onSubmit={handleSubscribe} className="mt-4 flex flex-col sm:flex-row sm:items-center sm:space-x-3">
                            <label htmlFor="footer-email" className="sr-only">Email address</label>
                            <input
                                id="footer-email"
                                type="email"
                                className="w-full px-4 py-2 rounded-lg border border-gray-700 bg-transparent text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-sky-300"
                                placeholder="Your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                aria-label="Email address"
                            />
                            <button
                                type="submit"
                                className="mt-3 sm:mt-0 w-full sm:w-auto bg-sky-400 hover:bg-sky-300 text-black px-5 py-2 rounded-lg font-semibold transition"
                            >
                                Subscribe
                            </button>
                        </form>

                        {status === 'ok' && <p className="mt-3 text-sm text-green-400">Thanks for subscribing!</p>}
                        {status === 'error' && <p className="mt-3 text-sm text-red-400">Please enter a valid email address.</p>}
                    </div>
                </div>

                <div className="mt-8 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-white/80">
                    <p className='text-center'>© {new Date().getFullYear()} SafeSphere. All rights reserved.</p>
                    <div className="mt-3 md:mt-0 space-x-4">
                        <Link to="/privacy" className="hover:text-sky-300">Privacy</Link>
                        <Link to="/terms" className="hover:text-sky-300">Terms</Link>
                        <Link to="/support" className="hover:text-sky-300">Support</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;