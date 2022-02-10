import { useEffect, useState } from 'react';
import PostContainer from './PostContainer';

function PostsSection() {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_url = 'https://blog-api-matuszynski.herokuapp.com';
  
  useEffect(() => {
    async function fetchData(){
      try {
        const response = await fetch(`${API_url}/posts?page=1`);
        const data = await response.json();
        setPosts(data.results); 
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [])

  if(loading) return (
    <div className='aspect-auto' style={{height: 200, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <p style={{fontSize: 32}}>Loading...</p>
    </div>
  );

  return (
    <div className='aspect-auto'>
        <div className='container m-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 p-3 sm:p-0'>
                {posts.map(post => (
                    <PostContainer key={post.id} id={post.id} title={post.title} content={post.content} image={API_url+post.path} />
                ))}
            </div>
        </div>
    </div>
  );
}

export default PostsSection;
