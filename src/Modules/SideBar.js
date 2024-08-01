import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import {SIDE_MENU} from "../config/config";
import { Link } from 'react-router-dom';

const SideBar = ()=> {
  return (
    <Box sx={{ width: '100%', maxWidth: 360, }}>
      <nav aria-label="main mailbox folders">
        <List>
          {
            SIDE_MENU.map(menu=><>
              {
                menu.visible && 
                <ListItem key={menu.key}>
                <ListItemButton component={Link} to={`/${menu.key}`}>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary={menu.label} />
                </ListItemButton>
              </ListItem>
              }
              </>
            )
          }
        </List>
      </nav> 
    </Box>
  );
}

export default SideBar;