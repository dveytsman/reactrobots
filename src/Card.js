import React, { useEffect, useState } from "react";

export const Card = ({ robot }) => {
  const { id, name, email } = robot;
  return (
    <div className="tc bg-light-purple dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="robots" src={`https://picsum.photos/id/${id}/200/200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};
