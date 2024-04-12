import {
  Hero,
  AboutMe,
  BoxBehind,
  Projects,
  Form,
} from "./(page-lib)/components";
import { Navbar } from "./(page-lib)/layouts";
import Footer from "./(page-lib)/layouts/Footer";
import "./index.css";

function App() {
  return (
    <>
      <BoxBehind />
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
      <Form />
      <Footer />
    </>
  );
}

export default App;
