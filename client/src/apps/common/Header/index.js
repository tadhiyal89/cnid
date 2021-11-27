import React from 'react';
import './style/index.css';

/**
 *
 * @function header
 * @export
 * @param {*} props
 * @returns it will return header html
 */
export default function header(props) {
  const { title } = props;
  return <div className="main-header"><h1 className="title-heading">{title}</h1></div>;
}
