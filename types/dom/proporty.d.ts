declare module 'sketch/dom' {
  namespace dom {
    export interface PageProperties {
      /**
       * The name of the Page
       */
      name?: string;
      /**
       * The document the page is in.
       */
      parent?: Document;
      /**
       * The layers that this page has
       */
      layers?: LayersPropertyType;
      /**
       * The frame of the page
       */
      frame?: Rectangle;
    }

    export type LayerPropertyType =
      | Layer
      | (GroupProperties & { type: Types.Group })
      | (ImageProperties & { type: Types.Image })
      | (ShapeProperties & { type: Types.Shape })
      | (ShapeProperties & { type: Types.ShapePath })
      | (TextProperties & { type: Types.Text })
      | (SymbolInstanceProperties & { type: Types.SymbolInstance })
      | (HotSpotProperties & { type: Types.HotSpot });

    export type LayersPropertyType = LayerPropertyType[];

    export interface GroupProperties {
      /**
       * The name of the Group
       */
      name?: string;
      /**
       * The group the Group is in.
       */
      parent?: Group;
      /**
       * The frame of the Group. This is given in coordinates that are local to the parent of the layer.
       */
      frame?: Rectangle;
      /**
       * The prototyping action associated with the Group.
       */
      flow?: FlowProperty;
      /**
       * The style of the Group.
       */
      style?: Style | IStyle;
      /**
       * The layers that this Group has
       */
      layers?: LayersPropertyType;
    }
  }
}
