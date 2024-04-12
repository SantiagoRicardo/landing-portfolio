import {
  Hero,
  AboutMe,
  BoxBehind,
  Projects,
  Form,
} from "./(page-lib)/components";
import { Navbar } from "./(page-lib)/layouts";
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
    </>
  );
}

export default App;
