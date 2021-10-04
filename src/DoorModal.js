import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { connect } from "react-redux";

import { closeDoorModal } from "./redux/Counter/counter.actions";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  color: "black"
};

const gifts = {
  1: { title: "Hi", content: "<333" },
  2: { title: "I love you", content: "love" },
  3: { title: "annyeong", content: "kiss" }
};

function DoorModal(props) {
  const id = props.id;
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    setOpen(props.doorModal);
  }, [props.doorModal, open]);

  return (
    <Modal
      open={open}
      onClose={() => props.closeDoorModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {Object.keys(gifts).includes(id.toString())
            ? gifts[id].title
            : "Title"}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {Object.keys(gifts).includes(id.toString())
            ? gifts[id].content
            : "Content"}
        </Typography>
      </Box>
    </Modal>
  );
}

const mapStateToProps = (state) => {
  return {
    doorModal: state.doors.doorModal
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeDoorModal: (open) => dispatch(closeDoorModal(open))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DoorModal);
