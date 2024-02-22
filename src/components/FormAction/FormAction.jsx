import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FormAction.module.css";

const FormAction = ({ setFormData }) => {
  const navigate = useNavigate();
  const [formData, setLocalFormData] = useState({
    name: "",
    phnNo: "",
    address: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(formData);
    navigate("/");
  };

  return (
    <div className="page section">
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2>Form Action</h2>

        <div className={styles.formContent}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className={styles.input}
          />

          <input
            type="text"
            name="phnNo"
            value={formData.phnNo}
            onChange={handleChange}
            placeholder="Phone Number"
            className={styles.input}
          />

          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            className={styles.input}
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className={styles.input}
          />
        </div>

        <div>
          <button type="submit" className={styles.button}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormAction;
