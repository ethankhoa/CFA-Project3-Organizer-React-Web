import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem, Button } from 'react-bootstrap';

const ListMembers = (props) => {
  return(
    <div>
      <h4>Members List</h4>
      {props.members.length < 1 ? <p>Loading... </p> :
      <ListGroup>
        {props.members.map((member, i) => <ListGroupItem key={i}>{member.name.first} {member.name.last}
      <Button view edit/>
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
