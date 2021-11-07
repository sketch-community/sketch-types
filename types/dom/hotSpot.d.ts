declare module 'sketch/dom' {
  namespace dom {
    import MSHotspotLayer = sketchInternal.MSHotspotLayer;

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
  }
}
