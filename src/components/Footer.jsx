import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          
          {/* Links */}
          <div>
            <h3 className="font-semibold text-lg">FAQ</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Help Center</a></li>
              <li><a href="#" className="hover:underline">Terms of Use</a></li>
              <li><a href="#" className="hover:underline">Privacy</a></li>
            </ul>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="font-semibold text-lg">Contact Us</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Facebook</a></li>
              <li><a href="#" className="hover:underline">Instagram</a></li>
              <li><a href="#" className="hover:underline">Twitter</a></li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-lg">About</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" className="hover:underline">About Netflix</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Press</a></li>
            </ul>
          </div>

          {/* Language and Country */}
          <div>
            <h3 className="font-semibold text-lg">Language</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" className="hover:underline">English</a></li>
              <li><a href="#" className="hover:underline">Español</a></li>
              <li><a href="#" className="hover:underline">Français</a></li>
            </ul>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-8 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} Netflix, Inc. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
