//parent of all pages - allows us to persist /share 
//data amongst all pages

import App, { Container } from 'next/app';
import Page from '../components/Page';

class MyApp extends App {
    render() {
        const { Component } = this.props;

        return (
            <Container>
               <Page />
            </Container>
        )
    }
}

export default MyApp;