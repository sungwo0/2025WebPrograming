# 1주차 강의 내용

## React 기초 요약

## 📦 npm vs npx

| 구분 | npm | npx |
|------|-----|-----|
| 역할 | 패키지 관리 | 패키지 실행 |
| 패키지 설치 | 가능 | 불가능 |
| 패키지 실행 | 설치된 패키지 실행 | 설치 없이 실행 |
| 목적 | 패키지 설치/관리 | 일회성 실행, 특정 버전 실행 |
| 예시 | `npm install axios` | `npx create-react-app my-app` |

- **npm**: Node.js 패키지를 설치/관리하는 도구. `package.json` 기반.
- **npx**: 설치 없이 패키지를 바로 실행 가능.

## ⚙️ React 프로젝트 생성

### Create React App(CRA) 사용

```bash
npx create-react-app my-app --use-npm
cd my-app
npm start
```


## 💡 JSX

- JavaScript 안에서 HTML-like 문법 사용
- Babel이 JS로 변환
- 필수는 아님

### 특징

- `class` 대신 `className`, `for` 대신 `htmlFor`
- 하나의 부모 요소로 감싸야 함 (`div` 또는 `<> </>`)
- JavaScript 표현식은 `{}` 안에 작성

### 장점

1. 가독성 및 직관성 높음
2. 간결한 코드, 쉬운 유지보수
3. JS와 자연스럽게 결합 가능
4. 조건부 렌더링 쉬움
5. 스타일 및 이벤트 핸들링 쉬움
