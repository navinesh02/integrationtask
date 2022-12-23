import { NoteStyle } from "./style";
import DataList from "../../components/dataList";
import {
  Box,
  Card,
  Grid,
  CardContent,
  CardMedia,
  Typography,
  Button,
  InputBase,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import React, { useReducer } from "react";

export const ACTIONS = {
  ADD_TODO: "add_todo",
  DELETE_TODO: "delete_todo",
};
function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];

    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);

    default:
      return todos;
  }
}

function newTodo(name) {
  return { id: Date.now(), name: name };
}

export default function Notes() {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const d = new Date();
  const date = weekday[d.getDay()].slice(0, 3) + " " + d.getDate();
  const am_pm = d.getHours() >= 12 ? "PM" : "AM";
  const hours = d.getHours() >= 12 ? `${d.getHours() - 12}` : d.getHours();
  const time = hours + ":" + d.getMinutes() + " " + am_pm;

  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState({ Text: "", Date: "" });
  const handleChange = (val, key) => {
    setName({ ...name, [key]: val });
  };

  function handleSubmit(e) {
    if (name.Date && name.Text === "") {
      console.log("enter text");
    } else if (name.Date === "" && name.Text) {
      console.log("enter date");
    } else if (name.Date === "" && name.Text === "") {
      console.log("enter text ..! enter Date..!");
    } else if (name.Date && name.Text) {
      console.log("succcesss");
      e.preventDefault();
      dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
      setName("");
    }
  }
  console.log(todos);

  const handleDelete = (id) => {
    dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: id } });
    console.log("delete", id);
  };

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          lg={12}
          sm={12}
          md={12}
          display={"flex"}
          justifyContent={"center"}
        >
          <Card sx={NoteStyle.cardSx}>
            <Box>
              <Grid display={"flex"} justifyContent={"flex-end"}>
                <Box sx={NoteStyle.dateSx}>
                  <Typography
                    style={{
                      fontSize: "14px",
                      fontFamily: "Russo One",
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    {" "}
                    {date}{" "}
                  </Typography>
                  <Typography
                    style={{ fontSize: "28px", fontFamily: "Russo One" }}
                  >
                    {time}
                  </Typography>
                </Box>
              </Grid>
              <CardMedia
                component="img"
                height="150"
                src={require("../../assets/images/flower.png")}
                alt="flower"
              />
              <CardContent sx={NoteStyle.cardcontentSx}>
                <Grid container>
                  <Grid item xs={10} lg={10} md={10} sm={10}>
                    <Box sx={NoteStyle.noteSx}>
                      <InputBase
                        placeholder="Notes"
                        fullWidth
                        size="small"
                        type="text"
                        onChange={(e) => handleChange(e.target.value, "Text")}
                      />

                      <input
                        type="datetime-local"
                        onChange={(e) => handleChange(e.target.value, "Date")}
                        className="datestyle"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={2} sm={2} md={2} lg={2}>
                    <Box sx={NoteStyle.addiconSx}>
                      <Button sx={{ color: "#fff" }}>
                        <AddIcon
                          sx={{ color: "#fff" }}
                          onClick={handleSubmit}
                        />
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
                <Box overflow={"auto"} height={"300px"} mt={1}>
                  {todos.map((val) => {
                    return (
                      <>
                        <DataList item={val} fun={handleDelete} />
                      </>
                    );
                  })}
                </Box>
              </CardContent>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
