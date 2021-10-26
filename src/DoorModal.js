import * as React from "react";

import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import { connect } from "react-redux";

import { closeDoorModal, lightCandle } from "./redux/Counter/counter.actions";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "85%",
  maxWidth: 400,
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 3,
  color: "black"
};

const styleMedia = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  //width: 400,
  bgcolor: "transparent",
  //border: "2px solid #000",
  //boxShadow: 24,
  p: 0,
  color: "black"
};
const styleEmbed = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  //width: 400,
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 0,
  color: "black"
};
const styleAdvent = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "transparent",
  //border: "2px solid #000",
  //boxShadow: 24,
  p: 0,
  color: "white"
};

const gifts = {
  0: { title: "야! 속이지마!", content: "좀만 참아라~~", type: "text" },
  1: {
    title: "My Only Wish This Year",
    subtitle: "© Britney Spears",
    content: "./My-Only-Wish-This-Year.m4a",
    img: "./IMG_7006.jpg",
    id: 1,
    type: "mp3"
  },
  2: { title: "Crosword Puzzle", content: "./crossword1.png", type: "img" },
  3: { title: "Coupon", content: "./snack-coupon.png", type: "img" },
  4: {
    title: "Bible Verses - Just something to read",
    content: "./bible-verses-red.png",
    type: "img"
  },
  5: {
    title: "2nd Advent",
    content: "Click to light the candle",
    candle: 2,
    before: "./1st-candle.png",
    after: "./2nd-candle.png",
    backdropBefore: "rgba(0,0,0,0.8)",
    backdropAfter: "rgba(0,0,0,0.6)",
    type: "advent"
  },
  6: {
    title: "Christmas Game",
    content: "Baby, since you love games so much, enjoy this game!",
    link: "https://gamilab.com/play/8ec45ee1-dbb5-436d-926d-b5e2af7097a6",
    linkName: "Christmas in Germany",
    type: "game"
  },
  7: {
    title: "Thank You!",
    content: "./thank-you.png",
    type: "img"
  },
  8: {
    title: "Long Distance Love",
    subtitle: "© Brandon",
    content: "./Long-Distance-Love.m4a",
    img: "./IMG_1162.JPG",
    id: 8,
    type: "mp3"
  },
  9: { title: "Coupon", content: "./coffee-coupon.png", type: "img" },
  10: {
    title: "Memory Game",
    subtitle: "Baby, since you love games so much, enjoy this game!",
    content:
      '<iframe src="https://wordwall.net/embed/ed1d34b450764ff99c87c1e6e7c0c846?themeId=2&templateId=25" width="500" height="380" frameborder="0" allowfullscreen></iframe>',
    type: "embed"
  },
  11: {
    title: "내 눈엔",
    subtitle: "Unknown",
    content: "./In-My-Eyes.m4a",
    img: "./IMG_0384.jpg",
    id: 8,
    type: "mp3"
  },
  12: {
    title: "3rd Advent",
    content: "Click to light the candle",
    candle: 3,
    before: "./2nd-candle.png",
    after: "./3rd-candle.png",
    backdropBefore: "rgba(0,0,0,0.6)",
    backdropAfter: "rgba(0,0,0,0.3)",
    type: "advent"
  },
  13: {
    title: "Bible Verses - Just something to read",
    content: "./bible-verses-blue.png",
    type: "img"
  },
  15: {
    title: "Christmas Game",
    content: "Baby, since you love games so much, enjoy this game!",
    link: "https://gamilab.com/play/78b5d5e3-245a-42f4-a9b5-a74a85a33927",
    linkName: "Dating in Seoul",
    type: "game"
  },
  16: {
    title: "All I Want For Christmas Is You",
    subtitle: "© Mariah Carey",
    content: "./All-I-Want-For-Christmas-Is-You.m4a",
    img: "./IMG_7006.jpg",
    id: 16,
    type: "mp3"
  },
  17: { title: "", content: "", type: "" },
  18: { title: "", content: "", type: "" },
  19: {
    title: "4th Advent",
    content: "Click to light the candle",
    candle: 4,
    before: "./3rd-candle.png",
    after: "./4th-candle.png",
    backdropBefore: "rgba(0,0,0,0.3)",
    backdropAfter: "rgba(0,0,0,0)",
    type: "advent"
  },
  20: {
    title: "Memory Game",

    subtitle: "Baby, since you love games so much, enjoy this game!",
    content:
      '<iframe src="https://wordwall.net/embed/bd4a91466be04ff1a1c300668d714ad6?themeId=2&templateId=25" width="500" height="380" frameborder="0" allowfullscreen></iframe>',
    type: "embed"
  },
  21: { title: "Crosword Puzzle", content: "./crossword2.png", type: "img" },
  22: { title: "Coupon", content: "./coffee-coupon.png", type: "img" },
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
    } else if (gift.type === "embed") {
      return (
        <Box sx={styleEmbed}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {gift.title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {gift.subtitle}
          </Typography>
          <div dangerouslySetInnerHTML={{ __html: gift.content }}></div>
        </Box>
      );
    } else if (gift.type === "game") {
      return (
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {gift.title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {gift.content}
            <br />
            <a href={gift.link} target="_blank" rel="noreferrer">
              {gift.linkName}
            </a>
          </Typography>
        </Box>
      );
    } else if (gift.type === "img") {
      return (
        <Box sx={styleMedia}>
          <img
            id="modal-modal-description"
            src={gift.content}
            alt={gift.title}
          />
        </Box>
      );
    } else if (gift.type === "advent") {
      return (
        <React.Fragment>
          <Box sx={styleAdvent}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {gift.title}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {gift.content}
            </Typography>

            {props.candles.includes(gift.candle) ? (
              <img className="advent" src={gift.after} alt={gift.title} />
            ) : (
              <img
                className="advent"
                onClick={() => {
                  props.lightCandle(gift.candle);
                }}
                src={gift.before}
                alt={gift.title}
              />
            )}
          </Box>
          {props.candles.includes(gift.candle) ? (
            <Backdrop
              sx={{
                color: "#fff",
                zIndex: (theme) => theme.zIndex.drawer + 1,
                bgcolor: gift.backdropAfter
              }}
              open={open}
              onClick={() => props.closeDoorModal(false)}
            ></Backdrop>
          ) : (
            <Backdrop
              sx={{
                color: "#fff",
                zIndex: (theme) => theme.zIndex.drawer + 1,
                bgcolor: gift.backdropBefore
              }}
              open={open}
              onClick={() => {
                props.lightCandle(gift.candle);
              }}
            ></Backdrop>
          )}
        </React.Fragment>
      );
    } else if (gift.type === "mp3") {
      return (
        <Box sx={styleMedia}>
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
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  pl: 1,
                  pr: 1,
                  pb: 1
                }}
              >
                <audio id={"audio-" + gift.id} controls>
                  <source src={gift.content} type="audio/mp4" />
                </audio>
              </Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image={gift.img}
              alt={gift.title}
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
    doorModal: state.doors.doorModal,
    candles: state.doors.candles
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeDoorModal: (open) => dispatch(closeDoorModal(open)),
    lightCandle: (light) => dispatch(lightCandle(light))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DoorModal);
