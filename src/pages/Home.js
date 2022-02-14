import "../App.css";
import HeroSection from "../components/HeroSection";
import PostsSection from "../components/PostsSection";

function Home() {
  return (
    <div>
      <HeroSection />
      <PostsSection />
      <div className="h-28"></div>
    </div>
  );
}

export default Home;
