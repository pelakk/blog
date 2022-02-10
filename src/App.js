import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Post from './pages/Post';
import AddPost from './pages/AddPost';

function App() {

  return (
    <Router>
      <div style={{background: 'rgb(250, 250, 250)'}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-post" element={<AddPost />} />
            <Route path="/post/:id" element={<Post />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
