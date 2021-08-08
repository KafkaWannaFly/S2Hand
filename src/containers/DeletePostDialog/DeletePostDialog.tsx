import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { strings } from "../../data";
import styles from "./DeletePostDialog.module.scss";

interface Props {
  open: boolean;
  onConfirm: Function;
  onCancel: Function;
}

const DeletePostDialog = ({ open, onConfirm, onCancel }: Props) => {
  const contents = strings.dashboard.dialog.delete;

  return (
    <div>
      <Dialog
        open={open}
        onClose={() => onCancel()}
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
          style={{ justifyContent: "flex-end", marginBottom: "0.25rem" }}
        >
          <Button
            onClick={() => onConfirm()}
            className={styles.dialog__confirm}
          >
            <p className={styles.dialog__confirm__text}>
              {contents.actions.confirm}
            </p>
          </Button>

          <Button
            onClick={() => onCancel()}
            autoFocus
            className={styles.dialog__cancel}
          >
            <p className={styles.dialog__cancel__text}>
              {contents.actions.cacel}
            </p>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DeletePostDialog;
