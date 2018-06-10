import * as React from 'react';

import AppBar from '@material-ui/core/AppBar/AppBar';
import Divider from '@material-ui/core/Divider/Divider';
import Drawer from '@material-ui/core/Drawer/Drawer';
import Hidden from '@material-ui/core/Hidden/Hidden';
import IconButton from '@material-ui/core/IconButton/IconButton';
import List from '@material-ui/core/List/List';
import withStyles, { StyleRulesCallback, WithStyles } from '@material-ui/core/styles/withStyles';
import Toolbar from '@material-ui/core/Toolbar/Toolbar';
import Typography from '@material-ui/core/Typography/Typography';
import Home from '@material-ui/icons/Home';
import Todos from '../features/todos/components/main';
import withRoot from '../withRoot';
import { mailFolderListItems } from './list-items';

const drawerWidth = 240;
const styles: StyleRulesCallback = theme => ({
  appBar: {
    marginLeft: drawerWidth,
    position: 'absolute',
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  content: {
    backgroundColor: theme.palette.background.default,
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  root: {
    display: 'flex',
    flexGrow: 1,
    height: '100%',
    overflow: 'hidden',
    position: 'relative',
    width: '100%',
    zIndex: 1,
  },
  toolbar: theme.mixins.toolbar,
});

export namespace App {

  export interface State {
    mobileOpen: boolean;
  }
}


class App extends React.Component<WithStyles<string>, App.State> {
  public state = {
    mobileOpen: true,
  };

  public render() {
    const { classes, theme } = this.props;
    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <Divider />
        <List>{mailFolderListItems}</List>
      </div>
    );
    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton color="inherit" aria-label="open drawer" onClick={this.handleDrawerToggle} className={classes.navIconHide}>
              <Home />
            </IconButton>
            <Typography variant="title" color="inherit" noWrap={true}>Simple ToDo</Typography>
          </Toolbar>
        </AppBar>
        <Hidden mdUp={true}>
          <Drawer variant="temporary"
            anchor={theme && theme.direction === 'rtl' ? 'right' : 'left'}
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            classes={{ paper: classes.drawerPaper }}
            ModalProps={{ keepMounted: true }}>
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown={true} implementation="css">
          <Drawer
            variant="permanent"
            open={true}
            classes={{ paper: classes.drawerPaper }}>
            {drawer}
          </Drawer>
        </Hidden>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Todos/>
        </main>
      </div>
    );
  }
  private handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };  
}

export default withRoot(withStyles(styles)<{}>(App));