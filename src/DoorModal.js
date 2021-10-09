import * as React from "react";

import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import { connect } from "react-redux";

import { closeDoorModal } from "./redux/Counter/counter.actions";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  //width: 400,
  bgcolor: "transparent",
  border: "2px solid #000",
  boxShadow: 24,
  p: 0,
  color: "black"
};

const gifts = {
  0: { title: "야! 속이지마!", content: "좀만 참아라~~", type: "text" },
  1: {
    title: "My Only Wish This Year",
    subtitle: "Britney Spears (Cover by Priska)",
    content: "./My-Only-Wish-This-Year.m4a",
    id: 1,
    type: "mp3"
  },
  2: { title: "I love you", content: "love", type: "text" },
  3: { title: "Coupon", content: "./snack-coupon.png", type: "img" },
  4: { title: "Coupon", content: "./snack-coupon.png", type: "img" },
  5: { title: "Coupon", content: "./snack-coupon.png", type: "img" },
  6: { title: "Coupon", content: "./snack-coupon.png", type: "img" },
  8: { title: "Coupon", content: "./snack-coupon.png", type: "img" },
  9: { title: "Coupon", content: "./snack-coupon.png", type: "img" },
  10: { title: "Coupon", content: "./snack-coupon.png", type: "img" },
  11: { title: "Coupon", content: "./snack-coupon.png", type: "img" },
  12: { title: "Coupon", content: "./snack-coupon.png", type: "img" },
  13: { title: "Coupon", content: "./snack-coupon.png", type: "img" },
  15: { title: "Coupon", content: "./snack-coupon.png", type: "img" },
  16: { title: "Coupon", content: "./snack-coupon.png", type: "img" },
  17: { title: "Coupon", content: "./snack-coupon.png", type: "img" },
  18: { title: "Coupon", content: "./snack-coupon.png", type: "img" },
  19: { title: "Coupon", content: "./snack-coupon.png", type: "img" },
  20: { title: "Coupon", content: "./snack-coupon.png", type: "img" },
  21: { title: "Coupon", content: "./snack-coupon.png", type: "img" },
  22: { title: "Coupon", content: "./snack-coupon.png", type: "img" },
  23: { title: "Coupon", content: "./snack-coupon.png", type: "img" },
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
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {gift.title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {gift.content}
          </Typography>
        </Box>
      );
    } else if (gift.type === "img") {
      return (
        <img id="modal-modal-description" src={gift.content} alt={gift.title} />
      );
    } else if (gift.type === "mp3") {
      return (
        <Box sx={style}>
          <Card sx={{ display: "flex" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  {gift.title}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  {gift.subtitle}
                </Typography>
              </CardContent>
              <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
                <audio id={"audio-" + gift.id} controls>
                  <source src={gift.content} type="audio/mp4" />
                </audio>
              </Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image="./snack-coupon.png"
              alt="Live from space album cover"
            />
          </Card>
        </Box>
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
      {Object.keys(gifts).includes(id.toString())
        ? content(gifts[id])
        : "Content"}
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
