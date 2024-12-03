import { useNavigate } from 'react-router-dom';  // Import useNavigate for navigation
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import arrow from '../assets/images/arrw.svg';
import rightImg from '../assets/images/Illustration.png';
import parrow from '../assets/images/Arrowpurple.svg';
import pointer1 from '../assets/images/pointer1.svg';
import pointer2 from '../assets/images/pointer2.svg';
import pointer3 from '../assets/images/pointer3.svg';
import pointer4 from '../assets/images/pointer4.svg';
import arrowblck from '../assets/images/Arrowblack.svg';
import card1 from '../assets/images/Card.png';
import card2 from '../assets/images/Cardsec.png' ;
import card3 from '../assets/images/card3.png';
import fcard1 from '../assets/images/usesclient.svg';
import fcard5 from '../assets/images/quickdelivery.svg'
import fcard4 from '../assets/images/247support.svg'
import fcard6 from '../assets/images/handsonap.svg'
import fcard3 from '../assets/images/template.svg'
import fcard2 from '../assets/images/twofree.svg'
import leftc from '../assets/images/left-ch.svg';
import rightc from '../assets/images/right-ch.svg';
import womanImg from '../assets/images/Mask Group.svg';
import womanWrite from '../assets/images/woman-writing.png';
import FAQ from '../components/FAQ';
import { Link } from 'react-router-dom';

const testimonials = [
  {
    quote: "The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus.",
    name: "Jenny Wilson",
    speciality: "Vice President",
    image: womanImg,
  },
  {
    quote: "They delivered exceptional service and were incredibly supportive throughout our project. Highly recommend them!",
    name: "Mark Johnson",
    speciality: "CEO, TechCorp",
    image: womanImg,
  },
  {
    quote: "Professional, reliable, and highly efficient in everything they do. I couldn’t ask for more from a digital agency.",
    name: "Sarah Brown",
    speciality: "Marketing Director",
    image: womanImg,
  },
];

