import * as React from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button/Button';
import Grid from '@material-ui/core/Grid/Grid';
import Input from '@material-ui/core/Input/Input';
import TableCell from '@material-ui/core/TableCell/TableCell';
import TableRow from '@material-ui/core/TableRow/TableRow';
import { todosActions } from '../';

interface Props {
  addTodo: (title: string) => any;
};
interface State {
  title: string;
};

class TodoForm extends React.Component<Props, State> {
  public readonly state: Readonly<State> = { title: '' };

  public handleTitleChange: React.ReactEventHandler<HTMLTextAreaElement | HTMLInputElement> = ev => {
    this.setState({ title: ev.currentTarget.value });
  };

  public handleAdd = (event?: React.SyntheticEvent<HTMLElement | HTMLFormElement>) => {
    if (event) { event.preventDefault(); }
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  };

  public render() {
    const { title } = this.state;

    return (
      <TableRow>
        <TableCell>
          <form onSubmit={this.handleAdd}>
            <Grid container spacing={8} wrap="nowrap" alignContent="flex-end">
              <Grid item xs={8} md={10}>
              <Input
                id="todo-form"
                type="text"
                value={title}
                fullWidth={true}
                placeholder="Your new To Do task assignment"
                onChange={this.handleTitleChange}
              />
              </Grid>
              <Grid item xs zeroMinWidth>
                <Button variant="contained" onClick={this.handleAdd} disabled={!title} aria-label="Add todo item">Add</Button>
              </Grid>
            </Grid>
          </form>
        </TableCell>
      </TableRow>
    );
  }
}

export default connect(null, {
  addTodo: (title: string) => todosActions.add({ title }),
})(TodoForm);
