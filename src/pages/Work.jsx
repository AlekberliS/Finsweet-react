import React from 'react';
import work1 from '../assets/images/work1.png';
import work2 from '../assets/images/work2.png';
import work3 from '../assets/images/work3.png';
import work4 from '../assets/images/work4.png';
import work5 from '../assets/images/work5.png';
import work6 from '../assets/images/work6.png';
import { useNavigate } from 'react-router-dom'; 
const PortfolioPage = () => {
  const projects = [
    { id: 1, title: 'Template 1', description: 'Short description of template 1', buttonText: 'View Portfolio', image: work1 },
    { id: 2, title: 'Template 2', description: 'Short description of template 2', buttonText: 'View Portfolio', image: work2 },
    { id: 3, title: 'Template 3', description: 'Short description of template 3', buttonText: 'Read case study', image: work3 },
    { id: 4, title: 'Template 4', description: 'Short description of template 4', buttonText: 'Read case study', image: work4 },
    { id: 5, title: 'Template 5', description: 'Short description of template 5', buttonText: 'Read case study', image: work5 },
    { id: 6, title: 'Template 6', description: 'Short description of template 6', buttonText: 'Read case study', image: work6 },
  ];
  const navigate = useNavigate(); 
  return (
    <div>
      {/* Header Section */}
      <div className="big bg-bg-home-sec">
      <div className="text-center pt-8 mb-8 mx-auto px-6 md:px-20 max-w-7xl">
        <p className="text-gray-600 uppercase">What we created</p>
        <h1 className="text-4xl font-bold">Our Work Portfolio</h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          We help teams create great digital products by providing them with tools and technology
          to make the design-to-code process universally accessible.
        </p>
        {/* Social Icons */}
        <div className="flex justify-center gap-4 mt-4">
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

      {/* Filter Menu */}
      <div className="flex justify-center gap-4 mb-8 border-b border-gray-200 pb-4">
        <button className="text-blue-600 font-semibold">All</button>
        <button className="text-gray-600">UI Design</button>
        <button className="text-gray-600">Webflow Design</button>
        <button className="text-gray-600">Figma Design</button>
      </div>
</div>
      {/* Portfolio Items */}
      <div className="flex flex-wrap  pt-8 mb-8 mx-auto px-6 md:px-20 max-w-7xl justify-center md:justify-between ">
        {projects.map((project) => (
          <div key={project.id} className="w-full min-w-[330px] m-4 p-2 sm:w-1/2 lg:w-2/5 bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Image Placeholder */}
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <img src={project.image} alt={`Project ${project.id}`} className="object-cover h-full w-full" />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-500 text-sm mb-2">{project.description}</p>
              <button className="text-blue-600 hover:text-blue-800 font-bold flex items-center">
                {project.buttonText} <span className="ml-2">→</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action Section */}
      <div className="text-center mt-16 mb-4">
        <h2 className="text-3xl font-bold">Let's build something great together</h2>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          Nulla vitae purus at tortor mattis dapibus. Mauris purus est, ultricies nec dolor sit amet.
        </p>
        <button className="mt-6 px-6 py-3 bg-yellow-500 text-white rounded-full font-semibold hover:bg-yellow-600"  onClick={() => navigate('/contact')}>
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default PortfolioPage;
