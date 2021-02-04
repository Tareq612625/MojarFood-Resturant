import React, { Component } from 'react'
import Loading from "./Loading"
// import {connect} from 'react-redux';

class Home extends Component {

    render() {
        document.title = "MojarFood Resturant"
        return (
            <div>
                <Loading />
            </div>
        )
    }
}
export default Home;