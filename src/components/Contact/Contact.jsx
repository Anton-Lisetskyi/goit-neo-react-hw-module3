import PropTypes from "prop-types";
import styles from "./Contact.module.css";
import { FaPhoneAlt, FaUser } from "react-icons/fa";

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <li className={styles.contactItem}>
      <div className={styles.contactData}>
        <span className={styles.contactName}>
          <FaUser className={styles.contactIcon} />
          {name}
        </span>
        <span className={styles.contactNumber}>
          <FaPhoneAlt className={styles.phoneIcon} /> {number}
        </span>
      </div>
      <button className={styles.deleteButton} onClick={() => onDelete(id)}>
        <span className={styles.deleteText}>Delete</span>
      </button>
    </li>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Contact;
