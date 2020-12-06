import React, { Component } from 'react';

import "./Theme.css"

import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";

class Theme extends Component {
    constructor(props) {
        super(props);
        this.state = {
            themeColorCurrent: [],
        }
        this.themeColor = [];
    }


    MyRandom() {
        this.themeColor = [];
        while (this.themeColor.length < 3) {
            let r = Math.floor(Math.random() * 6) + 1;
            if (this.themeColor.indexOf(r) === -1) this.themeColor.push(r);
        }
    }

    ThemChanger() {

        this.MyRandom()


        // Get Section Elements
        let first = document.getElementsByClassName("first");
        let second = document.getElementsByClassName("second");
        let third = document.getElementsByClassName("third");
        //

        // Remove current Theme
        first[0].classList.remove(`theme${this.state.themeColorCurrent[0]}`);
        second[0].classList.remove(`theme${this.state.themeColorCurrent[1]}`);
        third[0].classList.remove(`theme${this.state.themeColorCurrent[2]}`);
        //

        // Add Theme Section1
        first[0].classList.add(`theme${this.themeColor[0]}`);
        //

        // Add Theme Section2
        second[0].classList.add(`theme${this.themeColor[1]}`);
        //

        // Add Theme Section3
        third[0].classList.add(`theme${this.themeColor[2]}`);
        //


        this.setState({
            themeColorCurrent: this.themeColor,
        })
    }


    render() {
        return (
            <div>
                <IconButton color="inherit" onClick={() => { this.ThemChanger() }}>
                    <EditIcon />
                </IconButton>
            </div>
        )
    }

}

export default Theme;