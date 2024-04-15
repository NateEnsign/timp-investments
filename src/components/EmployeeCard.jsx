import React, { useState } from "react";
import Modal from "react-modal";
import styles from "./EmployeeCard.module.css";
import { X } from 'lucide-react';

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.55)",
    overflow: "hidden",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#F4F3F1",
    border: "none",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", 
    borderRadius: "8px",
    padding: "20px",
    maxWidth: "80%",
    maxHeight: "85%",
    overflow: "auto",
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
              <X className={styles.btnX} />
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
