import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const Home = ({ formData }) => {
  return (
    <div className="page section">
      <div className={styles.container}>
        <h1>User Details</h1>

        <div className={styles.details}>
          <p>
            Name: <span className={styles.data}>{formData.name || "NA"}</span>
          </p>
          <p>
            Phone No: <span className={styles.data}>{formData.phnNo || "NA"}</span>
          </p>
          <p>
            Address: <span className={styles.data}>{formData.address || "NA"}</span>
          </p>
          <p>
            Email: <span className={styles.data}>{formData.email || "NA"}</span>
          </p>
        </div>

        <Link to="/form">
          <button type="submit" className={styles.button}>
            Fill details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
