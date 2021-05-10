import React from 'react'

function Header({ total }) {
  return (
    <>
      <div className="toast-header">
        <strong className="me-auto">Image Grid</strong>
        <small>Click on an image to remove it</small>
      </div>
      <div className="toast-body">
        Display images of varying heights in <code>{total}</code> columns, such that the column height balances out
      </div>
    </>
  );
}

export default Header