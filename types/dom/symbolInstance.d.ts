declare module 'sketch/dom' {
  namespace dom {
    import MSSymbolInstance = sketchInternal.MSSymbolInstance;
    import NSImage = cocoascript.NSImage;

    export interface SymbolInstanceProperties {
      /**
       * The name of the SymbolInstance
       */
      name?: string;
      /**
       * The group the SymbolInstance is in.
       */
      parent?: Group;
      /**
       * The frame of the SymbolInstance. This is given in coordinates that are local to the parent of the layer.
       */
      frame?: Rectangle;
      /**
       * The prototyping action associated with the SymbolInstance.
       */
      flow?: FlowProperty;
      /**
       * The style of the SymbolInstance.
       */
      style?: Style | IStyle;
      /**
       * The unique ID of the Symbol that the instance and its master share.
       */
      symbolId: string;
    }

    export class SymbolInstance extends StyledLayer<MSSymbolInstance> {
      type: Types.SymbolInstance;
      /**
       * The group the SymbolInstance is in.
       */
      parent: GroupTypeLayer;
      /**
       * The unique ID of the Symbol that the instance and its master share.
       */
      symbolId: string;
      /**
       * The Symbol master that the instance is linked to.
       */
      master: SymbolMaster;
      /**
       * The array of the overrides to modify the instance.
       */
      overrides: Override[];

      constructor(properties: SymbolInstanceProperties);

      /**
       * Replaces a group that contains a copy of the Symbol this instance refers to. Returns null if the master contains no layers instead of inserting an empty group
       * @param options The options to apply when detaching the instance.
       * @param options.recursively If it should detach the nested symbols as well. Default to false.
       * @return A new Group or null
       */
      detach(options?: { recursively?: boolean }): Group | null;

      /**
       * Change the value of the override.
       * @param override The override to change.
       * @param value The value of override to set. Can be a string or an NSImage or a symbolId depending on the type of the override.
       */
      setOverrideValue(override: Override, value: string | NSImage): this;

      /**
       * In order to trigger a Smart Layout resize in an instance, for example after changing an override value, call the `resizeWithSmartLayout()` method.
       */
      resizeWithSmartLayout(): void;
    }
  }
}
