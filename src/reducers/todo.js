import {
  compose,
  curry,
  evolve,
  find,
  map,
  merge,
  prop,
  propEq
} from 'ramda'

import { DELETE_TODO } from 'constants/ActionTypes'
import moment from 'moment';

const initialState = {
  todos: [
    {
      'id': '232323232323232',
      'text': 'cccdsfdsf',
      'addTime': '2232323',
      'deadLineTime': null,
      'complete': false,
      'completeTime': null,
      'modfiyTime': '1121212', //是不是可以添加完成期限固定时间，运算时减去当前时间
      'modifyCount': 0,
      'modifyStatus': true,
      'deleteTime': null,
      'isDelete': false
    }, {
      'id': '111211111',
      'text': 'testesstest',
      'addTime': '2232323',
      'deadLineTime': null,
      'complete': false,
      'completeTime': null,
      'modfiyTime': '1121212', //是不是可以添加完成期限固定时间，运算时减去当前时间
      'modifyCount': 0,
      'modifyStatus': true,
      'deleteTime': null,
      'isDelete': true
    }, {
      'id': '333333',
      'text': 'akakakakakakkak',
      'addTime': '2232323',
      'deadLineTime': null,
      'complete': false,
      'completeTime': null,
      'modfiyTime': '1121212', //是不是可以添加完成期限固定时间，运算时减去当前时间
      'modifyCount': 0,
      'modifyStatus': true,
      'deleteTime': null,
      'isDelete': false
    }, {
      'id': '44444444',
      'text': 'akakakakakakkak',
      'addTime': '2232ryry323',
      'deadLineTime': null,
      'complete': false,
      'completeTime': null,
      'modfiyTime': '1121212', //是不是可以添加完成期限固定时间，运算时减去当前时间
      'modifyCount': 0,
      'modifyStatus': true,
      'deleteTime': null,
      'isDelete': false
    }, {
      'id': '555555333',
      'text': 'akakakakakakkak',
      'addTime': '2555232323',
      'deadLineTime': null,
      'complete': false,
      'completeTime': null,
      'modfiyTime': '5551121212', //是不是可以添加完成期限固定时间，运算时减去当前时间
      'modifyCount': 0,
      'modifyStatus': true,
      'deleteTime': null,
      'isDelete': false
    }
  ],
  badge: [
    {
      id: 1,
      text: 'success',
      num: 13
    }, {
      id: 2,
      text: 'info',
      num: 20
    }
  ]
};

export default function todo(state = initialState, action) {

  switch (action.type) {
    case DELETE_TODO:

      const getTodos = (data) => (data.todos);

      const getItem =(id,data)=> curry(find(propEq('id', id)),data)('232323232323232');
      
      console.log(getItem);
      const transformations = {
        //deleteTime: moment(),
        isDelete: true
      };
      const getDelete = evolve(transformations);
      const getNextState=merge(state);
      const nextState=compose(getNextState,getDelete,getItem,getTodos)
      const next=nextState(state);
      console.log('nextState:',next)
      return next

    default:
      return state
  }
}
