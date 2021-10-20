import * as React from "react";
import "./styles.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";
import DoorModal from "./DoorModal";
import { connect } from "react-redux";

import { openDoor, closeDoor } from "./redux/Counter/counter.actions";

const useStyles = makeStyles({
  titleContainer: {
    width: "70%"
  },
  doorItem: {
    height: "130px",
    perspective: "1000px",
    transformStyle: "preserve-3d",
    cursor: "pointer",
    display: "flex",
    minHeight: "100%",
    width: "100%",
    backgroundColor: "transparent !important",
    padding: "0 !important",
    "&:hover .door": {
      borderColor: "#385052"
    }
  }
});

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary
}));

function App(props) {
  const classes = useStyles(props);
  const [opened, setOpened] = React.useState(0);

  return (
    <Container className="App">
      <Container className={classes.titleContainer}>
        <h1>메리 크리스마스</h1>
        <h2>자기야~~ 이 크리스마스 달력을 즐기길 {"<"}3</h2>
      </Container>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {props.doorNumbers.map((day) => {
            return (
              <Grid key={day} item xs={4}>
                <Item
                  className={classes.doorItem}
                  onClick={() => {
                    /* const today = new Date().getDate();
                    if (today < day) {
                      if (props.doors.includes(day)) {
                        props.closeDoor(day);
                      }
                      props.openDoor(0);
                      setOpened(0);
                      return;
                    } */
                    if (props.doors.includes(day)) {
                      props.closeDoor(day);
                    } else {
                      props.openDoor(day);
                      setOpened(day);
                    }
                  }}
                >
                  <div
                    className={
                      props.doors && props.doors.includes(day)
                        ? "door opened"
                        : "door"
                    }
                  >
                    <div className="front">{day}</div>
                    <div className="back"></div>
                  </div>
                </Item>
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <DoorModal id={opened} />
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    doorNumbers: state.doors.numbers,
    doors: state.doors.doors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openDoor: (day) => dispatch(openDoor(day)),
    closeDoor: (day) => dispatch(closeDoor(day))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
