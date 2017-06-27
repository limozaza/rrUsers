import React,{Component} from 'react';
import {connect} from 'react-redux';


class UserDetails extends Component {

    
    render(){


        if (!this.props.myActiveUser){
            return(
                <div>Selectionnez un utilisateur pour demmarre</div>
            );   
        }
        return(
            <div className="col-md-4">
                <h1>{this.props.myActiveUser.name}</h1>
            </div>
        );
    }

}

const mapStateToProps = (state)=>{
    return {
        myActiveUser: state.activeUser
    }
};



export default connect(mapStateToProps)(UserDetails); 