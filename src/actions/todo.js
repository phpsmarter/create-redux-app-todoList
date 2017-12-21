import moment from 'moment';
import uuidv1 from 'uuid/v1';

export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const FILTER_TODO = 'FILTER_TODO';
//react-bootstrap中默认的颜色是success,info.waring等类，这里用函数返回类
export const isNo = () => 'info';
export const isYes = () => 'success';

// export function addTodo(payload) {
// 	return {
// 		type: ADD_TODO,
// 		payload: {
// 			id: uuidv1(),
// 			text: payload, //这里可以使用函数对文本进行过滤
// 			addTime: Moment(),
//       deadLineTime:null, //目标时间
// 			complete:false,
// 			completeTime: null,
// 			modfiyTime: Moment(), //是不是可以添加完成期限固定时间，运算时减去当前时间
// 			modifyCount: 0,
//       modifyStatus: true,
// 	  deleteTime:null,
// 	  isDelete:false,
// 		}
// 	};
// }



const deleteTodo=(id)=>({
 
         type: DELETE_TODO,
         payload: {
			 id:id,
			 
		 }
})

export default  deleteTodo;



	
         
		




