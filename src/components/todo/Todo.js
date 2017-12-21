import { Col, Grid, Row } from 'react-bootstrap';
import React, { Component } from 'react'

import Header from './Header'
import Tab from './Badge'
import { compose } from 'ramda';
import todoList from './List'

//import styled from 'styled-components'

// const BorderGridCol = styled(GridCol)`
//   border: 2px solid palevioletred;
//   border-radius: 5px;
//   height: 300px;
// `;
// const todo=(data)=>{
//   console.log('data:',data);
  
//     {Header('todoList')}
// 		{List(data.todo.todos)}
// 		{Tab(data.todo.badge)}
 
   
// }
const Container = (content) => <Grid>{content}</Grid>;
const MainCol = (data) => (
	<Col md={6} mdOffset={3}>
		<Row> {Header('todoList')}</Row>
		<Row>{todoList(data.todo.todos)}</Row>
		<Row>{Tab(data.todo.badge)}</Row>
	</Col>
);

const Todo = compose(Container, MainCol);
export default Todo;

