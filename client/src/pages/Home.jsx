import React from "react";
import { useSelector } from "react-redux";
import HomeCard from "../components/HomeCard";

const Home = () => {
  const { posts } = useSelector((state) => state.post);

  console.log(posts);

  return (
    <div className="flex items-center justify-center m-5 flex-wrap">
      {posts.map((post, i) => (
        <HomeCard key={i} post={post} />
      ))}
    </div>
  );
};

export default Home;
