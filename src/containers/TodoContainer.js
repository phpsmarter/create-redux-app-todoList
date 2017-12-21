import {compose, curry, filter, pick,}  from 'ramda';
import { createSelector, createStructuredSelector } from 'reselect'

import PropTypes from 'prop-types'
import React from 'react'
import { Todo } from 'components'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import deleteTodo from 'actions/todo';

class TodoContainer extends React.Component {
   
  render() {
      //let boundActionCreators = bindActionCreators(todoActions, dispatch);
       let { todo, dispatch } = this.props;
       const bindAction = curry((dispatch, actionCreator) =>
  compose(dispatch, actionCreator))
       const bindActionCreator = bindAction(dispatch);
    return (
      console.log('todoprop:',this.props.todo),
      <Todo
        todo={todo} 
        
      />
    )
  }
}

const mapStateToProps = createStructuredSelector({
  
  todo: createSelector(
   
    (state)=>(state.todo),
    (todoState) => todoState
  ),
})






export default connect(mapStateToProps)(TodoContainer);
