declare module 'sketch/dom' {
  namespace dom {
    export interface ISwatch extends Omit<IColorAsset, 'type'> {}

    export class Swatch implements ISwatch {
      type: 'Swatch';
      /**
       * The name of the swatch, or null
       */
      name?: string;
      /**
       * The hex string for the color.
       */
      color: string;

      referencingColor: sketchInternal.MSColor;

      /**
       * Get a referencing Color
       * @return A Color that references a Color Variable, which you can use anywhere the API expects a Color object.
       */
      static from(swatch: ISwatch): Swatch;
    }
  }
}
