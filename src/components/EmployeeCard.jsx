import React from 'react'
import styles from './EmployeeCard.module.css'

const EmployeeCard = ({member}) => {
  return (
    <div className={styles.main}>
    <button className={styles.employeeCard}>
        <img src={member.img} alt="" className={styles.img} />
        <div className={styles.name}>{member.name}</div>
        <div className={styles.title}>{member.title}</div>
    </button>
    </div>
  )
}

export default EmployeeCard
