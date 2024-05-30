import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";


import { fetchCities } from "@/utils/utilities/weatherFunction";

const Search = ({ onSearchChange }) => {
  const [searchValue, setSearchValue] = useState(null);

  const loadOptions = async (inputValue) => {
    const citiesList = await fetchCities(inputValue);

    return {
      options: citiesList.data.map((city) => {
        return {
          value: `${city.latitude} ${city.longitude}`,
          label: `${city.name}, ${city.countryCode}`,
        };
      }),
    };
  };

  const onChangeHandler = (enteredData) => {
    setSearchValue(enteredData);
    onSearchChange(enteredData);
  };

  return (
    <>
      <div className="bg-slate-800 text-red-600">
        <AsyncPaginate
          placeholder="Search for cities"
          debounceTimeout={600}
          value={searchValue}
          onChange={onChangeHandler}
          loadOptions={loadOptions}
        />
      </div>
    </>
  );
};

export default Search;
