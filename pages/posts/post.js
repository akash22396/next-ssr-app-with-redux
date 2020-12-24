// https://jsonplaceholder.typicode.com/posts
import React, { useEffect } from "react";
import Header from "../shared/Header";
import axios from "axios";
function post(props) {
  // console.log(props);
  useEffect(() => {
    // console.log(next.router.query.id);
  }, [props]);
  return (
    <>
      <Header />
      <h1>product </h1>
      <div>
        {props.post ? (
          <div>
            {props.post.title}
            <br />
            {props.post.body}
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

post.getInitialProps = async (ctx) => {
  let data = await axios
    .get(`https://jsonplaceholder.typicode.com/posts/${ctx.query.id}`)
    .then((res) => {
      let response = res.data;
      return response;
    })
    .catch((err) => {
      return err;
    });
  return { post: data };
};

export default post;
