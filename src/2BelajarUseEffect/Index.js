import React, { Component } from 'react'
import LifeCycle from './LifeCycle'
import LifeCycleFunc from './LifeCycleFunc'

export default class Index extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isHide: false
        }
    }
    render() {
        const { isHide } = this.state
        return (
            <div style={{ padding: "50px" }}>
                <div style={{ marginBottom: "50px" }} >
                    <h1>Contoh LifeCycle Component dan useEffect</h1>
                    <hr />
                    <button onClick={() => this.setState({ isHide: !isHide })}>
                        {isHide ? "Tampilkan" : "Sembunyikan"}
                    </button>
                </div>

                {!isHide && <LifeCycle />}
                {/* {!isHide && <LifeCycleFunc />} */}

            </div>
        )
    }
}
