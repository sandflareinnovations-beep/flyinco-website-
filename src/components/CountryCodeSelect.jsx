import React from 'react';
import { COUNTRY_CODES } from '../data/countryCodes';

// The dialling-code <select> shared by every phone field. `className` is passed
// through so each form keeps its own styling — the point of sharing is the
// option list, not the appearance.
const CountryCodeSelect = ({ value, onChange, className, name = 'countryCode' }) => (
    <select
        aria-label="Country code"
        name={name}
        value={value}
        onChange={onChange}
        className={className}
    >
        {COUNTRY_CODES.map(({ code, label }) => (
            <option key={code} value={code}>{label}</option>
        ))}
    </select>
);

export default CountryCodeSelect;
