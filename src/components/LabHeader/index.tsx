import React from 'react';
import styles from './styles.module.css';

interface LabHeaderProps {
  location: string;
  locationUrl?: string;
  dateEstablished?: string;
}

const LabHeader : React.FC<LabHeaderProps> = ({ location, locationUrl='', dateEstablished='' }) => {
  return (
    <>
    <div className={styles.table}>
        <div className={styles.tableRow}>
          <div className={styles.tableHeader}>Location 📌</div>
          <div className={styles.tableCell}>
            {
              locationUrl ? (
                <a href={locationUrl} target="_blank">{location}</a>
              ) : (
                location
            )}
          </div>
        </div>
        <div className={styles.tableRow}>
          <div className={styles.tableHeader}>Date Established 🗓️</div>
          <div className={styles.tableCell}>{ dateEstablished }</div>
        </div>
    </div>

    <hr />
    </>
  )
};

export default LabHeader;