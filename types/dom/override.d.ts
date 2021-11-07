declare module 'sketch/dom' {
  namespace dom {
    import MSAvailableOverride = sketchInternal.MSAvailableOverride;

    /**
     * A Symbol override. This component is not exposed, it is only returned when accessing the overrides of a Symbol Instance.
     * Can't be constructed - only returned from a SymbolInstance
     */
    export abstract class Override extends Component<MSAvailableOverride> {
      type: Types.Override;
      /**
       * The path to the override. It’s formed by the symbolId of the nested symbols separated by a /.
       */
      path: string;
      /**
       * The property that this override controls. It can be "stringValue" for a text override, "symbolId" for a nested symbol, or "image" for an image override.
       */
      property: 'stringValue' | 'symbolID' | 'image' | 'textStyle';
      /**
       * The unique ID of the override (${path}_${property}).
       */
      id: string;
      /**
       * If the override is a nested symbol override.
       */
      symbolOverride: boolean;
      /**
       * The value of the override which can be change.
       */
      value: string | ImageData;
      /**
       * If the override hasn’t been changed and is the default value.
       */
      isDefault: boolean;
      /**
       * The layer the override applies to. It will be an immutable version of the layer
       */
      affectedLayer: Text | Image | SymbolInstance;
      /**
       * If the value of the override can be changed.
       */
      editable: boolean;
      /**
       * 是否选中了这个 override
       **/
      selected: boolean;
    }
  }
}
