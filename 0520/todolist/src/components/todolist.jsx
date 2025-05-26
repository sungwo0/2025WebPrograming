import React from 'react';
import styled from 'styled-components';
import TodoItem from './todoitem';
import { useTodoState } from '../todocontext';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px 48px;
  overflow-y: auto;
`;

function TodoList() {
    const todos = useTodoState();
    return (
        <TodoListBlock>
            {todos.map(todo => (
                <TodoItem key={todo.id} id={todo.id} done={todo.done} text={todo.text} />
            ))}
        </TodoListBlock>
    );
}

export default TodoList;