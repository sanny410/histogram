import React, {FC} from 'react';

import './style.css';

const periodRus: Record<string, string> = {
    January: 'Январь',
    February: 'Февраль',
    March: 'Март',
    April: 'Апрель',
    May: 'Май',
    June: 'Июнь',
    July: 'Июль',
    August: 'Август',
    September: 'Сентябрь',
    October: 'Октябрь',
    November: 'Ноябрь',
    December: 'Декабрь',
};

interface IProps {
    data: Record<string, number>;
}

function formatNumber(number: string): string {
    if (isNaN(Number(number)))  {
        return periodRus[number];
    } else {
        return Number(number) < 10 ? `0${number}` : `${number}`;
    }
}

const Graph: FC<IProps> = ({data}) => {
    return (
        <div className="graph__scale">
            {Object.keys(data).map((period) =>
                isNaN(Number(period)) || Number(period) % 5 === 0 || period === '1' ? (
                    <div key={period} className="graph__col">
                        {formatNumber(period).slice(0, 3)}
                    </div>
                ) : null
            )}
        </div>
    );
};

export default Graph;
