import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import { countries } from "../../api";

const CountryPicker = ({ countryChangeListener }) => {
  const [presentCountries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      setCountries(await countries());
    };
    fetchCountries();
    //console.log(presentCountries);
  }, []);

  //console.log(presentCountries);
  if (!countries) {
    return "Loading...";
  }

  return (
    <div>
      <FormControl className={styles.formControl}>
        <NativeSelect
          defaultValue=""
          onChange={async (e) => await countryChangeListener(e.target.value)}
        >
          <option value="">Global</option>
          {presentCountries.map((country, i) => {
            return (
              <option value={country} key={i}>
                {country}
              </option>
            );
          })}
        </NativeSelect>
      </FormControl>
    </div>
  );
};

export default CountryPicker;
