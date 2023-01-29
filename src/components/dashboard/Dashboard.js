import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import Notifications from './Notification';
import ProjectList from '../projects/ProjectList'
import { connect } from 'react-redux';

class Dashboard extends Component {
  render() {
    console.log(this.props);
    console.log('-----------------')
    const {projects} = this.props;
    return (
      <div className='dashboard container'>
        <div className='row'>
          <div className='col s12 m6'>
                <ProjectList projects= {projects}/>
            <div className='col s12 m5 offset-m1'>
                <Notifications/>
            </div>
          </div>
        </div>
      </div>
    )
  }

}


const mapStateToProps = (state) => {
     return {
        projects: state.project.projects
     }
}
export default connect(mapStateToProps)(Dashboard)


