declare module 'sketch/dom' {
  namespace dom {
    import MSAssetLibrary = sketchInternal.MSAssetLibrary;

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
  }
}
