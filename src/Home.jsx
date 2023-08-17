import React from "react";

const Home = ({ user }) => {
  return (
    <div>
      {user.map((item) => (
        <h1 className="hometxt">Welcome {item.userName}...</h1>
      ))}
    </div>
  );
};

export default Home;
