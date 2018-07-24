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
import { Route } from 'react-router';
import About from '../features/about/components/description';
import Todos from '../features/todos/components/main';
import logo from '../logo.svg';
import withRoot from '../withRoot';
import { mailFolderListItems } from './list-items';
import NavigationTabs from './nav-tab';

const drawerWidth = 240;
const styles: StyleRulesCallback = theme => ({
  appBar: {
    marginLeft: drawerWidth,
    position: 'absolute',
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  appLogo: {
    height: '2.5em',
    padding: '0.5em 1em 0.5em 1em',
    width: '100%'
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
  toolbar: {
    height: '48px'
  }
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
        <div className={classes.toolbar}>
          <img src={logo} className={classes.appLogo} alt="logo" />
        </div>
        <Divider />
        <List>{mailFolderListItems}</List>
      </div>
    );
    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar}>
          <Toolbar variant="dense">
            <IconButton color="inherit" aria-label="open drawer" onClick={this.handleDrawerToggle} className={classes.navIconHide}>
              <Home />
            </IconButton>
            <Typography variant="title" color="inherit" noWrap={true}>DICOM Image Pool</Typography>
            <NavigationTabs />
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
          <Route exact={true} path="/home" component={About} />
          <Route exact={true} path="/todo" component={Todos} />
        </main>
      </div>
    );
  }
  private handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };  
}

export default withRoot(withStyles(styles)<{}>(App));