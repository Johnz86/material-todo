import TableCell from '@material-ui/core/TableCell/TableCell';
import * as React from 'react';
import { Todo } from '../models';

interface Props {
  item: Todo;
  toggleItem: () => void;
}

function TodoItem({ item, toggleItem }: Props) {
  return (
    <TableCell component="th" scope="row" onClick={toggleItem} style={getStyle(item.completed)}>
      {item.title}
    </TableCell>
  );
}

const getStyle = (completed: boolean): React.CSSProperties => ({
  cursor: 'pointer',
  overflowX: 'hidden',
  textOverflow: 'ellipsis',
  ...(completed ? { textDecoration: 'line-through', opacity: 0.4 } : {}),
});

export default TodoItem;
