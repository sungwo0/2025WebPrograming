# 12주차 강의 내용

# React 투두리스트 프로젝트 UI 구성 정리

## 🏁 프로젝트 초기 세팅

### 1. 프로젝트 생성
```bash
npx create-react-app mashup-todolist
cd mashup-todolist
yarn add react-icons styled-components
yarn start
```

---

## 📦 컴포넌트 구성

### 전체 구성: 5개의 컴포넌트

| 컴포넌트       | 설명 |
|----------------|------|
| `TodoTemplate` | 전체 레이아웃을 잡는 컴포넌트 |
| `TodoHead`     | 날짜, 요일, 할 일 개수 표시 |
| `TodoList`     | 할 일 목록을 나열 |
| `TodoItem`     | 각각의 할 일 항목 (체크, 삭제 가능) |
| `TodoCreate`   | 할 일 추가 입력창 및 버튼 |

---

## 🎨 글로벌 스타일 적용

### `App.js`
```js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle\`
  body {
    background: #e9ecef;
  }
\`;
```

---

## 📐 TodoTemplate 컴포넌트

- 중앙 정렬된 흰색 박스 생성
- 그림자, border-radius 적용

---

## 🗓️ TodoHead 컴포넌트

- 날짜, 요일, 남은 할 일 개수 표시
```jsx
<h1>2024년 6월 17일</h1>
<div className="day">월요일</div>
<div className="tasks-left">할 일 2개 남음</div>
```

---

## 📋 TodoList 컴포넌트

- `TodoItem` 여러 개 렌더링
- map() 함수로 반복

```jsx
<TodoItem text="할 일 1" done={true} />
<TodoItem text="할 일 2" done={false} />
```

---

## ✅ TodoItem 컴포넌트

- 체크 버튼 클릭 시 완료 상태 토글
- 마우스 hover 시 삭제 버튼 표시
- `MdDone`, `MdDelete` 사용

```jsx
<CheckCircle done={true}><MdDone /></CheckCircle>
<Text done={true}>할 일 내용</Text>
```

---

## ➕ TodoCreate 컴포넌트

- 초록색 + 버튼 → 클릭 시 입력 폼 출력
- 버튼 상태에 따라 색상 및 회전 변경
- `MdAdd` 사용

```jsx
{open && (
  <InsertForm>
    <Input placeholder="할 일 입력" />
  </InsertForm>
)}
<CircleButton onClick={onToggle} open={open}><MdAdd /></CircleButton>
```

---

## ✅ App.js 구성 예시

```jsx
<TodoTemplate>
  <TodoHead />
  <TodoList />
  <TodoCreate />
</TodoTemplate>
```

---
