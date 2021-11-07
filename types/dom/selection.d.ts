declare module 'sketch/dom' {
  namespace dom {
    /**
     * A utility class to represent the layers selection. Contains some methods to make interacting with a selection easier. All the properties are read-only.
     */
    export abstract class Selection {
      /**
       * The Layers in the selection.
       */
      readonly layers: PageChildLayer[];
      /**
       * The number of Layers in the selection.
       */
      readonly length: number;
      /**
       * Does the selection contain any layers?
       */
      readonly isEmpty: boolean;

      map<T>(func: (layer: PageChildLayer) => T): T[];

      forEach(func: (layer: PageChildLayer) => void): void;

      reduce<T>(func: (initial: T, layer: PageChildLayer) => T): T;

      /**
       * Clear the selection.
       */
      clear(): this;
    }
  }
}
