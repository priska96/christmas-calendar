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
  bgcolor: "rgba(255,255,255,0.7)",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  color: "black"
};

const gifts = {
  0: { title: "야! 속이지마!", content: "좀만 참아라~~", type: "text" },
  1: { title: "Hi", content: "<333", type: "text" },
  2: { title: "I love you", content: "love", type: "text" },
  3: { title: "Coupon", content: "./snack-coupon.png", type: "img" },
  24: { title: "Movie Coupon", content: "./24-movie-coupon.png", type: "img" }
};

function DoorModal(props) {
  const id = props.id;
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    setOpen(props.doorModal);
  }, [props.doorModal, open]);

  function content(gift) {
    if (gift.type === "text") {
      return (
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {gift.content}
        </Typography>
      );
    } else if (gift.type === "img") {
      return (
        <img id="modal-modal-description" src={gift.content} alt={gift.title} />
      );
    }
  }
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
        {Object.keys(gifts).includes(id.toString())
          ? content(gifts[id])
          : "Content"}
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
