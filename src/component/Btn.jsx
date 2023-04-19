import React from 'react';

const Btn = ({title,btnStyle}) => {
    const mainStyle = "btn btn-primary"
    return (
        <div className={btnStyle?btnStyle: mainStyle}>{title?title :"btn"}</div>
    );
}

export default Btn;
