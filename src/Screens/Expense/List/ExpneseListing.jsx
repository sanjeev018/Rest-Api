import React, { useEffect, useState } from "react";
import SideNavLayout from "../../../Components/Layouts/SideNavLayout/SideNavLayout";
import axios from "axios";

const ExpneseListing = () => {
  const [number, setNumber] = useState([]);
  const [optionValue, setOptionValue] = useState("");
  const stateProvince = [stateProvince];
  console.log("optionValue", optionValue);

  const handleSelectChange = (e) => {
    setOptionValue(e.target.value);
  };

  const getAllState = number.map((numbers) => {
    return numbers?.["state-province"];
  });

  const countryData = () => {
    axios
      .get(" http://universities.hipolabs.com/search?country=india")
      .then((res) => {
        setNumber(res?.data);
        //  console.log(res?.data)
      })
      .catch((err) => {
        console.log(err, "err is here");
      });
  };

  useEffect(() => {
    countryData();
  }, []);

  return (
    <SideNavLayout>
      <div>
        <select value={optionValue} onChange={handleSelectChange}>
          {getAllState?.map((stateProvince, index) => {
            return (
              <option key={index} value={stateProvince}>
                {" "}
                {stateProvince}{" "}
              </option>
            );
          })}
        </select>
      </div>
    </SideNavLayout>
  );
};

export default ExpneseListing;
