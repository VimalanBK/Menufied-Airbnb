import React from 'react';
import './../styles/header.css';
class Header extends React.Component{
    render(){
        return(
            <div class="header">
                <div class='header-content'>
                    <div class="logo">
                        <img   src="https://avatars2.githubusercontent.com/u/698437?s=200&amp;v=4" width="100" height="100" >
                    </img>
                    </div>
                    <div class="profile">
                        <div class="profile-name">
                            <h3 >Airbnb</h3>
                            <h6>&#127969; India  &#9993; https://airbnb.io</h6>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Header;