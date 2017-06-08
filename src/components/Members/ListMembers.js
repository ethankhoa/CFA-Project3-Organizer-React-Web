import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import ViewMember from './ViewMember';

const ListMembers = (props) => {
  return (
    <div>
      <h4>Members List</h4>
      {props.members.length < 1
        ? <p>Loading...
          </p>
        : <ListGroup>
          {props.members.map((member, i) => <ListGroupItem key={i} href={`/members/${member._id}`}>{member.name.first} {member.name.last}

            {/* <Link to={{ pathname: `/members/${member._id}` }}>
          <Button bsStyle="success" bsSize="small" className="pull-right">View</Button>
        </Link> */}
            <Route key={i} path={`members/${member._id}`} render={() => (<ViewMember/>)}/>

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
