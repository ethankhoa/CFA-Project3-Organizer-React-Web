import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EditMember extends Component {
  constructor(props) {
    super(props);
    this.state = {
      member: false
    };
  }

  render(){
    return(
      <h4>Edit Member</h4>
    )
  }

};

EditMember.propTypes = {
  member: PropTypes.object
};

export default EditMember;
