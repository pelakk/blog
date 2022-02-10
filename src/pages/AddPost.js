import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

function AddPost() {
  const { height, width } = useWindowDimensions();

  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [file, setFile] = useState();

  const [completed, setCompleted] = useState(false);

  const submit = async (e) => {
    e.preventDefault();

    if (title !== undefined && content !== undefined && file !== undefined) {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      formData.append("image", file);

      await fetch("https://blog-api-matuszynski.herokuapp.com/posts", {
        method: "POST",
        body: formData,
      }).then(setCompleted(true));
    } else {
      alert("You have to provide all the informations!");
    }
  };

  return (
    <div>
      <div className="aspect-auto bg-red-500 hero" style={{ height: 220 }}>
        <div className="container xl:w-[60%] w-[90%] m-auto">
          <div className="rounded-lg overflow-hidden mb-10">
            <div className="mt-12">
              <Link to="/">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  {"<"} Go back to home page
                </button>
              </Link>
            </div>
            <p className="text-6xl font-semibold text-center mb-12">Add post</p>
          </div>
        </div>
      </div>
      <div
        className="w-full flex justify-center"
        style={{ height: height - 260 }}
      >
        <div className="container xl:w-[50%]">
          <form
            className="shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={submit}
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="title"
              >
                Post title
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="title"
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
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
                className="shadow min-h-[200px] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="content"
                type="text"
                placeholder="Post content"
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                type="file"
                id="pic"
                name="pic"
                accept="image/png, image/jpeg, image/jpg"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
            <div className="mb-4">
              <input
                type="submit"
                value="Add post"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
              />
            </div>
            <p className="text-green-600 text-bold font-semibold text-2xl text-center">
              {completed ? "Post added, go to home page to see it" : ""}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddPost;
