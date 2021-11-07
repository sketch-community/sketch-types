declare module 'sketch/dom' {
  namespace dom {
    import MSTextLayer = sketchInternal.MSTextLayer;
    import NSFont = cocoascript.NSFont;
    import NSRange = cocoascript.NSRange;

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
  }
}
