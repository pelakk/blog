import '.././App.css';

function HeroSection() {

  return (
    <div className='aspect-auto bg-red-500 hero'>
        <div className="container xl:w-[60%] w-[90%] m-auto">
            <div className="rounded-lg overflow-hidden mb-10">
                <p className='text-2xl font-bold mt-12 mb-28'>BLOG</p>
                <p className='text-xl'>Welcome to my blog!</p>
                <p className='text-8xl font-semibold'>Some kind of blog</p>
                <p className='text-xl w-[60%] mb-48'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
    </div>
  );
}

export default HeroSection;
