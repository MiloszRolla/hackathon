import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import TaskList from '../../components/tasks/tasksList'
import Menu from '@mui/material/Menu';
import Image from 'next/image'
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { useRouter } from 'next/router';
const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const settings = ['Profile', 'Account', 'Logout'];
  const [viewType, setViewType] = React.useState("Day");

  const router = useRouter();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogoutMenu = () => {
    localStorage.removeItem("login");
    localStorage.removeItem("passwd");
    router.push('/login');
    setAnchorElUser(null);
  }

  console.log(viewType)
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar sx={{ background: 'linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)'}} 
      position="fixed" open={open}>
        <Toolbar>
          <Typography sx={{fontWeight:"600"}} variant="h5" noWrap component="div">
            Perfect Calendar
          </Typography>
          <Divider sx={{background:'#fff', ml:2}} orientation="vertical" flexItem />
          <List sx={{display:'flex'}}>
          {[ 'Week', 'Day'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={() =>setViewType(text)}>
                <Typography sx={{fontWeight:'600'}} > {text}</Typography>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      
          <Box sx={{ flexGrow: 0, justifyContent:'end', ml:'auto' }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar  src="https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916__340.png" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={(setting != 'Logout') ? handleCloseUserMenu : handleLogoutMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
                <List sx={{px:2}}>
          <Link href="/createEvent">
            <Button sx={{width:'100%', }} variant='contained' endIcon={<AddIcon/>}>Add Event</Button>
          </Link>
        </List>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
            display:'flex', 
            justifyContent:'center', 
            background: 'linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)',
            width:'100vw',
            minHeight:'100vh'
        }}
      open={open}>
        <DrawerHeader />
        <TaskList type={viewType}></TaskList>
      </Box>
    </Box>
  );
}
