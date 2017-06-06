import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ViewMember from './ViewMember';

const ListMembers = (props) => {
  return(
    <div>
      <h4>Members List</h4>
      {props.members.length < 1 ? <p>Loading... </p> :
      <ListGroup>
        {props.members.map((member, i) => <ListGroupItem key={i}>{member.name.first} {member.name.last} {member._id}

          <Link to={{ pathname: `/members/${member._id}` }}>
            <Button bsStyle="info" bsSize="small" >Edit</Button>
          </Link>
          <Link to={{ pathname: `/members/${member._id}` }}>
            <Button bsStyle="success" bsSize="small" >View</Button>
          </Link>
          <Route key={i} path={`members/${member._id}`} render={() => (
          <ViewMember />
        )}/>

        </ListGroupItem>)}
      </ListGroup>
    }
    </div>

  )
};

ListMembers.PropTypes = {
  members: PropTypes.array.isRequired
};

export default ListMembers;
