import React from 'react';
function App() {
const isLoggedIn = true; // 로그인 상태를 나타내는 변수
// 엘리먼트를 변수에 저장
const greeting = isLoggedIn ? <h1>환영합니다!</h1> : <h1>로그인 해주세요.</h1>;
return (
<div>
{greeting} {/* 변수로 저장한 엘리먼트를 렌더링 */}
</div>
);
}
export default App;