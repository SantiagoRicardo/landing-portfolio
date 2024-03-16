import { Hero, AboutMe, BoxBehind, Projects } from "./(page-lib)/components";
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
    </>
  );
}

export default App;
