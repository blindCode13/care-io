import Link from "next/link";
import Logo from "../Logo";

const Footer = () => {
  return (
    <footer className="bg-(--primary-color)/10">
      <div className="mx-auto global-px py-12">
        {/* Top Section */}
        <div className="grid gap-10 justify-items-center sm:justify-items-start text-center sm:text-start sm:grid-cols-2 md:grid-cols-4">
          
          {/* Brand */}
          <div>
            <Logo></Logo>
            <p className="text-sm text-gray-600 leading-relaxed max-w-xs mt-2">
              Trusted care solutions to support children, elders, and families
              with comfort and peace of mind.
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">
              Useful Links
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="hover:text-(--primary-color) cursor-pointer">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:text-(--primary-color) cursor-pointer">
                <Link href="/service">Service</Link>
              </li>
              <li className="hover:text-(--primary-color) cursor-pointer">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">
              Follow Us
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="hover:text-(--primary-color) cursor-pointer">Facebook</li>
              <li className="hover:text-(--primary-color) cursor-pointer">Instagram</li>
              <li className="hover:text-(--primary-color) cursor-pointer">X</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">
              Subscribe our newsletter
            </h4>
            <div className="flex items-center">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 text-sm border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
              <button className="px-4 py-2 text-sm font-medium text-white bg-(--primary-color) rounded-r-md hover:bg-violet-700 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 pt-6 border-t border-gray-300 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} Care.Io. All rights reserved.</p>
          <p>Built with care and trust.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
