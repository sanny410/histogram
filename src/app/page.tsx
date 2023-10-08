'use client';
import React, {useState} from 'react';
import Histogram from '@/components/histogram/Histogram';
import './page.css';
import SelectPeriod from '@/components/select/SelectPeriod';
import data from '@/data.json';

import {IOptionSelect} from '@/components/baseSelect/BaseSelect';

export default function Main() {
    const [period, setPeriod] = useState({value: 'year', label: 'За последний год'});

    const onChange = (value: IOptionSelect) => {
        setPeriod(value);
    };

    let selectedData;

    switch (period.value) {
        case 'year':
            selectedData = data.finance.periods[0].graph.year;
            break;
        case 'month':
            selectedData = data.finance.periods[0].graph.month;
            break;
        case 'half_year':
            selectedData = data.finance.periods[0].graph.half_year;
            break;
        default:
            selectedData = data.finance.periods[0].graph.year;
    }

    return (
        <div className="wrapper">
            <SelectPeriod value={period} onChange={onChange} />
            <div className="histogram">
                <Histogram data={selectedData} />
            </div>
        </div>
    );
}
