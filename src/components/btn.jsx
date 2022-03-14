import React from 'react';

const Btn = ({children,OnClick}) => {
    return ( 
        <button onClick={OnClick}>
            {children}
        </button>
     );
}
 
export default Btn;