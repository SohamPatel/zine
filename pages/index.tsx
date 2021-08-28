import type { NextPage } from "next";

import { Navbar } from "components/Navbar/Navbar";
import { Editor } from "components/Editor/Editor";
import { Footer } from "components/Footer/Footer";

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Editor />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
