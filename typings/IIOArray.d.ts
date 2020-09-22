/**
 * Some of the API functions return modifiable arrays, where its possible to
 * enter a different type than will be readable afterwards.
 */
declare interface IIOArray<TRead, TWrite>
  extends Omit<Array<TRead>, 'push' | 'unshift' | 'splice' | 'fill'> {
  /**
   * Appends new elements to an array, and returns the new length of the array.
   * @param items New elements of the Array.
   */
  push(...items: TWrite[]): number;

  /**
   * Inserts new elements at the start of an array.
   * @param items  Elements to insert at the start of the Array.
   */
  unshift(...items: TWrite[]): number;

  /**
   * Returns the this object after filling the section identified by start and end with value
   * @param item value to fill array section with
   * @param from index to start filling the array at. If start is negative, it is treated as
   * length+start where length is the length of the array.
   * @param to index to stop filling the array at. If end is negative, it is treated as
   * length+end.
   */
  fill(item: TWrite, from?: number, to?: number): this;

  /**
   * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
   * @param start The zero-based location in the array from which to start removing elements.
   * @param deleteCount The number of elements to remove.
   * @param items more element
   */
  splice(start: number, deleteCount?: number, ...items: TWrite[]): TRead[];
}
