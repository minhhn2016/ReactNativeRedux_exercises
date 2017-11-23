import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyAxLCV6w8ZaeKgl9mhlJvqBhPuo6cweQHg',
            authDomain: 'auth-26e2e.firebaseapp.com',
            databaseURL: 'https://auth-26e2e.firebaseio.com',
            projectId: 'auth-26e2e',
            storageBucket: 'auth-26e2e.appspot.com',
            messagingSenderId: '641646935743'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <Button whenPressed={() => firebase.auth().signOut()}>
                        Log Out
                    </Button>
                );

            case false:
                return <LoginForm />;


            default:
                return <Spinner size="large" />;
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;
