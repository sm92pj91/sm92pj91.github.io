import React from 'react';
import Select from 'react-select';

const ChallengeDropdown = ({challenges, callback}) => {
  return (
      <div className="container">
        <Select
            value={""}
            options={challenges.map(c => ({label: c.text, value: c}))}
            // onChange={opt => console.log(opt.label, opt.value)}
            onChange={opt => callback(opt.value)}
        />
      </div>
  )
};
export default ChallengeDropdown
