import React from 'react';

const NormalCounter = () => {
    const [number, setNumber] = React.useState(0);
    const [color, setColor] = React.useState('#000');

    const onPlusClick = e => {
        const currentNumber = number + 1;
        setNumber(currentNumber);

        let currentColor = color;

        if (currentNumber > 0) {
            currentColor = '#2f77eb';
        } else if (currentNumber < 0) {
            currentColor = '#f60';
        }

        setColor(currentColor);
    };

    const onMinusClick = e => {
        const currentNumber = number - 1;
        setNumber(currentNumber);

        let currentColor = color;
        
        if (currentNumber > 0) {
            currentColor = '#2f77eb';
        } else if (currentNumber < 0) {
            currentColor = '#f60';
        }

        setColor(currentColor);
    };

    return (
        <div>
            <h2>NormalCounter</h2>

            <h3 style={{ color: color }}>{number}</h3>

            <button type='button' onClick={onPlusClick}>
                +1
            </button>
            <button type='button' onClick={onMinusClick}>
                -1
            </button>
        </div>
    );
};

export default NormalCounter;
