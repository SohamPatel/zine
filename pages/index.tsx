import type { NextPage } from "next";

import { Editor } from "../components/Editor/Editor";

const Home: NextPage = () => {
  return (
    <div>
      <nav>Nav</nav>
      <Editor />
      <footer>Footer</footer>
    </div>
  );
};

export default Home;
