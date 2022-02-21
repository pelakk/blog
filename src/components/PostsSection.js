import { useEffect, useState } from "react";
import PostContainer from "./PostContainer";
import Pagination from "./Pagination";

function PostsSection() {
  const [posts, setPosts] = useState();
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);

  const API_url = "https://blog-api-matuszynski.herokuapp.com";

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://blog-api-matuszynski.herokuapp.com/posts"
        );
        const data = await response.json();
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  var lastPostIndex, firstPostIndex, currentPosts;

  if (posts) {
    lastPostIndex = currentPage * postsPerPage;
    firstPostIndex = lastPostIndex - postsPerPage;
    currentPosts = posts.slice(firstPostIndex, lastPostIndex);
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading || !posts)
    return (
      <div
        className="aspect-auto"
        style={{
          height: 200,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p style={{ fontSize: 32 }}>Loading...</p>
      </div>
    );

  return (
    <div className="aspect-auto">
      <div className="container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 p-3 sm:p-0">
          {currentPosts.map((post) => (
            <PostContainer
              key={post.id}
              id={post.id}
              title={post.title}
              content={post.content}
              image={API_url + post.path}
            />
          ))}
        </div>
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
}

export default PostsSection;
