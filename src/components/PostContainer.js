import { Link } from "react-router-dom";
import ".././index.css";

function PostContainer({ id, title, content, image }) {
  return (
    <Link to={`/post/${id}`}>
      <div className="bg-white rounded shadow-xl hover:cursor-pointer p-6 post-container">
        <div
          className="rounded"
          style={{
            background: `url(${image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            width: "100%",
            height: 240,
          }}
        />
        <h1 className="text-2xl font-semibold my-3">{title}</h1>
        <h2 className="text-sm post-container-content">{content}</h2>
      </div>
    </Link>
  );
}

export default PostContainer;