const Home = () => {
  const navigate = useNavigate();  // Initialize useNavigate for navigation
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isSending, setIsSending] = useState(false);

  // Toggle function for FAQ items
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  // Function to handle right chevron click
  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const { quote, name, speciality, image } = testimonials[currentIndex];
 
    const initialValues = {
      name: '',
      email: '',
      figmaURL: '',
    };
  
    const validationSchema = Yup.object({
      name: Yup.string().required('Your name is required'),
      email: Yup.string()
        .matches(
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          'Invalid email format'
        )
        .test(
          'is-valid-domain',
          'Email must have a valid domain like .com, .org, etc.',
          (value) => {
            const validTLDs = ['com', 'org', 'net', 'edu']; // Add more TLDs if needed
            if (!value) return false; // If value is undefined or empty, return false
            const domain = value.split('.').pop(); // Extract the part after the last "."
            return validTLDs.includes(domain);
          }
        )
        .required('Email is required'),
      figmaURL: Yup.string()
        .url('Invalid URL')
        .required('Figma URL is required'),
    });
    
  
    const onSubmit = (values) => {
      console.log(values);
      // handle form submission here
    };
  return (
    <div className=''>
      <div className="exmp bg-bg-head text-white py-4 md:py-16">
        <div className="home__head mx-auto px-5 md:px-20 flex flex-col md:flex-row max-w-7xl">
          <div className="home__lead-left max-w-[500px] pr-0 md:pr-8 flex flex-col gap-6 md:gap-12">
            <h2 className='font-semibold text-xl md:text-3xl lg:text-5xl'>
              Building stellar websites for early startups
            </h2>
            <p className='text-m text-grey-tx'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </p>
            <div className="left__btn flex flex-col md:flex-row">
              <div className="btn__work">
                <button
                  onClick={() => navigate('/work')} // Navigate to the Work page
                  className='border bg-bg-gold border-bg-gold py-2 px-6 rounded-full text-black hover:bg-bg-gold-hover'>
                  View our work
                </button>
              </div>
              <div className="btn__price flex items-baseline">
                <button
                  onClick={() => navigate('/pricing')} // Navigate to the Pricing page
                  className='py-2 pl-6 pr-2 rounded-full hover:text-grey-tx'>
                  View Pricing
                </button>
                <span><img src={arrow} alt="arrow" /></span>
              </div>
            </div>
          </div>
          <div className="home__lead-right md:w-96 lg:w-full">
            <img src={rightImg} alt="illustration" />
          </div>
        </div>
      </div>
      <div className="home__how bg-bg-home-sec justify-between py-8 md:py-16 ">
  <div className="max-w-7xl mx-auto px-5 md:px-20 flex flex-col  gap-2 md:gap-24 md:flex-row items-center">
    <div className="how__left  pr-0 md:pr-8 flex flex-col gap-6 md:gap-12 text-center md:text-left">
      <h2 className="font-semibold text-xl md:text-3xl lg:text-5xl">How we work</h2>
      <p className="text-m text-grey-tx">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
      <div className="btn__touch flex items-center justify-center md:justify-start gap-2">
        <button className=" py-2 pr-2 font-semibold text-txt-get"
        onClick={() => navigate('/contact')} >Get in touch with us</button>
        <span><img src={parrow} alt="arrow" /></span>
      </div>
    </div>

    {/* Refactor the right section to use responsive flexbox */}
    <div className="how__right  flex flex-col sm:flex-row md:flex-wrap justify-evenly sm:justify-between gap-6 mt-8 md:mt-0">
      {/* Each card */}
      <div className="right__card flex flex-col items-start gap-3 w-full md:w-[48%] lg:w-[48%]">
        <div className="card__image mb-4"><img src={pointer1} alt="pointer" /></div>
        <div className="card__title"><h2 className="font-semibold text-xl md:text-2xl">Strategy</h2></div>
        <div className="card__des text-base max-w-[250px] text-grey-tx float-left">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.</div>
      </div>

      <div className="right__card flex flex-col items-start gap-3 w-full md:w-[48%] lg:w-[48%]">
        <div className="card__image mb-4"><img src={pointer2} alt="pointer" /></div>
        <div className="card__title"><h2 className="font-semibold text-xl md:text-2xl">Wireframing</h2></div>
        <div className="card__des text-base text-grey-tx float-left max-w-[250px]">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.</div>
      </div>

      <div className="right__card flex flex-col items-start gap-3 w-full md:w-[48%] lg:w-[48%]">
        <div className="card__image mb-4"><img src={pointer3} alt="pointer" /></div>
        <div className="card__title"><h2 className="font-semibold text-xl md:text-2xl">Design</h2></div>
        <div className="card__des text-base max-w-[250px] text-grey-tx float-left">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.</div>
      </div>

      <div className="right__card flex flex-col items-start gap-3 w-full md:w-[48%] lg:w-[48%]">
        <div className="card__image mb-4"><img src={pointer4} alt="pointer" /></div>
        <div className="card__title"><h2 className="font-semibold text-xl md:text-2xl">Development</h2></div>
        <div className="card__des text-base max-w-[250px] text-grey-tx float-left">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.</div>
      </div>
    </div>
  </div>
</div>
<div className="home__view py-8 md:py-16">
  {/* Header Section */}
  <div className="view__head flex flex-col items-center md:flex-row justify-between text-center md:text-left gap-2 mb-8 max-w-7xl mx-auto px-5 md:px-20">
    <h2 className="font-bold text-2xl md:text-3xl">View our projects</h2>
    <div className="view__btn flex font-semibold items-center gap-2 cursor-pointer"  >
      <button onClick={() => navigate('/work')}>
      View More</button> <span><img src={arrowblck} alt="arrow" /></span>
    </div>
  </div>

  {/* Image Section */}
  <div className="view__des flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto px-5 md:px-20">
    {/* Left image - Larger */}
    <div className="des-left flex-1 md:flex-[0.67]">
      <img src={card1} alt="card" className="w-full h-auto object-cover rounded-lg" />
    </div>
    
    {/* Right images - Stacked vertically */}
    <div className="des-right flex flex-1 flex-col gap-6 md:flex-[0.33]">
      <img src={card3} alt="card" className="w-full h-auto object-cover rounded-lg" />
      <img src={card2} alt="card" className="w-full h-auto object-cover rounded-lg" />
    </div>
  </div>
</div>
<div className="features bg-bg-home-sec py-8 md:py-16">
  <div className="max-w-7xl mx-auto text-left px-4">
    <p className="font-semibold text-xs text-center text-txt-main mb-2">Features</p>
    <h2 className="font-bold text-2xl md:text-3xl text-center mb-8">Design that solves problems, one product at a time</h2> 
    
    {/* Features container using flexbox */}
    <div className="features__cart flex flex-wrap  justify-evenly md:justify-center  sm:px-10 gap-8">
      
      {/* Card 1 */}
      <div className="cart bg-white flex flex-col items-start gap-3 p-6 rounded-lg shadow-lg w-full sm:w-[48%] lg:w-[30%]">
        <img src={fcard1} alt="cardImg" className="w-6 h-6 object-contain" />
        <h2 className="font-semibold text-lg">Uses Client First</h2>
        <p className="text-grey-tx text-base">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed mi.</p>
      </div>

      {/* Card 2 */}
      <div className="cart bg-white flex flex-col items-start gap-3 p-6 rounded-lg shadow-lg w-full sm:w-[48%] lg:w-[30%]">
        <img src={fcard2} alt="cardImg" className="w-6 h-6 object-contain" />
        <h2 className="font-semibold text-lg">Two Free Revisions</h2>
        <p className="text-grey-tx text-base">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed mi.</p>
      </div>

      {/* Card 3 */}
      <div className="cart bg-white flex flex-col items-start gap-3 p-6 rounded-lg shadow-lg w-full sm:w-[48%] lg:w-[30%]">
        <img src={fcard3} alt="cardImg" className="w-6 h-6 object-contain" />
        <h2 className="font-semibold text-lg">Template Customization</h2>
        <p className="text-grey-tx text-base">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed mi.</p>
      </div>

      {/* Card 4 */}
      <div className="cart bg-white flex flex-col items-start gap-3 p-6 rounded-lg shadow-lg w-full sm:w-[48%] lg:w-[30%]">
        <img src={fcard4} alt="cardImg" className="w-6 h-6 object-contain" />
        <h2 className="font-semibold text-lg">24/7 Support</h2>
        <p className="text-grey-tx text-base">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed mi.</p>
      </div>

      {/* Card 5 */}
      <div className="cart bg-white flex flex-col items-start gap-3 p-6 rounded-lg shadow-lg w-full sm:w-[48%] lg:w-[30%]">
        <img src={fcard5} alt="cardImg" className="w-6 h-6 object-contain" />
        <h2 className="font-semibold text-lg">Data Security</h2>
        <p className="text-grey-tx text-base">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed mi.</p>
      </div>

      {/* Card 6 */}
      <div className="cart bg-white flex flex-col items-start gap-3 p-6 rounded-lg shadow-lg w-full sm:w-[48%] lg:w-[30%]">
        <img src={fcard6} alt="cardImg" className="w-6 h-6 object-contain" />
        <h2 className="font-semibold text-lg">Collaboration Tools</h2>
        <p className="text-grey-tx text-base">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed mi.</p>
      </div>

    </div>
  </div>
</div>
<div className="clientsay bg-bg-home-third py-8 md:py-16">
  <div className="max-w-7xl mx-auto justify-between flex flex-col sm:flex-row px-5 md:px-20">
    
    {/* Left Section */}
    <div className="clientsay__left max-w-[320px] mb-8">
      <h2 className="font-semibold text-2xl md:text-3xl mb-4">What our clients say about us</h2>
      <p className="text-grey-tx">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
    </div>

    {/* Right Section */}
    <div className="clientsay__right flex flex-col items-center">
      
      {/* Testimonial Quote */}
      <p className="text-lg md:text-xl mb-6 max-w-lg font-semibold text-center">"{quote}"</p>

      {/* Client Info and Chevrons */}
      <div className="other__sec flex flex-row justify-between items-center gap-6">
        
        {/* Client Image and Details */}
        <div className="client flex items-center justify-center gap-4">
          <img src={image} alt="client" className="w-16 h-16 rounded-full object-cover" />
          <div className="client__data text-left">
            <p className="name font-semibold">{name}</p>
            <p className="speciality text-sm font-semibold">{speciality}</p>
          </div>
        </div>

        {/* Chevron Navigation */}
        <div className="chevron flex gap-4 ml-4">
          <button onClick={handlePrevClick} className="bg-white rounded-full p-2" aria-label="Previous Testimonial">
            <img src={leftc} alt="Previous" className="w-4 h-4" />
          </button>
          <button onClick={handleNextClick} className="bg-btn-bg rounded-full p-2" aria-label="Next Testimonial">
            <img src={rightc} alt="Next" className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

  <FAQ></FAQ>
    <div className="building py-8 md:py-16">
  <div className="max-w-7xl mx-auto px-5 md:px-20 flex flex-col md:flex-row items-stretch">

    {/* Left Section */}
    <div className="building__left relative flex-1 text-center md:text-left flex">
      <div className="left__img relative z-0 flex-grow">
        <img src={womanWrite} alt="writing" className="w-full h-full object-cover" />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-40 z-10">
          <h2 className="text-white font-semibold text-3xl m-8 mb-4">Building stellar websites for early startups</h2>
          <p className="text-white max-w-lg m-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
        </div>
      </div>
    </div>

    {/* Right Section */}
    <div className="building__right bg-bg-head flex-1 p-12 overflow-y-auto custom-scrollbar">
      <h2 className="text-white font-semibold text-3xl mb-4">Send inquiry</h2>
      <p className="text-white mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
      {isSending && (
          <div className="fixed top-4 right-4 bg-white text-black font-semibold p-3 rounded-md shadow-lg z-50">
            Sending...
          </div>
        )}
    <Formik
  initialValues={{
    name: '',
    email: '',
    figmaURL: '',
  }}
  validationSchema={validationSchema}
  onSubmit={(values, { setSubmitting, resetForm }) => {
    console.log('Submitted values:', values);
    setTimeout(() => {
      resetForm();
      setSubmitting(false);
    }, 3000);
  }}
>
  {({ isSubmitting }) => (
    <Form className="flex flex-col gap-4">
      <Field
        type="text"
        name="name"
        placeholder="Your Name"
        className="p-3 rounded-md text-white bg-transparent border"
      />
      <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
      
      <Field
        type="email"
        name="email"
        placeholder="Email"
        className="p-3 rounded-md text-white bg-transparent border"
      />
      <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
      
      <Field
        type="url"
        name="figmaURL"
        placeholder="Paste your Figma design URL"
        className="p-3 rounded-md text-white bg-transparent border"
      />
      <ErrorMessage name="figmaURL" component="div" className="text-red-500 text-sm" />
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-bg-gold text-black font-semibold py-3 px-3 rounded-full"
      >
        Send Inquiry
      </button>
    </Form>
  )}
</Formik>


<div className="getInTouch flex items-center gap-2 mt-6">
  <Link
    to="/contact"
    className="text-white text-center font-semibold py-2 px-4 rounded-md"
    aria-label="Get in touch with us"
  >
    Get in touch with us
  </Link>
  <span>
    <img src={arrow} alt="arrow pointing to contact link" className="w-5 h-5" />
  </span>
</div>


  </div>

</div>
  </div>


</div>


  );
};

export default Home;
