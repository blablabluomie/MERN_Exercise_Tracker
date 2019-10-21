import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import Navbar from "./components/Navbar";
import ExercisesList from "./components/ExercisesList";
import EditExercise from "./components/EditExercise";
import CreateExercise from "./components/CreateExercise";
import CreateUser from "./components/CreateUser";
import { Container, Paper } from "@material-ui/core";
import "./App.css";

function App() {
  const useStyles = makeStyles({
    main: {
      marginTop: "85px",
      padding: "20px",
      height: "60vh"
    }
  });

  const classes = useStyles();

  return (
    <Router>
      <Navbar />
      <Container>
        <Paper className={classes.main} square>
          <Route path="/" exact component={ExercisesList} />
          <Route path="/edit/:id" component={EditExercise} />
          <Route path="/create" component={CreateExercise} />
          <Route path="/user" component={CreateUser} />
        </Paper>
      </Container>
    </Router>
  );
}

export default App;
