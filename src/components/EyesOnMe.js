import React, { Component } from 'react';

class EyesOnMe extends Component {

    onFocus = () => console.log('Good!')
    onBlur = () => console.log('Hey! Eyes on me!')

    render() {
        return (
            <div>
                <button onFocus={this.onFocus} onBlur={this.onBlur}>Eyes on me, please!</button>
            </div>
        );
    }
}

export default EyesOnMe;



