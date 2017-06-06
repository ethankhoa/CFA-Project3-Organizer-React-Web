import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';

class ViewMember extends Component {
  constructor(props) {
    super(props);
    this.state = {
      member: false
    };
    this.getMember = this.getMember.bind(this);

  }

  componentWillMount() {
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
        <p>
          asdfasdf

        </p>
        {this.state.member ? <p>Name: {this.state.member.name.first}</p> : 'Loading...'}

      </div>


    )
    }
  };

ViewMember.propTypes = {
  member: PropTypes.object
};

export default ViewMember;
