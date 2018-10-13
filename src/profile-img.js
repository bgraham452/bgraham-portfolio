import React, {Component} from 'react';
import './styles/App.css';


class ProfileImg extends Component {

    render(){
        return (
            <div className="profile-image">
                <img src={require('./images/photo.jpg')} className="profile" alt="profile"/>
            </div>
        );
    }
}

export default ProfileImg;