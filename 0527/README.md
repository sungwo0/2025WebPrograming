# 13주차 강의 내용

### 📘 리액트 라우터 (React Router)

---

## 📌 라우팅(Routing)이란?

- **라우팅**이란 웹 애플리케이션에서 사용자가 요청한 **URL에 따라 알맞은 페이지를 보여주는** 것.
- 웹앱은 하나의 페이지(SPA)일 수도 있고, 여러 페이지(MPA)로 구성될 수도 있음.

### 예시: 블로그 구성
- ✍️ 글쓰기 페이지: 새로운 포스트 작성
- 📄 포스트 목록 페이지: 작성된 포스트 리스트
- 🔎 포스트 읽기 페이지: 특정 포스트 열람

---

## 🕸️ SPA (Single Page Application)

- 페이지 하나로 구성된 앱
- HTML을 한 번만 받아오고 이후에는 필요한 데이터만 받아서 화면 업데이트
- `react-router-dom` 같은 라우터 라이브러리 사용
- **History API** 활용: 주소만 바꾸고 실제 페이지는 새로고침 X

---

## 📦 리액트 라우터 설치

```bash
npx create-react-app router-tutorial
cd router-tutorial
npm install react-router-dom
# or
yarn add react-router-dom
```

---

## 📂 `index.js` 설정

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

---

## 📄 페이지 컴포넌트 예시

**`src/pages/Home.js`**

```jsx
import React from 'react';

const Home = () => (
  <div>
    <h1>홈</h1>
    <p>가장 먼저 보여지는 페이지입니다.</p>
  </div>
);

export default Home;
```

**`src/pages/About.js`**

```jsx
import React from 'react';

const About = () => (
  <>
    <h1>소개</h1>
    <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>
  </>
);

export default About;
```

---

## 📌 기본 라우트 설정 (App.js)

```jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>
);

export default App;
```

---

## 🔗 Link 컴포넌트 사용법

```jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>홈</h1>
    <p>가장 먼저 보여지는 페이지입니다.</p>
    <Link to="/about">소개</Link>
  </div>
);

export default Home;
```

---

## 🔐 URL 파라미터

**예시: `/profiles/:username`**

```jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const data = {
  tealighting: { name: '김다빈', description: '보안에 관심있는 학생' },
  dew: { name: '이이슬', description: 'DB에 관심있는 학생' },
  yellow: { name: '조윤정', description: '컴퓨터에 관심있는 학생' },
  frontend: { name: '최예진', description: 'front-end에 관심있는 학생' },
};

const Profile = () => {
  const { username } = useParams();
  const profile = data[username];

  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </>
      ) : (
        <p>존재하지 않는 프로필입니다.</p>
      )}
    </div>
  );
};

export default Profile;
```

---

## ❓ 쿼리스트링

**방법 1: `useLocation`**

```jsx
import React from 'react';
import { useLocation } from 'react-router-dom';

const About = () => {
  const location = useLocation();

  return (
    <div>
      <h1>소개</h1>
      <p>쿼리스트링: {location.search}</p>
    </div>
  );
};

export default About;
```

**방법 2: `useSearchParams`**

```jsx
import React from 'react';
import { useSearchParams } from 'react-router-dom';

const About = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const detail = searchParams.get('detail');
  const mode = searchParams.get('mode');

  const onToggleDetail = () => {
    setSearchParams({ mode, detail: detail === 'true' ? false : true });
  };

  const onIncreaseMode = () => {
    const nextMode = mode === null ? 1 : parseInt(mode) + 1;
    setSearchParams({ mode: nextMode, detail });
  };

  return (
    <div>
      <h1>소개</h1>
      <p>detail: {detail}</p>
      <p>mode: {mode}</p>
      <button onClick={onToggleDetail}>Toggle detail</button>
      <button onClick={onIncreaseMode}>mode + 1</button>
    </div>
  );
};

export default About;
```

---

## 🧩 중첩 라우트 예제

**Articles.js**

```jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Articles = () => (
  <ul>
    <li><Link to="/articles/1">게시글 1</Link></li>
    <li><Link to="/articles/2">게시글 2</Link></li>
    <li><Link to="/articles/3">게시글 3</Link></li>
  </ul>
);

export default Articles;
```

**Article.js**

```jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const Article = () => {
  const { id } = useParams();

  return <h2>게시글 {id}</h2>;
};

export default Article;
```

**App.js 라우팅 추가**

```jsx
<Route path="/articles" element={<Articles />} />
<Route path="/articles/:id" element={<Article />} />
```

---

## 🧭 참고

- `useParams`: URL 파라미터 가져오기
- `useLocation`: 현재 URL 정보 가져오기
- `useSearchParams`: 쿼리스트링 파싱
- `Link`: 페이지 새로고침 없이 이동
- `Routes`, `Route`: 라우팅 설정
