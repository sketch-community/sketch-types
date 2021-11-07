declare module 'sketch/dom' {
  namespace dom {
    import MSLayerGroup = sketchInternal.MSLayerGroup;

    class BaseGroup<
      NativeType extends MSLayerGroup = MSLayerGroup
    > extends StyledLayer<NativeType> {
      /**
       * The layers that this component groups together.
       */
      layers: GroupChildLayer[];

      /**
       * Adjust the group to fit its children.
       */
      adjustToFit(): this;
    }

    export class Group extends BaseGroup {
      type: Types.Group;
      /**
       * The ID of the SharedStyle or null, identical to sharedStyle.id.
       */
      sharedStyleId: string | null;
      /**
       * The associated shared style.
       */
      sharedStyle: SharedStyle | null;

      constructor(properties?: GroupProperties);
    }
  }
}
