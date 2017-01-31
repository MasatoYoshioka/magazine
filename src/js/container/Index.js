import React from 'react'
import { connect } from 'react-redux'
import { orientation } from '../actions/magazine'

import "../../sass/sample"


class Index extends React.Component{

  handleResize(){
    this.props.onOrientation(window.innerWidth, window.innerHeight) 
  }

  //初期化 ComponentがDOMツリーに追加される前に一度だけ呼ばれる
  componentWillMount(){
    //初期位置
    this.props.onOrientation(window.innerWidth, window.innerHeight) 

  }
  componentDidMount(){
    window.addEventListener('resize', this.handleResize.bind(this))

  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.handleResize.bind(this))
  }

  render(){
    return(
      <div>
        <div className="red">up</div>
        <div >middle</div>
        <div >back</div>
      </div>
      )
  }
}

function mapStateToProps(state){
  return {
    magazie: state.magazineApp
  }
}

function mapDispatchToProps(dispatch){
  return {
    onOrientation: (width, height) => dispatch(orientation(width, height))
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Index)
