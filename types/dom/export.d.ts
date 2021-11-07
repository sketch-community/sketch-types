declare module 'sketch/dom' {
  class dom {
    /**
     * Export an object, using the options supplied.
     * @param objectToExport The object to export.
     * @param options Options indicating which sizes and formats to use, etc..
     */
    static export(
      objectToExport: dom.ToExportLayerTypes,
      options?: dom.ExportOptions
    ): void;
  }

  namespace dom {
    export interface ExportOptions {
      /**
       * This is the path of the folder where all exported files are placed (defaults to "~/Documents/Sketch Exports").
       * If falsey, the data for the objects are returned immediately.
       */
      output: string | false | null | 0;
      /**
       * Comma separated list of formats to export to (png, jpg, svg, json or pdf) (default to "png").
       */
      formats?: string;
      /**
       * Comma separated list of scales which determine the sizes at which the layers are exported (defaults to "1").
       */
      scales?: string;
      /**
       * Name exported images using their id rather than their name (defaults to false).
       */
      ['use-id-for-name']?: boolean;
      /**
       * Export only layers that are contained within the group (default to false).
       */
      ['group-contents-only']?: boolean;
      /**
       * Overwrite existing files (if any) with newly generated ones (defaults to false).
       */
      overwriting?: boolean;
      /**
       * Trim any transparent space around the exported image (defaults to false).
       */
      trimmed?: boolean;
      /**
       * If exporting a PNG, remove metadata such as the colour profile from the exported file (defaults to false).
       */
      ['save-for-web']?: boolean;
      /**
       * If exporting a SVG, make the output more compact (defaults to false).
       */
      compact?: boolean;
      /**
       * If exporting a SVG, include extra attributes (defaults to false).
       */
      ['include-namespaces']?: boolean;
      /**
       * If exporting a JPG, export a progressive JPEG (only used when exporting to jpeg) (defaults to false).
       */
      progressive?: boolean;
      /**
       * If exporting a JPG, the compression level to use fo jpeg (with 0 being the completely compressed, 1.0 no compression) (defaults to 1.0).
       */
      compression?: number;
    }

    /**
     * Type of objects to export
     */
    export type ToExportLayerTypes = Layer | Layer[] | Page | Page[];

    /**
     * An export format associated with a layer.
     */
    export interface ExportFormat {
      type?: 'ExportFormat';
      /**
       * The file format of the export.
       */
      fileFormat: 'jpg' | 'png' | 'tiff' | 'eps' | 'pdf' | 'webp' | 'svg';
      /**
       * The prefix added to the file name.
       */
      prefix?: string;
      /**
       * The suffix added to the file name.
       */
      suffix?: string;
      /**
       * The size of the export. Valid values include `2x`, `100w`, `100width`, `100px`, `300h`, `300height`.
       */
      size: string;
    }
  }
}
