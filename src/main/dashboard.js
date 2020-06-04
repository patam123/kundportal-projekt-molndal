import React from 'react';
import DashboardStyling from '../design/dashboard.css';
import Home from '../components/homecomponents/home'

function Dashboard(props) {
    return (
        <div id="dashboard-style">  
        <div id= "nav-style"> this is nav</div>  
        <div id= "page-style"><Home/></div>       
        </div>
    );
}

export default Dashboard;