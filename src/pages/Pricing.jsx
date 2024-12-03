import greench from '../assets/images/greench.svg';
import pinkch from '../assets/images/pinkch.svg';
import FAQ from '../components/FAQ';

const Pricing = () => {
  return (
    <div className="pricing py-8 md:py-16">
      <div className="pr mx-auto px-6 md:px-20 items-center max-w-7xl">
        <h2 className="font-bold text-4xl my-5 text-center">
          Our Pricing Plans
        </h2>
        <p className="text-center text-sm m-auto max-w-[440px]">
          When you’re ready to go beyond prototyping in Figma, Webflow is ready to help you
          bring your designs to life — without coding them.
        </p>

        <div className="price__cart flex flex-wrap  justify-evenly gap-6 mt-8">
          {/* Cart 1 */}
          <div className="cart1 py-12 min-h-[500px] px-6 bg-bg-home-sec flex flex-col items-start gap-4 rounded-lg shadow-lg  min-w-[300px] max-w-[330px] flex-grow">
            <div className="price flex gap-3 justify-center items-baseline">
              <div className="count font-bold text-2xl">$299</div>
              <div className="design text-btn-bg">Per Design</div>
            </div>
            <div className="type mt-2 flex flex-col  gap-3 items-start">
              <p className="font-semibold float-left">Landing Page </p>
              <p className="text-sm text-gray-500">When you’re ready to go beyond prototyping in Figma, </p>
            </div>
            <div className="features mt-4">
          
                <div  className="feature flex items-center gap-2 mt-2">
                  <img src={greench} alt="check" className="w-5 h-5" />
                  <p className="text-sm">All limited links </p>
                </div>
                <div  className="feature flex items-center gap-2 mt-2">
                  <img src={greench} alt="check" className="w-5 h-5" />
                  <p className="text-sm"> Own analytics platform</p>
                </div>
                <div  className="feature flex items-center gap-2 mt-2">
                  <img src={greench} alt="check" className="w-5 h-5" />
                  <p className="text-sm"> Chat support</p>
                </div>
                <div  className="feature flex items-center gap-2 mt-2">
                  <img src={pinkch} alt="check" className="w-5 h-5 opacity-40" />
                  <p className="text-sm">Optimize hashtags </p>
                </div>
                <div  className="feature flex items-center gap-2 mt-2">
                  <img src={pinkch} alt="check" className="w-5 h-5 opacity-40" />
                  <p className="text-sm">Unlimited users </p>
                </div>
             
            
            </div>
            <button className="mt-6 py-2 px-10 bg-black mx-auto text-white rounded-full ">
              Get Started
            </button>
          </div>

{/* Cart 2 */}
<div className="cart2 py-12 px-6 bg-bg-head text-white rounded-lg shadow-lg flex flex-col items-start gap-4 flex-grow max-w-[330px] min-h-[500px]">
  <div className="price flex gap-3 justify-center items-baseline">
    <div className="count font-bold text-2xl">$399</div>
    <div className="design text-bg-gold">Multiple Design</div>
  </div>
  <div className="type mt-2 flex flex-col gap-3 items-start">
    <p className="font-semibold">Website Page </p>
    <p className="text-sm text-gray-500">When you’re ready to go beyond prototyping in Figma.</p>
  </div>
  <div className="features mt-4">
    <div className="feature flex items-center gap-2 mt-2">
      <img src={greench} alt="check" className="w-5 h-5" />
      <p className="text-sm">All limited links</p>
    </div>
    <div className="feature flex items-center gap-2 mt-2">
      <img src={greench} alt="check" className="w-5 h-5" />
      <p className="text-sm">Own analytics platform</p>
    </div>
    <div className="feature flex items-center gap-2 mt-2">
      <img src={greench} alt="check" className="w-5 h-5" />
      <p className="text-sm">Chat support</p>
    </div>
    <div className="feature flex items-center gap-2 mt-2">
      <img src={greench} alt="check" className="w-5 h-5" />
      <p className="text-sm">Optimize hashtags</p>
    </div>
    <div className="feature flex items-center gap-2 mt-2">
      <img src={greench} alt="check" className="w-5 h-5" />
      <p className="text-sm">Unlimited users</p>
    </div>
    <div className="feature flex items-center gap-2 mt-2">
      <img src={greench} alt="check" className="w-5 h-5" />
      <p className="text-sm">Assist and Help</p>
    </div>
  </div>
  <button className="mt-6 py-2 px-10 bg-bg-gold text-white rounded-full mx-auto">
    Get Started
  </button>
</div>

{/* Cart 3 */}
<div className="cart3 py-12 px-6 bg-bg-home-sec flex flex-col items-start gap-4 rounded-lg shadow-lg flex-grow max-w-[330px]  min-h-[500px]">
  <div className="price flex gap-3 justify-center items-baseline">
    <div className="count font-bold text-2xl">$499+</div>
    <div className="design text-btn-bg">Enterprise</div>
  </div>
  <div className="type mt-2 flex flex-col gap-3 items-start">
    <p className="font-semibold">Complex Project </p>
    <p className="text-sm text-gray-500">When you’re ready to go beyond prototyping in Figma.</p>
  </div>
  <div className="features mt-4">
    <div className="feature flex items-center gap-2 mt-2">
      <img src={greench} alt="check" className="w-5 h-5" />
      <p className="text-sm">All limited links</p>
    </div>
    <div className="feature flex items-center gap-2 mt-2">
      <img src={greench} alt="check" className="w-5 h-5" />
      <p className="text-sm">Own analytics platform</p>
    </div>
    <div className="feature flex items-center gap-2 mt-2">
      <img src={greench} alt="check" className="w-5 h-5" />
      <p className="text-sm">Chat support</p>
    </div>
    <div className="feature flex items-center gap-2 mt-2">
      <img src={greench} alt="check" className="w-5 h-5" />
      <p className="text-sm">Optimize hashtags</p>
    </div>
    <div className="feature flex items-center gap-2 mt-2">
      <img src={greench} alt="check" className="w-5 h-5" />
      <p className="text-sm">Unlimited users</p>
    </div>
    <div className="feature flex items-center gap-2 mt-2">
      <img src={greench} alt="check" className="w-5 h-5" />
      <p className="text-sm">Assist and Help</p>
    </div>
  </div>
  <button className="mt-6 py-2 px-10 bg-black text-white rounded-full mx-auto">
    Get Started
  </button>
</div>

        </div>

        <FAQ></FAQ>
      </div>
    </div>
  );
};

export default Pricing;
