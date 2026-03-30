import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

import { Dock, Home, Navbar, Welcome } from "#components";
import {
  Finder,
  Resume,
  Safari,
  Terminal,
  Contact,
  Text,
  Image,
} from "#windows";
gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar></Navbar>
      <Welcome />
      <Dock />
      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Contact />
      <Home />
      <Text />
      <Image />
    </main>
  );
};

export default App;
