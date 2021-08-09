import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { strings } from "../../data";
import styles from "./UpdateSuccessDialog.module.scss";

interface Props {
  open: boolean;
  onClose: Function;
}

const UpdateSuccessDialog = ({ open, onClose }: Props) => {
  const contents = strings.editForm.dialog.success;

  return (
    <div>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <p className={styles.dialog__title}>{contents.title}</p>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <p
              className={styles.dialog__body}
              dangerouslySetInnerHTML={{ __html: contents.body }}
            ></p>
          </DialogContentText>
        </DialogContent>
        <DialogActions
          style={{ justifyContent: "center", marginBottom: "0.25rem" }}
        >
          <Button
            onClick={() => onClose()}
            autoFocus
            className={styles.dialog__confirm}
          >
            <p className={styles.dialog__confirm__text}>
              {contents.actions.confirm}
            </p>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UpdateSuccessDialog;
