import React, { useState } from "react";
import { CreateQuotationListContext } from "../../context/todocontext";
import { NoteStyle } from "./style";
import {
  Box,
  Card,
  Grid,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import InputText from "../../components/input/index";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import AddIcon from "@mui/icons-material/Add";
import DataList1 from "../../components/dataList/datalist";

export const CreateTodo = (props) => {
  const { step, todo } = React.useContext(CreateQuotationListContext);
  const [data, setData] = useState({
    date: "",
    text: "",
  });

  const id = uuidv4();

  const date = moment().format("ddd D");
  let [time, setTime] = React.useState(new Date());
  time = moment().format("LT");
  console.log(step, "stepdata");

  const handleChange = (val, key) => {
    setData({ ...data, [key]: val, id, complete: false });
  };

  const handleSubmit = () => {
    if (data.date && !data.text) {
      console.log("enter text");
      document.getElementById("err").innerText = "Text Required ";
    } else if (!data.date && data.text) {
      console.log("enter date");
      document.getElementById("err").innerText = "Date Required";
    } else if (!data.date && !data.text) {
      console.log("enter text ..! enter Date..!");
      document.getElementById("err").innerText = "Text & Date Required";
    } else if (data.date && data.text) {
      document.getElementById("err").innerText = " ";
      console.log("succcesss");
    todo(data);
    setData("");
    }
  };

  React.useEffect(() => {
    const myInterval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <>
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
                  <Box sx={NoteStyle.TitleSx}>
                    <h3 style={{ marginTop: "0px" }}>Todo App</h3>
                  </Box>
                  <Grid container>
                    <Grid item xs={10} lg={10} md={10} sm={10}>
                      <Box sx={NoteStyle.noteSx}>
                        <InputText
                          placeholder="Notes"
                          fullWidth
                          size="small"
                          type="text"
                          // onChange={(e) => todo(e.target.value, "text")}
                          onChange={(e) => handleChange(e.target.value, "text")}
                          value={data.text}
                        />
                        <input
                          type="datetime-local"
                          className="datestyle"
                          onChange={(e) => handleChange(e.target.value, "date")}
                          value={data.date}
                        />
                      </Box>
                      <span style={NoteStyle.errorSx} id="err"></span>
                    </Grid>

                    <Grid item xs={2} sm={2} md={2} lg={2}>
                      <Box sx={NoteStyle.addiconSx}>
                        <Button
                          sx={{ color: "#fff" }}
                          onClick={handleSubmit }
                          type="submit"
                        >
                          <AddIcon />
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                  <Box overflow={"auto"} height={"300px"} mt={1}>
                    <DataList1 />
                  </Box>
                </CardContent>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
