import { Link } from "react-router-dom";
import ".././index.css";

function PostHeroSection({ title, image }) {
  return (
    <div
      className="aspect-auto bg-red-500 post_hero"
      style={{
        background: `linear-gradient(to right, rgba(249, 92, 226, 0.81), rgba(254, 189, 102, 0.88)), url(${image}) no-repeat`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container xl:w-[60%] w-[90%] m-auto">
        <div className="rounded-lg overflow-hidden mb-10">
          <div className="mt-12">
            <Link to="/">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                {"<"} Go back to home page
              </button>
            </Link>
          </div>
          <p className="text-6xl my-20 font-semibold text-center">{title}</p>
        </div>
      </div>
    </div>
  );
}

export default PostHeroSection;
