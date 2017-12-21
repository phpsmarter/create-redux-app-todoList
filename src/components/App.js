import { Col, Grid, Row } from 'react-bootstrap';

import Header from './component/Header';
import List from './component/List';
import React from 'react';
import Tab from './component/Badge';
import { compose } from 'ramda';

const Container = (content) => <Grid>{content}</Grid>;
const MainCol = (data) => (
	<Col md={6} mdOffset={3}>
		<Row> {Header('todoList')}</Row>
		<Row>{List(data.todos)}</Row>
		<Row>{Tab(data.badge)}</Row>
	</Col>
);

const App = compose(Container, MainCol);
export default App;
