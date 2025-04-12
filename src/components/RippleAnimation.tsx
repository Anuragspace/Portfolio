
import { memo } from 'react';

const RippleAnimation = memo(() => {
  return (
    <div className="ripple-loader">
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
    </div>
  );
});

RippleAnimation.displayName = "RippleAnimation";

export default RippleAnimation;
