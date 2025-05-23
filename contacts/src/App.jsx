import React, { useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { MdAddCircle } from "react-icons/md";
import "./App.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";

import ContactCard from "./components/ContactCard";
import Modal from "./components/Modal";
import { IoClose } from "react-icons/io5";

export default function App() {
  const [contacts, setContacts] = useState([]);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getContacts = async () => {
      setLoading(true);
      try {
        const contactCollection = collection(db, "contacts");
        const contactSnapShot = await getDocs(contactCollection);
        const contactList = contactSnapShot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setContacts(contactList);
        setLoading(false);
      } catch (err) {
        setError(err);
      }
    };
    getContacts();
  }, []);

  if (error) {
    <div>Error in fetching data...</div>;
  }
  if (loading) {
    <div>Loading data...</div>;
  }

  const [isOpen ,setIsOpen]=useState(false);

  function onOpen(){
    setIsOpen((prev)=>!prev);
  }

  function onClose(){
    setIsOpen(false);
  }

  return (
    <>
    <div className="container">
      <div className="navbar">
        <div className="logo">
          <img
            src="https://logowik.com/content/uploads/images/firebase.jpg"
            height="30px"
            alt=""
          />
        </div>
        <h1>Firebase Contact App</h1>
      </div>
      <div className="input-container">
        <div className="input">
          <IoMdSearch />
          <input type="search" placeholder="Search here..." />
        </div>
        <MdAddCircle onClick={onOpen} className="add" />
      </div>
      <div className="contacts">
        {contacts.map((contact) => {
          return (
            <ContactCard key={contact.id} name={contact.name} email = {contact.email}/>
           
          );
        })}
      </div>
    <Modal isOpen={isOpen} onClose={onClose}>
      
    </Modal>
    </div>
    </>
  );
}
