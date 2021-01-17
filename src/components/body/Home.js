import React ,{Component} from 'react'
import {connect} from 'react-redux';

const mapStateProps=state=>{
    // console.log("mapStateProps: ", state);
    return{
        dishes: state.dishes,
        // Comment: state.comments,
        sample: state.sample,
    }
}

class Home extends Component{
    componentDidMount(){
        console.log("HomeProps : ", this.props)
        this.props.dispatch({
            type: "TEST",
            str: "MojarFood Resturant"
        })
    }

    componentDidUpdate(){
        console.log("Home Props Updated", this.props);
    }

    render(){
    document.title="MojarFood Resturant"
        return(
            <div>
                
            </div>
        )
    }
}
export default connect(mapStateProps) (Home);