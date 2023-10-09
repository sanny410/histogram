import React, {FunctionComponent} from 'react';

import Graph from '../graph/Graph';
import Column from '../graph/column/Column';

import './style.css';


interface IProps {
    data: Record<string, number>;
}

const Histogram: FunctionComponent<IProps> = ({data}) => {
    return (
        <div className="histogram__wrapper">
            <div className="histogram__scale">
                <div>10000</div>
                <div>7500</div>
                <div>5000</div>
                <div>2500</div>
                <div>0</div>
            </div>
            <div className="histogram__columns">
            {Object.keys(data).map((item) => (
                <Column num={data[item]} key={item} />
            ))}
            </div>
            <Graph data={data} />
        </div>
    );
};

export default Histogram;
