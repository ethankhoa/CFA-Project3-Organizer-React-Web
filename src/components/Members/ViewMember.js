import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import { Well, Button } from 'react-bootstrap';


class ViewMember extends Component {
  constructor(props) {
    super(props);
    this.state = {
      member: false
    };
    this.getMember = this.getMember.bind(this);

  }

  componentDidMount() {
    console.log('componentWillMount');
    this.getMember();
  };

  getMember() {
    {console.log("params?" + this.props.match.params.id)}
    const URL = `http://localhost:3000/members/${this.props.match.params.id}`
    Axios.get(URL)
      .then((response) => {
        this.setState({ member: response.data });
        console.log(response.data);
        //
        // console.log("member" + this.state.member);
        // console.log(JSON.stringify(this.state.member));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render(){
    return (
      <div>
        {this.state.member ? (
          <Well>
            <h4>Name </h4>
              <p>
                {this.state.member.name.title}
                {this.state.member.name.first} {this.state.member.name.last}
              </p>
            <h4>Email </h4>
              <p><a href={`mailto:${this.state.member.email}?Subject=Hello%20again`} target="_top">{this.state.member.email}</a></p>

            <h4>Address</h4>
            {this.state.member.address ? (
              <p>
                <p>{this.state.member.address.street}</p>
                <p>
                  {this.state.member.address.city} {this.state.member.address.state}
                  {this.state.member.address.postCode}
                </p>
              </p>
            ) : (
              <p><i>There is no address saved for this member.</i></p>
            )}

            <h4>Phone</h4>
            {this.state.member.phone ? (
              <p>{this.state.member.phone}</p>
            ) : (
              <p><i>There is no phone number saved for this member.</i></p>
            )}

            <h4>Birthday</h4>
            {this.state.member.birthday ? (
              <p>{this.state.member.birthday.day}/{this.state.member.birthday.day}</p>
            ) : (
              <p><i>There is no birthday saved for this member.</i></p>
            )}

            <h4>Newsletter</h4>
              <p>{this.state.member.emailOptIn.toString()}</p>

            <h4>Church Member</h4>
              <p>{this.state.member.isMember.toString()}</p>




          <Button bsStyle="info">Edit User</Button> <Button bsStyle="danger">Delete</Button>
          </Well>
        ) : (
          'Loading man1!!!!!!!!!...'
        )}


      </div>


    )
    }
  };

ViewMember.propTypes = {
  member: PropTypes.object
};

export default ViewMember;
