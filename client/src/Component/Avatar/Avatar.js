import React from "react";

function Avatar({
  children,
  backgroundColor,
  px,
  py,
  Color,
  borderRadius,
  fontSize,
  cursor,
}) {
  const style = {
    backgroundColor,
    padding: `${px} ${py}`,
    color: Color || "black",
    borderRadius,
    fontSize,
    textAlign: "center",
    cursor: cursor || null,
    textDecoration: "none",
  };
  return <div style={style}>{children}</div>;
}

export default Avatar;
