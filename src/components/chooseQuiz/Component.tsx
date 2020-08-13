import React, { useState, useReducer } from 'react';
import { connect } from 'react-redux';
import { useLocation, useHistory, useParams } from 'react-router-dom';
import State from '../../interfaces/State';
import { setupMaster } from 'cluster';

interface IProps {
    quiz: boolean;
    setUser: Function;
    setQuiz: Function;
}

const reducer = (
    state = {
        processAnswer: false,
        initLoading: false,
    },
    { type, payload }: { type: string; payload?: object },
) => {
    if (type === 'SET_LOADING') {
        return { ...state, initLoading: true };
    }
    if (type === 'FINISH_LOADING') {
        return { ...state, initLoading: false };
    }
    if (type === 'RESET_LOADING') {
        return { ...state, initLoading: false };
    }
    return state;
};

const History: React.FC<IProps> = ({ quiz, setUser, setQuiz }) => {
    const params = useParams<{ component: string }>();
    const history = useHistory();

    const [state, dispatch] = useReducer(reducer, {
        processAnswer: false,
        initLoading: false,
    });
    const [questions, setQuestions] = useState<
        {
            question: string;
            answers: {
                answer: string;
                correct: boolean;
            }[];
        }[]
    >();
    const [indexN, setIndex] = useState<number>(0);
    let [points, setPoints] = useState<number>(0);
    React.useEffect(() => {
        if (quiz === false) return history.push('/');

        const fetchQuiz = async () => {
            const data = await fetch(
                'http://localhost:3000/quiz/' + params.component.toLowerCase(),
            ).then((data) => data.json());

            setQuestions(data.questions);
        };
        fetchQuiz();
    }, []);

    const handleAnswer = async (ans: { correct: boolean }, index: number) => {
        const divs = document.querySelectorAll('.answers div');
        if (ans.correct) {
            (divs[index] as HTMLDivElement).classList.add('correct');
            points += 5;
            setPoints(points);
        } else {
            points -= 3;
            setPoints(points);
            if (questions && questions[indexN] && questions[indexN].answers) {
                const correctInd = questions[indexN].answers.findIndex(
                    (obj) => obj.correct === true,
                );
                (divs[correctInd] as HTMLDivElement).classList.add('correct');
            }
            divs[index].classList.add('wrong');
        }
        dispatch({ type: 'SET_LOADING' });
        await new Promise((res) =>
            setTimeout(() => res(dispatch({ type: 'FINISH_LOADING' })), 3000),
        );

        if (questions && !questions[indexN + 1]) {
            fetch('http://localhost:3000/update', {
                method: 'PUT', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                    'Content-Type': 'application/json',
                    Authorization:
                        'Bearer ' + sessionStorage.getItem('user_token'),
                },
                redirect: 'follow', // manual, *follow, error
                referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                body: JSON.stringify({
                    points,
                }), // body data type must match "Content-Type" header
            })
                .then((res) => res.json())
                .then((data) => {
                    setUser({ name: data.user, points: data.points });
                    setQuiz();
                    history.push('/');
                    divs.forEach((div) => {
                        div.classList.remove('correct');
                        div.classList.remove('wrong');
                    });
                });
        } else {
            divs.forEach((div) => {
                div.classList.remove('correct');
                div.classList.remove('wrong');
            });
            setIndex(indexN + 1);
        }
    };

    return (
        <>
            {questions ? (
                questions[indexN] ? (
                    <div className='question-div'>
                        {state.initLoading ? (
                            <div className='quiz-alert'>
                                Procesuiram sledece pitanje...
                            </div>
                        ) : null}
                        <div className='questions'>
                            <div className='question'>
                                {questions[indexN].question}
                            </div>
                            <div className='answers'>
                                {questions[indexN].answers.map(
                                    (answer, index) => (
                                        <div
                                            onClick={() => {
                                                handleAnswer(answer, index);
                                            }}
                                            key={index}>
                                            {answer.answer}
                                        </div>
                                    ),
                                )}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>No more questions for you bro!</div>
                )
            ) : (
                <div>Loading...</div>
            )}
        </>
    );
};

const mapStateToProps = (state: State) => ({
    quiz: state.quiz,
});
const mapDispatchToProps = (dispatch: Function) => ({
    setUser: (data: object) => {
        return dispatch({
            type: 'SET_USER',
            payload: { ...data },
        });
    },
    setQuiz: () => {
        dispatch({
            type: 'FINISH_QUIZ',
        });
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(History);
