import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

const NavBar = () => {

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="headline" color="inherit">
                        Something
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default NavBar;