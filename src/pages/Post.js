import { useEffect, useState } from "react";
import "../App.css";
import { useParams } from "react-router-dom";
import PostHeroSection from "../components/PostHeroSection";
import Comment from "../components/Comment";

function Post() {
  const { id } = useParams();

  const [postData, setPostData] = useState([]);
  const [commentData, setCommentData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState();
  const [commentContent, setCommentContent] = useState();

  const API_url = "https://blog-api-matuszynski.herokuapp.com";

  async function fetchData() {
    try {
      const responsePost = await fetch(`${API_url}/posts/${id}`);
      const postData = await responsePost.json();
      setPostData(postData[0]);

      const responseComment = await fetch(`${API_url}/posts/${id}/comments`);
      const commentData = await responseComment.json();
      setCommentData(commentData);

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const submit = (e) => {
    if (email !== undefined && commentContent !== undefined) {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("content", commentContent);
      formData.append("postId", id);

      fetch("https://blog-api-matuszynski.herokuapp.com/comments", {
        method: "POST",
        body: formData,
      });
    } else {
      e.preventDefault();
      alert("You have to provide all the informations!");
    }
  };

  if (loading)
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
    <div>
      <PostHeroSection title={postData.title} image={API_url + postData.path} />
      <div className="aspect-auto py-3 px-6 xl:px-60 mb-20 text-lg">
        {postData.content}
      </div>

      <div className="aspect-auto">
        {commentData.map((comment) => (
          <Comment
            key={comment.id}
            email={comment.email}
            content={comment.content}
          />
        ))}
      </div>

      <div className="aspect-ratio mt-10">
        <div className="container container xl:w-[60%] w-[90%] m-auto">
          <form
            className="shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={submit}
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="title"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="content"
              >
                Post content
              </label>
              <textarea
                className="shadow min-h-[100px] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="content"
                placeholder="Comment content"
                onChange={(e) => setCommentContent(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                type="submit"
                value="Comment"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
              />
            </div>
          </form>
        </div>
      </div>

      <div className="h-28"></div>
    </div>
  );
}

export default Post;
