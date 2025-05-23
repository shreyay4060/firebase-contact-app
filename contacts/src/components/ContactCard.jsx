import React from 'react'
import { IoMdContact } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

export default function ContactCard(contact) {
  return (
    <div>
       <div className="contact" key={contact.id}>
                    <IoMdContact className="icon" />
                    <div className="info">
                      <h3>{contact.name}</h3>
                      <p>{contact.email}</p>
                    </div>
                    <CiEdit className="icon" />
                    <MdDelete className="icon" />
        </div>
    </div>
  )
}
