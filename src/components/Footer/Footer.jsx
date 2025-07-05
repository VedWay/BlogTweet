import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 text-white py-12 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-y-10 justify-between">
          {/* Logo + Copy */}
          <div className="w-full sm:w-1/2 lg:w-1/4">
            <Logo width="120px" />
            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              &copy; {new Date().getFullYear()} BlogTweet. <br />
              All rights reserved.
            </p>
          </div>

          {/* Company Links */}
          <div className="w-full sm:w-1/2 lg:w-1/4">
            <h3 className="text-sm font-bold uppercase text-white/80 mb-4 tracking-wide">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-yellow-200 transition">Features</Link></li>
              <li><Link to="/" className="hover:text-yellow-200 transition">Pricing</Link></li>
              <li><Link to="/" className="hover:text-yellow-200 transition">Affiliate</Link></li>
              <li><Link to="/" className="hover:text-yellow-200 transition">Press Kit</Link></li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="w-full sm:w-1/2 lg:w-1/4">
            <h3 className="text-sm font-bold uppercase text-white/80 mb-4 tracking-wide">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-yellow-200 transition">Account</Link></li>
              <li><Link to="/" className="hover:text-yellow-200 transition">Help</Link></li>
              <li><Link to="/" className="hover:text-yellow-200 transition">Contact Us</Link></li>
              <li><Link to="/" className="hover:text-yellow-200 transition">Customer Support</Link></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="w-full sm:w-1/2 lg:w-1/4">
            <h3 className="text-sm font-bold uppercase text-white/80 mb-4 tracking-wide">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-yellow-200 transition">Terms</Link></li>
              <li><Link to="/" className="hover:text-yellow-200 transition">Privacy</Link></li>
              <li><Link to="/" className="hover:text-yellow-200 transition">Licensing</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
