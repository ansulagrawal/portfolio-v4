import WindowControls from "@components/WindowControls";
import WindowWrapper from "@hoc/WindowWrapper";
import useWindowStore from "@store/window";
import { Edit, Plus, Upload } from "lucide-react";

import { useState } from "react";

function Image() {
  const { windows } = useWindowStore();
  const data = windows?.imgFile?.data;
  const [hasError, setHasError] = useState(false);

  if (!data) return null;

  const { name, imageUrl } = data;
  const showImage = Boolean(imageUrl) && !hasError;

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
        {showImage ? (
          <img
            src={imageUrl}
            alt={name}
            onError={() => setHasError(true)}
          />
        ) : (
          <p>{hasError ? "Failed to load image" : "No image available"}</p>
        )}
      </div>
    </>
  );
}

const ImageWindow = WindowWrapper(Image, "imgFile");

export default ImageWindow;
