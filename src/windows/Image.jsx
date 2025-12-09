import WindowControls from "@components/WindowControls";
import WindowWrapper from "@hoc/WindowWrapper";
import useWindowStore from "@store/window";
import { Edit, Plus, Upload } from "lucide-react";

function Image() {
  const { windows } = useWindowStore();
  const data = windows?.imgFile?.data;

  if (!data) return null;

  const { name, imageUrl } = data;

  return (
    <>
      <div id="window-header">
        <WindowControls target="imgFile" />
        <h2>{name}</h2>
        <div className="flex gap-2">
          <Edit className="icon" />
          <Plus className="icon" />
          <Upload className="icon" />
        </div>
      </div>

      <div className="preview">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name}
            onError={(e) => {
              e.target.style.display = "none";
              e.target.parentElement.innerHTML = "<p>Failed to load image</p>";
            }}
          />
        ) : (
          <p>No image available</p>
        )}
      </div>
    </>
  );
}

const ImageWindow = WindowWrapper(Image, "imgFile");

export default ImageWindow;
