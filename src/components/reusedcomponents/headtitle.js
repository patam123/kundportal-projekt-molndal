import React from 'react';

function HeadTitle({title}) {
    const divStyle = {
        fontSize: '20px',
      };
    return (
        <div>
                <p style={divStyle}>{title}</p>
        </div>
    );
}

export default HeadTitle;