import React from "react";

const Button = ({src = "", callback, style = {}, children, cls}) => {
    return src
    ? <img class={cls} alt="" src={src} onClick={callback} style={style} ></img>
    : <button class={cls} onClick={callback}>{children}</button>
}
export default Button