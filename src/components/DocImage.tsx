import React, { useState } from "react";

export const DocImage = (props) =>  {
  return <div class="quickstart-image">
    <img src={ props.src } alt={ props.alt } class="center"></img>
  </div>
};