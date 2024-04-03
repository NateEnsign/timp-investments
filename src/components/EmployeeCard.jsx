import React, { useState } from "react";
import Modal from "react-modal";
import styles from "./EmployeeCard.module.css";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.55)", // Semi-transparent black overlay
    overflow: "hidden",
  },
  content: {
    top: "50%", // Center the modal vertically
    left: "50%", // Center the modal horizontally
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)", // Move the modal back to center
    backgroundColor: "#F4F3F1", // Background color of the modal
    border: "none", // No border
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Shadow effect
    borderRadius: "8px", // Rounded corners
    padding: "20px", // Padding inside the modal
    maxWidth: "80%", // Maximum width of the modal
    maxHeight: "85%", // Maximum height of the modal
    overflow: "auto", // Enable scrolling if content exceeds modal size
  },
};

Modal.setAppElement("#root");

const EmployeeCard = ({ member }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalIsOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div className={styles.main}>
      <button className={styles.employeeCard} onClick={openModal}>
        <img src={member.img} alt="" className={styles.img} />
        <div className={styles.name}>{member.name}</div>
        <div className={styles.title}>{member.title}</div>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className={styles.modalContent}>
          <div className={styles.imgContainer}>
            <img src={member.img} alt="" className={styles.modalImg} />
          </div>
          <div className={styles.modalText}>
            <button onClick={closeModal} className={styles.modalBtn}>
              X
            </button>
            
              <div className={styles.modalName}>{member.name}</div>
              <div className={styles.modalTitle}>{member.title}</div>
              <div className={styles.modalHistory}>{member.history}</div>
          
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default EmployeeCard;

// import React from 'react'
// import styles from './EmployeeCard.module.css'

// const EmployeeCard = ({member}) => {
//   return (
//     <div className={styles.main}>
//     <button className={styles.employeeCard} >
//         <img src={member.img} alt="" className={styles.img} />
//         <div className={styles.name}>{member.name}</div>
//         <div className={styles.title}>{member.title}</div>
//     </button>
//     </div>
//   )
// }

// export default EmployeeCard
