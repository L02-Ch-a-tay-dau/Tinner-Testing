# Test Report — Tinner

Du an: Tinner (Expo Router / React Native)
Framework test: jest-expo + @testing-library/react-native
Ngay cap nhat: 24/04/2026

## Ket qua runtime moi nhat

Lenh da chay:

```bash
npm test -- --runInBand __tests__/HomeScreen.test.tsx __tests__/OnboardingScreen.test.tsx
```

Ket qua:

- Test Suites: 2 passed, 2 total
- Tests: 8 passed, 8 total
- Failures: 0

## 1) OnboardingScreen.test.tsx

Man hinh duoc test: app/OnboardingScreen.tsx
Tong so test: 4

Mock duoc su dung:

- expo-router (mock useRouter().replace)
- SafeAreaProvider tu react-native-safe-area-context

Danh sach test cases:

1. Render slide dau tien thanh cong
2. Bam Next chuyen qua slide tiep theo
3. Bam Skip goi router.replace("/HomeScreen")
4. Bam Next den slide cuoi, bam Start thi replace("/HomeScreen")

Y nghia:

- Dam bao flow onboarding 4 slide van dung
- Dam bao route den HomeScreen dung theo logic hien tai

## 2) HomeScreen.test.tsx

Man hinh duoc test: app/HomeScreen.tsx
Tong so test: 4

Mock duoc su dung:

- SafeAreaProvider tu react-native-safe-area-context
- Asset image thong qua jest mapper (fileMock.js)

Danh sach test cases:

1. Render thanh cong (brand + card + content chinh)
2. Co icon image cho bottom navigation
3. Bam cac nut action (X, reload, heart) khong crash
4. Rerender component khong crash

Y nghia:

- Dat yeu cau rubric: render, button press, khong crash
- On dinh cho UI hien tai du chua co business handler cho tung nut

## Tong ket theo rubric

- OnboardingScreen.test.tsx: dat yeu cau (>= 3 test cases)
- HomeScreen.test.tsx: dat yeu cau (>= 3 test cases, co render + button press + no-crash)

## Lenh su dung nhanh

Chay toan bo test:

```bash
npm test
```

Chay 2 file chinh theo rubric:

```bash
npm test -- --runInBand __tests__/HomeScreen.test.tsx __tests__/OnboardingScreen.test.tsx
```

Chay coverage:

```bash
npm run test:coverage
```
