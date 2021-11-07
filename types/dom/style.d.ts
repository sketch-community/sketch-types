declare module 'sketch/dom' {
  namespace dom {
    import MSStyle = sketchInternal.MSStyle;

    /**
     * A utility class to represent the style of a Layer.
     */
    export interface IStyle {
      /**
       * The opacity of a Layer, between 0 (transparent) and 1 (opaque).
       */
      opacity?: number;
      /**
       * The opacity of a Layer, between 0 (transparent) and 1 (opaque).
       */
      blendingMode?: Style.BlendingMode;
      /**
       * The blur applied to the Layer.
       */
      blur?: Blur;
      /**
       * The fills of a Layer.
       */
      fills?: Fill[];
      /**
       * The borders of a Layer.
       */
      borders?: Border[];
      /**
       * The options that the borders share.
       */
      borderOptions?: BorderOptions;
      /**
       * The shadows of a Layer.
       */
      shadows?: Shadow[];
      /**
       * The inner shadows of a Layer.
       */
      innerShadows?: Shadow[];
      /**
       * The horizontal alignment of the text of a Text Layer
       */
      alignment?: Text.Alignment;
      /**
       * The vertical alignment of the text of a Text Layer
       */
      verticalAlignment?: Text.VerticalAlignment;
      /**
       * The kerning between letters of a Text Layer. null means that the kerning will be the one defined by the font.
       */
      kerning?: number | null;
      /**
       * The height of a line of text in a Text Layer. null means "automatic".
       */
      lineHeight?: number | null;
      /**
       * The space between 2 paragraphs of text in a Text Layer.
       */
      paragraphSpacing?: number;
      /**
       * A rgba hex-string (#000000ff is opaque black) of the color of the text in a Text Layer.
       */
      textColor?: string;
      /**
       * The size of the font in a Text Layer.
       */
      fontSize?: number;
      /**
       * The transform applied to the text of a Text Layer.
       */
      textTransform?: 'none' | 'uppercase' | 'lowercase';
      /**
       * The name of the font family of a Text Layer.
       * 'system' means the font family of the OS ('.SF NS Text' on macOS 10.14).
       */
      fontFamily?: string;
      /**
       * The weight of the font of a Text Layer. Goes from 0 to 12, 0 being the thinest and
       * 12 being the boldest. Not every weight are available for every fonts. When setting
       * a font weight that does not exist for the current font family, the closest weight
       * that exists will be set instead.
       */
      fontWeight?: number;
      /**
       * The style of the font of a Text Layer.
       */
      fontStyle?: 'italic' | undefined;
      /**
       * The variant of the font of a Text Layer.
       */
      fontVariant?: 'small-caps' | undefined;
      /**
       * The size variant of the font of a Text Layer.
       */
      fontStretch?:
        | 'compressed'
        | 'condensed'
        | 'narrow'
        | 'expanded'
        | 'poster'
        | undefined;
      /**
       * The underline decoration of a Text Layer.
       * `<line-style> [<line-pattern>] ['by-word']` / `undefined` where `<line-style>` can
       * be `single` / `thick` / `double` and `<line-pattern>` can be
       * `dot` / `dash` / `dash-dot` / `dash-dot-dot`
       */
      textUnderline?: string | undefined;
      /**
       * The strikethrough decoration of a Text Layer.
       * `<line-style> [<line-pattern>] ['by-word']` / undefined where `<line-style>` can be
       * `single` / `thick` / `double` and `<line-pattern>` can be
       * `dot` / `dash` / `dash-dot` / `dash-dot-dot`
       */
      textStrikethrough?: string | undefined;
    }

    /**
     * An object that represent the blur of the layer.
     */
    export interface Blur {
      /**
       * The type of the blur.
       */
      blurType: Style.BlurType;
      /**
       * The radius of the blur.
       */
      radius: number;
      /**
       * The angle of the blur (only used when the blur type is Motion).
       */
      motionAngle?: number;
      /**
       * The center of the blur (only used when the blur type is Zoom.
       */
      center?: { x: number; y: number };
      /**
       * Whether the fill is active or not.
       */
      enabled?: boolean;
    }

    /**
     * An object that represent a Fill.
     */
    export interface Fill {
      /**
       * The type of the fill.
       */
      fillType: Style.FillType;
      /**
       * A rgba hex-string (#000000ff is opaque black).
       */
      color?: string;
      /**
       * The gradient of the fill.
       */
      gradient?: Gradient;
      /**
       * Whether the fill is active or not.
       */
      enabled?: boolean;
      /**
       * 添加图片需要
       */
      pattern?: Pattern;
    }

    /**
     * Image Fill Style
     */
    export interface Pattern {
      patternType: Style.PatternFillType;
      tileScale: number;
      image: ImageData;
    }

    /**
     * An object that represent a Border.
     */
    export interface Border {
      /**
       * The type of the fill of the border.
       */
      fillType: Style.FillType;
      /**
       * A rgba hex-string (#000000ff is opaque black).
       */
      color?: string;
      /**
       * The gradient of the fill.
       */
      gradient?: Gradient;
      /**
       * Whether the border is active or not.
       */
      enabled?: boolean;
      /**
       * The position of the border.
       */
      position?: Style.BorderPosition;
      /**
       * The thickness of the border.
       */
      thickness?: number;
    }

    /**
     * An object that represent the options that the Borders of the Layer share.
     */
    export interface BorderOptions {
      /**
       * The type of the arrow head for the start of the path.
       */
      startArrowhead?: Style.Arrowhead;
      /**
       * The type of the arrow head for the start of the path.
       */
      endArrowhead?: Style.Arrowhead;
      /**
       * The dash pattern of the borders. For example, a dash pattern of 4-2 will draw the stroke for four pixels, put a two pixel gap, draw four more pixels and then so on. A dashed pattern of 5-4-3-2 will draw a stroke of 5 px, a gap of 4 px, then a stroke of 3 px, a gap of 2 px, and then repeat.
       */
      dashPattern?: number[];
      /**
       * The type of the border ends (if visible).
       */
      lineEnd?: Style.LineEnd;
      /**
       * The type of the border joins (if any).
       */
      lineJoin?: Style.LineJoin.Bevel | Style.LineJoin.Round | 'Miter';
    }

    /**
     * An object that represent a Shadow.
     */
    export interface Shadow {
      /**
       * A rgba hex-string (#000000ff is opaque black).
       */
      color: string;
      /**
       * The blur radius of the shadow.
       */
      blur: number;
      /**
       * The horizontal offset of the shadow.
       */
      x?: number;
      /**
       * The vertical offset of the shadow.
       */
      y?: number;
      /**
       * The spread of the shadow.
       */
      spread?: number;
      /**
       * Whether the fill is active or not.
       */
      enabled?: boolean;
    }

    /**
     * An object that represent a Gradient.
     */
    export interface Gradient {
      /**
       * The type of the Gradient.
       */
      gradientType: Style.GradientType;
      /**
       * The position of the start of the Gradient
       */
      from: { x: number; y: number };
      /**
       * The position of the end of the Gradient.
       */
      to: { x: number; y: number };
      /**
       * The different stops of the Gradient
       */
      stops: GradientStop[];
    }

    /**
     * An object that represent a Gradient Stop. Each of colors of a Gradient are represented by a Stop. A Gradient can have as many Stops as you’d like.
     */
    export interface GradientStop {
      /**
       * The position of the Stop. 0 represents the start of the gradient while 1 represent the end.
       */
      position: number;
      /**
       * The color of the Stop
       */
      color: string;
    }

    export class Style extends Component<MSStyle> {
      type: Types.Style;
      /**
       * The opacity of a Layer, between 0 (transparent) and 1 (opaque).
       */
      opacity?: number;
      /**
       * The opacity of a Layer, between 0 (transparent) and 1 (opaque).
       */
      blendingMode?: Style.BlendingMode;
      /**
       * The blur applied to the Layer.
       */
      blur?: Blur;
      /**
       * The fills of a Layer.
       */
      fills?: Fill[];
      /**
       * The borders of a Layer.
       */
      borders?: Border[];
      /**
       * The options that the borders share.
       */
      borderOptions?: BorderOptions;
      /**
       * The shadows of a Layer.
       */
      shadows?: Shadow[];
      /**
       * The inner shadows of a Layer.
       */
      innerShadows?: Shadow[];
      /**
       * The horizontal alignment of the text of a Text Layer
       */
      alignment?: Text.Alignment;
      /**
       * The vertical alignment of the text of a Text Layer
       */
      verticalAlignment?: Text.VerticalAlignment;
      /**
       * The kerning between letters of a Text Layer. null means that the kerning will be the one defined by the font.
       */
      kerning?: number | null;
      /**
       * The height of a line of text in a Text Layer. null means "automatic".
       */
      lineHeight?: number | null;
      /**
       * The space between 2 paragraphs of text in a Text Layer.
       */
      paragraphSpacing?: number;
      /**
       * A rgba hex-string (#000000ff is opaque black) of the color of the text in a Text Layer.
       */
      textColor?: string;
      /**
       * The size of the font in a Text Layer.
       */
      fontSize?: number;
      /**
       * The transform applied to the text of a Text Layer.
       */
      textTransform?: 'none' | 'uppercase' | 'lowercase';
      /**
       * The name of the font family of a Text Layer.
       * 'system' means the font family of the OS ('.SF NS Text' on macOS 10.14).
       */
      fontFamily?: string;
      /**
       * The weight of the font of a Text Layer. Goes from 0 to 12, 0 being the thinest and
       * 12 being the boldest. Not every weight are available for every fonts. When setting
       * a font weight that does not exist for the current font family, the closest weight
       * that exists will be set instead.
       */
      fontWeight?: number;
      /**
       * The style of the font of a Text Layer.
       */
      fontStyle?: 'italic' | undefined;
      /**
       * The variant of the font of a Text Layer.
       */
      fontVariant?: 'small-caps' | undefined;
      /**
       * The size variant of the font of a Text Layer.
       */
      fontStretch?:
        | 'compressed'
        | 'condensed'
        | 'narrow'
        | 'expanded'
        | 'poster'
        | undefined;
      /**
       * The underline decoration of a Text Layer.
       * `<line-style> [<line-pattern>] ['by-word']` / `undefined` where `<line-style>` can
       * be `single` / `thick` / `double` and `<line-pattern>` can be
       * `dot` / `dash` / `dash-dot` / `dash-dot-dot`
       */
      textUnderline?: string | undefined;
      /**
       * The strikethrough decoration of a Text Layer.
       * `<line-style> [<line-pattern>] ['by-word']` / undefined where `<line-style>` can be
       * `single` / `thick` / `double` and `<line-pattern>` can be
       * `dot` / `dash` / `dash-dot` / `dash-dot-dot`
       */
      textStrikethrough?: string | undefined;

      /**
       * @return Whether the Style has some differences with the Shared Style it is linked to. In case it isn't linked to any, returns false.
       */
      isOutOfSyncWithSharedStyle(): boolean;

      /**
       * The style instance will be updated with the value of the Shared Style.
       */
      syncWithSharedStyle(): void;

      /**
       * @return A number if the layer is a Text layer or undefined.
       */
      getDefaultLineHeight(): number | undefined;
    }

    export namespace Style {
      export enum BlendingMode {
        Normal = 'Normal',
        Darken = 'Darken',
        Multiply = 'Multiply',
        ColorBurn = 'ColorBurn',
        Lighten = 'Lighten',
        Screen = 'Screen',
        ColorDodge = 'ColorDodge',
        Overlay = 'Overlay',
        SoftLight = 'SoftLight',
        HardLight = 'HardLight',
        Difference = 'Difference',
        Exclusion = 'Exclusion',
        Hue = 'Hue',
        Saturation = 'Saturation',
        Color = 'Color',
        Luminosity = 'Luminosity',
      }

      export enum BlurType {
        /**
         * A common blur type that will accurately blur in all directions.
         */
        Gaussian = 'Gaussian',
        /**
         * Blur only in one direction, giving the illusion of motion.
         */
        Motion = 'Motion',
        /**
         * Will blur from one particular point out.
         */
        Zoom = 'Zoom',
        /**
         * This will blur any content that appears behind the layer.
         */
        Background = 'Background',
      }

      export enum FillType {
        Color = 'Color',
        Gradient = 'Gradient',
        Pattern = 'Pattern',
        color = 'Color',
        gradient = 'Gradient',
        pattern = 'Pattern',
      }

      export enum BorderPosition {
        Center = 'Center',
        Inside = 'Inside',
        Outside = 'Outside',
        Both = 'Both',
      }

      export enum Arrowhead {
        None = 'None',
        OpenArrow = 'OpenArrow',
        FilledArrow = 'FilledArrow',
        Line = 'Line',
        OpenCircle = 'OpenCircle',
        FilledCircle = 'FilledCircle',
        OpenSquare = 'OpenSquare',
        FilledSquare = 'FilledSquare',
        ClosedArrow = 'FilledArrow',
      }

      export enum LineEnd {
        /**
         * This is the default option that’ll draw the border right to the vector point.
         */
        Butt = 'Butt',
        /**
         * Creates a rounded, semi-circular end to a path that extends past the vector point.
         */
        Round = 'Round',
        /**
         * Similar to the rounded cap, but with a straight edges.
         */
        Projecting = 'Projecting',
      }

      export enum LineJoin {
        /**
         * This will simply create an angled, or pointy join. The default setting.
         */
        Miter = 'Mitter',
        /**
         * Creates a rounded corner for the border. The radius is relative to the border thickness.
         */
        Round = 'Round',
        /**
         * This will create a chamfered edge on the border corner.
         */
        Bevel = 'Bevel',
      }

      export enum GradientType {
        /**
         * Linear gradients tend to be the most common, where two colors will appear at opposite points of an object and will blend, or transition into each other.
         */
        Linear = 'Linear',
        /**
         * A radial gradient will create an effect where the transition between color stops will be in a circular pattern.
         */
        Radial = 'Radial',
        /**
         * This effect allows you to create gradients that sweep around the circumference (measured by the maximum width or height of a layer) in a clockwise direction.
         */
        Angular = 'Angular',
      }

      export enum PatternFillType {
        Tile = 'Tile',
        Fill = 'Fill',
        Stretch = 'Stretch',
        Fit = 'Fit',
      }
    }
  }
}
