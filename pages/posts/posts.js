// https://jsonplaceholder.typicode.com/posts
import React, { useEffect } from "react";
import Header from "../shared/Header";
import axios from "axios";
import Link from "next/link";

function posts(props) {
  // console.log(props);
  useEffect(() => {
    // console.log(next.router.query.id);
  }, [props]);
  return (
    <>
      <Header />
      <p>Posts </p>
      <ul>
        {props.posts ? (
          props.posts.map((dt) => (
            <li key={dt.id}>
              <Link href={`/posts/post?id=${dt.id}`}>
                <a>{dt.title}</a>
              </Link>
            </li>
          ))
        ) : (
          <li>No Record Founds</li>
        )}
      </ul>
    </>
  );
}

posts.getInitialProps = async (ctx) => {
  let data = await axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      let response = res.data;
      return response;
    })
    .catch((err) => {
      return err;
    });
  return { posts: data };
};

export default posts;
