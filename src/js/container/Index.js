import React from 'react'
import { connect } from 'react-redux'
import { orientation, touch, touch_move, touch_end } from '../actions/magazine'
import { init_content } from '../actions/contents'

import style from '../../css/style'

class Index extends React.Component{

  handleResize(){
    this.props.onOrientation(window.innerWidth, window.innerHeight) 
  }

  handleTouch(e){
    this.props.onTouch(e.touches[0])
  }

  handleTouchMove(e){
    this.props.onTouchMove(e.touches[0])
  }

  handleTouchEnd(e){
    this.props.onTouchEnd(e.touches[0])
  }
  //初期化 ComponentがDOMツリーに追加される前に一度だけ呼ばれる
  componentWillMount(){
    //初期位置
    this.props.onOrientation(window.innerWidth, window.innerHeight) 
    //初期コンテント
    this.props.onInitContent()

  }
  componentDidMount(){
    window.addEventListener('resize', this.handleResize.bind(this))
    window.addEventListener('touchstart', this.handleTouch.bind(this))
    window.addEventListener('touchmove', this.handleTouchMove.bind(this))
    window.addEventListener('touchend', this.handleTouchEnd.bind(this))

  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.handleResize.bind(this))
    window.removeEventListener('touchstart', this.handleTouch.bind(this))
    window.removeEventListener('touchmove', this.handleTouchMove.bind(this))
    window.removeEventListener('touchend', this.handleTouchEnd.bind(this))

  }

  render(){
    return(
      <div >
        <div className={style.red}>{this.props.magazine.change_x}</div>
        <div>{this.props.magazine.change_y}</div>
        <div>{this.props.magazine.orientation}</div>
      </div>
      )
  }
}

function mapStateToProps(state){
  return {
    magazine: state.magazineApp,
    contents: state.contentsApp
  }
}

function mapDispatchToProps(dispatch){
  return {
    onOrientation: (width, height) => dispatch(orientation(width, height)),
    onTouch: (x, y) => dispatch(touch(x,y)),
    onTouchMove:(x, y) => dispatch(touch_move(x, y)),
    onTouchEnd:(x, y) => dispatch(touch_end(x, y)),
    onInitContent: () => dispatch(init_content())
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Index)
