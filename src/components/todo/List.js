import { Button, ButtonGroup, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import { compose, curry, filter, map, pipe } from 'ramda'

import React from 'react'
import deleteTodo from '../../actions/todo'

const List = items => (
  <Row>
    {' '}
    <ListGroup>{items}</ListGroup>
  </Row>
)
const getItem = item => !item.isDelete
const filterItem = filter(getItem)

const Item = ({ todo }) => (
  <ListGroupItem bsStyle={todo.complete} key={todo.id}>
    <div style={{ marginLeft: -300 }}>{todo.text}</div>
    <div style={{ marginLeft: 200 }}>
      <Button
        style={{ marginLeft: 10 }}
        bsStyle={'success'}
        bsSize={'xs'}
        onClick={() => alert(`delete${todo.id}'s todo!`)}
      >
        {'complete'}
      </Button>
      <Button style={{ marginLeft: 10 }} bsStyle={'warning'} bsSize={'xs'}>
        {'delay'}
      </Button>
      <Button style={{ marginLeft: 10 }} bsStyle={'default'} bsSize={'xs'}>
        {'edit'}
      </Button>
      <Button style={{ marginLeft: 10 }} bsStyle={'default'} bsSize={'xs'}>
        {'delete'}
      </Button>
    </div>
  </ListGroupItem>
)

const mapItems = todos => map(todo => Item({ todo }), todos)
// const todoList =pipe(props =>
//   ({todos: props.todo}),
//   compose(List, mapItems)
// )

const todoList = compose(List, mapItems, filterItem)
export default todoList
