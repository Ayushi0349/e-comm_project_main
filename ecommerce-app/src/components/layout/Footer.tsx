import React from 'react';
import { Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#BCDDFE] mt-16">
      <div className="container mx-auto px-4 py-12">
        {/* First Row - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white mb-12">
          {/* E-Comm Section */}
          <div>
            <img src='./ecommlogo.png' alt="E-Comm Logo" className="h-10 mb-4"/>
            <p className="text-xs text-black/90 leading-relaxed">
              Lorem Ipsum is simply dummy text of the<br/>
              printing and typesetting industry. Lorem<br/>
              Ipsum has been the industry's standard<br/>
              dummy text ever.Since the 1500s, when<br/>
              an unknown printer.
            </p>
          </div>

          {/* Follow Us Section */}
          <div>
            <h4 className="font-semibold text-black mb-4">Follow Us</h4>
            <p className="text-xs text-black/90 mb-4 leading-relaxed">
              Since the 1500s, when an unknown<br/>
              printer took a galley of type and<br/>
              scrambled.
            </p>
            <div className="flex gap-2">
              <a
                href="#"
                className="w-8 h-8 bg-[#385C8E] rounded-full flex items-center justify-center text-white hover:opacity-90"
                aria-label="Facebook"
              >
                <Facebook size={16} fill="white" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-[#03A9F4] rounded-full flex items-center justify-center text-white hover:opacity-90"
                aria-label="Twitter"
              >
                <Twitter size={16} fill="white" />
              </a>
            </div>
          </div>

          {/* Contact Us Section */}
          <div>
            <h4 className="font-semibold text-black mb-4">Contact Us</h4>
            <address className="text-xs text-black/90 not-italic leading-relaxed">
              E-Comm , 4578<br/>
              Marmora Road,<br/>
              Glasgow D04 89GR
            </address>
          </div>
        </div>

        {/* Second Row - 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 text-black">
          {/* Information */}
          <div>
            <h5 className="font-semibold text-black mb-4 text-lg">Information</h5>
            <ul className="space-y-2">
              <li><a href="#" className="text-xs text-black/90 hover:text-black">About Us</a></li>
              <li><a href="#" className="text-xs text-black/90 hover:text-black">Information</a></li>
              <li><a href="#" className="text-xs text-black/90 hover:text-black">Privacy Policy</a></li>
              <li><a href="#" className="text-xs text-black/90 hover:text-black">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Service */}
          <div>
            <h5 className="font-semibold text-black mb-4 text-lg">Service</h5>
            <ul className="space-y-2">
              <li><a href="#" className="text-xs text-black/90 hover:text-black">About Us</a></li>
              <li><a href="#" className="text-xs text-black/90 hover:text-black">Information</a></li>
              <li><a href="#" className="text-xs text-black/90 hover:text-black">Privacy Policy</a></li>
              <li><a href="#" className="text-xs text-black/90 hover:text-black">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* My Account */}
          <div>
            <h5 className="font-semibold text-black mb-4 text-lg">My Account</h5>
            <ul className="space-y-2">
              <li><a href="#" className="text-xs text-black/90 hover:text-black">About Us</a></li>
              <li><a href="#" className="text-xs text-black/90 hover:text-black">Information</a></li>
              <li><a href="#" className="text-xs text-black/90 hover:text-black">Privacy Policy</a></li>
              <li><a href="#" className="text-xs text-black/90 hover:text-black">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Our Offers */}
          <div>
            <h5 className="font-semibold text-black mb-4 text-lg">Our Offers</h5>
            <ul className="space-y-2">
              <li><a href="#" className="text-xs text-black/90 hover:text-black">About Us</a></li>
              <li><a href="#" className="text-xs text-black/90 hover:text-black">Information</a></li>
              <li><a href="#" className="text-xs text-black/90 hover:text-black">Privacy Policy</a></li>
              <li><a href="#" className="text-xs text-black/90 hover:text-black">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar with Payment Icons */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-xs text-gray-800">
              © 2018 Ecommerce theme by www.bisenbaev.com
            </p>

            {/* Payment Methods */}
            <div className="flex items-center gap-2">
              {/* Western Union */}
              <div className="bg-white rounded px-2 py-1 h-10 flex items-center">
                <img 
                  src="https://logos-world.net/wp-content/uploads/2021/03/Western-Union-Logo.png" 
                  alt="Western Union" 
                  className="h-6 w-auto object-contain"
                />
              </div>

              {/* MasterCard */}
              <div className="bg-white rounded px-2 py-1 h-10 flex items-center">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/200px-Mastercard-logo.svg.png" 
                  alt="MasterCard" 
                  className="h-7 w-auto"
                />
              </div>

              {/* PayPal */}
              <div className="bg-white rounded px-2 py-1 h-10 flex items-center">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/200px-PayPal.svg.png" 
                  alt="PayPal" 
                  className="h-6 w-auto"
                />
              </div>

              {/* Visa */}
              <div className="bg-white rounded px-2 py-1 h-10 flex items-center">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/200px-Visa_Inc._logo.svg.png" 
                  alt="Visa" 
                  className="h-5 w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;