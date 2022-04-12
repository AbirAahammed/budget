import AddIcon from '@mui/icons-material/Add';
import CategoryIcon from '@mui/icons-material/Category';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InfoIcon from '@mui/icons-material/Info';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import * as React from 'react';
import { Link } from 'react-router-dom';

export const mainListItems = (
    <React.Fragment>
        <Link to='/dashboard' style={{ textDecoration: 'none' }}>
            <ListItemButton>
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
            </ListItemButton>
        </Link>
        <Link to='/expenses' style={{ textDecoration: 'none' }}>
            <ListItemButton>
                <ListItemIcon>
                    <ShoppingCartIcon />
                </ListItemIcon>
                <ListItemText primary="Expenses" />
            </ListItemButton>
        </Link>
        
        <Link to='/addexpense' style={{ textDecoration: 'none' }}>
            <ListItemButton>
                <ListItemIcon>
                    <AddIcon />
                </ListItemIcon>
                <ListItemText primary="Add New Expenses" />
            </ListItemButton>
        </Link>
        <Link to='/category' style={{ textDecoration: 'none' }}>
            <ListItemButton>
                <ListItemIcon>
                    <CategoryIcon />
                </ListItemIcon>
                <ListItemText primary="Add New Category" />
            </ListItemButton>
        </Link>

    </React.Fragment>
);

export const secondaryListItems = (
    <React.Fragment>
        <ListSubheader component="div" inset>
            Application Info
        </ListSubheader>
        <ListItemButton>
            <ListItemIcon>
                <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="Info" />
        </ListItemButton>
    </React.Fragment>
);