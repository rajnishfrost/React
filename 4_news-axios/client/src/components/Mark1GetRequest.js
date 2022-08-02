  import axios from "axios";
import React from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";//get request

export default function Mark1GetRequest() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div>
      <h1>Get Request</h1>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
