import React from 'react';

interface child {
    element: React.ReactNode;
}

const ContentPage = (props: child) => {
    return (
        <div className={`w-full min-h-[400px]`}>
            {props.element}
        </div>
    );
};

export default ContentPage;