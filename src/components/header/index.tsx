import React from 'react';
import User from '../../interfaces/User';
import { connect } from 'react-redux';
import State from '../../interfaces/State';
import { useHistory, Link } from 'react-router-dom';
import { setupMaster } from 'cluster';

interface IProps {
    user: User | null;
    quiz: boolean;
    goBack: Function;
    removeUser: Function;
}

const mapStateToProps = (state: State, ownProps: object) => ({
    user: state.user,
    quiz: state.quiz,
});
const mapDispatchToProps = (dispatch: Function) => ({
    goBack: () => dispatch({ type: 'FINISH_QUIZ' }),
    removeUser: () => dispatch({ type: 'REMOVE_USER' }),
});

const Header: React.FC<IProps> = ({ user, quiz, goBack, removeUser }) => {
    const history = useHistory();
    const handleLogOut = () => {
        sessionStorage.removeItem('user_token');
        removeUser();
        history.push('/');
    };
    const handleBack = () => {
        history.push('/');
        goBack();
    };
    return (
        <div className='header'>
            <div className='user-header-text'>
                {user ? (
                    !quiz ? (
                        <span>
                            Hello {user.name},{user.points} points
                        </span>
                    ) : (
                        <span
                            style={{ cursor: 'pointer' }}
                            onClick={handleBack}>
                            Go back
                        </span>
                    )
                ) : (
                    <span>Hello there, guest!</span>
                )}
            </div>
            {!user ? (
                <div className='login-register'>
                    <Link to='/login'>Login</Link>
                    <Link to='/register'>Register</Link>
                </div>
            ) : (
                <div className='login-register'>
                    <Link onClick={handleLogOut} to='/'>
                        Logout
                    </Link>
                </div>
            )}
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
