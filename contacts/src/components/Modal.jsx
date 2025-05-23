import React from 'react';
import { IoClose } from "react-icons/io5";

export default function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <>
      <div className="div" onClick={onClose} />
      <div className="modals">
        <div className="modal">
          <div className="cut">
            <IoClose onClick={onClose} />
          </div>
        </div>
      </div>
    </>
  );
}
