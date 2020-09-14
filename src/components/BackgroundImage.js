import React, { useState } from 'react';

const BackgroundImage = (props) => {
  const { name, image } = props;
  const [isShown, setIsShown] = useState(false);

  return (
    <>
      {isShown && (
        <div className="main__projects__item__img">
          <img src={image} alt={name} />
        </div>
      )}
    </>
  );
};

export default BackgroundImage;
