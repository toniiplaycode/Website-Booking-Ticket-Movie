import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { useDispatch, useSelector } from "react-redux";
import { confirmDialog, hiddenDialog } from "../reducers/dialogAlert";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function AlertDialog() {
  const dispatch = useDispatch();

  const showDialog = useSelector((state) => state.dialogAlert.showDialog);

  return (
    <>
      <Dialog
        open={showDialog}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
      >
        <div className="dialog">
          <DialogTitle>{"Chắc chắn xoá chứ ?"}</DialogTitle>
          <DialogActions className="dialog-btn-container">
            <Button
              className="dialog-btn"
              onClick={() => {
                dispatch(hiddenDialog());
                dispatch(confirmDialog(false));
              }}
            >
              Đóng
            </Button>
            <Button
              className="dialog-btn ok"
              onClick={() => {
                dispatch(hiddenDialog());
                dispatch(confirmDialog(true));
              }}
            >
              Xoá
            </Button>
          </DialogActions>
        </div>
      </Dialog>
    </>
  );
}
