import React from "react";
import '@/scss/style.scss'
import { connect } from 'react-redux'
import { addTodo, delTodo, editTodo, clearTodo } from '@/store/actions/todo'

function mapStateToProps(state) {
  console.log(state)
  return {
    sta:state,
    todolist: state.todo.list
  }
}

function mapActionToProps(dispatch) {
  return {
    addTodo: (payload)=>dispatch(addTodo(payload)),
    delTodo: (payload)=>dispatch(delTodo(payload)),
    editTodo: (payload)=>dispatch(editTodo(payload)),
    clearTodo: (payload)=>dispatch(clearTodo(payload))
  }
}

class Demo2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {task:''};
  }
  //加载完毕
  componentDidMount() {
    console.log("a",addTodo)
    console.log('props',this.props)
  }
  //表单取值
  change(e){
    this.setState({
      task:e.target.value
    })
  }
  //添加Todo
  inputBlur(){
    let {task} =this.state
    this.props.addTodo({id:Date.now(),task})
    this.setState({task:''})
  }
  //删除Todo
  del(id){
    this.props.delTodo(id)
  }
  // 清除todo
  clearTodo() {
    this.props.clearTodo()
  }

  //获取列表 渲染
  inputList(){
    let {todolist} = this.props
    return todolist.map(ele=>(
      <div key={ele.id} className='row'>
        <span>{ele.id}</span>
        <span>-</span>
        <span>{ele.task}</span>
        <span onClick={this.del.bind(this,ele.id)}>删除</span>
      </div>
    ))
  }

  render() {
    let {task} = this.state
    let {sta} = this.props
    return (
        <div>
            <h1>TodoList</h1>
            <h1>{sta.test.msg}</h1>
            <input 
              type='text' 
              value={task}
              onChange={this.change.bind(this)}
              onBlur={this.inputBlur.bind(this)}
            />
            {this.inputList()}
            <button onClick={this.clearTodo.bind(this)}>清除</button>
        </div>
    );
  }
}

export default connect(mapStateToProps, mapActionToProps)(Demo2)

