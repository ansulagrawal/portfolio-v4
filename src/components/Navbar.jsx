import { FULL_NAME, navIcons, navLinks } from "@constants";
import useWindowStore from "@store/window";
import dayjs from "dayjs";

const Navbar = () => {
  const { openWindow } = useWindowStore();

  const toggleWindow = (type) => {
    openWindow(type);
  };
  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="logo" />
        <p className="font-bold">{FULL_NAME}</p>

        <ul>
          {navLinks.map((link) => (
            <li key={link.id} onClick={() => toggleWindow(link.type)}>
              <p>{link.name}</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul>
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <img src={img} alt={`icon-${id}`} className="icon-hover" />
            </li>
          ))}
        </ul>
        <time>{dayjs().format("ddd MMM D h:mm A")}</time>
      </div>
    </nav>
  );
};

export default Navbar;
