import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../App.css";import { useNavigate } from 'react-router-dom';  // Import useNavigate for navigation
import arrow from '../assets/images/arrw.svg';
import fcard1 from '../assets/images/usesclient.svg';
import fcard5 from '../assets/images/quickdelivery.svg';
import fcard4 from '../assets/images/247support.svg';
import fcard6 from '../assets/images/handsonap.svg';
import fcard3 from '../assets/images/template.svg';
import fcard2 from '../assets/images/twofree.svg';
import rightImg from '../assets/images/featureHero.png';
import logo1 from '../assets/images/Logo1.svg';
import Logo2 from '../assets/images/Logo2.svg';
import logo3 from '../assets/images/Logo5.svg';
import FAQ from '../components/FAQ';
import img1 from '../assets/images/man-explaining-problems-to-faceless-psychologist-7176030.png';
import img2 from '../assets/images/a-man-standing-in-an-office-7792811.png';
import img3 from '../assets/images/a-man-working-in-a-call-center-8867431.png';
import img4 from '../assets/images/person-using-macbook-pro-3861964.png';


const Features = () => {
  const navigate = useNavigate();  // Hook for navigation

  return (
    <div className="features">
    <div className="exmp bg-bg-head text-white py-4 md:py-16 ">
      <div className="home__head mx-auto px-5 md:px-20 flex flex-col md:flex-row max-w-7xl">
        
        {/* Left Section */}
        <div className="home__lead-left max-w-[500px] pr-0 md:pr-8 flex flex-col gap-6 md:gap-12">
          <h2 className='font-semibold text-xl md:text-3xl lg:text-5xl'>
            Building stellar websites for early startups
          </h2>
          <p className='text-m text-grey-tx'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          </p>
          
          {/* Buttons Section */}
          <div className="left__btn flex flex-col md:flex-row">
            <div className="btn__work">
              <button
                onClick={() => navigate('/work')}  // Navigate to Work page
                className='border bg-bg-gold border-bg-gold py-2 px-6 rounded-full text-black hover:bg-bg-gold-hover'>
                View our work
              </button>
            </div>
            <div className="btn__price flex items-baseline">
              <button
                onClick={() => navigate('/pricing')}  // Navigate to Pricing page
                className='py-2 pl-6 pr-2 rounded-full hover:text-grey-tx'>
                View Pricing
              </button>
              <span><img src={arrow} alt="arrow" /></span>
            </div>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="home__lead-right md:w-96 lg:w-full">
          <img src={rightImg} alt="illustration" />
        </div>

      </div>
     
    </div>
     <div className="benefits__logo my-8 justify-between items-center mx-auto px-5 md:px-20 flex flex-wrap sm:flex-row max-w-7xl gap-2">
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

</div>
<div className="functionalities ">

  {/* Mission Section */}
  <div className="big py-8 md:py-16 mt-4 md:mt-8">
  <div className="mission__first  mx-auto px-6 md:px-20 flex flex-col md:flex-row items-center gap-8 max-w-7xl">
    <div className="left max-w-full md:max-w-[50%] flex flex-col gap-4 md:gap-8 text-center md:text-left">
      <p className="text-lg font-semibold text-gray-700">Use Client-first</p>
      <h2 className="font-bold text-2xl md:text-4xl  leading-snug text-gray-900">
      Top agencies and freelancers around the world use Client-first 
      </h2>
      <p className="text-base md:text-lg text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
      </p>
    </div>
    <div className="image w-full md:w-1/2 flex justify-center">
      <img src={img1} className="w-full md:min-w-[300px] h-auto object-cover rounded-md shadow-lg" alt="Our Mission" />
    </div>
  </div>
</div>
  {/* Vision Section */}
  <div className="big py-8 md:py-16 mt-4 md:mt-8 bg-bg-home-sec">
  <div className="mission__second mt-12 mx-auto px-6 md:px-20 flex flex-col md:flex-row-reverse items-center gap-8 max-w-7xl">
    <div className="right max-w-full md:max-w-[50%] flex flex-col gap-4 md:gap-8 text-center md:text-left">
      <p className="text-lg font-semibold text-gray-700">Free Revision Rounds</p>
      <h2 className="font-bold text-2xl md:text-4xl  leading-snug text-gray-900">
      Get free Revisions and one week of free maintenance
      </h2>
      <p className="text-base md:text-lg text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.  </p>
    </div>
    <div className="image w-full md:w-1/2 flex justify-center">
      <img src={img2} className="w-full md:min-w-[300px] h-auto object-cover rounded-md shadow-lg" alt="Our Vision" />
    </div>
  </div></div>
  {/* Mission Section */}
  <div className="big py-8 md:py-16 mt-4 md:mt-8 ">
  <div className="mission__first  mx-auto px-6 md:px-20 flex flex-col md:flex-row items-center gap-8 max-w-7xl">
    <div className="left max-w-full md:max-w-[50%] flex flex-col gap-4 md:gap-8 text-center md:text-left">
      <p className="text-lg font-semibold text-gray-700">24/7 Support</p>
      <h2 className="font-bold text-2xl md:text-4xl  leading-snug text-gray-900">
      Working with us, you will be getting 24/7 priority support
      </h2>
      <p className="text-base md:text-lg text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
      </p>
    </div>
    <div className="image w-full md:w-1/2 flex justify-center">
      <img src={img3} className="w-full md:min-w-[300px] h-auto object-cover rounded-md shadow-lg" alt="Our Mission" />
    </div>
  </div>
</div>
  {/* Vision Section */}
  <div className="big py-8 md:py-16 mt-4 md:mt-8 bg-feature">
  <div className="mission__second mt-12 mx-auto px-6 md:px-20 flex flex-col md:flex-row-reverse items-center gap-8 max-w-7xl">
    <div className="right max-w-full md:max-w-[50%] flex flex-col gap-4 md:gap-8 text-center md:text-left">
      <p className="text-lg font-semibold text-gray-700">Quick Delivery</p>
      <h2 className="font-bold text-2xl md:text-4xl  leading-snug text-gray-900">
      Guranteed 1 week delivery for standard five pager website
      </h2>
      <p className="text-base md:text-lg text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.  </p>
    </div>
    <div className="image w-full md:w-1/2 flex justify-center">
      <img src={img4} className="w-full md:min-w-[300px] h-auto object-cover rounded-md shadow-lg" alt="Our Vision" />
    </div>
  </div></div>
  <FAQ></FAQ>
</div>
</div>

  );
}

export default Features;
