import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../App.css";

import rightImg from '../assets/images/group-of-person-sitting-indoors-3184306.png';
import second from '../assets/images/man-in-blue-jacket-looking-at-white-board-7413916.png';
import circle from '../assets/images/Circle.svg';
import line from '../assets/images/Line-Indicator.svg';
import manStanding from '../assets/images/a-man-standing-in-an-office-7792811.png';
import people from '../assets/images/photo-of-women-at-the-meeting-3810789.png';
import fcard1 from '../assets/images/usesclient.svg';
import fcard5 from '../assets/images/quickdelivery.svg';
import fcard4 from '../assets/images/247support.svg';
import fcard6 from '../assets/images/handsonap.svg';
import fcard3 from '../assets/images/template.svg';
import fcard2 from '../assets/images/twofree.svg';
import logo1 from '../assets/images/Logo1.svg';
import Logo2 from '../assets/images/Logo2.svg';
import logo3 from '../assets/images/Logo5.svg';
import member1 from '../assets/images/serious-man-3760373.png';
import member2 from '../assets/images/man-in-white-shirt-wearing-blue-bucket-hat-6626874.png';
import member3 from '../assets/images/transgender-model-touching-forehead-in-neon-light-7613875.png';
import member4 from '../assets/images/man-in-black-suit-holding-a-calling-card-3785104.png';
const About = () => {
  return (
    <div className="py-8 md:py-16 bg-white">
      <div className="about__head mx-auto px-6 md:px-20 flex flex-col md:flex-row items-center max-w-7xl gap-8 md:gap-16">
        {/* Left Section - Text */}
        <div className="head__left max-w-full md:max-w-[500px] flex flex-col gap-4 md:gap-8 text-center md:text-left">
          <p className="text-lg font-semibold text-gray-700">About Us</p>
          <h2 className="font-bold text-2xl md:text-4xl lg:text-5xl leading-snug text-gray-900">
            Our designs solve problems
          </h2>
          <p className="text-base md:text-lg text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
        </div>

        {/* Right Section - Image */}
        <div className="head__right w-full md:w-1/2">
          <img src={rightImg} className="w-full md:min-w-[300px] h-auto object-cover rounded-md shadow-lg" alt="About us illustration" />
        </div>
      </div>

      {/* Who we are section */}
      <div className="about__who mx-auto px-6 md:px-20 max-w-7xl gap-8 md:gap-16 mt-12">
        <div className="who bg-about-bg py-8 px-8">
          <p className="text-lg font-semibold text-gray-700">Who we are</p>
          <div className="who__text flex flex-col md:flex-row gap-3">
            <div className="text__left">
              <h2 className="font-bold text-lg md:text-xl lg:text-3xl leading-snug text-gray-900">Goal focused</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="text__right">
              <h2 className="font-bold text-lg md:text-xl lg:text-3xl leading-snug text-gray-900">Continuous improvement</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
        <div className="who__img w-full">
          <img src={second} className="w-full max-h-[320px]" alt="Who we are" />
        </div>
      </div>

      {/* Process section */}
      <div className="about__process mx-auto px-6 md:px-20 max-w-7xl gap-8 md:gap-16 mt-12">
        <h2 className="font-bold text-lg md:text-xl lg:text-3xl leading-snug text-gray-900 text-center mb-8">
          The process we follow
        </h2>
        <div className="processes grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto ">
          {/* Process 1: Planning */}
          <div className="process flex flex-col items-center md:items-start">
            <div className="process_design flex items-center gap-2 mb-4">
              <img src={circle} alt="design" className="w-6 h-6" />
              <img src={line} alt="line" className="w-1/2 h-1" />
            </div>
            <h3 className="font-semibold text-xl mb-2">Planning</h3>
            <p className="text-grey-tx text-sm">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
            </p>
          </div>

          {/* Process 2: Conception */}
          <div className="process flex flex-col items-center md:items-start">
            <div className="process_design flex items-center gap-2 mb-4">
              <img src={circle} alt="conception" className="w-6 h-6" />
              <img src={line} alt="line" className="w-1/2 h-1" />
            </div>
            <h3 className="font-semibold text-xl mb-2">Conception</h3>
            <p className="text-grey-tx text-sm">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
            </p>
          </div>

          {/* Process 3: Design */}
          <div className="process flex flex-col items-center md:items-start">
            <div className="process_design flex items-center gap-2 mb-4">
              <img src={circle} alt="design" className="w-6 h-6" />
              <img src={line} alt="line" className="w-1/2 h-1" />
            </div>
            <h3 className="font-semibold text-xl mb-2">Design</h3>
            <p className="text-grey-tx text-sm">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
            </p>
          </div>

          {/* Process 4: Development */}
          <div className="process flex flex-col items-center md:items-start">
            <div className="process_design flex items-center gap-2 mb-4">
              <img src={circle} alt="development" className="w-6 h-6" />
              <img src={line} alt="line" className="w-1/2 h-1" />
            </div>
            <h3 className="font-semibold text-xl mb-2">Development</h3>
            <p className="text-grey-tx text-sm">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
            </p>
          </div>
        </div>


      </div>  
            <div className="about__mission py-8 md:py-16 mt-4 md:mt-8 bg-about-thirdbg">
  {/* Mission Section */}
  <div className="mission__first mx-auto px-6 md:px-20 flex flex-col md:flex-row items-center gap-8 max-w-7xl">
    <div className="left max-w-full md:max-w-[50%] flex flex-col gap-4 md:gap-8 text-center md:text-left">
      <p className="text-lg font-semibold text-gray-700">Our Mission</p>
      <h2 className="font-bold text-2xl md:text-4xl  leading-snug text-gray-900">
        Inspire, Innovate, Share
      </h2>
      <p className="text-base md:text-lg text-gray-600">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </div>
    <div className="image w-full md:w-1/2 flex justify-center">
      <img src={manStanding} className="w-full md:min-w-[300px] h-auto object-cover rounded-md shadow-lg" alt="Our Mission" />
    </div>
  </div>

  {/* Vision Section */}
  <div className="mission__second mt-12 mx-auto px-6 md:px-20 flex flex-col md:flex-row-reverse items-center gap-8 max-w-7xl">
    <div className="right max-w-full md:max-w-[50%] flex flex-col gap-4 md:gap-8 text-center md:text-left">
      <p className="text-lg font-semibold text-gray-700">Our Vision</p>
      <h2 className="font-bold text-2xl md:text-4xl  leading-snug text-gray-900">
        Laser Focus
      </h2>
      <p className="text-base md:text-lg text-gray-600">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </p>
    </div>
    <div className="image w-full md:w-1/2 flex justify-center">
      <img src={people} className="w-full md:min-w-[300px] h-auto object-cover rounded-md shadow-lg" alt="Our Vision" />
    </div>
  </div>
</div>
<div className="benefits m-10 mx-auto px-6 md:px-20  gap-8 max-w-7xl">
<h2 className="font-bold text-2xl md:text-4xl text-center  leading-snug text-gray-900">
The benefits of working with us
      </h2>
      <div className="features__cart flex flex-wrap  justify-evenly md:justify-center   gap-8">
      <Swiper spaceBetween={30}  // Adjusts the spacing between each slide
  slidesPerView={1}  // Default to 1 slide
  breakpoints={{
    768: { slidesPerView: 2 },   // 2 slides for widths >= 420px
    1024: { slidesPerView: 3 },   // 3 slides for widths >= 768px
  }}
 
  className="mySwiper m-6 justify-between">
      {/* Card 1 */}
      <SwiperSlide>
      <div className="cart bg-cart-bg flex flex-col items-start p-6 gap-3 rounded-lg shadow-lg w-full sm:w-[48%] lg:w-[30%]">
        <img src={fcard1} alt="cardImg" className="w-6 h-6 object-contain" />
        <h2 className="font-semibold text-lg">Uses Client First</h2>
        <p className="text-grey-tx text-base">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed mi.</p>
      </div>
</SwiperSlide>
      {/* Card 2 */}
      <SwiperSlide>
      <div className="cart bg-cart-bg flex flex-col items-start gap-3 p-6 rounded-lg shadow-lg w-full sm:w-[48%] lg:w-[30%]">
        <img src={fcard2} alt="cardImg" className="w-6 h-6 object-contain" />
        <h2 className="font-semibold text-lg">Two Free Revisions</h2>
        <p className="text-grey-tx text-base">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed mi.</p>
      </div>
</SwiperSlide>
      {/* Card 3 */}
      <SwiperSlide>
      <div className="cart bg-cart-bg flex flex-col items-start gap-3 p-6 rounded-lg shadow-lg w-full sm:w-[48%] lg:w-[30%]">
        <img src={fcard3} alt="cardImg" className="w-6 h-6 object-contain" />
        <h2 className="font-semibold text-lg">Template Customization</h2>
        <p className="text-grey-tx text-base">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed mi.</p>
      </div>
      </SwiperSlide>
      {/* Card 4 */}
      <SwiperSlide>
      <div className="cart bg-cart-bg flex flex-col items-start gap-3 p-6 rounded-lg shadow-lg w-full sm:w-[48%] lg:w-[30%]">
        <img src={fcard4} alt="cardImg" className="w-6 h-6 object-contain" />
        <h2 className="font-semibold text-lg">24/7 Support</h2>
        <p className="text-grey-tx text-base">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed mi.</p>
      </div>
      </SwiperSlide>
      {/* Card 5 */}
      <SwiperSlide>
      <div className="cart bg-cart-bg flex flex-col items-start gap-3 p-6 rounded-lg shadow-lg w-full sm:w-[48%] lg:w-[30%]">
        <img src={fcard5} alt="cardImg" className="w-6 h-6 object-contain" />
        <h2 className="font-semibold text-lg">Data Security</h2>
        <p className="text-grey-tx text-base">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed mi.</p>
      </div>
      </SwiperSlide>
      {/* Card 6 */}
      <SwiperSlide>
      <div className="cart bg-cart-bg flex flex-col items-start gap-3 p-6 rounded-lg shadow-lg w-full sm:w-[48%] lg:w-[30%]">
        <img src={fcard6} alt="cardImg" className="w-6 h-6 object-contain" />
        <h2 className="font-semibold text-lg">Collaboration Tools</h2>
        <p className="text-grey-tx text-base">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed mi.</p>
      </div>
      </SwiperSlide>
</Swiper>
    </div>
    <div className="benefits__logo flex justify-between items-center  gap-2">
     <div className="users-count font-semibold">
      <p className="font-bold text-lg">100.000+</p>
      <p className="text-grey-tx">Finsweet users</p>
     </div>
     <div className="logo">
      <img src={logo1} alt="logo" />
     </div>
     <div className="logo">
      <img src={Logo2} alt="logo" />
     </div>
     <div className="logo hidden md:flex">
      <img src={logo3} alt="logo" />
     </div>

     <div className="logo hidden lg:flex">
      <img src={logo1} alt="logo" />
     </div>
     <div className="logo hidden md:flex">
      <img src={Logo2} alt="logo" />
     </div>
    </div>
</div>
<div className="team py-8 mb-0 md:py-16 mt-4 md:mt-8 bg-bg-home-sec">
  <div className="team__intro mx-auto px-6 md:px-20 flex flex-col items-center text-center max-w-7xl">
    <h2 className="font-bold text-2xl md:text-4xl leading-snug text-gray-900">
      Meet Our Team
    </h2>
    
  </div>

  <div className="team__members flex justify-between gap-8 mt-8 mx-auto px-6 md:px-20 max-w-7xl">
    {/* Member 1 */}
    <div className="member relative bg-white p-6 rounded-lg shadow-md text-center group">
      <img src={member1} alt="Member 1" className="w-36 h-auto object-cover rounded-full mx-auto transition-opacity duration-300 group-hover:opacity-50" />
      <p className="font-semibold mt-4 text-lg">John Doe</p>
      <p className="text-grey-tx text-sm">Software Engineer</p>
      
      {/* Social Icons */}
      <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <a href="https://facebook.com" target="_blank" className="hover:text-gray-400">
          <i className="ri-facebook-circle-line text-2xl text-blue-600"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" className="hover:text-gray-400">
          <i className="ri-linkedin-box-fill text-2xl text-blue-700"></i>
        </a>
        <a href="https://twitter.com" target="_blank" className="hover:text-gray-400">
          <i className="ri-twitter-line text-2xl text-blue-400"></i>
        </a>
      </div>
    </div>

    {/* Member 2 */}
    <div className="member relative bg-white p-6 rounded-lg shadow-md text-center group">
  <img src={member2} alt="Member 2" className="w-36 h-auto object-cover rounded-full mx-auto transition-opacity duration-300 group-hover:opacity-50" />
  <p className="font-semibold mt-4 text-lg">Jane Smith</p>
  <p className="text-grey-tx text-sm">Project Manager</p>

  {/* Social Icons */}
  <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <a href="https://facebook.com" target="_blank" className="hover:text-gray-400">
      <i className="ri-facebook-circle-line text-2xl text-blue-600"></i>
    </a>
    <a href="https://linkedin.com" target="_blank" className="hover:text-gray-400">
      <i className="ri-linkedin-box-fill text-2xl text-blue-700"></i>
    </a>
    <a href="https://twitter.com" target="_blank" className="hover:text-gray-400">
      <i className="ri-twitter-line text-2xl text-blue-400"></i>
    </a>
  </div>
</div>

{/* Member 3 */}
<div className="member relative bg-white p-6 rounded-lg shadow-md text-center group">
  <img src={member3} alt="Member 3" className="w-36 h-auto object-cover rounded-full mx-auto transition-opacity duration-300 group-hover:opacity-50" />
  <p className="font-semibold mt-4 text-lg">Emily Johnson</p>
  <p className="text-grey-tx text-sm">UI/UX Designer</p>

  {/* Social Icons */}
  <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <a href="https://facebook.com" target="_blank" className="hover:text-gray-400">
      <i className="ri-facebook-circle-line text-2xl text-blue-600"></i>
    </a>
    <a href="https://linkedin.com" target="_blank" className="hover:text-gray-400">
      <i className="ri-linkedin-box-fill text-2xl text-blue-700"></i>
    </a>
    <a href="https://twitter.com" target="_blank" className="hover:text-gray-400">
      <i className="ri-twitter-line text-2xl text-blue-400"></i>
    </a>
  </div>
</div>

{/* Member 4 */}
<div className="member relative bg-white p-6 rounded-lg shadow-md text-center group">
  <img src={member4} alt="Member 4" className="w-36 h-auto object-cover rounded-full mx-auto transition-opacity duration-300 group-hover:opacity-50" />
  <p className="font-semibold mt-4 text-lg">Michael Brown</p>
  <p className="text-grey-tx text-sm">Marketing Specialist</p>

  {/* Social Icons */}
  <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <a href="https://facebook.com" target="_blank" className="hover:text-gray-400">
      <i className="ri-facebook-circle-line text-2xl text-blue-600"></i>
    </a>
    <a href="https://linkedin.com" target="_blank" className="hover:text-gray-400">
      <i className="ri-linkedin-box-fill text-2xl text-blue-700"></i>
    </a>
    <a href="https://twitter.com" target="_blank" className="hover:text-gray-400">
      <i className="ri-twitter-line text-2xl text-blue-400"></i>
    </a>
  </div>
</div>
  </div>
</div>


    </div>
  );
};

export default About;
