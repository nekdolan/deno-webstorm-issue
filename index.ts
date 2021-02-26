// deno bundle --config tsconfig.json index.ts index.js

let bool: Boolean = true
let canvasPath: CanvasRenderingContext2D

// TS2304: Cannot find name 'CanvasRenderingContext2D'.
// interface CanvasRenderingContext2D extends CanvasCompositing, CanvasDrawImage, CanvasDrawPath, CanvasFillStrokeStyles, CanvasFilters, CanvasImageData, CanvasImageSmoothing, CanvasPath, CanvasPathDrawingStyles, CanvasRect, CanvasShadowStyles, CanvasState, CanvasText, CanvasTextDrawingStyles, CanvasTransform, CanvasUserInterface
// The CanvasRenderingContext2D interface, part of the Canvas API , provides the 2D rendering context for the drawing surface of a <canvas> element. It is used for drawing shapes, text, images, and other objects.
//   See the interface's properties and methods in the sidebar and below. The Canvas tutorial  has more explanation, examples, and resources, as well.
// built-in, dom
// By Mozilla Contributors , CC BY-SA 2.5
//   `CanvasRenderingContext2D` on developer.mozilla.org