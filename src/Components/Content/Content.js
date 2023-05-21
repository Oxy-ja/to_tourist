import React from "react";
import './content.css';

import Text from "./Text/Text";
import SecondTitle from "./SecondTitle/SecondTitle";
import Towns from "./Towns/Towns";

const Content = () => {
  return (
    <div className='content'>
      <Text />
      <SecondTitle />
      <Towns />
    </div>
  )
}

export default Content