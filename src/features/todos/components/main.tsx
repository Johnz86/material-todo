import * as React from 'react';

import Grid from '@material-ui/core/Grid/Grid';
import Paper from '@material-ui/core/Paper/Paper';
import Table from '@material-ui/core/Table/Table';
import TableCell from '@material-ui/core/TableCell/TableCell';
import TableFooter from '@material-ui/core/TableFooter/TableFooter';
import TableHead from '@material-ui/core/TableHead/TableHead';
import TableRow from '@material-ui/core/TableRow/TableRow';

import TodoFilters from './todo-filters';
import TodoForm from './todo-form';
import TodoList from './todo-list';

export default () => (
  <Grid container spacing={8}>
    <Grid item={true} xs={12}>
      <TodoForm />
    </Grid>
    <Grid item xs={12}>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>List of tasks that you want To Do</TableCell>
            </TableRow>
          </TableHead>
          <TodoList />
          <TableFooter>
            <TableRow>
              <TableCell>
                <TodoFilters />
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </Paper>
    </Grid>
  </Grid>
);
