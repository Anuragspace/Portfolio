
/**
 * Type definitions for performance-related enhancements
 */

interface Window {
  _domCache?: WeakMap<symbol, Element>;
  requestIdleCallback?: (callback: (deadline: IdleDeadline) => void, options?: { timeout: number }) => number;
  cancelIdleCallback?: (handle: number) => void;
}

interface IdleDeadline {
  didTimeout: boolean;
  timeRemaining: () => number;
}
