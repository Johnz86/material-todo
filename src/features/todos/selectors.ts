import { createSelector } from 'reselect';

import { Todo, TodosFilter } from './models';
import { TodosState } from './reducer';

export const getTodos = (state: TodosState) => state.todos;

export const getTodosFilter = (state: TodosState) => state.todosFilter;

export const getFilteredTodos = createSelector(
  getTodos,
  getTodosFilter,
  (todos: Todo[], todosFilter: TodosFilter) => {
    switch (todosFilter) {
      case 'completed':
        return todos.filter(t => t.completed);
      case 'active':
        return todos.filter(t => !t.completed);

      default:
        return todos;
    }
  }
);
