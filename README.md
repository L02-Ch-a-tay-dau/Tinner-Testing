# Tinner Mobile

Tinner is a React Native (Expo Router) mobile app with a lightweight onboarding flow and a food discovery home screen.

## Badges

Test Workflow, SonarCloud Quality Gate, and Coverage badges are displayed below:

[![Test Workflow](https://github.com/L02-Ch-a-tay-dau/Tinner-Testing/actions/workflows/test.yml/badge.svg)](https://github.com/L02-Ch-a-tay-dau/Tinner-Testing/actions/workflows/test.yml)
[![SonarCloud](https://sonarcloud.io/api/project_badges/measure?project=L02-Ch-a-tay-dau_Tinner-Testing&metric=alert_status)](https://sonarcloud.io/project/overview?id=L02-Ch-a-tay-dau_Tinner-Testing)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=L02-Ch-a-tay-dau_Tinner-Testing&metric=coverage)](https://sonarcloud.io/project/overview?id=L02-Ch-a-tay-dau_Tinner-Testing)

## Tech Stack

- Expo SDK 54
- React Native 0.81
- Expo Router
- Jest + @testing-library/react-native
- SonarCloud (coverage and quality gate)

## Run Locally

1. Install dependencies

```bash
npm install
```

2. Start development server

```bash
npm run start
```

## Testing

Run all tests:

```bash
npm test
```

Run the two rubric test files only:

```bash
npm test -- --runInBand __tests__/HomeScreen.test.tsx __tests__/OnboardingScreen.test.tsx
```

Run coverage report:

```bash
npm run test:coverage
```

Run CI-mode test command locally:

```bash
npm run test:ci
```

## Test Files (Rubric)

- __tests__/OnboardingScreen.test.tsx
   - At least 3 test cases (render, slide flow, navigation)
- __tests__/HomeScreen.test.tsx
   - At least 3 test cases (render, button press, no-crash)

## SonarCloud

- Dashboard: https://sonarcloud.io/project/overview?id=L02-Ch-a-tay-dau_Tinner-Testing
- Coverage source: coverage/lcov.info
- Current analyzed source folders: app

## CI Workflow

Expected workflow file:

- .github/workflows/test.yml

Expected artifacts:

- test-report (contains index.html for report viewing)

## Project Structure (Core)

- app/OnboardingScreen.tsx
- app/HomeScreen.tsx
- __tests__/OnboardingScreen.test.tsx
- __tests__/HomeScreen.test.tsx
- sonar-project.properties
