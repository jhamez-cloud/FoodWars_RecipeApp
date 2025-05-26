import React from 'react';
interface SearchButtonProps {
    text:string;
}

const SearchButton = (props:SearchButtonProps) => {
    return (
        <button className={`bg-yellow-300 text-black text-sm p-2 rounded-md`}>
            {props.text}
        </button>
    );
};

export default SearchButton;