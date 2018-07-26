import React, { Component } from 'react';
import {fetchAdmins} from "../actions";
import {connect} from 'react-redux';
import requireAuth from '../../client/src/components/hoc/requireAuth';

class AdminsListPage extends Component {
  componentDidMount() {
    this.props.fetchAdmins();
  }
  renderAdmins() {
    return this.props.admins.map(admin => {
      return <li key={admin.id}>{admin.name}</li>
    });
  }

  render () {
    return (
       <div>
         <h3>Protected list of admins</h3>
         <ul>{this.renderAdmins()}</ul>
       </div>
    )
  }
}

const mapStateToProps = state => ({
  admins: state.admins
});

export default {
  component: connect(mapStateToProps, {fetchAdmins})(requireAuth(AdminsListPage)),
  loadData: ({dispatch}) => dispatch(fetchAdmins())
};