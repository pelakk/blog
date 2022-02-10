import { Link } from 'react-router-dom';
import '.././App.css';

function HeroSection() {

  return (
    <div className='aspect-auto bg-red-500 hero'>
        <div className="container xl:w-[60%] w-[90%] m-auto">
            <div className="rounded-lg overflow-hidden mb-10">
                <div className='mt-12 mb-28 flex justify-between'>
                    <span className='text-2xl font-bold'>BLOG</span>  
                    <Link to="/add-post">
                      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Add post</button>
                    </Link>
                </div>
                <p className='text-xl'>Welcome to my blog!</p>
                <p className='text-8xl font-semibold'>Some kind of blog</p>
                <p className='text-xl w-[60%] mb-48'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
    </div>
  );
}

export default HeroSection;
