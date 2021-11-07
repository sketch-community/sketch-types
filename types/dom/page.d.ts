declare module 'sketch/dom' {
  namespace dom {
    import MSPage = sketchInternal.MSPage;

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

      /**
       * A method to get the Symbols Page of a Document.
       */
      static getSymbolsPage(document: Document): Page | undefined;

      /**
       * A method to create the Page with the name that Sketch will recognize as the Symbols Page.
       */
      static createSymbolsPage(): Page;

      constructor(properties?: PageProperties);

      /**
       * A read-only property to get the layers that the user has selected in the page.
       */
      readonly selectedLayers: Selection;
    }
  }
}
