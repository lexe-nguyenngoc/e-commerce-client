import { useEffect, useRef } from 'react';

const useClickOutside = (handleOnClick) => {
  let domNode = useRef();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (domNode.current && !domNode.current.contains(event.target)) {
        handleOnClick();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  return domNode;
};

export default useClickOutside;
