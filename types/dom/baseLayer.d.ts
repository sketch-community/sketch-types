declare module 'sketch/dom' {
  namespace dom {
    import MSLayer = sketchInternal.MSLayer;
    import MSStyledLayer = sketchInternal.MSStyledLayer;

    /**
     * Page Child Layer
     */
    export type PageChildLayer = GroupChildLayer | Artboard | SymbolMaster;

    /**
     * All Layer Types
     */
    export type AllLayers = PageChildLayer | Page;

    export interface LayerTransform {
      /**
       * The rotation of the Layer in degrees, clock-wise.
       */
      rotation: number;
      /**
       * If the layer is horizontally flipped.
       */
      flippedHorizontally: boolean;
      /**
       * If the layer is vertically flipped.
       */
      flippedVertically: boolean;
    }

    /**
     * Basic Component class
     */
    class Component<NativeType = any> {
      static fromNative<NativeType>(
        nativeObject: NativeType
      ): Component<NativeType>;

      toJSON(): any;

      /**
       * The native Sketch model object.
       */
      readonly sketchObject: NativeType;
      /**
       * A string that represent the type of the component. If it’s undefined, it means that we couldn’t match the native object and that we returned a really lightweight wrapper.
       */
      readonly type: Types | undefined;
      /**
       * Returns the object ID of the wrapped Sketch model object.
       */
      readonly id: string;

      /**
       * returns if the component is wrapping an immutable version of a native Sketch model object. If that is the case, you won't be able to mutable the object (setting any property will be a no-op).
       */
      isImmutable(): boolean;

      /**
       * Because the API objects are thin wrappers, they are created on demand and are
       * thrown away regularly.
       *
       * No attempt is made to have a one-to-one correspondence between wrapper and model
       * object - many wrapper instances may exist which point to the same model object.
       *
       * This is not the most efficient solution in some respects, but it's pragmatic and
       * works well for simple cases.
       * Because multiple wrappers might exist for a given model object, if you're
       * testing two for equality, you should test the things that they wrap, rather than
       * the wrapper objects themselves
       */
      isEqual(wrappedObject: Component): boolean;
    }

    export abstract class Layer<
      NativeType extends MSLayer = MSLayer
    > extends Component<NativeType> {
      /**
       * The unique ID of the Layer. (not to be confused with symbolId on SymbolInstances)
       */
      id: string;
      /**
       * The name of the Layer
       */
      name: string;
      /**
       * The group/document the layer is in.
       */
      parent: ParentType;
      /**
       * If the layer is locked.
       */
      locked: boolean;
      /**
       * If the layer is hidden.
       */
      hidden: boolean;
      /**
       * The frame of the Layer. This is given in coordinates that are local to the parent of the layer.
       */
      frame: Rectangle;
      /**
       * If the layer is selected.
       */
      selected: boolean;
      /**
       * The prototyping action associated with the layer.
       */
      flow: FlowProperty;
      /**
       * The export formats of the Layer.
       */
      exportFormats: ExportFormat[];
      /**
       * The transformation applied to the Layer.
       */
      readonly transform: LayerTransform;

      /**
       * A new identical layer will be inserted into the parent of this layer.
       * @return A new copy of this layer.
       */
      duplicate(): this; //a copy of this
      /**
       * Remove this layer from its parent.
       */
      remove(): this;

      /**
       * The index of this layer in its parent. The layer at the back of the parent (visually) will be layer 0. The layer at the front will be layer n - 1 (if there are n layers).
       */
      readonly index: number;

      /**
       * Move this layer to the front of its parent.
       */
      moveToFront(): this;

      /**
       * Move this layer forward in its parent.
       */
      moveForward(): this;

      /**
       * Move this layer to the back of its parent.
       */
      moveToBack(): this;

      /**
       * Move this layer backward in its parent.
       */
      moveBackward(): this;

      /**
       * Access the page the layer is in
       */
      getParentPage(): Page | undefined;

      /**
       * Access the artboard the layer is in (if any)
       */
      getParentArtboard(): Artboard | undefined;

      /**
       * Access the symbol master the layer is in (if any)
       */
      getParentSymbolMaster(): SymbolMaster | undefined;

      /**
       * Access the shape the layer is in (if any)
       */
      getParentShape(): Shape | undefined;
    }

    class StyledLayer<
      NativeType extends MSStyledLayer
    > extends Layer<NativeType> {
      /**
       * The style of the layer.
       */
      style: Style | IStyle;
    }
  }
}
