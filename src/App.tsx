import React, { Fragment, useEffect, useState } from 'react';
import { questions as data } from './fakeProvider/data';
import Question from './interfaces/Questions';
import User from './interfaces/User';
import Header from './components/header';
import { Switch, Route, useHistory, Redirect, useLocation } from 'react-router';
import State from './interfaces/State';
import PlayComponent from './components/play';
import ChooseQuizComponent from './components/chooseQuiz';
import History from './components/chooseQuiz/Component';

import { connect } from 'react-redux';
import AlertBox from './components/Alertbox';

import Login from './components/login';
import Register from './components/register';

interface IProps {
    user: User | null;
    setUser: Function;
}

const App: React.FC<IProps> = ({ user, setUser }) => {
    const [, setQuestions] = useState<Question[]>();
    const [alert, setAlert] = useState<boolean>(false);
    const history = useHistory();
    const location = useLocation();
    useEffect(() => {
        history.listen((location) => {
            if (
                location.pathname !== '/' &&
                location.pathname !== '/login' &&
                location.pathname !== '/register'
            ) {
                if (!sessionStorage.getItem('user_token')) {
                    history.push('/');
                    if (!alert) {
                        setAlert(true);
                    }
                } else {
                    async function User() {
                        const response = await fetch(
                            'http://localhost:3000/verify',
                            {
                                method: 'POST',
                                headers: {
                                    'Content-type': 'application/json',
                                    Authorization:
                                        'Bearer ' +
                                        sessionStorage.getItem('user_token'),
                                },
                            },
                        )
                            .then((res) => res.json())
                            .then((data) => data);
                        if (
                            !response.status ||
                            response.status !== 'Approved'
                        ) {
                            history.push('/');
                            if (!alert) {
                                setAlert(true);
                            }
                        }
                    }
                    User();
                }
            }
        });
        if (sessionStorage.getItem('user_token')) {
            async function getUser() {
                const response = await fetch('http://localhost:3000/verify', {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json',
                        Authorization:
                            'Bearer ' + sessionStorage.getItem('user_token'),
                    },
                })
                    .then((res) => res.json())
                    .then((data) => data);

                if (response.status === 'Approved') {
                    setUser({
                        name: response.name,
                        points: response.points,
                    });
                } else if (history.location.pathname !== '/login') {
                    history.push('/');
                }
            }
            getUser();
        } else if (
            history.location.pathname !== '/login' &&
            history.location.pathname !== '/register'
        ) {
            history.push('/');
        }

        setTimeout(() => {
            setQuestions(data);
        }, 50);
        //eslint-disable-next-line
    }, []);
    return (
        <Fragment>
            <Fragment>
                <AlertBox
                    setAlert={setAlert}
                    inSide={alert}
                    message='You must register/login to proceed'
                />

                <Header />

                <Switch>
                    <Route defaultPath exact path='/'>
                        <PlayComponent />
                    </Route>
                    <Route exact path='/choose-quiz'>
                        <ChooseQuizComponent />
                    </Route>
                    <Route exact path='/login'>
                        <Login />
                    </Route>
                    <Route exact path='/register'>
                        <Register />
                    </Route>
                    <Route exact path='/quiz/:component'>
                        <History />
                    </Route>

                    <Redirect to='/' />
                </Switch>
            </Fragment>
        </Fragment>
    );
};

const mapStateToProps = (state: State) => ({
    user: state.user,
});
const mapDispatchToProps = (dispatch: Function) => ({
    setUser: (data: User) =>
        dispatch({ type: 'SET_USER', payload: { ...data } }),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
