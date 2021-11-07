declare module 'sketch/dom' {
  namespace dom {
    import MSSharedStyle = sketchInternal.MSSharedStyle;

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
  }
}
