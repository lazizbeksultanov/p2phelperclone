import React from 'react';
import "./Select.scss";
import Select from 'react-select';
import { useState } from 'react';

const style = {
    control: (base, state) => {
        return ({
            ...base,
            border: "0",
            boxShadow: state?.menuIsOpen ? '0 0 0 1px var(--grey)' : "none",
            borderRadius: state?.menuIsOpen ? '4px 4px 0 0' : "4px",
            background: "#161616",
            paddingLeft: "6px",
            paddingRight: "16px",
            minHeight: "32px"
        })
    },
    container: (base, state) => ({
        ...base,
        borderRadius: state?.menuIsOpen ? '4px 4px 0 0' : "4px",
        background: "#161616",
        height: "32px"
    }),
    menu: (base) => ({
        ...base,
        marginTop: "2px",
        background: "#161616"
    }),
    singleValue: (base) => ({
        ...base,
        color: "var(--grey)",
        fontWeight: 400,
        fontSize: "14px",
    }),
    option: (base) => ({
        ...base,
        background: base.isSelected ? "red" : "#161616",
        position: "relative",
        paddingLeft: "16px",
        paddingRight: "16px",
        fontWeight: 400,
        fontSize: "14px",

        ':after': {
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M19.5002 5.99927L9.00024 17.9993L4.50024 13.4993' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M19.5002 5.99927L9.00024 17.9993L4.50024 13.4993' stroke='%235F5F5F' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A")`,
            borderRadius: 10,
            content: '" "',
            display: 'block',
            position: "absolute",
            right: "16px",
            top: "50%",
            transform: "translateY(-50%)",
            height: 24,
            width: 24,
            opacity: 0,
            transition: "opacity .1s"
        },
        ':hover': {
            ...base[':hover'],
            background: "#343434",

            ':after': {
                opacity: 1
            },
        },
    }),
    input: (base) => ({
        ...base,
        color: "var(--grey)",
        fontWeight: 400,
        fontSize: "14px",
    }),
    indicatorSeparator: (base) => ({
        ...base,
        display: "none"
    }),
    ValueContainer: (base) => ({
        ...base,
        display: "none"
    }),
    placeholder: (base) => ({
        ...base,
        fontWeight: 400,
        fontSize: "14px",
        color: "var(--grey)",
    }),
    IndicatorsContainer: (base) => ({
        ...base,
        height: "32px"
    }),
};

export default function SelectCustom({ data, placeholder }) {
    const [value, setValue] = useState("");
    const handleChange = (selectedOption) => {
        setValue(selectedOption);
    };

    return (
        <div className='custom-select'>
            <Select
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                options={data}
                defaultValue={data?.[0]}
                styles={style}
            />
        </div>
    )
}

