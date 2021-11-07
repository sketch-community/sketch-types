declare module 'sketch/dom' {
  namespace dom {
    import MSDocument = sketchInternal.MSDocument;

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
      swatches: Swatch[];

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
     * Access the selected Document
     * @return The selected Document or undefined if no document is open.
     */
    export function getSelectedDocument(): Document | undefined;

    /**
     * Access all the open Documents
     * @return An array of Documents.
     */
    export function getDocuments(): Document[];
  }
}
