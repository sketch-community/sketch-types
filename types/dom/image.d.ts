declare module 'sketch/dom' {
  namespace dom {
    import MSBitmapLayer = sketchInternal.MSBitmapLayer;
    import NSImage = cocoascript.NSImage;
    import MSImageData = sketchInternal.MSImageData;
    import NSURL = cocoascript.NSURL;
    import NSData = cocoascript.NSData;

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
  }
}
