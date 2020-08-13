import React, { useReducer, ChangeEvent, FormEvent } from 'react';
import { connect } from 'react-redux';
import { setupMaster } from 'cluster';
import { useHistory } from 'react-router-dom';
import State from '../../interfaces/State';
import User from '../../interfaces/User';

const reducer = (
    state = { username: '', password: '' },
    { type, payload }: { type: string; payload: string },
) => {
    if (type === 'CHANGE_USERNAME') {
        return {
            ...state,
            username: payload,
        };
    }
    if (type === 'CHANGE_PASSWORD') {
        return {
            ...state,
            password: payload,
        };
    }
    return state;
};

interface IProps {
    user: User | null;
    setUser: Function;
}
const Login: React.FC<IProps> = ({ user, setUser }) => {
    const history = useHistory();
    React.useEffect(() => {
        if (user) {
            history.push('/');
        }
    }, []);
    const [state, dispatch] = useReducer(reducer, {
        username: '',
        password: '',
    });
    const handleUsername = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: 'CHANGE_USERNAME',
            payload: e.target.value as string,
        });
    };
    const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: 'CHANGE_PASSWORD',
            payload: e.target.value as string,
        });
    };
    const submitHandler = async (e: FormEvent) => {
        e.preventDefault();
        const response = await fetch('http://localhost:3000/register', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(state), // body data type must match "Content-Type" header
        }).then((res) => res.json());

        if (response.name) {
            const { status, name, points } = response;
            if (status === 'Logged in') {
                sessionStorage.setItem('user_token', response.token);

                setUser({
                    name,
                    points,
                });
                history.push('/');
            }
        }
    };
    return (
        <div className='login-div'>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Username</label>
                    <input type='text' onChange={handleUsername} />
                </div>
                <div>
                    <label>Password</label>
                    <input type='password' onChange={handlePassword} />
                </div>
                <div>
                    <button type='submit'>Register</button>
                </div>
            </form>
        </div>
    );
};

const mapStateToProps = (state: State, ownProps: object) => ({
    user: state.user,
});

const mapDispatchToProps = (dispatch: Function) => ({
    setUser: (data: object) =>
        dispatch({ type: 'SET_USER', payload: { ...data } }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
