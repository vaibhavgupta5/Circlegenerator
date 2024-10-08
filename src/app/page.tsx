'use client'
import { useState } from 'react';

function ClickableDiv() {

  const [position, setPosition] = useState<{ top: number, left: number }[]>([]);

  // eslint-disable-next-line no-unused-vars
  const handleClick = (e: any) => {
    const x = e.clientX;
    const y = e.clientY;
    
    setPosition([...position, { top: y, left: x }]);
  };

  

  return (
   

    <div onClick={handleClick} style={{ height: '100vh', position: 'relative' }}>
  

  {position.map((position, index) => (
        <div
          key={index}
          className="bg-red-600 w-[50px] h-[50px] rounded-full justify-center items-center flex border-[2px] border-white absolute"
          style={{ top: `${position.top}px`, left: `${position.left}px` }}
        ></div>
      ))}
      </div>
  );
}

export default ClickableDiv;
