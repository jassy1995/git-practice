import { useState } from "react";
import "../filter.css";
import FilterCheckbox from "../components/FilterCheckbox";

export default function FilterExample() {
    const [search, setSearch] = useState(0);
    const [value, setValue] = useState(0);
    const [higherValue, setHigherValue] = useState(0);
    const [colorChecker, setColorChecker] = useState("");

    const [isFiltersOpen, setIsFiltersOpen] = useState(false);

    const toggleFilter = () => setIsFiltersOpen(!isFiltersOpen);

    const dummyData = [
        {
            id: Math.floor(Math.random() * 9999999),
            type: "red",
            value: 100
        },
        {
            id: Math.floor(Math.random() * 9999999),
            type: "red",
            value: 200
        },
        {
            id: Math.floor(Math.random() * 9999999),
            type: "green",
            value: 300
        },
        {
            id: Math.floor(Math.random() * 9999999),
            type: "red",
            value: 400
        },
        {
            id: Math.floor(Math.random() * 9999999),
            type: "green",
            value: 500
        },
        {
            id: Math.floor(Math.random() * 9999999),
            type: "green",
            value: 600
        },
        {
            id: Math.floor(Math.random() * 9999999),
            type: "green",
            value: 700
        },
        {
            id: Math.floor(Math.random() * 9999999),
            type: "red",
            value: 800
        },
        {
            id: Math.floor(Math.random() * 9999999),
            type: "red",
            value: 900
        },
        {
            id: Math.floor(Math.random() * 9999999),
            type: "green",
            value: 1000
        }
    ];
    return (
        <div className="App">
            <header>
                <button className="toggle-filters" onClick={toggleFilter}>
                    Filters
                </button>
            </header>

            <h1 className="primary-heading">
                React Filter Data with filter() and map()
            </h1>

            <div className={`${isFiltersOpen ? "" : "hide"} fixed-container`}>
                <FilterCheckbox
                    search={search}
                    value={value}
                    higherValue={higherValue}
                    colorChecker={colorChecker}
                    setSearch={setSearch}
                    setValue={setValue}
                    setHigherValue={setHigherValue}
                    setColorChecker={setColorChecker}
                />
            </div>

            {/* Data Display */}
            <div className="container">
                {dummyData
                    .filter((item) => item.value > value)
                    .filter((item) => item.value > higherValue)
                    .filter((item) => item.value > Number(search))
                    .filter((item) => {
                        if (colorChecker === "") return item;
                        return item.type === colorChecker;
                    })
                    .map((item) => {
                        return (
                            <div
                                key={item.id}
                                className={item.type === "red" ? "text-red" : "text-green"}
                            >
                                <p>{item.value}</p>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}
