import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FAQ = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(null); // State to handle the active FAQ item

  // Toggle function to expand/collapse FAQ items
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle active FAQ
  };

  return (
    <div className="faq bg-white py-8 md:py-16">
      <div className="max-w-7xl flex flex-col lg:flex-row mx-auto px-5 md:px-20 justify-between gap-12">
        
        {/* Left Section */}
        <div className="faq__left md:max-w-[350px]">
          <h2 className="font-semibold text-3xl mb-4">Frequently Asked Questions</h2>
          <button 
            onClick={() => navigate('/contact')} 
            className="text-btn-bg font-semibold"
          >
            Contact us for more info
          </button>
        </div>

        {/* Right Section (FAQ Items) */}
        <div className="faq__right flex-1">
          <div className="accordion space-y-4">
            
            {/* FAQ 1 */}
            <div className="faq-item bg-faq-white p-4">
              <button
                className="w-full text-left font-semibold text-lg flex justify-between items-center"
                onClick={() => toggleFAQ(1)}
              >
                <span className='text-btn-bg font-semibold'>01</span>
                How much time does it take?
                <span className="text-lg">{activeIndex === 1 ? '-' : '+'}</span>
              </button>
              <div className={`overflow-hidden transition-all duration-500 ${activeIndex === 1 ? 'max-h-screen' : 'max-h-0'} `}>
                <p className="mt-2 text-gray-600">
                  Project timelines vary depending on the complexity, but most projects take between a few weeks to a couple of months.
                </p>
              </div>
            </div>

            <hr className="my-4" />

            {/* FAQ 2 */}
            <div className="faq-item bg-faq-white p-4">
              <button
                className="w-full text-left font-semibold text-lg flex justify-between items-center"
                onClick={() => toggleFAQ(2)}
              >
                <span className='text-btn-bg font-semibold'>02</span>
                What is your class naming convention?
                <span className="text-lg">{activeIndex === 2 ? '-' : '+'}</span>
              </button>
              <div className={`overflow-hidden transition-all duration-500 ${activeIndex === 2 ? 'max-h-screen' : 'max-h-0'} `}>
                <p className="mt-2 text-gray-600">
                  We use the BEM (Block Element Modifier) methodology for class naming, which helps maintain a clean and scalable codebase.
                </p>
              </div>
            </div>

            <hr className="my-4" />

            {/* FAQ 3 */}
            <div className="faq-item bg-faq-white p-4">
              <button
                className="w-full text-left font-semibold text-lg flex justify-between items-center"
                onClick={() => toggleFAQ(3)}
              >
                <span className='text-btn-bg font-semibold'>03</span>
                How do you communicate with clients during a project?
                <span className="text-lg">{activeIndex === 3 ? '-' : '+'}</span>
              </button>
              <div className={`overflow-hidden transition-all duration-500 ${activeIndex === 3 ? 'max-h-screen' : 'max-h-0'} `}>
                <p className="mt-2 text-gray-600">
                  We use a combination of tools like Slack, Zoom, and email for consistent communication and project updates.
                </p>
              </div>
            </div>

            <hr className="my-4" />

            {/* FAQ 4 */}
            <div className="faq-item bg-faq-white p-4">
              <button
                className="w-full text-left font-semibold text-lg flex justify-between items-center"
                onClick={() => toggleFAQ(4)}
              >
                <span className='text-btn-bg font-semibold'>04</span>
                Can I request custom features?
                <span className="text-lg">{activeIndex === 4 ? '-' : '+'}</span>
              </button>
              <div className={`overflow-hidden transition-all duration-500 ${activeIndex === 4 ? 'max-h-screen' : 'max-h-0'} `}>
                <p className="mt-2 text-gray-600">
                  Absolutely! We are flexible and always willing to accommodate custom requests based on your specific needs.
                </p>
              </div>
            </div>

            <hr className="my-4" />

            {/* FAQ 5 */}
            <div className="faq-item bg-faq-white p-4">
              <button
                className="w-full text-left font-semibold text-lg flex justify-between items-center"
                onClick={() => toggleFAQ(5)}
              >
                <span className='text-btn-bg font-semibold'>05</span>
                Do you provide post-launch support?
                <span className="text-lg">{activeIndex === 5 ? '-' : '+'}</span>
              </button>
              <div className={`overflow-hidden transition-all duration-500 ${activeIndex === 5 ? 'max-h-screen' : 'max-h-0'} `}>
                <p className="mt-2 text-gray-600">
                  Yes, we offer ongoing support and maintenance packages to ensure your project stays up-to-date and functions smoothly post-launch.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
