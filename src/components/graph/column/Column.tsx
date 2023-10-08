'use client';
import React, {FC, useState, useEffect} from 'react';

import './style.css';

interface IProps {
    num: number;
}

const Column: FC<IProps> = ({num}) => {
    const [height, setHeight] = useState<number>(1);

    useEffect(() => {
        const calculateAndSetHeight = () => {
            const calculatedHeight = (num / 10000) * 100;
            setHeight(calculatedHeight);
        };

        setTimeout(() => {
            calculateAndSetHeight();
        }, 100);
    }, [num]);

    return <div title={`${num}`} className="graph__column" style={{height: `${height}%`}}></div>;
};

export default Column;
