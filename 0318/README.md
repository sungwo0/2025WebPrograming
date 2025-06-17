# 3주차 강의 내용

# 리액트 핵심 개념 요약

## 1. 컴포넌트 (Component)
- UI를 구성하는 독립적인 코드 블록 (HTML + CSS + JS + 상태 + 속성 포함)
- 모든 리액트 앱은 컴포넌트들의 조합으로 구성됨
- 재사용성, 유지보수 용이
- 컴포넌트 이름은 대문자로 시작
- JSX 문법에서 `<ComponentName />` 으로 사용

```jsx
function Greeting(props) {
  return <h1>안녕하세요, {props.name}님!</h1>;
}
```

---

## 2. Props (속성)
- Property의 줄임말, 컴포넌트에 전달되는 데이터 또는 속성
- 부모 → 자식 컴포넌트에 데이터를 전달할 때 사용
- 읽기 전용(Read-only)
- 문자열 외 데이터는 `{}` 중괄호로 감싸 전달

```jsx
<Greeting name="홍길동" />
```

---

## 3. 컴포넌트 합성 (Component Composition)
- 여러 컴포넌트를 조합하여 새로운 컴포넌트를 생성
- 포함 관계 또는 props 전달 방식

```jsx
function Parent() {
  return (
    <div>
      <h1>부모</h1>
      <Child name="홍길동" />
    </div>
  );
}
```

- `props.children` 사용 예:

```jsx
function Container({ children }) {
  return <div>{children}</div>;
}
```

---

## 4. 컴포넌트 추출 (Component Extraction)
- 하나의 컴포넌트가 너무 커졌을 때, 하위 UI 또는 로직을 별도 컴포넌트로 분리

```jsx
function Avatar({ src }) {
  return <img src={src} />;
}

function UserInfo({ name, job }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{job}</p>
    </div>
  );
}

function Profile() {
  return (
    <div>
      <Avatar src="profile.jpg" />
      <UserInfo name="홍길동" job="개발자" />
    </div>
  );
}
```

---

## 5. 함수형 컴포넌트 vs 클래스형 컴포넌트

| 항목             | 함수형 컴포넌트         | 클래스형 컴포넌트       |
|------------------|--------------------------|--------------------------|
| 작성 방식        | 함수 (`function`)         | 클래스 (`class`)         |
| 상태 관리        | `useState` 사용           | `this.state` 사용         |
| 생명주기 관리    | `useEffect` 사용          | `componentDidMount` 등   |
| 코드 길이        | 간결                      | 길어짐                   |
| `this` 사용 여부 | ❌ 없음                   | ✅ 있음                  |
| Hooks 사용       | ✅ 가능                   | ❌ 불가                  |
| 퍼포먼스         | 가볍고 최적화 쉬움       | 상대적으로 무거움       |

---

