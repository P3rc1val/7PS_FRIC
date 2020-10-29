


import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import styled, { css } from "styled-components";
import GeneralView from "../ContentViews/GeneralView.js";
import EventContentView from "../ContentViews/EventContentView.js";
import SystemContentView from "../ContentViews/SystemContentOverview.js";
import TaskContentView from "../ContentViews/TaskContentOverview.js";
import SubtaskContentView from "../ContentViews/SubtaskContentView.js";
import FindingContentView from "../ContentViews/FindingContentView.js";
import ArchiveContentView from "../ContentViews/ArchiveContentView.js";
import SetupContentView from "../ContentViews/SetupContentView.js";
import ConfigContentView from "../ContentViews/ConfigContentView.js";
import { render } from "react-dom";
import { Button } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import EventIcon from "@material-ui/icons/Event";
import ComputerIcon from "@material-ui/icons/Computer";
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";
import FormatListNumberedRtlIcon from "@material-ui/icons/FormatListNumberedRtl";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import FolderSpecialIcon from "@material-ui/icons/FolderSpecial";
import ArchiveIcon from "@material-ui/icons/Archive";
import PermDataSettingIcon from "@material-ui/icons/PermDataSetting";
import TuneIcon from "@material-ui/icons/Tune";
import HelpIcon from "@material-ui/icons/Help";


const drawerWidth = 150;
const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#7fcd91",
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#8fcd91",
    },
    background:{
      main: "#4d4646"
    },
  },
  overrides: {
    // Style sheet name ⚛️
    MuiButton: {
      // Name of the rule
      label: {
        // Some CSS
        align: "left",
      },
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  
}));

export default function MiniDrawer(props) {
  const classes = useStyles();
  
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  var name = 'None';
  const viewButton = [{name:'Event', icon:<AccountTreeIcon color ="primary"/>}, 
  {name:'System', icon:<ComputerIcon color ="primary"/>}, 
  {name:'Task', icon:<FormatListNumberedIcon color ="primary"/>},
  {name:'Subtask', icon:<FormatListNumberedRtlIcon color ="primary"/>},
  {name:'Finding', icon:<FolderSpecialIcon color ="primary"/>},
  {name:'Archive', icon:<ArchiveIcon color ="primary"/>},
  {name:'Config', icon:<PermDataSettingIcon color ="primary"/>},
  {name:'Setup', icon:<TuneIcon color ="primary"/>},
  {name:'Help', icon:<HelpIcon color ="primary"/>}]
    
  const {hideView} = props;

  return (
    <div className={classes.root}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            FRIC
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {viewButton.map((text, index) => (
            <ListItem button key={text.name} onClick={() => hideView( text.name)}>
                <ListItemIcon color ="primary">{viewButton[index].icon}</ListItemIcon>

                <ListItemText primary={text.name} />
              </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
      
      </main>
      </ThemeProvider>
    </div>
    
  );
}