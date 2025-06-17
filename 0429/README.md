# 9주차 강의 내용

# React 이벤트 처리 정리

## 🧠 Event & Event Handler
- **Event**: 사용자 인터페이스에서 발생하는 사건 (예: 클릭, 입력 등)
- **Event Handler**: 사용자 이벤트에 반응하여 실행되는 함수 (리스너)

### ✅ 기본 문법
```jsx
<button onClick={handleClick}>클릭</button>
```
- JSX에서 이벤트는 camelCase 사용
- 함수 자체를 전달해야 하며, 문자열로 전달하지 않음

---

## 📝 SyntheticEvent (React 이벤트 객체)
- React는 브라우저의 이벤트를 감싸는 **SyntheticEvent** 객체를 제공
- `event.target.value` 등 사용 가능
- 자동 이벤트 풀링 처리 → 비동기에서 `event.persist()` 필요

---

## 🧩 클래스 컴포넌트에서 이벤트 핸들러
- `this` 바인딩 필요
- 방법 1: constructor에서 `bind` 사용
- 방법 2: 클래스 필드 문법 사용

```jsx
class ButtonComponent extends React.Component {
  handleClick = () => {
    alert("클래스 컴포넌트 버튼 클릭!");
  };
  render() {
    return <button onClick={this.handleClick}>클릭</button>;
  }
}
```

---

## 🧷 인자 전달
- 화살표 함수 또는 `bind` 사용
```jsx
<button onClick={() => handleClick("홍길동")}>클릭</button>
```

---

## 🔁 이벤트 핸들러로 상태 변경
```jsx
const [count, setCount] = useState(0);
const handleClick = () => setCount(count + 1);
```

---

## 🚫 기본 동작 방지
```jsx
function handleSubmit(event) {
  event.preventDefault();
}
```

## 🛑 이벤트 전파 중지
```jsx
event.stopPropagation();
```

---

## ⚡ 이벤트 최적화 - useCallback
- 핸들러 재생성 방지
```jsx
const handleClick = useCallback(() => {
  setCount(prev => prev + 1);
}, []);
```

---

## 📊 DOM 이벤트 vs React 이벤트

| 비교 항목           | DOM 이벤트                     | React 이벤트                       |
|--------------------|--------------------------------|------------------------------------|
| 등록 방식          | addEventListener               | JSX에서 onEvent 속성 사용         |
| 제거 방식          | removeEventListener 필요       | 자동 제거 (언마운트 시)           |
| 이벤트 객체        | Event                          | SyntheticEvent                    |
| 이벤트 전파        | 기본적으로 버블링              | 기본적으로 버블링                  |
| 캡처링 지원        | { capture: true } 옵션         | onClickCapture 등 제공             |
| 이벤트 위임        | 직접 설정 필요                 | 자동 위임 (document 레벨 관리)     |
| 최적화 기능        | 수동 관리                      | useCallback 등 활용 가능           |
| this 바인딩 필요   | 상황에 따라 필요               | 함수형에서는 필요 없음             |

---

## 🔍 이벤트 예시 요약

### ✅ 클래스 컴포넌트
```jsx
class ConfirmButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isConfirmed: false };
    this.handleConfirm = this.handleConfirm.bind(this);
  }

  handleConfirm() {
    this.setState(prev => ({ isConfirmed: !prev.isConfirmed }));
  }

  render() {
    return (
      <button onClick={this.handleConfirm} disabled={this.state.isConfirmed}>
        {this.state.isConfirmed ? "확인됨" : "확인하기"}
      </button>
    );
  }
}
```

### ✅ 함수형 컴포넌트
```jsx
function ConfirmButton() {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const handleConfirm = () => setIsConfirmed(prev => !prev);
  return (
    <button onClick={handleConfirm} disabled={isConfirmed}>
      {isConfirmed ? "확인됨" : "확인하기"}
    </button>
  );
}
```
