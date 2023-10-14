import React, { useEffect } from "react";
import { fabric } from "fabric";

const Canvas = () => {
  useEffect(() => {
    const canvas = new fabric.Canvas("interactive-canvas", {
      isDrawingMode: false,
    });
    canvas.selection = true;
    canvas.freeDrawingBrush.color = "black";
    canvas.freeDrawingBrush.width = 2;

    canvas.on("mouse:down", (event) => {
      if (event.target === null) {
        const text = new fabric.IText("", {
          left: event.e.layerX,
          top: event.e.layerY,
          fontSize: 18,
          lockMovementX: true, // Prevent horizontal movement
          lockMovementY: true, // Prevent vertical movement
          editable: true, // Allow text editing
          lockScalingX: true, // Prevent horizontal scaling
          lockScalingY: true,
          //   selectable: false,
        });
        canvas.add(text);
        canvas.setActiveObject(text);
        text.enterEditing();
      }
    });
  }, []);

  return (
    <div>
      <canvas
        id="interactive-canvas"
        width="4000"
        height="4000"
        tabIndex="1"
      ></canvas>
    </div>
  );
};

export default Canvas;
