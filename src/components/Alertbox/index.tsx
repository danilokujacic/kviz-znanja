import React, { Fragment } from 'react';

interface IProps {
    message: string;
    inSide: boolean;
    setAlert: Function;
}

const AlertBox: React.FC<IProps> = ({ message, inSide, setAlert }) => {
    const [loading, setLoading] = React.useState(false);
    React.useEffect(() => {
        if (inSide) {
            setLoading(true);
            setTimeout(() => {
                const setAnimation = async () => {
                    setLoading(false);
                    await new Promise((res) => setTimeout(res, 250));
                    setAlert(false);
                };
                setAnimation();
            }, 3000);
        }
    }, [inSide]);
    return (
        <Fragment>
            {inSide && (
                <div
                    style={{
                        top: inSide ? 'initial' : '-100px',
                        animation: `${
                            loading ? 'slide-in' : 'slide-out'
                        } 0.5s cubic-bezier(0.445, 0.05, 0.55, 0.95)`,
                    }}
                    className='alert-box'>
                    {message}
                </div>
            )}
        </Fragment>
    );
};

export default AlertBox;
