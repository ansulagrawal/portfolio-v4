import WindowControls from "@components/WindowControls";
import { SHORT_NAME, socials } from "@constants";
import WindowWrapper from "@hoc/WindowWrapper";
import { Mail } from "lucide-react";

function Contact() {
  return (
    <>
      <div id="window-header">
        <WindowControls target="contact" />
        <h2>Contact Me</h2>
      </div>
      <div className="p-5 space-y-5">
        <img
          src="/macbook.png"
          alt={SHORT_NAME}
          className="w-20 rounded-full"
        />
        <h3>Let's Connect</h3>
        <p>Got an idea? A bug to squash? Or just wanna talk tech? I'm in.</p>

        <div className="flex gap-2">
          <Mail className="w-5" />
          <a
            href="mailto:ansulagrawal9@gmail.com"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            ansulagrawal9@gmail.com
          </a>
        </div>

        <ul>
          {socials.map(({ id, bg, icon, link, text }) => (
            <li key={id} style={{ backgroundColor: bg }}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                title={text}
              >
                <img src={icon} alt={text} className="size-6" />
                <p>{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

const ContactWindow = WindowWrapper(Contact, "contact");
export default ContactWindow;
