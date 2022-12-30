import { Checkbox, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { DataStyle } from "./style";
import React from "react";
import { CreateQuotationListContext } from "../../context/todocontext";
import moment from "moment/moment";


export default function DataList1(props) {
  const { step, deletedata, slash } = React.useContext(
    CreateQuotationListContext
  );

  const completeHandler = (id) => {
    slash(id);
  };

  function handleDelete(id) {
    deletedata(id);
  }
  console.log("livedate");

  function Checkdate(input) {
    let inputdate = moment(input).format("YYYY-MM-DD");
    let inputtime = moment(input).format("hh:mm A");
    let tomorrow = moment().add(1, "days").format("YYYY-MM-DD");
    let today = moment().format("YYYY-MM-DD");
    if (today == inputdate) {
      return "Today " + inputtime;
    } else if (tomorrow == inputdate) {
      return "Tommorow " + inputtime;
    } else {
      return inputdate + " " + inputtime;
    }
  }

  return (
    <Box>
      {step?.map((item) => {
        return (
          <>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              // width={"auto"}
            >
              <Grid item xs={8} sm={8} md={8} lg={8}>
                <Box mt={2} mb={1}>
                  <Typography
                    sx={DataStyle.noteSx}
                    style={{
                      textDecoration: item.complete ? "line-through" : "none",
                    }}
                  >
                    {item.text}
                  </Typography>
                  <Typography
                    sx={DataStyle.dateSx}
                    style={{
                      textDecoration: item.complete ? "line-through" : "none",
                    }}
                  >
                    {Checkdate(item.date)}
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={4} sm={4} md={4} lg={4}>
                <Grid container>
                  <Grid item xs={6} sm={6} md={6} lg={6}>
                    <Box sx={DataStyle.checkboxSx}>
                      <Checkbox
                        onClick={() => completeHandler(item.id)}
                        icon={
                          <RadioButtonUncheckedIcon
                            sx={{ color: "#20EEB0 " }}
                          />
                        }
                        checkedIcon={<CheckCircleIcon />}
                      />
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    sm={6}
                    md={6}
                    lg={6}
                    mt={1}
                    display={"flex"}
                    justifyContent={"space-around"}
                  >
                    <DeleteOutlineIcon
                      sx={{ color: "#FF4545" }}
                      onClick={() => handleDelete(item.id)}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </>
        );
      })}
    </Box>
  );
}
