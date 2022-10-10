import React from "react";
import styles from "./modal.module.css";
import CancelIcon from "@mui/icons-material/Cancel";
import Button from "@mui/material/Button";
import { body } from "../../../index_DOM_Fetcher.js";

const Modal = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  const unfreezeBody = () => {
    body.style.overflow = "auto";
  };

  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modal}>
        <div className={styles.modalhead}>
          <div id={styles.modalHeader}>Add Role</div>
          <div>
            <Button id={styles.btnrole}>Save</Button>
          </div>
          <div>
            <CancelIcon
              style={{ cursor: "pointer" }}
              onClick={() => {
                onClose();
                unfreezeBody();
              }}
              className={`${styles.btnClose} btn-close`}
            />
          </div>
        </div>
        <div className={styles.modalbody}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
