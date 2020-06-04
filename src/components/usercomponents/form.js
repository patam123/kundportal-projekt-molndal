import React from 'react';

function createForm({handleSumbit,inputType})
{
    return (
        <div>
        
        <form onSubmit={handleSumbit}>
        <input type={inputType}/>
        <button type="submit">Submit</button>        
        </form>
        
        </div>

    );
}
export {createForm};