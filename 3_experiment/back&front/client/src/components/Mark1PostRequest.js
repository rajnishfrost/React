import axios from "axios";
import React , {useState} from "react";


let baseURL = "https://jsonplaceholder.typicode.com/posts/2";

export default function Mark1PostRequest() {
    const [post, setPost] = useState(null);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPost(response.data);
            // console.log(response.data);
        });
    }, []);

    function createPost() {
        baseURL = "https://jsonplaceholder.typicode.com/posts";
        axios
            .post(baseURL, {
                title: "Hello World!",
                body: "This is a new post.",
                userId : 7275
            })
            .then((response) => {
                setPost(response.data);
            });
    }


    if (!post) return "No post!";

    return (
        <div>
            <h1>Post Request</h1>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <p>{post.userId}</p>
            <button onClick={createPost}>Create Post</button>
        </div>
    );
}
