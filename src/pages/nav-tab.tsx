import withStyles, { StyleRulesCallback, WithStyles } from '@material-ui/core/styles/withStyles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import * as React from 'react';

const styles: StyleRulesCallback = theme => ({
    root: {
        alignSelf: 'flex-end',
        backgroundColor: theme.palette.background.paper,
        flexGrow: 1,
    },
    tabRoot: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        // tslint:disable-next-line:object-literal-sort-keys
        '&:hover': {
            color: '#EC6602',
            opacity: 1,
        },
        '&$tabSelected': {
            fontWeight: 'bold',
        },
        '&:focus': {
            color: '#D85808',
        },
        fontWeight: theme.typography.fontWeightRegular,
        marginRight: theme.spacing.unit * 4,
        minWidth: 72,
        textTransform: 'initial',
    },
    tabSelected: {},
    tabsIndicator: {
        backgroundColor: '#D85808',
    },
    typography: {
        padding: theme.spacing.unit * 3,
    },
});

interface PropsState {
    value: number;
}

class NavigationTabs extends React.Component<WithStyles<string>, PropsState> {
    public state = {
        value: 0,
    };

    public handleChange = (event: React.ChangeEvent<{}>, value: any) => {
        this.setState({ value });
    };

    public render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <div className={classes.root}>
                <Tabs
                    value={value}
                    onChange={this.handleChange}
                    classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
                >
                    <Tab
                        disableRipple
                        classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
                        label="Import"
                    />
                    <Tab
                        disableRipple
                        classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
                        label="Inbox"
                    />
                    <Tab
                        disableRipple
                        classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
                        label="Repository"
                    />
                    <Tab
                        disableRipple
                        classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
                        label="Collection"
                    />
                    <Tab
                        disableRipple
                        classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
                        label="Administration"
                    />                                       
                </Tabs>
            </div>
        );
    }
}

export default withStyles(styles)(NavigationTabs);
