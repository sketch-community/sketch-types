declare module 'sketch/settings' {
  import dom = require('sketch/dom');
  import data = require('sketch/data-supplier');
  /**
   * A set of functions to handle user settings. The settings are persisted when the user closes Sketch.
   */
  namespace settings {
    /**
     * Return the value of a setting scoped to your plugin for a given key.
     * @param key The setting to look up.
     * @return The setting that was stored for the given key. undefined if there was nothing
     */
    export function settingForKey(key: string): any;

    /**
     * Store a value of a setting scoped to your plugin for a given key.
     * @param key The setting to set.
     * @param value The value to set it to.
     */
    export function setSettingForKey(key: string, value: any): void;

    /**
     * Return the value of a Sketch setting for a given key.
     * @param key The setting to look up.
     * @return The setting that was stored for the given key. undefined if there was nothing
     */
    export function globalSettingForKey(key: string): any;

    /**
     * Store a value of a Sketch setting for a given key.
     * @param key The setting to set.
     * @param value The value to set it to.
     */
    export function setGlobalSettingForKey(key: string, value: any): void;

    /**
     * Return the value of a setting for a given key on a specific layer.
     * @param layer The layer on which a setting is stored.
     * @param key The setting to look up.
     * @return The setting that was stored for the given key. undefined if there was nothing
     */
    export function layerSettingForKey(
      layer: dom.Layer | dom.Override | data.DataOverride,
      key: string
    ): any;

    /**
     * Store a value of a setting for a given key on a specific layer.
     * @param layer The layer on which the setting is set.
     * @param key The setting to set.
     * @param value The value to set it to.
     */
    export function setLayerSettingForKey(
      layer: dom.Layer | dom.Override | data.DataOverride,
      key: string,
      value: any
    ): void;

    /**
     * Return the value of a setting for a given key on a specific document
     * @param document The document on which a setting is stored.
     * @param key The setting to look up.
     * @return The setting that was stored for the given key. undefined if there was nothing
     */
    export function documentSettingForKey(
      document: dom.Document,
      key: string
    ): any;

    /**
     * Store a value of a setting for a given key on a specific document.
     * @param document The document on which the setting is set.
     * @param key The setting to set.
     * @param value The value to set it to.
     */
    export function setDocumentSettingForKey(
      document: dom.Document,
      key: string,
      value: any
    ): void;

    /**
     * Return the value of a variable which is persisted when the plugin finishes to run but is
     * not persisted when Sketch closes. It is useful when you want to keep a value between
     * plugin's runs.
     * @param key The variable to look up
     * @return The variable that was saved.
     */
    export function sessionVariable(key: string): any;

    /**
     * Store a value of a variable which is persisted when the plugin finishes to run but is
     * not persisted when Sketch closes. It is useful when you want to keep a value between
     * plugin's runs.
     * @param key The variable to set
     * @param value The value to set it to
     */
    export function setSessionVariable(key: string, value: any): void;
  }
  export = settings;
}
