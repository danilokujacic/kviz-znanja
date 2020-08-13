import React from 'react';
import User from '../../interfaces/User';
import { types } from '../../fakeProvider/data';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

interface IProps {
    activateQuiz: Function;
}
const ChooseQuizComponent: React.FC<IProps> = ({ activateQuiz }) => {
    const [quizes, setQuizes] = React.useState<
        { name: string; image: string }[]
    >();
    const quizHandler = () => setQuizes(types);
    React.useEffect(() => {
        setTimeout(quizHandler, 50);
    }, []);
    return (
        <div className='quiz-selection'>
            {quizes &&
                quizes.map((quiz, index) => (
                    <div
                        key={index}
                        style={{
                            backgroundImage: `url(${quiz.image})`,
                            animation: `roll-in 0.5s ease-in forwards ${
                                index / 4
                            }s`,
                        }}
                        className='quiz quiz-animate'>
                        <Link
                            onClick={() => activateQuiz()}
                            className='quiz-title'
                            style={{ zIndex: 1 }}
                            to={{
                                pathname: `/quiz/${quiz.name}`,
                                state: {
                                    auth: true,
                                },
                            }}>
                            <span>{quiz.name}</span>
                        </Link>
                    </div>
                ))}
        </div>
    );
};

const mapDispatchToProps = (dispatch: Function) => ({
    activateQuiz: () => dispatch({ type: 'START_QUIZ' }),
});

export default connect(() => ({}), mapDispatchToProps)(ChooseQuizComponent);
