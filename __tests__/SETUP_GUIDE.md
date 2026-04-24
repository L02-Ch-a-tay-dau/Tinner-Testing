# Setup Guide — Tinner (Jest + CI/CD + SonarCloud)

Du an: Tinner Mobile (Expo + React Native)
Muc tieu: Chay unit test on dinh, sinh coverage, tich hop CI/CD va SonarCloud.

## 1. Cau truc test hien tai

```
Tinner/
|- __tests__/
|  |- HomeScreen.test.tsx
|  |- OnboardingScreen.test.tsx
|  |- TEST_REPORT.md
|  |- SETUP_GUIDE.md
|- __mocks__/
|  |- fileMock.js
|  |- expoWinterMock.js
|- jest.config.js
|- jest.setup.js
```

Hai file test chinh theo rubric:

- __tests__/OnboardingScreen.test.tsx
- __tests__/HomeScreen.test.tsx

## 2. Cac yeu cau test da ap dung

### OnboardingScreen.test.tsx (>= 3 test cases)

Dang co 4 case:

1. Render slide dau tien thanh cong
2. Bam Next chuyen slide
3. Bam Skip goi replace("/HomeScreen")
4. O slide cuoi bam Start goi replace("/HomeScreen")

### HomeScreen.test.tsx (>= 3 test cases)

Dang co 4 case:

1. Render thong tin chinh (Tinner, Pad Thai, 420 kcal)
2. Co icon image cho bottom navigation
3. Bam cac nut action khong crash
4. Rerender khong crash

Luu y: Nut chua co business logic van co the test press theo kieu no-crash de dat rubric button press.

## 3. Cac mock quan trong

### 3.1 Mock asset static

Trong jest.config.js:

```js
"\\.(png|jpg|jpeg|gif|webp|svg|ttf|otf|woff|woff2)$": "<rootDir>/__mocks__/fileMock.js"
```

### 3.2 Mock Expo winter runtime

Trong jest.config.js:

```js
"^expo/src/winter(.*)$": "<rootDir>/__mocks__/expoWinterMock.js"
```

### 3.3 Mock react-native-safe-area-context

Trong jest.setup.js da mock:

- SafeAreaProvider render children
- SafeAreaView render View thay the
- useSafeAreaInsets tra ve 0

Muc dich: tranh truong hop test chi render <RNCSafeAreaProvider /> ma khong render noi dung ben trong.

## 4. Lenh chay test

Chay tat ca:

```bash
npm test
```

Chay 2 file theo rubric:

```bash
npm test -- --runInBand __tests__/HomeScreen.test.tsx __tests__/OnboardingScreen.test.tsx
```

Chay coverage:

```bash
npm run test:coverage
```

## 5. Cau hinh coverage hien tai

Trong jest.config.js:

```js
collectCoverageFrom: [
  "app/HomeScreen.tsx",
  "app/OnboardingScreen.tsx",
]
```

Dieu nay giup coverage tap trung dung vao 2 man hinh dang duoc test.

## 6. Goi y workflow CI cho Tinner

File de tao: .github/workflows/ci.yml

Buoc toi thieu:

1. Checkout code
2. Setup Node (20)
3. npm install
4. npm run test:ci
5. Upload artifact coverage/lcov.info
6. sonar-scanner (neu da cau hinh SonarCloud)

## 7. SonarCloud cho Tinner

Trong sonar-project.properties, dat ten theo Tinner:

```properties
sonar.projectName=Tinner Mobile
sonar.sources=app,src
sonar.tests=__tests__
sonar.test.inclusions=**/__tests__/**/*.test.tsx
sonar.javascript.lcov.reportPaths=coverage/lcov.info
```

Neu doi repo moi sau nay, cap nhat lai:

- sonar.projectKey
- sonar.organization

## 8. Luu y khi clone ve may moi

1. npm install
2. npm test -- --runInBand __tests__/HomeScreen.test.tsx __tests__/OnboardingScreen.test.tsx
3. Neu loi safe-area, kiem tra jest.setup.js da co mock react-native-safe-area-context
4. Neu loi asset, kiem tra moduleNameMapper cua jest.config.js
