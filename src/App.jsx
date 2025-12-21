import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

import Dock from "@components/Dock";
import Navbar from "@components/Navbar";
import Welcome from "@components/Welcome";
import Home from "@components/Home";

import Contact from "@windows/Contact";
import Finder from "@windows/Finder";
import ImageViewer from "@windows/Image";
import Resume from "@windows/Resume";
import Safari from "@windows/Safari";
import Terminal from "@windows/Terminal";
import TextViewer from "@windows/Text";

gsap.registerPlugin(Draggable);

function App() {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <Home />

      {/* Windows */}
      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <TextViewer />
      <ImageViewer />
      <Contact />
    </main>
  );
}

export default App;
