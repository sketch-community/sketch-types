declare module 'sketch/dom' {
  namespace dom {
    import MSArtboardGroup = sketchInternal.MSArtboardGroup;

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
  }
}
