import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import Header from "./shared/Header";
import { connect } from "react-redux";
function Home(props) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div>
        <h1>Hello Next</h1>
        <div>
          <h1>
            Counter : {props.count} {props.stars}
          </h1>
          <button type="button" className="" onClick={() => props.increment()}>
            Increment +1
          </button>
          <button type="button" className="" onClick={() => props.reset()}>
            Reset 0
          </button>
          <button type="button" className="" onClick={() => props.decrement()}>
            Decrement -1
          </button>
        </div>
      </div>
    </div>
  );
}

const getPropsState = (state) => {
  return {
    count: state.countReducer.count,
  };
};

const dispatchProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: "INCREMENT" }),
    decrement: () => dispatch({ type: "DECREMENT" }),
    reset: () => dispatch({ type: "RESET" }),
  };
};

export default connect(getPropsState, dispatchProps)(Home);
