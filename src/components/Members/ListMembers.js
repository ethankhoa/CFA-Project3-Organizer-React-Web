import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const ListMembers = (props) => {
  return(
  <ListGroup>
    {props.members.map((member, i) => <ListGroupItem
      key={i}>{member.name.first} {member.name.last}
    </ListGroupItem>)}
  </ListGroup>
  )
};

export default ListMembers;
