import React from "react";
import Select from "react-select";

export default function MultiSelect({ options, onCreateOption, setValue, value, label }) {
    const selectHandler = (val) => {
        setValue(val);
    }

    const style = {
        control: (base, state) => {
            const shadow = state?.hasValue ? '0 0 0 1px var(--white)' : null;
            const shadowIsOpen = state?.menuIsOpen ? '0 0 0 1px var(--white)' : null;
            return ({
                ...base,
                border: "0",
                boxShadow: shadow ? shadow : shadowIsOpen,
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
            minHeight: "32px"
        }),
        menu: (base) => ({
            ...base,
            marginTop: "2px",
            background: "#161616"
        }),
        option: (base) => ({
            ...base,
            background: base.isSelected ? "red" : "#161616",
            position: "relative",
            paddingLeft: "16px",
            paddingRight: "16px",
            fontWeight: 400,
            fontSize: "14px",
            pointerEvent: "visible",
            zIndex: 9,

            ':after': {
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M19.5002 5.99927L9.00024 17.9993L4.50024 13.4993' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M19.5002 5.99927L9.00024 17.9993L4.50024 13.4993' stroke='%235F5F5F' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A")`,
                borderRadius: 10,
                content: '" "',
                display: 'block',
                position: "absolute",
                right: "16px",
                top: "50%",
                transform: "translateY(-50%)",
                minHeight: 24,
                width: 24,
                opacity: 0,
            },
            ':before': {
                borderRadius: 10,
                content: '" "',
                position: "absolute",
                right: "0",
                top: "0",
                height: "100%",
                width: "100%",
                cursor: "pointer"
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
        indicatorSeparator: (base) => ({
            ...base,
            display: "none"
        }),
        clearIndicator: (base) => ({
            ...base,
            display: "none",
        }),
        dropdownIndicator: (base) => ({
            ...base,
            display: "none",
        }),
        multiValue: (base) => ({
            ...base,
            border: "1px solid var(--greenyellow)",
            background: "var(--black)",
            padding: "4px"
        }),
        multiValueLabel: (base) => ({
            ...base,
            color: "var(--white)",
        }),
        multiValueRemove: (base) => ({
            ...base,
            color: "var(--grey)",
            cursor: "pointer",
            background: "transparent",
            ":hover": {
                background: "transparent",
            }
        })
    };

    return (
        <Select
            isMulti
            options={options}
            onChange={(newValue) => selectHandler(newValue)}
            value={value}
            placeholder={label}
            styles={style}
        />
    );
}
