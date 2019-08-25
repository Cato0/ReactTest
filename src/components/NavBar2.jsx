import React, { Component } from 'react';
// import NavBar from "./NavBar";
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

export default class NavBar2 extends Component {
    
    state = {
        count: 3,
    };


    render () {

        return (
        <div>
            <Paper>
                <Tabs
                    value={0}
                    indicateorClolor="primary"
                    textColor="primary"
                    centered
                    >
                    <Tab label="Item One"/>
                    <Tab label="Item Two"/>
                    <Tab label="Item Three"/>
                </Tabs>
            </Paper>
        </div>
        );
    }
}