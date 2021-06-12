declare module 'sketch/dom' {
  class dom {
    /**
     * Export an object, using the options supplied.
     * @param objectToExport The object to export.
     * @param options Options indicating which sizes and formats to use, etc..
     */
    static export(
      objectToExport: dom.ToExportLayerTypes,
      options?: dom.ExportOptions
    ): void;
  }

  namespace dom {
    import MSDocument = sketchInternal.MSDocument;
    import MSLayer = sketchInternal.MSLayer;
    import MSStyledLayer = sketchInternal.MSStyledLayer;
    import MSLayerGroup = sketchInternal.MSLayerGroup;
    import MSPage = sketchInternal.MSPage;
    import MSArtboardGroup = sketchInternal.MSArtboardGroup;
    import MSBitmapLayer = sketchInternal.MSBitmapLayer;
    import MSImageData = sketchInternal.MSImageData;
    import MSShapeGroup = sketchInternal.MSShapeGroup;
    import MSShapePathLayer = sketchInternal.MSShapePathLayer;
    import NSImage = cocoascript.NSImage;
    import NSURL = cocoascript.NSURL;
    import NSData = cocoascript.NSData;
    import MSCurvePoint = sketchInternal.MSCurvePoint;
    import MSTextLayer = sketchInternal.MSTextLayer;
    import CGPoint = cocoascript.CGPoint;
    import MSSymbolMaster = sketchInternal.MSSymbolMaster;
    import MSSymbolInstance = sketchInternal.MSSymbolInstance;
    import MSAvailableOverride = sketchInternal.MSAvailableOverride;
    import MSHotspotLayer = sketchInternal.MSHotspotLayer;
    import MSAssetLibrary = sketchInternal.MSAssetLibrary;
    import MSShareableObjectReference = sketchInternal.MSShareableObjectReference;
    import MSSymbolMasterReference = sketchInternal.MSSymbolMasterReference;
    import MSSharedStyleReference = sketchInternal.MSSharedStyleReference;
    import MSSharedLayerReference = sketchInternal.MSSharedLayerReference;
    import MSSharedTextReference = sketchInternal.MSSharedTextReference;
    import CGRect = cocoascript.CGRect;
    import MSStyle = sketchInternal.MSStyle;
    import MSSharedStyle = sketchInternal.MSSharedStyle;
    import MSSliceLayer = sketchInternal.MSSliceLayer;
    import NSFont = cocoascript.NSFont;
    import NSRange = cocoascript.NSRange;

    class Component<NativeType = any> {
      static fromNative<NativeType>(
        nativeObject: NativeType
      ): Component<NativeType>;

      toJSON(): any;

      /**
       * The native Sketch model object.
       */
      readonly sketchObject: NativeType;
      /**
       * A string that represent the type of the component. If it’s undefined, it means that we couldn’t match the native object and that we returned a really lightweight wrapper.
       */
      readonly type: Types | undefined;
      /**
       * Returns the object ID of the wrapped Sketch model object.
       */
      readonly id: string;

      /**
       * returns if the component is wrapping an immutable version of a native Sketch model object. If that is the case, you won't be able to mutable the object (setting any property will be a no-op).
       */
      isImmutable(): boolean;

      /**
       * Because the API objects are thin wrappers, they are created on demand and are
       * thrown away regularly.
       *
       * No attempt is made to have a one-to-one correspondence between wrapper and model
       * object - many wrapper instances may exist which point to the same model object.
       *
       * This is not the most efficient solution in some respects, but it's pragmatic and
       * works well for simple cases.
       * Because multiple wrappers might exist for a given model object, if you're
       * testing two for equality, you should test the things that they wrap, rather than
       * the wrapper objects themselves
       */
      isEqual(wrappedObject: Component): boolean;
    }

    export enum Types {
      Artboard = 'Artboard',
      Blur = 'Blur',
      Border = 'Border',
      BorderOptions = 'BorderOptions',
      CurvePoint = 'CurvePoint',
      DataOverride = 'DataOverride',
      Document = 'Document',
      ExportFormat = 'ExportFormat',
      Fill = 'Fill',
      Flow = 'Flow',
      Gradient = 'Gradient',
      GradientStop = 'GradientStop',
      Group = 'Group',
      HotSpot = 'HotSpot',
      Image = 'Image',
      ImageData = 'ImageData',
      ImportableObject = 'ImportableObject',
      Library = 'Library',
      Override = 'Override',
      Page = 'Page',
      Shadow = 'Shadow',
      Shape = 'Shape',
      ShapePath = 'ShapePath',
      SharedStyle = 'SharedStyle',
      Slice = 'Slice',
      Style = 'Style',
      SymbolInstance = 'SymbolInstance',
      SymbolMaster = 'SymbolMaster',
      Text = 'Text',
      ColorAsset = 'ColorAsset',
    }

    /**
     * Type of objects to export
     */
    export type ToExportLayerTypes = Layer | Layer[] | Page | Page[];

    export type ShapeType = Shape | ShapePath;
    /**
     * Access the selected Document
     * @return The selected Document or undefined if no document is open.
     */
    export function getSelectedDocument(): Document | undefined;

    /**
     * Access all the open Documents
     * @return An array of Documents.
     */
    export function getDocuments(): Document[];

    namespace Document {
      export enum SaveMode {
        /**
         * Overwrites a document’s file with the document’s contents
         */
        Save = 0,
        /**
         *  Writes a document’s contents to a new file and then changes the document’s current location to point to the just-written file
         */
        SaveAs = 1,
        /**
         * Writes a document’s contents to a new file without changing the document’s current location to point to the new file.
         */
        SaveTo = 2,
      }
      export enum ColorSpace {
        Unmanaged = 'Unmanaged',
        sRGB = 'sRGB',
        P3 = 'P3',
      }
    }

    export class Document extends Component<MSDocument> {
      /**
       * Access the selected Document
       * @return The selected Document or undefined if no document is open.
       */
      static getSelectedDocument(): Document | undefined;

      /**
       * Access all the open Documents
       * @return An array of Documents.
       */
      static getDocuments(): Document[];

      /**
       * A method to open an existing sketch document or ask the user to open one. The method is asynchronous so if you want to do something after the document is opening it, make sure that you pass a callback and continue your script there. Asks the user to select a file to open.
       * @param cb A function called after the document is opened. It is called with an Error if opening the Document was unsuccessful and a Document (or undefined).
       */
      static open(
        cb: (err: any, document?: Document | undefined) => void
      ): void;
      /**
       * A method to open an existing sketch document or ask the user to open one. The method is asynchronous so if you want to do something after the document is opening it, make sure that you pass a callback and continue your script there.
       * @param path The path to the document to open. If undefined, the user will be asked to select one.
       * @param cb A function called after the document is opened. It is called with an Error if opening the Document was unsuccessful and a Document (or undefined).
       */
      static open(
        path: string,
        cb: (err: any, document?: Document | undefined) => void
      ): void;

      /**
       * The unique ID of the document.
       */
      id: string;

      /**
       * The path to the document (or the appcast URL in case of a Document from a remote Library).
       */
      path: string;
      /**
       * The pages of the document.
       */
      pages: Page[];
      type: Types.Document;

      constructor();

      /**
       * A read-only property to get the current page that the user has selected.
       */
      readonly selectedPage: Page;
      /**
       * A read-only property to get the layers that the user has selected in the currently selected page.
       */
      readonly selectedLayers: Selection;

      /**
       * A method to help find the first layer in this document which has the given id.
       * @param layerID The ID of the layer to find
       * @return Return a Layer object or undefined if it’s not found.
       */
      getLayerWithID(layerID: string): AllLayers | undefined;

      /**
       * A method to help find the layers in this document which have the given name.
       * @param name The name of the layers to find
       * @return Return an array of Layer.
       */
      getLayersNamed(name: string): AllLayers[];

      /**
       * A method to get all shared layer styles defined in the document.
       * @return Return an array of the layer SharedStyle objects defined in the document.
       * @deprecated
       */
      getSharedLayerStyles(): IIOArray<
        SharedStyle,
        {
          name: string;
          style: IStyle;
        }
      >;

      /**
       * A method to help find a shared style in the document.
       * @param id The ID of the shared style to find
       * @return Return a SharedStyle object or undefined if it's not found.
       */
      getSharedLayerStyleWithID(id: string): SharedStyle | undefined;

      /**
       * A method to get all shared text styles defined in the document.
       * @return Return an array of the text SharedStyle objects defined in the document.
       * @deprecated
       */
      getSharedTextStyles(): IIOArray<
        SharedStyle,
        {
          name: string;
          style: IStyle;
        }
      >;

      /**
       * A method to help find a shared style in the document.
       * @param id The ID of the shared style to find
       * @return Return a SharedStyle object or undefined if it's not found.
       */
      getSharedTextStyleWithID(id: string): SharedStyle | undefined;

      /**
       * A method to get all symbol masters defined in the document.
       * @return Return an array of the SymbolMaster objects defined in the document.
       */
      getSymbols(): SymbolMaster[];

      /**
       * A method to help find a symbol master in the document.
       * @param symbolId The symbol ID of the symbol master to find
       * @return Return a SymbolMaster object or undefined if it’s not found.
       */
      getSymbolMasterWithID(symbolId: string): SymbolMaster | undefined;

      /**
       * A method to help center the view of the document window on a given layer.
       * @param layer The layer to center the view onto
       */
      centerOnLayer(layer: Layer): void;

      /**
       * A method to save a document to a specific path or ask the user to choose where to save it. The method is asynchronous so if you want to do something after the document is saved, make sure that you pass a callback and continue your script there.
       * @param path The path where the document will be saved. If undefined, the user will be asked to select one.
       * @param options The options for the save operation (only used when specifing a path).
       * @param cb A function called after the document is saved. It is called with an Error if saving the Document was unsuccessful.
       */
      save(
        path?: string,
        options?: {
          saveMode: Document.SaveMode;
          iKnowThatImOverwritingAFolder?: boolean;
        },
        cb?: (err: any) => void
      ): void;
      /**
       * A method to save a document to a specific path or ask the user to choose where to save it. The method is asynchronous so if you want to do something after the document is saved, make sure that you pass a callback and continue your script there.
       * @param path The path where the document will be saved. If undefined, the user will be asked to select one.
       * @param cb A function called after the document is saved. It is called with an Error if saving the Document was unsuccessful.
       */
      save(path?: string, cb?: (err: any) => void): void;
      /**
       * A method to save a document to a specific path or ask the user to choose where to save it. The method is asynchronous so if you want to do something after the document is saved, make sure that you pass a callback and continue your script there.
       * @param cb A function called after the document is saved. It is called with an Error if saving the Document was unsuccessful.
       */
      save(cb?: (err: any) => void): void;

      /**
       * A method to close a document.
       */
      close(): void;
      /**
       * A list of color assets defined in the document.
       *
       * Mutating the returned array will update the document colors.
       */
      colors: IIOArray<ColorAsset, IColorAsset>;

      /**
       * The list of all shared text styles defined in the document.
       *
       * Mutating the returned array will update the document styles.
       */
      sharedTextStyles: IIOArray<
        SharedStyle,
        {
          name: string;
          style: IStyle;
        }
      >;

      /**
       * The list of all shared layer styles defined in the document.
       *
       * Mutating the returned array will update the document styles.
       */
      sharedLayerStyles: IIOArray<
        SharedStyle,
        {
          name: string;
          style: IStyle;
        }
      >;

      /**
       * The color-space of the document
       */
      colorSpace: Document.ColorSpace;
    }

    /**
     * An export format associated with a layer.
     */
    export interface ExportFormat {
      type?: 'ExportFormat';
      /**
       * The file format of the export.
       */
      fileFormat: 'jpg' | 'png' | 'tiff' | 'eps' | 'pdf' | 'webp' | 'svg';
      /**
       * The prefix added to the file name.
       */
      prefix?: string;
      /**
       * The suffix added to the file name.
       */
      suffix?: string;
      /**
       * The size of the export. Valid values include `2x`, `100w`, `100width`, `100px`, `300h`, `300height`.
       */
      size: string;
    }

    export interface LayerTransform {
      /**
       * The rotation of the Layer in degrees, clock-wise.
       */
      rotation: number;
      /**
       * If the layer is horizontally flipped.
       */
      flippedHorizontally: boolean;
      /**
       * If the layer is vertically flipped.
       */
      flippedVertically: boolean;
    }

    export abstract class Layer<
      NativeType extends MSLayer = MSLayer
    > extends Component<NativeType> {
      /**
       * The unique ID of the Layer. (not to be confused with symbolId on SymbolInstances)
       */
      id: string;
      /**
       * The name of the Layer
       */
      name: string;
      /**
       * The group/document the layer is in.
       */
      parent: Group | Document | Page;
      /**
       * If the layer is locked.
       */
      locked: boolean;
      /**
       * If the layer is hidden.
       */
      hidden: boolean;
      /**
       * The frame of the Layer. This is given in coordinates that are local to the parent of the layer.
       */
      frame: Rectangle;
      /**
       * If the layer is selected.
       */
      selected: boolean;
      /**
       * The prototyping action associated with the layer.
       */
      flow: FlowProperty;
      /**
       * The export formats of the Layer.
       */
      exportFormats: ExportFormat[];
      /**
       * The transformation applied to the Layer.
       */
      readonly transform: LayerTransform;

      /**
       * A new identical layer will be inserted into the parent of this layer.
       * @return A new copy of this layer.
       */
      duplicate(): this; //a copy of this
      /**
       * Remove this layer from its parent.
       */
      remove(): this;

      /**
       * The index of this layer in its parent. The layer at the back of the parent (visually) will be layer 0. The layer at the front will be layer n - 1 (if there are n layers).
       */
      readonly index: number;

      /**
       * Move this layer to the front of its parent.
       */
      moveToFront(): this;

      /**
       * Move this layer forward in its parent.
       */
      moveForward(): this;

      /**
       * Move this layer to the back of its parent.
       */
      moveToBack(): this;

      /**
       * Move this layer backward in its parent.
       */
      moveBackward(): this;

      /**
       * Access the page the layer is in
       */
      getParentPage(): Page | undefined;

      /**
       * Access the artboard the layer is in (if any)
       */
      getParentArtboard(): Artboard | undefined;

      /**
       * Access the symbol master the layer is in (if any)
       */
      getParentSymbolMaster(): SymbolMaster | undefined;

      /**
       * Access the shape the layer is in (if any)
       */
      getParentShape(): Shape | undefined;
    }

    class StyledLayer<NativeType extends MSStyledLayer> extends Layer<
      NativeType
    > {
      /**
       * The style of the layer.
       */
      style: Style | IStyle;
    }

    export type LayerPropertyType =
      | Layer
      | (GroupProperties & { type: Types.Group })
      | (ImageProperties & { type: Types.Image })
      | (ShapeProperties & { type: Types.Shape })
      | (ShapeProperties & { type: Types.ShapePath })
      | (TextProperties & { type: Types.Text })
      | (SymbolInstanceProperties & { type: Types.SymbolInstance })
      | (HotSpotProperties & { type: Types.HotSpot });

    export type LayersPropertyType = LayerPropertyType[];

    export interface GroupProperties {
      /**
       * The name of the Group
       */
      name?: string;
      /**
       * The group the Group is in.
       */
      parent?: Group;
      /**
       * The frame of the Group. This is given in coordinates that are local to the parent of the layer.
       */
      frame?: Rectangle;
      /**
       * The prototyping action associated with the Group.
       */
      flow?: FlowProperty;
      /**
       * The style of the Group.
       */
      style?: Style | IStyle;
      /**
       * The layers that this Group has
       */
      layers?: LayersPropertyType;
    }

    /**
     * reference to Child Layer
     * @deprecated
     */
    export type ChildLayer = GroupChildLayer;

    /**
     * most basic layer
     */
    export type BasicLayer = PageChildLayer;

    /**
     * Group Child Layer
     */
    export type GroupChildLayer =
      | Group
      | Image
      | Shape
      | ShapePath
      | Text
      | SymbolInstance
      | Slice;

    /**
     * Page Child Layer
     */
    export type PageChildLayer = GroupChildLayer | Artboard | SymbolMaster;

    /**
     * All Layer Types
     */
    export type AllLayers = PageChildLayer | Page;

    class BaseGroup<
      NativeType extends MSLayerGroup = MSLayerGroup
    > extends StyledLayer<NativeType> {
      /**
       * The layers that this component groups together.
       */
      layers: GroupChildLayer[];

      /**
       * Adjust the group to fit its children.
       */
      adjustToFit(): this;
    }

    export class Group extends BaseGroup {
      type: Types.Group;
      /**
       * The ID of the SharedStyle or null, identical to sharedStyle.id.
       */
      sharedStyleId: string | null;
      /**
       * The associated shared style.
       */
      sharedStyle: SharedStyle | null;

      constructor(properties?: GroupProperties);
    }

    export interface PageProperties {
      /**
       * The name of the Page
       */
      name?: string;
      /**
       * The document the page is in.
       */
      parent?: Document;
      /**
       * The layers that this page has
       */
      layers?: LayersPropertyType;
      /**
       * The frame of the page
       */
      frame?: Rectangle;
    }

    export class Page extends StyledLayer<MSPage> {
      /**
       * The document the page is in.
       */
      parent: Document;
      type: Types.Page;

      layers: PageChildLayer[];
      /**
       * Adjust the group to fit its children.
       */
      adjustToFit(): this;

      constructor(properties?: PageProperties);

      /**
       * A read-only property to get the layers that the user has selected in the page.
       */
      readonly selectedLayers: Selection;
    }

    export interface ArtboardProperties {
      /**
       * The name of the Artboard
       */
      name?: string;
      /**
       * The document the Artboard is in.
       */
      parent?: Page;
      /**
       * The layers that this component groups together
       */
      layers?: LayersPropertyType;
      /**
       * The frame of the page
       */
      frame?: Rectangle;
      /**
       * A Start Point allows you to choose where to start your prototype from.
       */
      flowStartPoint?: boolean;
    }

    class BaseArtboard<
      NativeType extends MSArtboardGroup = MSArtboardGroup
    > extends BaseGroup<MSArtboardGroup> {
      /**
       * The page the Artboard is in.
       */
      parent: Page;
      /**
       * A Start Point allows you to choose where to start your prototype from.
       */
      flowStartPoint: boolean;
      /**
       * The background of the Artboard
       */
      background: ArtboardBackground;
    }

    export interface ArtboardBackground {
      /**
       * If the background should be enabled, eg. shown or not
       */
      enabled: boolean;
      /**
       * If the background should be exported or if it should be transparent during the export
       */
      includedInExport: boolean;
      /**
       * The rgba representation of the color of the background
       */
      color: string;
    }

    export class Artboard extends BaseArtboard {
      type: Types.Artboard;

      constructor(properties?: ArtboardProperties);
    }

    export interface ImageProperties {
      /**
       * The name of the Image
       */
      name?: string;
      /**
       * The group the Image is in.
       */
      parent?: Group;
      /**
       * The frame of the Image. This is given in coordinates that are local to the parent of the layer.
       */
      frame?: Rectangle;
      /**
       * The prototyping action associated with the Image.
       */
      flow?: FlowProperty;
      /**
       * The style of the Image.
       */
      style?: Style | IStyle;
      /**
       * The image property accept a wide range of input:
       * * an ImageData
       * * a native NSImage
       * * a native NSURL
       * * a native MSImageData
       * * a string: path to the file to load the image from
       * * an object with a path property: path to the file to load the image from
       * * an object with a base64 string: a base64 encoded image
       */
      image?:
        | ImageData
        | NSImage
        | NSURL
        | MSImageData
        | string
        | { path: string }
        | { base64: string };
    }

    export class Image extends StyledLayer<MSBitmapLayer> {
      type: Types.Image;
      /**
       * The group the Image is in.
       */
      parent: Group;
      /**
       * The actual image of the layer.
       */
      image: ImageData;
      /**
       * The ID of the SharedStyle or null, identical to sharedStyle.id.
       */
      sharedStyleId: string | null;
      /**
       * The associated shared style.
       */
      sharedStyle: SharedStyle | null;

      constructor(properties?: ImageProperties);
    }

    /**
     * An ImageData is a wrapper around a native NSImage.
     * You can access the native NSImage with nsimage or a native NSData representation of the image with nsdata.
     */
    export abstract class ImageData extends Component<MSImageData> {
      type: Types.ImageData;
      readonly nsimage: NSImage;
      readonly nsdata: NSData;

      /**
       * The image property accept a wide range of input:
       * * an ImageData
       * * a native NSImage
       * * a native NSURL
       * * a native MSImageData
       * * a string: path to the file to load the image from
       * * an object with a path property: path to the file to load the image from
       * * an object with a base64 string: a base64 encoded image
       */
      static from(
        input:
          | ImageData
          | NSImage
          | NSURL
          | MSImageData
          | string
          | { path: string }
          | { base64: string }
      ): ImageData;
    }

    export interface ShapeProperties {
      /**
       * The name of the Shape
       */
      name?: string;
      /**
       * The group the Shape is in.
       */
      parent?: Group;
      /**
       * The frame of the Shape. This is given in coordinates that are local to the parent of the layer.
       */
      frame?: Rectangle;
      /**
       * The prototyping action associated with the Shape.
       */
      flow?: FlowProperty;
      /**
       * The style of the Shape.
       */
      style?: Style | IStyle;
    }

    export class Shape extends BaseGroup<MSShapeGroup> {
      type: Types.Shape;
      /**
       * The group the Shape is in.
       */
      parent: Group;
      /**
       * The ID of the SharedStyle or null, identical to sharedStyle.id.
       */
      sharedStyleId: string | null;
      /**
       * The associated shared style.
       */
      sharedStyle: SharedStyle | null;

      constructor(properties?: ShapeProperties);
    }

    export interface ShapePathProperties {
      /**
       * The name of the Shape
       */
      name?: string;
      /**
       * The group the Shape is in.
       */
      parent?: Group;
      /**
       * The frame of the Shape. This is given in coordinates that are local to the parent of the layer.
       */
      frame?: Rectangle;
      /**
       * The prototyping action associated with the Shape.
       */
      flow?: FlowProperty;
      /**
       * The style of the Shape.
       */
      style?: Style | IStyle;
      /**
       * The points defining the Shape Path.
       */
      points?: ICurvePoint[];
      /**
       * The type of the Shape Path. It can only be set when creating a new ShapePath.
       */
      shapeType: ShapePath.ShapeType;
      /**
       * If the Path is closed.
       */
      closed?: boolean;
    }

    export class ShapePath extends StyledLayer<MSShapePathLayer> {
      type: Types.ShapePath;
      /**
       * The group the Shape is in.
       */
      parent: Group;
      /**
       * The points defining the Shape Path.
       */
      points: CurvePoint[];
      /**
       * The type of the Shape Path. It can only be set when creating a new ShapePath.
       */
      readonly shapeType: ShapePath.ShapeType;
      /**
       * If the Path is closed.
       */
      closed: boolean;
      /**
       * The ID of the SharedStyle or null, identical to sharedStyle.id.
       */
      sharedStyleId: string | null;
      /**
       * The associated shared style.
       */
      sharedStyle: SharedStyle | null;

      constructor(properties?: ShapePathProperties);

      /**
       * create a new ShapePath from an SVG path (the string that goes in the `d` attribute of a path tag in an SVG).
       */
      static fromSVGPath(svg: string): ShapePath;

      /**
       * Returns a string representing the SVG path of the ShapePath.
       */
      getSVGPath(): string;
    }

    export namespace ShapePath {
      export enum ShapeType {
        Rectangle = 'Rectangle',
        Oval = 'Oval',
        Triangle = 'Triangle',
        Polygon = 'Polygon',
        Star = 'Star',
        Custom = 'Custom',
      }
      export enum PointType {
        Undefined = 'Undefined',
        Straight = 'Straight',
        Mirrored = 'Mirrored',
        Asymmetric = 'Asymmetric',
        Disconnected = 'Disconnected',
      }
    }

    export interface ICurvePoint {
      point: IPoint;
      curveFrom: IPoint;
      curveTo: IPoint;
      cornerRadius: number;
      pointType: CurvePoint.PointType;
    }

    /**
     * A utility class to represent a curve point (with handles to control the curve in a path).
     */
    class CurvePoint extends Component<MSCurvePoint> {
      /**
       * The position of the point.
       */
      point: Point;
      /**
       * The position of the handle control point for the incoming path.
       */
      curveFrom: Point;
      /**
       * The position of the handle control point for the outgoing path.
       */
      curveTo: Point;
      /**
       * The corner radius of the point.
       */
      cornerRadius: number;
      /**
       * The type of the point.
       */
      pointType: CurvePoint.PointType;
    }

    namespace CurvePoint {
      type PointType = ShapePath.PointType;
    }

    export interface IPoint {
      x: number;
      y: number;
    }

    /**
     * A utility class to represent a point.
     */
    export class Point implements IPoint {
      /**
       * The x coordinate of the point.
       */
      x: number;
      /**
       * The y coordinate of the point.
       */
      y: number;

      /**
       * Return the Point as a CGPoint.
       */
      asCGPoint(): CGPoint;

      /**
       * Return the Point as a NSPoint.
       */
      asNSPoint(): CGPoint;
    }

    export interface TextProperties {
      /**
       * The name of the Text
       */
      name?: string;
      /**
       * The group the Text is in.
       */
      parent?: Group;
      /**
       * The frame of the Text. This is given in coordinates that are local to the parent of the layer.
       */
      frame?: Rectangle;
      /**
       * The prototyping action associated with the Text.
       */
      flow?: FlowProperty;
      /**
       * The style of the Text.
       */
      style?: Style | IStyle;
      /**
       * The string value of the text layer.
       */
      text?: string;
      /**
       * The alignment of the layer.
       */
      alignment?: Text.Alignment;
      /**
       * The line spacing of the layer.
       */
      lineSpacing?: Text.LineSpacing;
      /**
       * Whether the layer should have a fixed width or a flexible width.
       */
      fixedWidth?: boolean;
    }

    export class Text extends StyledLayer<MSTextLayer> {
      type: Types.Text;
      /**
       * The group the Text is in.
       */
      parent: Group;
      /**
       * The frame of the Text. This is given in coordinates that are local to the parent of the layer.
       */
      frame: Rectangle;
      /**
       * The string value of the text layer.
       */
      text: string;
      /**
       * @deprecated
       * The alignment of the layer.
       */
      alignment: Text.Alignment;
      /**
       * The line spacing of the layer.
       */
      lineSpacing: Text.LineSpacing;
      /**
       * Whether the layer should have a fixed width or a flexible width.
       */
      fixedWidth: boolean;
      /**
       * The ID of the SharedStyle or null, identical to sharedStyle.id.
       */
      sharedStyleId: string | null;
      /**
       * The associated shared style.
       */
      sharedStyle: SharedStyle | null;

      constructor(properties?: TextProperties);

      /**
       * Adjust the Text to fit its value.
       */
      adjustToFit(): this;

      /**
       * Set the font of the text layer.
       */
      font: NSFont;
      /**
       * @deprecated
       * Set the font of the text layer as the system font of the given size.
       */
      systemFontSize: number;
      /**
       * Returns a array of the text fragments for the text. Each one is a object containing a rectangle, and a baseline offset and the range of the fragment {rect, baselineOffset, range}.
       */
      fragments: TextFragment[];
    }

    export namespace Text {
      /**
       * Enumeration of the alignments of the text.
       */
      export enum Alignment {
        /**
         * Visually left aligned
         */
        left = 'left',
        /**
         * Visually right aligned
         */
        right = 'right',
        /**
         * Visually centered
         */
        center = 'center',
        /**
         * Fully-justified. The last line in a paragraph is natural-aligned.
         */
        justified = 'justified',
        /**
         * Indicates the default alignment for script
         */
        natural = 'natural',
      }

      /**
       * Enumeration of the vertical alignments of the text.
       */
      export enum VerticalAlignment {
        /** Visually top aligned */
        top = 'top',
        /** Visually vertically centered */
        center = 'center',
        /** Visually bottom aligned */
        bottom = 'bottom',
      }

      /**
       * Enumeration of the line spacing behaviour for the text.
       */
      export enum LineSpacing {
        /**
         * Uses min & max line height on paragraph style
         */
        constantBaseline = 'constantBaseline',
        /**
         * Uses MSConstantBaselineTypesetter for fixed line height
         */
        variable = 'variable',

        // Undocumented
        natural = 'natural',
      }
    }

    export interface TextFragment {
      rect: Rectangle;
      baselineOffset: number;
      range: NSRange;
    }

    export interface SymbolMasterProperties {
      /**
       * The name of the SymbolMaster
       */
      name?: string;
      /**
       * The frame of the SymbolMaster. This is given in coordinates that are local to the parent of the layer.
       */
      frame?: Rectangle;
      /**
       * The prototyping action associated with the SymbolMaster.
       */
      flow?: FlowProperty;
    }

    export interface SymbolMasterBackground extends ArtboardBackground {
      /**
       * If the background should appear in the instances of the Symbol Master
       */
      includedInInstance: boolean;
    }

    /**
     * 创建 SymbolMaster
     **/
    export class SymbolMaster extends BaseArtboard<MSSymbolMaster> {
      type: Types.SymbolMaster;
      /**
       * The unique ID of the Symbol that the master and its instances share.
       */
      symbolId: string;
      /**
       * The background of the Symbol Master
       */
      readonly background: SymbolMasterBackground;
      /**
       * The array of the overrides that the instances of the Symbol Master will be able to change.
       */
      overrides: Override[];

      constructor(properties?: SymbolMasterProperties);

      /**
       * Replace the artboard with a symbol master.
       * @param artboard The artboard to create the master from.
       * @return A new SymbolMaster
       */
      static fromArtboard(artboard: Artboard): SymbolMaster;

      /**
       * Replace the symbol master with an artboard and detach all its instances converting them into groups.
       * @return A new Artboard
       */
      toArtboard(): Artboard;

      /**
       * Creates a new SymbolInstance linked to this master, ready for inserting in the document.
       * @return A new SymbolInstance
       */
      createNewInstance(): SymbolInstance;

      /**
       * Returns an array of all instances of the symbol in the document, on all pages.
       */
      getAllInstances(): SymbolInstance[];

      /**
       * @return The Library the symbol was defined in, or null if it is a local symbol.
       */
      getLibrary(): Library | null;

      /**
       * If a Library has some updates, you can synchronize the local Symbol Master with the Library’s version and bypass the panel where the user chooses the updates to bring.
       * @return true if it succeeded.
       */
      syncWithLibrary(): boolean;

      /**
       * You can unlink a Symbol Master from the Library it comes from and make it a local Symbol Master instead. It will be added to the Symbols Page.
       * @return true if it succeeded.
       */
      unlinkFromLibrary(): boolean;
    }

    export interface SymbolInstanceProperties {
      /**
       * The name of the SymbolInstance
       */
      name?: string;
      /**
       * The group the SymbolInstance is in.
       */
      parent?: Group;
      /**
       * The frame of the SymbolInstance. This is given in coordinates that are local to the parent of the layer.
       */
      frame?: Rectangle;
      /**
       * The prototyping action associated with the SymbolInstance.
       */
      flow?: FlowProperty;
      /**
       * The style of the SymbolInstance.
       */
      style?: Style | IStyle;
      /**
       * The unique ID of the Symbol that the instance and its master share.
       */
      symbolId: string;
    }

    export class SymbolInstance extends StyledLayer<MSSymbolInstance> {
      type: Types.SymbolInstance;
      /**
       * The group the SymbolInstance is in.
       */
      parent: Group;
      /**
       * The unique ID of the Symbol that the instance and its master share.
       */
      symbolId: string;
      /**
       * The Symbol master that the instance is linked to.
       */
      master: SymbolMaster;
      /**
       * The array of the overrides to modify the instance.
       */
      overrides: Override[];

      constructor(properties: SymbolInstanceProperties);

      /**
       * Replaces a group that contains a copy of the Symbol this instance refers to. Returns null if the master contains no layers instead of inserting an empty group
       * @param options The options to apply when detaching the instance.
       * @param options.recursively If it should detach the nested symbols as well. Default to false.
       * @return A new Group or null
       */
      detach(options?: { recursively?: boolean }): Group | null;

      /**
       * Change the value of the override.
       * @param override The override to change.
       * @param value The value of override to set. Can be a string or an NSImage or a symbolId depending on the type of the override.
       */
      setOverrideValue(override: Override, value: string | NSImage): this;
    }

    /**
     * A Symbol override. This component is not exposed, it is only returned when accessing the overrides of a Symbol Instance.
     * Can't be constructed - only returned from a SymbolInstance
     */
    export abstract class Override extends Component<MSAvailableOverride> {
      type: Types.Override;
      /**
       * The path to the override. It’s formed by the symbolId of the nested symbols separated by a /.
       */
      path: string;
      /**
       * The property that this override controls. It can be "stringValue" for a text override, "symbolId" for a nested symbol, or "image" for an image override.
       */
      property: 'stringValue' | 'symbolID' | 'image' | 'textStyle';
      /**
       * The unique ID of the override (${path}_${property}).
       */
      id: string;
      /**
       * If the override is a nested symbol override.
       */
      symbolOverride: boolean;
      /**
       * The value of the override which can be change.
       */
      value: string | ImageData;
      /**
       * If the override hasn’t been changed and is the default value.
       */
      isDefault: boolean;
      /**
       * The layer the override applies to. It will be an immutable version of the layer
       */
      affectedLayer: Text | Image | SymbolInstance;
      /**
       * If the value of the override can be changed.
       */
      editable: boolean;
      /**
       * 是否选中了这个 override
       **/
      selected: boolean;
    }

    /**
     * The prototyping action associated with a layer.
     */
    export interface FlowProperty {
      /**
       * The target artboard of the action or Flow.BackTarget if the action is a back action
       */
      target?: Artboard | typeof Flow.BackTarget;
      /**
       * The ID of target artboard of the action or Flow.BackTarget if the action is a back action
       */
      targetId?: string | typeof Flow.BackTarget;
      /**
       * The type of the animation.
       */
      animationType?: Flow.AnimationType;
      /**
       * Returns whether the prototyping action is a back action or not, eg. whether layer.flow.target === Flow.BackTarget.
       * Is only valid on flow properties retrieved from layers
       */
      readonly isBackAction?: () => boolean;
      /**
       * In some cases, the target of the action can be invalid, for example when the target has been removed from the document. The methods returns whether the target is valid or not.
       * Is only valid on flow properties retrieved from layers
       */
      readonly isValidConnection?: () => boolean;
    }

    /**
     * Enumeration of the animation types.
     */
    export namespace Flow {
      /**
       * Enumeration of the animation types.
       */
      export enum AnimationType {
        /**
         * No animation
         */
        none = 'none',
        /**
         * Slide from the left
         */
        slideFromLeft = 'slideFromLeft',
        /**
         * Slide from the right
         */
        slideFromRight = 'slideFromRight',
        /**
         * Slide from the bottom
         */
        slideFromBottom = 'slideFromBottom',
        /**
         * Slide from the top
         */
        slideFromTop = 'slideFromTop',
      }

      /**
       * Flow.BackTarget is a constant that you can set the target to in order to always take you back to the last Artboard you were looking at. When a Target has been set to Flow.BackTarget, the transition leading into it will be reversed on return.
       */
      export const BackTarget: unique symbol;
    }

    export interface HotSpotProperties {
      /**
       * The name of the HotSpot
       */
      name?: string;
      /**
       * The group the HotSpot is in.
       */
      parent?: Group;
      /**
       * The frame of the HotSpot. This is given in coordinates that are local to the parent of the layer.
       */
      frame?: Rectangle;
      /**
       * The prototyping action associated with the HotSpot.
       */
      flow?: FlowProperty;
    }

    /**
     * A Sketch hotspot. It is an instance of both Layer so all the methods defined there are available.
     */
    export class HotSpot extends Component<MSHotspotLayer> {
      type: Types.HotSpot;

      constructor(properties?: HotSpotProperties);

      static fromLayer(layer: Layer): HotSpot;
    }

    export namespace Library {
      /**
       * Enumeration of the types of Library.
       */
      export enum ImportableObjectType {
        Symbol = 'Symbol',
        LayerStyle = 'LayerStyle',
        TextStyle = 'TextStyle',
        Unknown = 'Unknown',
      }
      /**
       * Enumeration of the types of Importable Objects.
       */
      export enum LibraryType {
        Internal = 'Internal',
        User = 'LocalUser',
        Remote = 'RemoteUser',
        LocalUser = 'LocalUser',
        RemoteUser = 'RemoteUser',
        RemoteTeam = 'RemoteTeam',
        RemoteThirdParty = 'RemoteThirdParty',
      }
    }
    export interface IColorAsset {
      type?: Types.ColorAsset;
      name?: string;
      color: string;
    }

    class ColorAsset implements IColorAsset {
      type: Types.ColorAsset;
      name: string | null;
      color: string;
    }

    /**
     * A Sketch Library.
     */
    export abstract class Library extends Component<MSAssetLibrary> {
      type: Types.Library;
      /**
       * The unique ID of the Library.
       */
      readonly id: string;
      /**
       * The name of the Library.
       */
      readonly name: string;
      /**
       * If Sketch has been able to load the Library.
       */
      readonly valid: boolean;
      /**
       * If the user has enabled the Library.
       */
      enabled: boolean;
      /**
       * The type of Library.
       */
      readonly libraryType: Library.LibraryType;
      /**
       * The date at which the library was last updated
       */
      readonly lastModifiedAt: Date;

      static getLibraries(): Library[];

      /**
       * Get the library for a local Sketch document. If the Document was already added as a Library, it will simply return it. If it is not already a Library, it will be added.
       * @param path The path of the Library.
       * @return The existing Library at the path or a new Library from the document at the path.
       */
      static getLibraryForDocumentAtPath(path: string): Library;

      /**
       * Get the remote library for an RSS feed. If the RSS feed was already added as a Library, it will simply return it. If it is not already a Library, it will be added.
       * @param url The URL to the rss feed describing the versions of the library.
       * @param cb A function called after the library is added. It is called with an Error if adding the Library was unsuccessful and a Library (or undefined).
       */
      static getRemoteLibraryWithRSS(
        url: string,
        cb: (err?: any, library?: Library) => void
      ): void;

      /**
       * A method to remove an existing library.
       */
      remove(): void;

      /**
       * A library references a Sketch Document and you can access it with this method.
       * @returns The Document that the Library references. It can throw an error if the Document cannot be accessed.
       */
      getDocument(): Document;

      getImportableReferencesForDocument(
        document: Document,
        objectType: Library.ImportableObjectType
      ): ImportableObject[];

      /**
       * To import a symbol from a Library, do not access its Document and look for the SymbolMaster directly. Instead, get the Symbol References of the Library and use those to import them.
       * Those references depends on the document you want to import them into. For example if a document has already imported a symbol, it will reference the local version to keep all the instances in sync.
       * @return An array of ImportableObject that represents the Symbols which you can import from the Library.
       */
      getImportableSymbolReferencesForDocument(
        document: Document
      ): ImportableObject[];

      /**
       * To import a shared style from a Library, do not access its Document and look for the SharedStyle directly. Instead, get the Shared Layer Style References of the Library and use those to import them.
       * Those references depends on the document you want to import them into. For example if a document has already imported a shared style, it will reference the local version to keep all the instances in sync.
       * @return An array of ImportableObject that represents the shared Layer styles which you can import from the Library.
       */
      getImportableLayerStyleReferencesForDocument(
        document: Document
      ): ImportableObject[];

      /**
       * To import a shared style from a Library, do not access its Document and look for the SharedStyle directly. Instead, get the Shared Text Style References of the Library and use those to import them.
       * Those references depends on the document you want to import them into. For example if a document has already imported a shared style, it will reference the local version to keep all the instances in sync.
       * @return An array of ImportableObject that represents the shared Text styles which you can import from the Library.
       */
      getImportableTextStyleReferencesForDocument(
        document: Document
      ): ImportableObject[];
    }

    type ImportableNative =
      | MSShareableObjectReference
      | MSSymbolMasterReference
      | MSSharedStyleReference
      | MSSharedLayerReference
      | MSSharedTextReference;

    /**
     * An Object that can imported from a Library. All its properties are read-only.
     */
    export abstract class ImportableObject extends Component<ImportableNative> {
      type: Types.ImportableObject;
      /**
       * The unique ID of the Object.
       */
      readonly id: string;
      /**
       * The name of the Object.
       */
      readonly name: string;
      /**
       * The type of the Object.
       */
      readonly objectType: Library.ImportableObjectType;
      /**
       * The Library the Object is part of.
       */
      readonly library: Library;

      /**
       * An Importable Object is linked to a Document so importing it will import it in the said Document.
       * @return If the objectType of the Object is Symbol, it will return a Symbol Master which will be linked to the Library (meaning that if the Library is updated, the Symbol Instances created from the Master will be updated as well).
       */
      import(): SymbolMaster;
    }

    /**
     * A utility class to represent the layers selection. Contains some methods to make interacting with a selection easier. All the properties are read-only.
     */
    export abstract class Selection {
      /**
       * The Layers in the selection.
       */
      readonly layers: AllLayers[];
      /**
       * The number of Layers in the selection.
       */
      readonly length: number;
      /**
       * Does the selection contain any layers?
       */
      readonly isEmpty: boolean;

      map<T>(func: (layer: AllLayers) => T): T[];

      forEach(func: (layer: AllLayers) => void): void;

      reduce<T>(func: (initial: T, layer: AllLayers) => T): T;

      /**
       * Clear the selection.
       */
      clear(): this;
    }

    /**
     * A utility class to represent a rectangle. Contains some methods to make interacting with a rectangle easier.
     */
    export class Rectangle {
      /**
       * The x coordinate of the top-left corner of the rectangle.
       */
      x: number;
      /**
       * The y coordinate of the top-left corner of the rectangle.
       */
      y: number;
      /**
       * The width of the rectangle.
       */
      width: number;
      /**
       * The height of the rectangle.
       */
      height: number;

      constructor(x: number, y: number, width: number, height: number);
      constructor(rect: Rectangle);

      /**
       * Adjust the rectangle by offsetting it.
       */
      offset(x: number, y: number): this;

      /**
       * Adjust the rectangle by scaling it.
       */
      scale(scale: number): this;
      /**
       * Adjust the rectangle by scaling it.
       */
      scale(scaleWidth: number, scaleHeight: number): this;

      /**
       * Each layer defines its own system of coordinates (with its origin at the top left of the layer).
       * You can change that basis from one layer to the other with changeBasis.
       * Both from and to can be omitted (but not at the same time)
       * to change the basis from/to the Page coordinates.
       */
      changeBasis(change: { from?: Layer; to?: Layer }): Rectangle;

      /**
       * Return the Rectangle as a CGRect
       */
      asCGRect(): CGRect;
    }

    /**
     * A utility class to represent the style of a Layer.
     */
    export interface IStyle {
      /**
       * The opacity of a Layer, between 0 (transparent) and 1 (opaque).
       */
      opacity?: number;
      /**
       * The opacity of a Layer, between 0 (transparent) and 1 (opaque).
       */
      blendingMode?: Style.BlendingMode;
      /**
       * The blur applied to the Layer.
       */
      blur?: Blur;
      /**
       * The fills of a Layer.
       */
      fills?: Fill[];
      /**
       * The borders of a Layer.
       */
      borders?: Border[];
      /**
       * The options that the borders share.
       */
      borderOptions?: BorderOptions;
      /**
       * The shadows of a Layer.
       */
      shadows?: Shadow[];
      /**
       * The inner shadows of a Layer.
       */
      innerShadows?: Shadow[];
      /**
       * The horizontal alignment of the text of a Text Layer
       */
      alignment?: Text.Alignment;
      /**
       * The vertical alignment of the text of a Text Layer
       */
      verticalAlignment?: Text.VerticalAlignment;
      /**
       * The kerning between letters of a Text Layer. null means that the kerning will be the one defined by the font.
       */
      kerning?: number | null;
      /**
       * The height of a line of text in a Text Layer. null means "automatic".
       */
      lineHeight?: number | null;
      /**
       * The space between 2 paragraphs of text in a Text Layer.
       */
      paragraphSpacing?: number;
      /**
       * A rgba hex-string (#000000ff is opaque black) of the color of the text in a Text Layer.
       */
      textColor?: string;
      /**
       * The size of the font in a Text Layer.
       */
      fontSize?: number;
      /**
       * The transform applied to the text of a Text Layer.
       */
      textTransform?: 'none' | 'uppercase' | 'lowercase';
      /**
       * The name of the font family of a Text Layer.
       * 'system' means the font family of the OS ('.SF NS Text' on macOS 10.14).
       */
      fontFamily?: string;
      /**
       * The weight of the font of a Text Layer. Goes from 0 to 12, 0 being the thinest and
       * 12 being the boldest. Not every weight are available for every fonts. When setting
       * a font weight that does not exist for the current font family, the closest weight
       * that exists will be set instead.
       */
      fontWeight?: number;
      /**
       * The style of the font of a Text Layer.
       */
      fontStyle?: 'italic' | undefined;
      /**
       * The variant of the font of a Text Layer.
       */
      fontVariant?: 'small-caps' | undefined;
      /**
       * The size variant of the font of a Text Layer.
       */
      fontStretch?:
        | 'compressed'
        | 'condensed'
        | 'narrow'
        | 'expanded'
        | 'poster'
        | undefined;
      /**
       * The underline decoration of a Text Layer.
       * `<line-style> [<line-pattern>] ['by-word']` / `undefined` where `<line-style>` can
       * be `single` / `thick` / `double` and `<line-pattern>` can be
       * `dot` / `dash` / `dash-dot` / `dash-dot-dot`
       */
      textUnderline?: string | undefined;
      /**
       * The strikethrough decoration of a Text Layer.
       * `<line-style> [<line-pattern>] ['by-word']` / undefined where `<line-style>` can be
       * `single` / `thick` / `double` and `<line-pattern>` can be
       * `dot` / `dash` / `dash-dot` / `dash-dot-dot`
       */
      textStrikethrough?: string | undefined;
    }

    /**
     * An object that represent the blur of the layer.
     */
    export interface Blur {
      /**
       * The type of the blur.
       */
      blurType: Style.BlurType;
      /**
       * The radius of the blur.
       */
      radius: number;
      /**
       * The angle of the blur (only used when the blur type is Motion).
       */
      motionAngle?: number;
      /**
       * The center of the blur (only used when the blur type is Zoom.
       */
      center?: { x: number; y: number };
      /**
       * Whether the fill is active or not.
       */
      enabled?: boolean;
    }

    /**
     * An object that represent a Fill.
     */
    export interface Fill {
      /**
       * The type of the fill.
       */
      fillType: Style.FillType;
      /**
       * A rgba hex-string (#000000ff is opaque black).
       */
      color?: string;
      /**
       * The gradient of the fill.
       */
      gradient?: Gradient;
      /**
       * Whether the fill is active or not.
       */
      enabled?: boolean;
      /**
       * 添加图片需要
       */
      pattern?: Pattern;
    }

    /**
     * Image Fill Style
     */
    export interface Pattern {
      patternType: Style.PatternFillType;
      tileScale: number;
      image: ImageData;
    }
    /**
     * An object that represent a Border.
     */
    export interface Border {
      /**
       * The type of the fill of the border.
       */
      fillType: Style.FillType;
      /**
       * A rgba hex-string (#000000ff is opaque black).
       */
      color?: string;
      /**
       * The gradient of the fill.
       */
      gradient?: Gradient;
      /**
       * Whether the border is active or not.
       */
      enabled?: boolean;
      /**
       * The position of the border.
       */
      position?: Style.BorderPosition;
      /**
       * The thickness of the border.
       */
      thickness?: number;
    }

    /**
     * An object that represent the options that the Borders of the Layer share.
     */
    export interface BorderOptions {
      /**
       * The type of the arrow head for the start of the path.
       */
      startArrowhead?: Style.Arrowhead;
      /**
       * The type of the arrow head for the start of the path.
       */
      endArrowhead?: Style.Arrowhead;
      /**
       * The dash pattern of the borders. For example, a dash pattern of 4-2 will draw the stroke for four pixels, put a two pixel gap, draw four more pixels and then so on. A dashed pattern of 5-4-3-2 will draw a stroke of 5 px, a gap of 4 px, then a stroke of 3 px, a gap of 2 px, and then repeat.
       */
      dashPattern?: number[];
      /**
       * The type of the border ends (if visible).
       */
      lineEnd?: Style.LineEnd;
      /**
       * The type of the border joins (if any).
       */
      lineJoin?: Style.LineJoin.Bevel | Style.LineJoin.Round | 'Miter';
    }

    /**
     * An object that represent a Shadow.
     */
    export interface Shadow {
      /**
       * A rgba hex-string (#000000ff is opaque black).
       */
      color: string;
      /**
       * The blur radius of the shadow.
       */
      blur: number;
      /**
       * The horizontal offset of the shadow.
       */
      x?: number;
      /**
       * The vertical offset of the shadow.
       */
      y?: number;
      /**
       * The spread of the shadow.
       */
      spread?: number;
      /**
       * Whether the fill is active or not.
       */
      enabled?: boolean;
    }

    /**
     * An object that represent a Gradient.
     */
    export interface Gradient {
      /**
       * The type of the Gradient.
       */
      gradientType: Style.GradientType;
      /**
       * The position of the start of the Gradient
       */
      from: { x: number; y: number };
      /**
       * The position of the end of the Gradient.
       */
      to: { x: number; y: number };
      /**
       * The different stops of the Gradient
       */
      stops: GradientStop[];
    }

    /**
     * An object that represent a Gradient Stop. Each of colors of a Gradient are represented by a Stop. A Gradient can have as many Stops as you’d like.
     */
    export interface GradientStop {
      /**
       * The position of the Stop. 0 represents the start of the gradient while 1 represent the end.
       */
      position: number;
      /**
       * The color of the Stop
       */
      color: string;
    }

    export class Style extends Component<MSStyle> {
      type: Types.Style;
      /**
       * The opacity of a Layer, between 0 (transparent) and 1 (opaque).
       */
      opacity?: number;
      /**
       * The opacity of a Layer, between 0 (transparent) and 1 (opaque).
       */
      blendingMode?: Style.BlendingMode;
      /**
       * The blur applied to the Layer.
       */
      blur?: Blur;
      /**
       * The fills of a Layer.
       */
      fills?: Fill[];
      /**
       * The borders of a Layer.
       */
      borders?: Border[];
      /**
       * The options that the borders share.
       */
      borderOptions?: BorderOptions;
      /**
       * The shadows of a Layer.
       */
      shadows?: Shadow[];
      /**
       * The inner shadows of a Layer.
       */
      innerShadows?: Shadow[];
      /**
       * The horizontal alignment of the text of a Text Layer
       */
      alignment?: Text.Alignment;
      /**
       * The vertical alignment of the text of a Text Layer
       */
      verticalAlignment?: Text.VerticalAlignment;
      /**
       * The kerning between letters of a Text Layer. null means that the kerning will be the one defined by the font.
       */
      kerning?: number | null;
      /**
       * The height of a line of text in a Text Layer. null means "automatic".
       */
      lineHeight?: number | null;
      /**
       * The space between 2 paragraphs of text in a Text Layer.
       */
      paragraphSpacing?: number;
      /**
       * A rgba hex-string (#000000ff is opaque black) of the color of the text in a Text Layer.
       */
      textColor?: string;
      /**
       * The size of the font in a Text Layer.
       */
      fontSize?: number;
      /**
       * The transform applied to the text of a Text Layer.
       */
      textTransform?: 'none' | 'uppercase' | 'lowercase';
      /**
       * The name of the font family of a Text Layer.
       * 'system' means the font family of the OS ('.SF NS Text' on macOS 10.14).
       */
      fontFamily?: string;
      /**
       * The weight of the font of a Text Layer. Goes from 0 to 12, 0 being the thinest and
       * 12 being the boldest. Not every weight are available for every fonts. When setting
       * a font weight that does not exist for the current font family, the closest weight
       * that exists will be set instead.
       */
      fontWeight?: number;
      /**
       * The style of the font of a Text Layer.
       */
      fontStyle?: 'italic' | undefined;
      /**
       * The variant of the font of a Text Layer.
       */
      fontVariant?: 'small-caps' | undefined;
      /**
       * The size variant of the font of a Text Layer.
       */
      fontStretch?:
        | 'compressed'
        | 'condensed'
        | 'narrow'
        | 'expanded'
        | 'poster'
        | undefined;
      /**
       * The underline decoration of a Text Layer.
       * `<line-style> [<line-pattern>] ['by-word']` / `undefined` where `<line-style>` can
       * be `single` / `thick` / `double` and `<line-pattern>` can be
       * `dot` / `dash` / `dash-dot` / `dash-dot-dot`
       */
      textUnderline?: string | undefined;
      /**
       * The strikethrough decoration of a Text Layer.
       * `<line-style> [<line-pattern>] ['by-word']` / undefined where `<line-style>` can be
       * `single` / `thick` / `double` and `<line-pattern>` can be
       * `dot` / `dash` / `dash-dot` / `dash-dot-dot`
       */
      textStrikethrough?: string | undefined;

      /**
       * @return Whether the Style has some differences with the Shared Style it is linked to. In case it isn't linked to any, returns false.
       */
      isOutOfSyncWithSharedStyle(): boolean;

      /**
       * The style instance will be updated with the value of the Shared Style.
       */
      syncWithSharedStyle(): void;

      /**
       * @return A number if the layer is a Text layer or undefined.
       */
      getDefaultLineHeight(): number | undefined;
    }

    export namespace Style {
      export enum BlendingMode {
        Normal = 'Normal',
        Darken = 'Darken',
        Multiply = 'Multiply',
        ColorBurn = 'ColorBurn',
        Lighten = 'Lighten',
        Screen = 'Screen',
        ColorDodge = 'ColorDodge',
        Overlay = 'Overlay',
        SoftLight = 'SoftLight',
        HardLight = 'HardLight',
        Difference = 'Difference',
        Exclusion = 'Exclusion',
        Hue = 'Hue',
        Saturation = 'Saturation',
        Color = 'Color',
        Luminosity = 'Luminosity',
      }

      export enum BlurType {
        /**
         * A common blur type that will accurately blur in all directions.
         */
        Gaussian = 'Gaussian',
        /**
         * Blur only in one direction, giving the illusion of motion.
         */
        Motion = 'Motion',
        /**
         * Will blur from one particular point out.
         */
        Zoom = 'Zoom',
        /**
         * This will blur any content that appears behind the layer.
         */
        Background = 'Background',
      }

      export enum FillType {
        Color = 'Color',
        Gradient = 'Gradient',
        Pattern = 'Pattern',
        color = 'Color',
        gradient = 'Gradient',
        pattern = 'Pattern',
      }

      export enum BorderPosition {
        Center = 'Center',
        Inside = 'Inside',
        Outside = 'Outside',
        Both = 'Both',
      }

      export enum Arrowhead {
        None = 'None',
        OpenArrow = 'OpenArrow',
        FilledArrow = 'FilledArrow',
        Line = 'Line',
        OpenCircle = 'OpenCircle',
        FilledCircle = 'FilledCircle',
        OpenSquare = 'OpenSquare',
        FilledSquare = 'FilledSquare',
        ClosedArrow = 'FilledArrow',
      }

      export enum LineEnd {
        /**
         * This is the default option that’ll draw the border right to the vector point.
         */
        Butt = 'Butt',
        /**
         * Creates a rounded, semi-circular end to a path that extends past the vector point.
         */
        Round = 'Round',
        /**
         * Similar to the rounded cap, but with a straight edges.
         */
        Projecting = 'Projecting',
      }

      export enum LineJoin {
        /**
         * This will simply create an angled, or pointy join. The default setting.
         */
        Miter = 'Mitter',
        /**
         * Creates a rounded corner for the border. The radius is relative to the border thickness.
         */
        Round = 'Round',
        /**
         * This will create a chamfered edge on the border corner.
         */
        Bevel = 'Bevel',
      }

      export enum GradientType {
        /**
         * Linear gradients tend to be the most common, where two colors will appear at opposite points of an object and will blend, or transition into each other.
         */
        Linear = 'Linear',
        /**
         * A radial gradient will create an effect where the transition between color stops will be in a circular pattern.
         */
        Radial = 'Radial',
        /**
         * This effect allows you to create gradients that sweep around the circumference (measured by the maximum width or height of a layer) in a clockwise direction.
         */
        Angular = 'Angular',
      }

      export enum PatternFillType {
        Tile = 'Tile',
        Fill = 'Fill',
        Stretch = 'Stretch',
        Fit = 'Fit',
      }
    }

    export abstract class SharedStyle extends Component<MSSharedStyle> {
      type: Types.SharedStyle;
      /**
       * The unique ID of the Shared Style.
       */
      id: string;
      /**
       * The type of the Shared Style (Layer or Text).
       */
      styleType: SharedStyle.StyleType;
      /**
       * The name of the Shared Style.
       */
      name: string;
      /**
       * The Style value that is shared.
       */
      style: Style;

      /**
       * Create a new Shared Style with a specific name in a specific Document.
       */
      static fromStyle(options: {
        name: string;
        style: IStyle;
        document: Document;
      }): SharedStyle;

      /**
       * Creates a new Style linked to this SharedStyle, ready for inserting in a layer.
       */
      createNewInstance(): Style;

      /**
       * Returns an array of all instances of the Shared Style in the document, on all pages.
       */
      getAllInstances(): Style[];

      /**
       * Returns an array of all layers with a Style which is an instance of the Shared Style in the document, on all pages.
       */
      getAllInstancesLayers(): AllLayers[];

      /**
       * @return The Library the style was defined in, or undefined if it is a local style.
       */
      getLibrary(): Library | undefined;

      /**
       * If a Library has some updates, you can synchronize the local Shared Style with the Library's version and bypass the panel where the user chooses the updates to bring.
       * @return true if it succeeded.
       */
      syncWithLibrary(): boolean;

      /**
       * You can unlink a Shared Style from the Library it comes from and make it a local Shared Style instead.
       * @return true if it succeeded.
       */
      unlinkFromLibrary(): boolean;
    }

    export namespace SharedStyle {
      enum StyleType {
        Layer = 'Layer',
        Text = 'Text',
        Unknown = 'Unknown',
      }
    }

    export interface SliceProperties {
      /**
       * The name of the Slice
       */
      name?: string;
      /**
       * The group the Slice is in.
       */
      parent?: Group;
      /**
       * The frame of the Slice. This is given in coordinates that are local to
       * the parent of the layer.
       */
      frame?: Rectangle;
      /**
       * The export formats of the Slice.
       */
      exportFormats?: ExportFormat[];
    }

    /**
     * A Sketch hotspot. It is an instance of both Layer so all the methods defined there are available.
     */
    export class Slice extends Layer<MSSliceLayer> {
      type: Types.Slice;

      constructor(properties?: SliceProperties);

      /**
       * The group the Slice is in.
       */
      parent: Group;
    }

    export function fromNative(nativeObject: MSDocument): Document;
    export function fromNative(nativeObject: MSLayerGroup): Group;
    export function fromNative(nativeObject: MSPage): Page;
    export function fromNative(nativeObject: MSArtboardGroup): Artboard;
    export function fromNative(nativeObject: MSBitmapLayer): Image;
    export function fromNative(nativeObject: MSShapeGroup): Shape;
    export function fromNative(nativeObject: MSShapePathLayer): ShapePath;
    export function fromNative(nativeObject: MSTextLayer): Text;
    export function fromNative(nativeObject: MSSymbolMaster): SymbolMaster;
    export function fromNative(nativeObject: MSSymbolInstance): SymbolInstance;
    export function fromNative(nativeObject: MSAvailableOverride): Override;
    export function fromNative(nativeObject: MSHotspotLayer): HotSpot;
    export function fromNative(nativeObject: MSAssetLibrary): Library;
    export function fromNative(nativeObject: MSStyle): Style;
    export function fromNative(nativeObject: MSSharedStyle): SharedStyle;
    export function fromNative(nativeObject: MSSliceLayer): Slice;
    export function fromNative(
      nativeObject: ImportableNative
    ): ImportableObject;
    /**
     * A utility function to get a wrapped object from a native Sketch model object.
     * @param nativeObject The native Sketch model object to wrap.
     * @return The wrapped object of the right type (you can check is type with wrappedObject.type), eg. a native document will be wrapped as a Document while a native text layer will be wrapped as a Text.
     */
    export function fromNative<T>(nativeObject: T): Component<T>;

    export interface ExportOptions {
      /**
       * This is the path of the folder where all exported files are placed (defaults to "~/Documents/Sketch Exports").
       * If falsey, the data for the objects are returned immediately.
       */
      output: string | false | null | 0;
      /**
       * Comma separated list of formats to export to (png, jpg, svg, json or pdf) (default to "png").
       */
      formats?: string;
      /**
       * Comma separated list of scales which determine the sizes at which the layers are exported (defaults to "1").
       */
      scales?: string;
      /**
       * Name exported images using their id rather than their name (defaults to false).
       */
      ['use-id-for-name']?: boolean;
      /**
       * Export only layers that are contained within the group (default to false).
       */
      ['group-contents-only']?: boolean;
      /**
       * Overwrite existing files (if any) with newly generated ones (defaults to false).
       */
      overwriting?: boolean;
      /**
       * Trim any transparent space around the exported image (defaults to false).
       */
      trimmed?: boolean;
      /**
       * If exporting a PNG, remove metadata such as the colour profile from the exported file (defaults to false).
       */
      ['save-for-web']?: boolean;
      /**
       * If exporting a SVG, make the output more compact (defaults to false).
       */
      compact?: boolean;
      /**
       * If exporting a SVG, include extra attributes (defaults to false).
       */
      ['include-namespaces']?: boolean;
      /**
       * If exporting a JPG, export a progressive JPEG (only used when exporting to jpeg) (defaults to false).
       */
      progressive?: boolean;
      /**
       * If exporting a JPG, the compression level to use fo jpeg (with 0 being the completely compressed, 1.0 no compression) (defaults to 1.0).
       */
      compression?: boolean;
    }
  }
  export = dom;
}
