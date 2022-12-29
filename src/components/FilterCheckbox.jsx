import React, { useRef } from "react";

const FilterCheckbox = (props) => {
    const { search, value, higherValue, colorChecker, setSearch, setValue, setHigherValue, setColorChecker } = props;
    const checkboxRef = useRef(null);

    const resetFilter = (e) => {
        e.preventDefault();
        setSearch(0);
        setValue(0);
        setHigherValue(0);
        setColorChecker("");
        checkboxRef.current.checked = false;
    };
    return (
        <div className="filter-form">
            <form>
                <label htmlFor="filter-search" className="custom-search">
                    <span>Filter the Value Greater than input number</span>
                    <input
                        type="number"
                        id="filter-text"
                        className="filter-text"
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                        }}
                    />
                </label>
                <label htmlFor="filter-checkox" className="custom-checkbox">
                    <span>Greater than 500</span>
                    <input
                        ref={checkboxRef}
                        type="checkbox"
                        id="filter-checkox"
                        className="filter-checkox"
                        value="500"
                        onChange={(e) => {
                            e.target.checked
                                ? setHigherValue(e.target.value)
                                : setHigherValue(0);
                        }}
                    />
                </label>
                <label htmlFor="filter-range" className="custom-range">
                    <span>Range Slider : {value} </span>
                    <input
                        type="range"
                        min="0"
                        max="1000"
                        step="100"
                        id="filter-range"
                        className="filter-range"
                        value={value}
                        onInput={(e) => setValue(e.target.value)}
                    />
                </label>
                <select
                    className="custom-select"
                    value={colorChecker}
                    onChange={(e) => setColorChecker(e.target.value)}
                >
                    <option value="">All</option>
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                </select>

                <button className="reset-filter-button" onClick={(e) => resetFilter(e)}>
                    Reset Filter
                </button>
            </form>
        </div>
    );
};

export default FilterCheckbox;
