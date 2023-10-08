'use client';
import React, {FunctionComponent, FC, ComponentType} from 'react';
import Select, {OptionProps, GroupBase, components, ControlProps, ValueContainerProps} from 'react-select';

import '@/components/baseSelect/style.css';

export type IOptionSelect = {
    value: string;
    label: string;
};

interface IProps {
    options: IOptionSelect[];
    value: IOptionSelect | null;
    onChange(newValue: IOptionSelect | null): void;
}

const Option: FC<OptionProps<IOptionSelect, false, GroupBase<IOptionSelect>>> = ({...props}) => {
    return (
        <div title={props.data.value}>
            <components.Option {...props} className={props.isSelected ? 'option selected' : 'option'} />
        </div>
    );
};

const Control: FC<ControlProps<IOptionSelect, false, GroupBase<IOptionSelect>>> = ({...props}) => {
    return (
        <div>
            <components.Control {...props} className="control" />
        </div>
    );
};

const ValueContainer: ComponentType<ValueContainerProps<IOptionSelect, false, GroupBase<IOptionSelect>>> = ({
    ...props
}) => {
    return <components.ValueContainer {...props} className={'valueContainer'} />;
};

const IndicatorSeparator = (props: any) => {
    return <components.IndicatorSeparator {...props} className={'indicatorSeparator'} />;
};

const IndicatorsContainer = (props: any) => {
    return (
        <div className="indicatorContainer">
            <components.DownChevron {...props} />
        </div>
    );
};

const Menu = (props: any) => {
    return (
      <components.Menu
        {...props}
        className={"menu"}
      />
    );
  };

  const filterOptions = (options: IOptionSelect[], value: IOptionSelect | null) => {
    return options.filter((option) => option.value !== value?.value);
  };


const BaseSelect: FunctionComponent<IProps> = ({options, value, onChange}) => {
    return (
        <Select
            options={filterOptions(options, value)} 
            value={value}
            onChange={onChange}
            components={{
                Control,
                ValueContainer,
                Option,
                IndicatorSeparator,
                IndicatorsContainer,
                Menu
            }}
            isSearchable={false}
            id='root'
        />
    );
};

export default BaseSelect;
