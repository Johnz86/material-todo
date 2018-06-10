import { slug } from 'cuid';
import { createStandardAction } from 'typesafe-actions';

import { Todo, TodosFilter } from './models';

const ADD = 'todos/ADD';
const TOGGLE = 'todos/TOGGLE';
const CHANGE_FILTER = 'todos/CHANGE_FILTER';

export const add = createStandardAction(ADD).map(
  (payload: { title: string }) => ({
    payload: {
      completed: false,
      id: slug(),
      title: payload.title || 'New Todo',
    } as Todo,
  })
);

export const toggle = createStandardAction(TOGGLE)<{ id: string }>();

export const changeFilter = createStandardAction(CHANGE_FILTER)<TodosFilter>();
