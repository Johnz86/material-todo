import * as React from 'react';
import { connect } from 'react-redux';

import TableBody from '@material-ui/core/TableBody/TableBody';
import TableRow from '@material-ui/core/TableRow/TableRow';

import { todosActions, todosModels, todosSelectors } from '../';
import { RootState } from '../../../store';
import TodoItem from './todo-item';

interface Props {
  todos: todosModels.Todo[];
  toggleTodo: (id: string) => any;
}

function TodoList({ todos = [], toggleTodo }: Props) {
  return (
    <TableBody>
      {todos.map(todo => (
        <TableRow key={todo.id}>
          <TodoItem item={todo} toggleItem={
            // tslint:disable-next-line:jsx-no-lambda
            () => toggleTodo(todo.id)} />
        </TableRow>
      ))}
    </TableBody>
  );
}

const mapStateToProps = (state: RootState) => ({
  todos: todosSelectors.getFilteredTodos(state.todos),
});

export default connect(mapStateToProps, {
  toggleTodo: (id: string) => todosActions.toggle({ id }),
})(TodoList);
