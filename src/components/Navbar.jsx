import { FULL_NAME, navIcons, navLinks } from "@constants";
import useWindowStore from "@store/window";
import dayjs from "dayjs";
import { Battery, Wifi } from "lucide-react";

const Navbar = () => {
  const { openWindow } = useWindowStore();

  return (
    <>
      <nav>
        <div>
          <img src="/images/logo.svg" alt="logo" />
          <p className="font-bold">{FULL_NAME}</p>

          <ul>
            {navLinks.map((link) => (
              <li key={link.id}>
                <button onClick={() => openWindow(link.type)} type="button">
                  <p>{link.name}</p>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <ul>
            {navIcons.map(({ id, img }) => (
              <li key={id}>
                <img src={img} alt={`icon-${id}`} className="icon-hover icon" />
              </li>
            ))}
          </ul>
          <time dateTime={dayjs().toISOString()}>{dayjs().format("ddd MMM D h:mm A")}</time>
        </div>
      </nav>
      <section
        id="mobile-navbar"
        className="flex justify-between items-center py-3 px-5 gap-5 sm:hidden relative z-10000"
      >
        <time dateTime={dayjs().toISOString()}>{dayjs().format("h:mm A")}</time>
        {/* Visual spacer element to create space between time and icons */}
        <span
          role="presentation"
          aria-hidden="true"
          className="bg-black flex-1 rounded-full px-2 py-5"
        />

        <ul className="flex items-center gap-2">
          <li>
            <Wifi className="w-5" />
          </li>
          <li>
            <Battery className="w-5" />
          </li>
        </ul>
      </section>
    </>
  );
};

export default Navbar;
