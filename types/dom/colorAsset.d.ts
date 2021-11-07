declare module 'sketch/dom' {
  namespace dom {
    export interface IColorAsset {
      type?: Types.ColorAsset;
      name?: string;
      color: string;
    }

    class ColorAsset implements IColorAsset {
      type: Types.ColorAsset;
      name: string | null;
      color: string;
    }
  }
}
