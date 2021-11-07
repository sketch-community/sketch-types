declare module 'sketch/dom' {
  namespace dom {
    import MSShareableObjectReference = sketchInternal.MSShareableObjectReference;
    import MSSymbolMasterReference = sketchInternal.MSSymbolMasterReference;
    import MSSharedStyleReference = sketchInternal.MSSharedStyleReference;
    import MSSharedLayerReference = sketchInternal.MSSharedLayerReference;
    import MSSharedTextReference = sketchInternal.MSSharedTextReference;

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
  }
}
