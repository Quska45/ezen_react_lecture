import React, { Component } from 'react';

import MyRefSub1 from './MyRefSub1';
import MyRefSub2 from './MyRefSub2';

class MyRef extends Component {
    render() {
        return (
            <div>
                <h2>MyRef</h2>

                <MyRefSub1 />
                <MyRefSub2 />
            </div>
        );
    }
}

export default MyRef;