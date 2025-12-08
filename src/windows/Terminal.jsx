import { Check, Flag } from "lucide-react";

import WindowControls from "@components/WindowControls";
import WindowWrapper from "@hoc/WindowWrapper";

import { SHORT_NAME, TECH_STACK_MOCK_RENDER_TIME, techStack } from "@constants";

function Terminal() {
  return (
    <>
      <div id="window-header">
        <WindowControls target="terminal" />
        <h2>Tech Stack</h2>
      </div>

      <div className="techstack">
        <p>
          <span className="font-bold">@{SHORT_NAME.toLowerCase()} % </span>
          show tech stack
        </p>

        <div className="label">
          <p className="w-32">Category</p>
          <p>Technologies</p>
        </div>

        <ul className="content">
          {techStack.map(({ category, items }) => (
            <li key={category} className="flex items-center">
              <Check className="check" />
              <h3>{category}</h3>

              <ul>
                {items.map((item, i) => (
                  <li key={item}>
                    {item}
                    {i < items.length - 1 ? ", " : "."}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <div className="footnote">
          <p>
            <Check size={20} />
            {techStack.length}/{techStack.length} loaded successfully (100%).
          </p>

          <p className="text-black">
            <Flag size={20} fill="black" />
            Render time: {TECH_STACK_MOCK_RENDER_TIME}ms
          </p>
        </div>
      </div>
    </>
  );
}

const TerminalWindow = WindowWrapper(Terminal, "terminal");

export default TerminalWindow;
