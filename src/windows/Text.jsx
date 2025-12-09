import WindowControls from "@components/WindowControls";
import WindowWrapper from "@hoc/WindowWrapper";
import useWindowStore from "@store/window";

function Text() {
  const { windows } = useWindowStore();
  const data = windows?.txtFile?.data;

  if (!data) return null;

  const { name, image, description, subtitle } = data;

  return (
    <>
      <div id="window-header">
        <WindowControls target="txtFile" />
        <h2>{name}</h2>
      </div>

      <div className="p-5 space-y-7">
        {image ? (
          <img src={image} alt={name} className="w-20 rounded-full" />
        ) : null}

        {subtitle ? <h1 className="font-bold">{subtitle}</h1> : null}

        {Array.isArray(description) && description.length > 0
          ? description.map((para, idx) => <p key={idx}>{para}</p>)
          : null}
      </div>
    </>
  );
}

const TextWindow = WindowWrapper(Text, "txtFile");

export default TextWindow;
