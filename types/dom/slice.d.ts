declare module 'sketch/dom' {
  namespace dom {
    import MSSliceLayer = sketchInternal.MSSliceLayer;

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
  }
}
