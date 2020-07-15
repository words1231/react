import React from "react";
import {connect} from 'react-redux';
import {changeMsg} from '../../store/actions';

function mapStateToProps(state){
  return {
    msg:state.msg
  }
}
function mapActionToProps(dispatch){
    return {
         xxx:(payload)=>dispatch(changeMsg(payload))
    }
}

 class Demo1 extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }
  click(){
    this.props.xxx("hello 1234")
  }
  componentDidMount(){
    console.log("DEMO1",this.props);
  }
  render() {
    return (
            <div>
               <h1>1</h1>
               {this.props.msg}
               <button onClick={this.click.bind(this)}>
                点击
               </button>
            </div>
    );
  }
}
// export default Demo1;
export default connect(mapStateToProps,mapActionToProps)(Demo1)