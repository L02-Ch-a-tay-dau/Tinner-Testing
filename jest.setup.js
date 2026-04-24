// jest.setup.js
// Chạy trước mỗi test suite — khai báo các global mock cần thiết

// ── Fix Expo SDK 54 import.meta trong môi trường Jest/CommonJS ───────────────
// Expo's winter runtime dùng import.meta (ESM) nhưng Jest chạy CommonJS
// → cần định nghĩa global này trước khi bất kỳ module nào được load
if (typeof global.__ExpoImportMetaRegistry === 'undefined') {
  Object.defineProperty(global, '__ExpoImportMetaRegistry', {
    value: new Map(),
    writable: true,
    configurable: true,
  });
}

// ── Mock react-native-reanimated ─────────────────────────────────────────────
require('react-native-reanimated/mock');

// ── Mock react-native-safe-area-context cho Jest runtime ─────────────────────
jest.mock('react-native-safe-area-context', () => {
  const React = require('react');
  const { View } = require('react-native');

  return {
    SafeAreaProvider: ({ children }) => <>{children}</>,
    SafeAreaView: ({ children, ...props }) => <View {...props}>{children}</View>,
    useSafeAreaInsets: () => ({ top: 0, right: 0, bottom: 0, left: 0 }),
  };
});
