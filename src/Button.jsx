import React from "react";

const Button = ({src = "", callback, style = {}, className="", children}) => {
    return src
    ? <img alt="" src={src} onClick={callback} style={style} className={className} ></img>
    : <button onClick={callback} className={className}>{children}</button>
}
export default Button