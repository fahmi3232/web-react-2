import React, { Component } from 'react'
// import LifecycleComp from './LifecycleComp'
import LifecycleFunc from './LifecycleFunc'

export default class index extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isHide : false
        }
    }
    
    render() {
        const { isHide } = this.state
        return (
            <div>
                <button onClick={() => this.setState({isHide: !isHide})}>
                    {isHide ? "Tampilkan" : "Sembunyikan"}
                </button>
                {/* {!isHide && <LifecycleComp />} */}
                {!isHide && <LifecycleFunc />}
            </div>
        )
    }
}
