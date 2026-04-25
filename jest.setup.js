// jest.setup.js
// Chạy trước mỗi test suite — khai báo các global mock cần thiết

// ── Fix Expo SDK 54 import.meta trong môi trường Jest/CommonJS ───────────────
// Expo's winter runtime dùng import.meta (ESM) nhưng Jest chạy CommonJS
// → cần định nghĩa global này trước khi bất kỳ module nào được load
if (typeof globalThis.__ExpoImportMetaRegistry === 'undefined') {
  Object.defineProperty(globalThis, '__ExpoImportMetaRegistry', {
    value: new Map(),
    writable: true,
    configurable: true,
  });
}

// ── Mock react-native-reanimated ─────────────────────────────────────────────
jest.mock('react-native-worklets', () => require('react-native-worklets/lib/module/mock'));
require('react-native-reanimated/mock');

// ── Mock react-native-safe-area-context cho Jest runtime ─────────────────────
jest.mock('react-native-safe-area-context', () => {
  const { View } = require('react-native');

  return {
    SafeAreaProvider: View,
    SafeAreaView: View,
    useSafeAreaInsets: () => ({ top: 0, right: 0, bottom: 0, left: 0 }),
  };
});
