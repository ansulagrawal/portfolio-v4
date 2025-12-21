import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import { Draggable } from "gsap/Draggable";

import { locations } from "@constants";
import useLocationStore from "@store/location";
import useWindowStore from "@store/window";

const works = locations.work.children ?? [];

function Home() {
  const { openWindow } = useWindowStore();
  const { setActiveLocation } = useLocationStore();

  useGSAP(() => {
    const draggables = Draggable.create(".folder");
    return () => {
      draggables.forEach((d) => d.kill());
    };
  }, []);
  const handleOpenWorkFinder = (work) => {
    setActiveLocation(work);
    openWindow("finder");
  };

  return (
    <section id="home">
      <ul>
        {works.map((work) => (
          <li
            key={work.id}
            className={clsx("group folder", work.windowPosition)}
            onClick={() => handleOpenWorkFinder(work)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleOpenWorkFinder();
              }
            }}
            role="button"
            tabIndex={0}
          >
            <img src="images/folder.png" alt={work.name} title={work.name} />
            <p>{work.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Home;
