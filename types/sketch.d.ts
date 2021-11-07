declare module 'sketch' {
  import dom = require('sketch/dom');
  import ui = require('sketch/ui');
  import settings = require('sketch/settings');
  import async = require('sketch/async');
  import data = require('sketch/data-supplier');

  class sketch {
    static export: typeof dom.export;
  }

  namespace sketch {
    export const version: { readonly api: string; readonly sketch: string };
    // it'd be really nice if we could export * from dom, but https://github.com/Microsoft/TypeScript/issues/4336
    export import Types = dom.Types;
    export import getSelectedDocument = dom.getSelectedDocument;
    export import getDocuments = dom.getDocuments;
    export import Document = dom.Document;
    export import Layer = dom.Layer;
    export import LayerPropertyType = dom.LayerPropertyType;
    export import LayersPropertyType = dom.LayersPropertyType;
    export import GroupProperties = dom.GroupProperties;
    export import Group = dom.Group;
    export import PageProperties = dom.PageProperties;
    export import Page = dom.Page;
    export import ArtboardProperties = dom.ArtboardProperties;
    export import Artboard = dom.Artboard;
    export import ImageProperties = dom.ImageProperties;
    export import Image = dom.Image;
    export import ImageData = dom.ImageData;
    export import ShapeProperties = dom.ShapeProperties;
    export import Shape = dom.Shape;
    export import ShapePath = dom.ShapePath;
    export import TextProperties = dom.TextProperties;
    export import Text = dom.Text;
    export import TextFragment = dom.TextFragment;
    export import SymbolMasterProperties = dom.SymbolMasterProperties;
    export import SymbolMaster = dom.SymbolMaster;
    export import SymbolInstanceProperties = dom.SymbolInstanceProperties;
    export import SymbolInstance = dom.SymbolInstance;
    export import Override = dom.Override;
    export import FlowProperty = dom.FlowProperty;
    export import Flow = dom.Flow;
    export import HotSpotProperties = dom.HotSpotProperties;
    export import HotSpot = dom.HotSpot;
    export import Library = dom.Library;
    export import ImportableObject = dom.ImportableObject;
    export import Selection = dom.Selection;
    export import Rectangle = dom.Rectangle;
    export import IStyle = dom.IStyle;
    export import Blur = dom.Blur;
    export import Fill = dom.Fill;
    export import Border = dom.Border;
    export import BorderOptions = dom.BorderOptions;
    export import Shadow = dom.Shadow;
    export import Gradient = dom.Gradient;
    export import GradientStop = dom.GradientStop;
    export import Style = dom.Style;
    export import SharedStyle = dom.SharedStyle;
    export import fromNative = dom.fromNative;
    export import ExportOptions = dom.ExportOptions;

    // other modules that are exposed as sub-modules
    export import UI = ui;

    export import Settings = settings;

    export import Async = async;

    export import DataSupplier = data;
  }

  export = sketch;
}
