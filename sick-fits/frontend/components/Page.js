import React, { Component } from 'react';
import Header from './Header';

class Page extends Component {
    render() {
        return (
            <div>
                 <Header />
                 {this.props.children}
                 <p>juicepage</p>
            </div>
        );
    }
}

export default Page;