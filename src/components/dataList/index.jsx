import { Checkbox, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { DataStyle } from "./style";

export default function DataList({ item, fun }) {
 
  return (
    <Box>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item xs={8}>
          <Box mt={2} mb={1}>
            <Typography sx={DataStyle.noteSx}>{item?.name?.Text}</Typography>
            <Typography sx={DataStyle.dateSx}>{item?.name?.Date}</Typography>
          </Box>
        </Grid>

        <Grid item xs={4}>
          <Grid container ml={3}>
            <Grid item sx={{ color: "#20EEB0 " }} xs={6}>
              <Checkbox ml={1}
                icon={
                  <RadioButtonUncheckedIcon
                    sx={{ color: "#20EEB0 "}}
                  />
                }
                checkedIcon={<CheckCircleIcon />}
              />
            </Grid>
            <Grid item xs={6} mt={1}>
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
