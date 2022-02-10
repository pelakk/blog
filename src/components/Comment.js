export default function Comment({ email, content }) {
  return (
    <div className="container container xl:w-[60%] w-[90%] m-auto mb-4">
      <div className="comment-container bg-white shadow-md p-4 rounded">
        <p className="text-md font-medium underline">{email}</p>
        <p className="text-xl mt-2 mx-2">{content}</p>
      </div>
    </div>
  );
}
