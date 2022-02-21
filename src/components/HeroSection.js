import { Link } from "react-router-dom";
import ".././App.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from ".././state/index";

const LoginContainer = () => {
  return (
    <Link to="/login">
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        Login
      </button>
    </Link>
  );
};

const LogoutContainer = ({ onClick }) => {
  const dispatch = useDispatch();
  const { logout } = bindActionCreators(actionCreators, dispatch);
  const stateEmail = useSelector((state) => state.email);

  return (
    <div>
      <p className="text-lg font-semibold">{stateEmail}</p>
      <Link to="/add-post">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-3">
          Add post
        </button>
      </Link>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
};

function HeroSection() {
  const state = useSelector((state) => state.login);

  const dispatch = useDispatch();

  const { login, logout } = bindActionCreators(actionCreators, dispatch);

  return (
    <div className="aspect-auto bg-red-500 hero">
      <div className="container xl:w-[60%] w-[90%] m-auto">
        <div className="rounded-lg overflow-hidden mb-10">
          <div className="mt-12 mb-28 flex justify-between">
            <span className="text-2xl font-bold">BLOG</span>
            {state ? <LogoutContainer onClick={logout} /> : <LoginContainer />}
          </div>
          <p className="text-xl">Welcome to my blog!</p>
          <p className="text-8xl font-semibold">Some kind of blog</p>
          <p className="text-xl w-[60%] mb-48">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
