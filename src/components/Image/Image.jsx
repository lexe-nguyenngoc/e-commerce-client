import React, { forwardRef, useState } from "react";
import PropTypes from "prop-types";

import images from "~/assets/images";

const Image = forwardRef(({ src, alt, fallback: customFallback }, ref) => {
  const [fallback, setFallback] = useState();

  const handleError = () => {
    if (customFallback) {
      setFallback(customFallback());
      return;
    }

    setFallback(images.notAvailable);
  };

  return (
    <img ref={ref} src={fallback || src} alt={alt} onError={handleError} />
  );
});

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string.isRequired,
  fallback: PropTypes.func,
};

Image.defaultProps = {
  src: images.notAvailable,
};

export default Image;
