import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Post from "./pages/Post";
import AddPost from "./pages/AddPost";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { useSelector } from "react-redux";

function App() {
  const state = useSelector((state) => state.login);

  return (
    <Router>
      <div style={{ background: "rgb(250, 250, 250)" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/add-post"
            element={state ? <AddPost /> : <Navigate to="/login" />}
          />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
