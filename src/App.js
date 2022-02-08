import { useEffect, useState } from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import PostContainer from './components/PostContainer';

function App() {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function fetchData(){
      try {
        const response = await fetch('http://localhost:5000/posts?page=1');
          const data = await response.json();
          setPosts(data.results); 
          setLoading(false);
      } catch (error) {
          console.log(error);
      }

    }
    fetchData();
  }, [])

  if(loading) return "Loading..."

  return (
    <div style={{background: 'rgb(250, 250, 250)'}}>
      <HeroSection />
      <div className='aspect-auto'>
        <div className='container m-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 p-3 sm:p-0'>
            <PostContainer />
          </div>
        </div>
      </div>
      <div className='h-28'></div>
    </div>
  );
}

export default App;
