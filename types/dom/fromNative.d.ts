declare module 'sketch/dom' {
  namespace dom {
    import MSDocument = sketchInternal.MSDocument;

    import MSLayerGroup = sketchInternal.MSLayerGroup;
    import MSPage = sketchInternal.MSPage;
    import MSArtboardGroup = sketchInternal.MSArtboardGroup;
    import MSShapeGroup = sketchInternal.MSShapeGroup;
    import MSShapePathLayer = sketchInternal.MSShapePathLayer;
    import MSBitmapLayer = sketchInternal.MSBitmapLayer;

    import MSTextLayer = sketchInternal.MSTextLayer;
    import MSSymbolMaster = sketchInternal.MSSymbolMaster;
    import MSSymbolInstance = sketchInternal.MSSymbolInstance;
    import MSAvailableOverride = sketchInternal.MSAvailableOverride;
    import MSHotspotLayer = sketchInternal.MSHotspotLayer;
    import MSAssetLibrary = sketchInternal.MSAssetLibrary;

    import MSStyle = sketchInternal.MSStyle;
    import MSSharedStyle = sketchInternal.MSSharedStyle;
    import MSSliceLayer = sketchInternal.MSSliceLayer;

    export function fromNative(nativeObject: MSDocument): Document;
    export function fromNative(nativeObject: MSLayerGroup): Group;
    export function fromNative(nativeObject: MSPage): Page;
    export function fromNative(nativeObject: MSArtboardGroup): Artboard;
    export function fromNative(nativeObject: MSBitmapLayer): Image;
    export function fromNative(nativeObject: MSShapeGroup): Shape;
    export function fromNative(nativeObject: MSShapePathLayer): ShapePath;
    export function fromNative(nativeObject: MSTextLayer): Text;
    export function fromNative(nativeObject: MSSymbolMaster): SymbolMaster;
    export function fromNative(nativeObject: MSSymbolInstance): SymbolInstance;
    export function fromNative(nativeObject: MSAvailableOverride): Override;
    export function fromNative(nativeObject: MSHotspotLayer): HotSpot;
    export function fromNative(nativeObject: MSAssetLibrary): Library;
    export function fromNative(nativeObject: MSStyle): Style;
    export function fromNative(nativeObject: MSSharedStyle): SharedStyle;
    export function fromNative(nativeObject: MSSliceLayer): Slice;
    export function fromNative(nativeObject: ImportableNative): ImportableObject;
    /**
     * A utility function to get a wrapped object from a native Sketch model object.
     * @param nativeObject The native Sketch model object to wrap.
     * @return The wrapped object of the right type (you can check is type with wrappedObject.type), eg. a native document will be wrapped as a Document while a native text layer will be wrapped as a Text.
     */
    export function fromNative<T>(nativeObject: T): Component<T>;
  }
}
