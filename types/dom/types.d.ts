declare module 'sketch/dom' {
  namespace dom {
    /**
     * Sketch Object Types
     */
    export enum Types {
      Artboard = 'Artboard',
      Blur = 'Blur',
      Border = 'Border',
      BorderOptions = 'BorderOptions',
      CurvePoint = 'CurvePoint',
      DataOverride = 'DataOverride',
      Document = 'Document',
      ExportFormat = 'ExportFormat',
      Fill = 'Fill',
      Flow = 'Flow',
      Gradient = 'Gradient',
      GradientStop = 'GradientStop',
      Group = 'Group',
      HotSpot = 'HotSpot',
      Image = 'Image',
      ImageData = 'ImageData',
      ImportableObject = 'ImportableObject',
      Library = 'Library',
      Override = 'Override',
      Page = 'Page',
      Shadow = 'Shadow',
      Shape = 'Shape',
      ShapePath = 'ShapePath',
      SharedStyle = 'SharedStyle',
      Slice = 'Slice',
      Style = 'Style',
      SymbolInstance = 'SymbolInstance',
      SymbolMaster = 'SymbolMaster',
      Text = 'Text',
      ColorAsset = 'ColorAsset',
    }

    export type ShapeType = Shape | ShapePath;

    /**
     * reference to Child Layer
     * @deprecated
     */
    export type ChildLayer = GroupChildLayer;

    /**
     * most basic layer
     */
    export type BasicLayer = PageChildLayer;

    /**
     * group type layer
     */
    export type GroupTypeLayer = Artboard | SymbolMaster | Group | Page;

    /**
     * group type layer
     */
    export type ParentType = GroupTypeLayer | Document;

    /**
     * Group Child Layer
     */
    export type GroupChildLayer =
      | Group
      | Image
      | Shape
      | ShapePath
      | Text
      | SymbolInstance
      | Slice;
  }
}
