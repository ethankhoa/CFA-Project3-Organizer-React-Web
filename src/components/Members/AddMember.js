import React, { Component } from 'react';
import Form from "react-jsonschema-form";
import { Col } from 'react-bootstrap';



class AddMember extends Component {


  render() {

    const schema = {
  "definitions": {
    "name": {
      "type": "object",
      "properties": {
        "title": {
          "type": "string"
        },
        "first": {
          "type": "string"
        },
        "last": {
          "type": "string"
        }
      },
      "required": [
        "first",
        "last"
      ]
    },
    "alt-date": {
      "type": "string",
      "format": "date"
},
    "address": {
      "type": "object",
      "properties": {
        "street": {
          "type": "string"
        },
        "city": {
          "type": "string"
        },
        "state": {
          "type": "string"
        },
        "postcode": {
          "type": "string"
        }
      },
      "required": [
        "address",
        "city",
        "state",
        "postcode"
      ]
    },
    email: {
      "type": "string"
    },
    "node": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "children": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/node"
          }
        }
      }
    }
  },
  "type": "object",
  "properties": {
    "name": {
      "title": "Name",
      "$ref": "#/definitions/name"
    },
    "birthday": {
      "title": "Birthday",
      "$ref": "#/definitions/alt-date"
    },
    "email": {
      "title": "Email",
      "$ref": "#/definitions/email"
    },
    "address": {
      "title": "Address",
      "$ref": "#/definitions/address"
    },
    "tree": {
      "title": "Recursive references",
      "$ref": "#/definitions/node"
    }
  }
};

  const uiSchema = {
  "ui:order": [
    "name",
    "email",
    "birthday",
    "address",
    "tree"
  ],
  "alt-date": {
    "ui:widget": "alt-datetime"
  }
}
    const log = (type) => console.log.bind(console, type);

    return(
      <Col>
        <h3>Add New Member</h3>


      <Form schema={schema}
        uiSchema={uiSchema}
        onChange={log("changed")}
        onSubmit={log("submitted")}
        onError={log("errors")} />
      </Col>


    )
  }
}

export default AddMember;
