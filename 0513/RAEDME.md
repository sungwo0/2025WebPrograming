# 11주차 강의 내용

# React 리스트 렌더링, 폼 처리, 상태 끌어올리기, 컴포넌트 합성 정리

---

## 📋 Lists & Keys

### ✅ map() 함수
- 배열의 각 요소를 변환하여 새로운 배열을 반환
```js
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
```

### ✅ React에서의 리스트 렌더링
```jsx
const items = ['Apple', 'Banana', 'Cherry'];
function ItemList() {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>  // 비추천
      ))}
    </ul>
  );
}
```

### ✅ 고유 key 사용 예시
```jsx
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];
<ul>
  {users.map(user => <li key={user.id}>{user.name}</li>)}
</ul>
```

---

## 🧾 Forms

### ✅ 기본 Form 구성
- `<form>`, `<input>`, `<select>`, `<textarea>` 사용
- 상태(State)와 `onChange`, `onSubmit` 핸들러 필요

### ✅ Controlled Component 예시
```jsx
const [value, setValue] = useState('');
<input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
```

### ✅ 여러 입력 처리
```jsx
const [formData, setFormData] = useState({ name: "", email: "" });
const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};
```

### ✅ useRef를 활용한 Uncontrolled Component
```jsx
const inputRef = useRef();
<input ref={inputRef} />
```

---

## 🔼 Lifting State Up (상태 끌어올리기)

### ✅ 개념
- 하위 컴포넌트에서 사용하는 상태를 부모 컴포넌트로 옮겨 공유
- 여러 자식이 같은 데이터를 필요로 할 때 효과적

### ❌ 상태를 끌어올리지 않은 경우 (동기화 안 됨)
```jsx
function ChildA() { const [text, setText] = useState(""); }
function ChildB() { const [text, setText] = useState(""); }
```

### ✅ 끌어올린 상태 예시
```jsx
function Parent() {
  const [text, setText] = useState("");
  return (
    <>
      <ChildA text={text} setText={setText} />
      <ChildB text={text} />
    </>
  );
}
```

---

## 🧱 Composition vs Inheritance

### ✅ 합성 (Composition)
- 컴포넌트를 조합해서 사용하는 방식
```jsx
function Card({ children }) {
  return <div className="card">{children}</div>;
}
<Card>
  <h2>안녕하세요</h2>
</Card>
```

### ✅ 특수화 (Specialization)
```jsx
function Dialog({ title, message }) {
  return <div><h3>{title}</h3><p>{message}</p></div>;
}
<Dialog title="경고!" message="이 작업은 취소할 수 없습니다." />
```

### ✅ Higher-Order Component (HOC)
```jsx
function withLogger(WrappedComponent) {
  return function EnhancedComponent(props) {
    console.log("렌더링:", WrappedComponent.name);
    return <WrappedComponent {...props} />;
  };
}
```

### ❌ 상속 (Inheritance, 권장되지 않음)
```jsx
class ChildButton extends ParentButton { ... }
```
