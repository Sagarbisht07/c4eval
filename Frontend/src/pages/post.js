import React, { useRef } from "react";
import axios from "axios";

const Post = () => {
  let title = useRef(null);
  let body = useRef(null);
  let device = useRef(null);

  const post = async (e) => {
    e.preventDefault();
    let post = {
      title: title.current.value,
      body: body.current.value,
      device: device.current.value,
    };
    let token = localStorage.getItem("token");

    axios
      .post("http://localhost:8000/post/add", post, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        console.log(res.data);
        alert("post added success");
      });
  };

  return (
    <div>
      <h1>Post</h1>
      <form onSubmit={post}>
        <input type="text" placeholder="title" />
        <input type="text" placeholder="boby" />
        <input type="text" placeholder="device" />
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default Post;
