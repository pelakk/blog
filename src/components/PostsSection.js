import { useEffect, useState } from "react";
import PostContainer from "./PostContainer";
import Pagination from "./Pagination";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from ".././state/index";

function PostsSection() {
  const [posts, setPosts] = useState();
  const [loading, setLoading] = useState(true);
  // const [currentPage, setCurrentPage] = useState(1);
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

  const statePage = useSelector((state) => state.page);
  const dispatch = useDispatch();
  const { setPage } = bindActionCreators(actionCreators, dispatch);

  if (posts) {
    lastPostIndex = statePage * postsPerPage;
    firstPostIndex = lastPostIndex - postsPerPage;
    currentPosts = posts.slice(firstPostIndex, lastPostIndex);
  }

  const paginate = (page) => setPage(page);

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
        <p className="py-6">Page {statePage}</p>
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
