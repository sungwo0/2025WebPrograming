import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/todotemplate';
import TodoHead from './components/todohead';
import TodoList from './components/todolist';
import TodoCreate from './components/todocreate';
import { TodoProvider } from './todocontext';

const GlobalStyle = createGlobalStyle`
body {
background: #e9ecef;
}
`;
function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </TodoProvider>
  );
}
export default App;