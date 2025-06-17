# 4주차 강의 내용

# React 핵심 개념 정리

## 📦 Component
- React 컴포넌트(Component)는 UI를 구성하는 독립적인 코드 블록입니다.
- HTML, CSS, JavaScript, 상태(State), 속성(Props)을 포함하여 재사용 가능한 UI 단위를 구성합니다.
- 하나의 컴포넌트는 여러 개의 컴포넌트의 조합으로 구성될 수 있습니다.
- 컴포넌트는 반복적으로 사용할 수 있어 코드 양을 줄일 수 있습니다.

## ⚙️ State
- State는 컴포넌트 내부에서 변화하는 데이터를 관리하는 핵심 개념입니다.
- State는 JavaScript 객체이며, 컴포넌트의 UI를 동적으로 변경할 때 사용됩니다.
- State가 변경되면 React는 컴포넌트를 다시 렌더링합니다.
- React Hooks (v16.8+) 이후 함수형 컴포넌트에서도 `useState()`를 통해 State를 사용할 수 있습니다.
- 클래스형 컴포넌트에서는 `this.state`와 `this.setState()` 사용

## 📨 Props vs State
| 구분 | Props | State |
|------|-------|-------|
| 정의 | 부모 컴포넌트가 자식 컴포넌트에 값을 전달 | 컴포넌트 내부에서 선언한 변경 가능한 값 |
| 읽기/쓰기 | 읽기 전용 | 읽기/쓰기 가능 |
| 사용 방식 | 컴포넌트 외부에서 설정 | 컴포넌트 내부에서 정의 및 변경 |

## 🔁 Component LifeCycle

### 공통 흐름
- Mount (생성)
- Update (변경)
- Unmount (제거)

### 클래스형 컴포넌트 생명주기 메서드
1. **Mount**
   - `constructor()`: 초기 state 설정
   - `render()`: 화면 렌더링
   - `componentDidMount()`: 렌더링 후 최초 실행 (API 호출, 타이머 설정 등)

2. **Update**
   - `shouldComponentUpdate()`: 렌더링 여부 결정
   - `render()`: 화면 갱신
   - `componentDidUpdate()`: 업데이트 완료 후 실행

3. **Unmount**
   - `componentWillUnmount()`: 컴포넌트 제거 시 실행 (타이머, 이벤트 해제 등)

### 함수형 컴포넌트 생명주기 (useEffect)
- `useEffect(() => {}, [])`: Mount 시 실행 (componentDidMount 역할)
- `useEffect(() => {}, [변수])`: 변수 값 변경 시 실행 (componentDidUpdate 역할)
- `useEffect(() => { return () => {} }, [])`: Unmount 시 실행 (componentWillUnmount 역할)

> `useEffect`는 컴포넌트가 마운트, 업데이트, 언마운트 되는 시점에 맞춰 원하는 작업을 수행할 수 있도록 도와주는 Hook입니다.

