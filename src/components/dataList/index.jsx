import { Checkbox, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { DataStyle } from "./style";
import { useState } from "react";

export default function DataList({ item, fun }) {
  const [complete, setComplete] = useState(false);

  const date = item.name.Date;

  function DateConversion(date) {
    const today = new Date();
    let tomorrow = new Date();

    tomorrow.setDate(today.getDate() + 1);

    let input = new Date(date);
    if (today.getDate() === input.getDate()) {
      return "Today " + input.toLocaleTimeString();
    } else if (tomorrow.getDate() === input.getDate()) {
      return "Tomorrow " + input.toLocaleTimeString();
    } else {
      let date = input.toLocaleDateString();
      let time = input.toLocaleTimeString();
      return `${date} ${time}`;
    }
  }
  console.log(date, "date");

  const completeHandler = () => setComplete(complete ? false : true);
  return (
    <Box>
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
                textDecoration: complete ? "line-through" : "none",
              }}
            >
              {item?.name?.Text}
            </Typography>
            <Typography
              sx={DataStyle.dateSx}
              style={{
                textDecoration: complete ? "line-through" : "none",
              }}
            >
              {DateConversion(item?.name?.Date)}
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={4} sm={4} md={4} lg={4}>
          <Grid container>
            <Grid item xs={6} sm={6} md={6} lg={6}>
              <Box sx={DataStyle.checkboxSx}>
                <Checkbox
                  onClick={completeHandler}
                  // onClick={()=> func(item.id)}
                  icon={<RadioButtonUncheckedIcon sx={{ color: "#20EEB0 " }} />}
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
                onClick={() => fun(item.id)}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
