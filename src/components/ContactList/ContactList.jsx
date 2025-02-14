import PropTypes from "prop-types";
import styles from "./Contacts.module.css";
import { FaPhoneAlt, FaUser } from "react-icons/fa";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={styles.contactList}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={styles.contactItem}>
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
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
