import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  let [data, setData] = useState([]);
  let token = localStorage.getItem("token");
  useEffect(() => {
    axios
      .get("http://localhost:8000/post", {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }, []);

  return (
    <div>
      <h1>All Post</h1>
      {data.map((el) => {
        return (
          <div key={el.id}>
            <h1>{el.title}</h1>
            <p>{el.body}</p>
            <p>{el.device}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
