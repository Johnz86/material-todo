import * as React from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button/Button';
import Grid from '@material-ui/core/Grid/Grid';
import TextField from '@material-ui/core/TextField/TextField';
import { todosActions } from '../';
import { RootState } from '../../../store';

interface Props {
  addTodo: (title: string) => any;
};
interface State {
  title: string;
};

class TodoForm extends React.Component<Props, State> {
  public readonly state: Readonly<State> = { title: '' };

  public handleTitleChange: React.ReactEventHandler<HTMLInputElement> = ev => {
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
      <form onSubmit={this.handleAdd}>
        <Grid container spacing={8} alignItems="baseline">
          <Grid item>
            <TextField
              id="multiline-flexible"
              label="Enter new todo"
              value={title}
              onChange={this.handleTitleChange}
              margin="normal"
            />
          </Grid>
          <Grid item>
            <Button variant="contained" onClick={this.handleAdd} disabled={!title}> Add</Button>
          </Grid>
        </Grid>
      </form>
    );
  }
}

const mapStateToProps = (state: RootState) => ({});

export default connect(mapStateToProps, {
  addTodo: (title: string) => todosActions.add({ title }),
})(TodoForm);
