declare module 'sketch/async' {
  namespace async {
    export abstract class Fiber {
      /**
       * To end a fiber, call fiber.cleanup(). This will tell Sketch that it can garbage collect the script if no other fiber is running.
       */
      cleanup(): void;

      /**
       * You can run a function when the fiber is about to be cleaned up by setting a callback
       */
      onCleanup(cb: () => void): void;
    }

    /**
     * By default, Sketch cleans up your script as soon as its callstack is empty. So if you schedule an asynchronous task, chances are that when the task returns, your script will be cleaned up and it will crash Sketch.
     * A fiber is a way to keep track of a asynchronous task. The script will stay alive as long as at least one fiber is running.
     */
    export function createFiber(): Fiber;
  }
  export = async;
}
