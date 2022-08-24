import React, { forwardRef, useState } from "react";
import PropTypes from "prop-types";

import images from "~/assets/images";

const Image = forwardRef(({ src, alt, className, fallback: customFallback }, ref) => {
  const [fallback, setFallback] = useState();

  const handleError = () => {
    if (customFallback) {
      setFallback(customFallback());
      return;
    }

    setFallback(images.notAvailable);
  };

  return (
    <img className={className} ref={ref} src={fallback || src} alt={alt} onError={handleError} />
  );
});

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  fallback: PropTypes.func,
};

Image.defaultProps = {
  src: images.notAvailable,
  className: ""
};

export default Image;
