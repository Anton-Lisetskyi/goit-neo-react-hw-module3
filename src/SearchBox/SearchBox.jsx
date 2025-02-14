import PropTypes from "prop-types";
import styles from "./SearchBox.module.css";

const SearchBox = ({ filter, onFilterChange }) => {
  return (
    <div className={styles.searchBox}>
      <input
        type="text"
        value={filter}
        onChange={onFilterChange}
        placeholder="Search by name..."
        className={styles.searchInput}
      />
    </div>
  );
};

SearchBox.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default SearchBox;
