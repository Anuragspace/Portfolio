
/**
 * Type definitions for performance-related enhancements
 */

interface Window {
  _domCache?: WeakMap<any, Element>;
  requestIdleCallback?: (callback: (deadline: IdleDeadline) => void, options?: { timeout: number }) => number;
  cancelIdleCallback?: (handle: number) => void;
}

interface IdleDeadline {
  didTimeout: boolean;
  timeRemaining: () => number;
}
