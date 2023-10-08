'use client';
import React, {FunctionComponent, useState} from 'react';

import BaseSelect, {IOptionSelect} from '@/components/baseSelect/BaseSelect';

const options = [
    {label: 'За последний месяц', value: 'month'},
    {label: 'За последний год', value: 'year'},
    {label: 'За последние 6 месяцев', value: 'half_year'},
];

interface IProps {
    value: IOptionSelect;
    onChange(newValue: IOptionSelect | null): void;
}

const SelectPeriod: FunctionComponent<IProps> = ({value, onChange}) => {
    return <BaseSelect options={options} value={value} onChange={onChange} />;
};

export default SelectPeriod;
