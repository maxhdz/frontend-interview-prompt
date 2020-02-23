import React from 'react';
import PropTypes from 'prop-types';
import 'typeface-roboto';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import SubjectIcon from '@material-ui/icons/Subject';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
import ViewQuiltOutlinedIcon from '@material-ui/icons/ViewQuiltOutlined';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
import TableChartOutlinedIcon from '@material-ui/icons/TableChartOutlined';
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import SubjectOutlinedIcon from '@material-ui/icons/SubjectOutlined';
import RadioButtonUncheckedOutlinedIcon from '@material-ui/icons/RadioButtonUncheckedOutlined';
import Typography from '@material-ui/core/Typography';
import SettingsIcon from '@material-ui/icons/Settings';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import './DrawerMenu.css';
import { NavLink } from 'react-router-dom';


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    backgroundColor: '#5ab3dc',
    color: 'white',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    boxShadow: 'none',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#2c333d',
    border: 'none'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    backgroundColor: '#f1f4f8',

  },
  listItem: {
      color: '#95a7c3',
      fontSize:'0.8em',
  },
  icon: {
    fill: '#95a7c3',
  },
  iconYellow: {
    color: '#f7c95c',
  },
  iconRed: {
    color: '#ea5d50',
  },
  iconPurple: {
    color: '#917dd6',
  },
  arrowIcon: {
    marginLeft: '4em',
    fontSize: '0.9em',
    fill: '#95a7c3',

  },
  activeListItem: {
    backgroundColor: "white", 
    fontSize:'0.8em',
  },
  activeIcon: {
    fill: '#5ab3dc'
  },
  searchIcon: {
      color: 'white',
  },
  listItemIcon: {
  },
  input: {
      color: 'white',
  },
  settingsIcon: {
   color: "#6ac4d4",
   fontSize: "1.5em",
  }
}));


function DrawerMenu(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
          <ListItem button className={classes.listItem}>
            <ListItemIcon ><MailIcon className={classes.icon} fontSize="small" /></ListItemIcon>
            <ListItemText disableTypography="true" primary="Calendar" />
          </ListItem>
            <ListItem button className={classes.listItem} component={NavLink} to="/docs" activeClassName={classes.activeListItem} exact>
              <ListItemIcon><SubjectIcon className={classes.icon} fontSize="small"/></ListItemIcon>
              <ListItemText disableTypography="true" primary="Documentation" />
            </ListItem>
          <ListItem button className={classes.listItem} component={NavLink} to="/" activeClassName={classes.activeListItem} exact>
            <ListItemIcon><HomeIcon className={classes.icon, classes.activeIcon} fontSize="small" /></ListItemIcon>
            <ListItemText disableTypography="true" primary="Dashboard" />
          </ListItem>
      </List>
      <List>
          <ListItem button className={classes.listItem}>
            <ListItemIcon><WhatshotIcon className={classes.icon} fontSize="small"/></ListItemIcon>
            <ListItemText disableTypography="true" primary="Admin Plugins" />
            <ListItemIcon ><ArrowForwardIosOutlinedIcon className={classes.arrowIcon} /></ListItemIcon>
          </ListItem>
          <ListItem button className={classes.listItem}>
            <ListItemIcon><CheckBoxOutlinedIcon className={classes.icon} fontSize="small" /></ListItemIcon>
            <ListItemText disableTypography="true" primary="Admin Forms" />
            <ListItemIcon className={classes.listItemIcon}><ArrowForwardIosOutlinedIcon className={classes.arrowIcon} fontSize="small" /></ListItemIcon>
          </ListItem>
          <ListItem button className={classes.listItem}>
            <ListItemIcon><TableChartOutlinedIcon className={classes.icon} fontSize="small" /></ListItemIcon>
            <ListItemText disableTypography="true" primary="Admin Layouts" />
            <ListItemIcon ><ArrowForwardIosOutlinedIcon className={classes.arrowIcon} /></ListItemIcon>
          </ListItem>
      </List>
      <List>
          <ListItem button className={classes.listItem}>
            <ListItemIcon><AssessmentOutlinedIcon className={classes.icon}/></ListItemIcon>
            <ListItemText disableTypography="true" primary="Information Panels" />
            <ListItemIcon ><ArrowForwardIosOutlinedIcon className={classes.arrowIcon} /></ListItemIcon>
          </ListItem>
          <ListItem button className={classes.listItem} >
            <ListItemIcon><ShoppingBasketOutlinedIcon className={classes.icon} fontSize="small" /></ListItemIcon>
            <ListItemText disableTypography="true" primary="Ecommerce" />
            <ListItemIcon ><ArrowForwardIosOutlinedIcon className={classes.arrowIcon} /></ListItemIcon>
          </ListItem>
      </List>
      <List>
          <ListItem button className={classes.listItem}>
            <ListItemIcon><ViewQuiltOutlinedIcon className={classes.icon} fontSize="small" /></ListItemIcon>
            <ListItemText disableTypography="true" primary="UI Elements" />
            <ListItemIcon ><ArrowForwardIosOutlinedIcon className={classes.arrowIcon} /></ListItemIcon>
          </ListItem>
          <ListItem button className={classes.listItem}>
            <ListItemIcon><SubjectOutlinedIcon className={classes.icon} fontSize="small" /></ListItemIcon>
            <ListItemText disableTypography="true" primary="Form Elements" />
            <ListItemIcon ><ArrowForwardIosOutlinedIcon className={classes.arrowIcon} /></ListItemIcon>
          </ListItem>
          <ListItem button className={classes.listItem}>
            <ListItemIcon><SettingsIcon  className={classes.icon} fontSize="small" /></ListItemIcon>
            <ListItemText disableTypography="true" primary="Plugins" />
            <ListItemIcon ><ArrowForwardIosOutlinedIcon className={classes.arrowIcon} /></ListItemIcon>
          </ListItem>
          <ListItem button className={classes.listItem}>
            <ListItemIcon><FileCopyOutlinedIcon  className={classes.icon} fontSize="small" /></ListItemIcon>
            <ListItemText disableTypography="true" primary="Pages" />
            <ListItemIcon ><ArrowForwardIosOutlinedIcon className={classes.arrowIcon} /></ListItemIcon>
          </ListItem>
      </List>
      <List>
          <ListItem button className={classes.listItem}>
            <ListItemIcon><RadioButtonUncheckedOutlinedIcon className={classes.iconYellow} fontSize="small" /></ListItemIcon>
            <ListItemText disableTypography="true" primary="Executive Meeting" />

          </ListItem>
          <ListItem button className={classes.listItem}>
            <ListItemIcon><RadioButtonUncheckedOutlinedIcon className={classes.iconRed} fontSize="small" /></ListItemIcon>
            <ListItemText disableTypography="true" primary="HelpDesk Redesign" />
           
          </ListItem>
          <ListItem button className={classes.listItem}>
            <ListItemIcon><RadioButtonUncheckedOutlinedIcon className={classes.iconPurple} fontSize="small" /></ListItemIcon>
            <ListItemText disableTypography="true" primary="Sony Board Meeting" />

          </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Input
          className={classes.input}
          disableUnderline={true}
          placeholder={'Search...'}
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <SearchOutlinedIcon className={classes.searchIcon} />
            </InputAdornment>
          }
        />
        <div className="profile-pic">
          <img src="/profile.jpeg" />
        </div>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer}>
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div className="settings-tab">
        <SettingsIcon className={classes.settingsIcon} />
        </div>
        {props.children}
      </main>
    </div>
  );
}

DrawerMenu.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.any,
};

export default DrawerMenu;
