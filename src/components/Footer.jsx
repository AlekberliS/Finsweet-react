import { Link } from 'react-router-dom';
import logof from '../assets/images/Logobig.svg';
import 'remixicon/fonts/remixicon.css'; 

const Footer = () => {
  return (
    <>
      <footer className=" mt-0 bg-bg-head">
        <div className="footer__top px-5 md:px-20 bg-bg-head py-10 max-w-screen-xl mx-auto">
          <div className="footer__head flex flex-col md:flex-row justify-between md:mr-10">
            <div className="head__left mb-6 md:mb-0">
            
              <Link to="/">
                <img src={logof} alt="logo" className="w-32 mb-4 cursor-pointer" />
              </Link>
              <div className="left__des text-grey-tx max-w-[360px]">
                We are always open to discuss your project and improve your online presence.
              </div>
            </div>
            <div className="head__right">
              <div className="right__head text-white text-3xl md:text-4xl font-bold mb-2">
                Let us Talk!
              </div>
              <div className="right__main text-grey-tx mb-4 max-w-[400px]">
                We are always open to discuss your project, improve your online presence, and help
                with your UX/UI design challenges.
              </div>
              <div className="right__icon flex space-x-4 text-white">
                <a href="#" className="hover:text-gray-400">
                  <i className="ri-facebook-circle-line text-2xl"></i>
                </a>
                <a href="#" className="hover:text-gray-400">
                  <i className="ri-instagram-line text-2xl"></i>
                </a>
                <a href="#" className="hover:text-gray-400">
                  <i className="ri-linkedin-box-fill text-2xl"></i>
                </a>
                <a href="#" className="hover:text-gray-400">
                  <i className="ri-twitter-line text-2xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer__contact px-5 md:px-2 bg-bg-gold py-6 ml-0 md:ml-40 flex max-w-96 justify-between text-tx-cont">
          <div className="email">
            <div className="head font-semibold">Email me at</div>
            <div className="description">contact@website.com</div>
          </div>
          <div className="call">
            <div className="head font-semibold">Call us</div>
            <div className="description">0927 6277 28525</div>
          </div>
        </div>
      </footer>

      <div className="footer__bottom max-w-screen-xl mx-auto flex justify-between items-center py-4 px-5 md:px-20">
        <div className="bottom__left font-semibold">
          Copyright 2022, Finsweet.com
        </div>
        <div className="bottom__right">
          <nav className="hidden md:flex">
            <ul className="flex space-x-6 text-lg md:text-base font-semibold">
              <li className="cursor-pointer hover:text-gray-600">
                <Link to="/">Home</Link>
              </li>
              <li className="cursor-pointer hover:text-gray-600">
                <Link to="/about">About us</Link>
              </li>
              <li className="cursor-pointer hover:text-gray-600">
                <Link to="/features">Features</Link>
              </li>
              <li className="cursor-pointer hover:text-gray-600">
                <Link to="/pricing">Pricing</Link>
              </li>
              <li className="cursor-pointer hover:text-gray-600">
                <Link to="/faq">FAQ</Link>
              </li>
              <li className="cursor-pointer hover:text-gray-600">
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Footer;
