import React,{Component} from 'react';

class UserList extends Component {

    render(){
        return(
            <ul className="col-md-4">
                {
                    this.props.users.map(user => {
                        return (
                            <li className="list-group-item" key={user.id}>
                                {user.name}
                            </li>
                            ); 
                    })
                }
            </ul>
        );
    }

}

export default UserList;