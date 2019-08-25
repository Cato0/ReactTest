import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/Textfield'
import logo1 from '../logo.svg'; // Tell Webpack this JS file uses this image
import logo2 from '../logo.svg'; // Tell Webpack this JS file uses this image
import logo3 from '../logo.svg'; // Tell Webpack this JS file uses this image

class CourseList extends Component {
    state = {
        courses1: [logo1, logo2, logo3],
        courses2: ["a", "b", "ba", "c", "q", "q", "q", "q","q","q","q","q","q","q"],
        searchString: ['']
    }

    constructor() {
        super()
        console.log("asd");
    }

    onSearchInputChange = (event) => {

        if (event.target.value) {
            //this.setState({courses: ["a", "b", "c"] })
            this.setState({searchString: [event.target.value]})
        } else {
            this.setState({searchString: ['']})
        }
    }

    render() {

        return (
            <div>
                
                {this.state.courses2 ? (
                    <div>
                        <TextField key='0' style={{padding: 24}}
                            id="searchInput"
                            placeholder="Search for Courses"
                            margin="normal"
                            onChange={this.onSearchInputChange} />
                        <Grid key='1' container>
                            {this.state.courses2.map(currentCourse => (
                                <Grid item xs={12} sm={6} lg={2} xl={3}>        {/* Number of Items depending on the Size of the Screen */}
                                    {/* <img src={currentCourse}  width={500} height={300} mode='fit' alt="Logo" /> */}
                                    <p>{currentCourse}</p>
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                ) : "No courses found" }
            </div>
        )
    }
}

export default CourseList;