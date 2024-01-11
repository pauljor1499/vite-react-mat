import { useDispatch } from "react-redux";
import React from "react";
import { Box, useTheme, IconButton } from "@mui/material";

import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import { deleteSchedItem } from "../../../../../../store/slices/teacher/TeacherCreateClass";

const CreatedSchedItem = ({ props }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { index, day, timeStart, timeEnd, isInvalid } = props;
  return (
    <ListItem
      sx={{
        border: `1px solid ${
          isInvalid ? theme.palette.error.main : theme.palette.divider
        }`,
        borderRadius: 2,
        mb: 1,
      }}
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          title="Delete"
          onClick={() => dispatch(deleteSchedItem(index))}
        >
          <HighlightOffRoundedIcon color="error" size="small" />
        </IconButton>
      }
    >
      <ListItemText
        primary={day}
        secondary={
          <React.Fragment>
            <Box
              component="span"
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <Box
                component="span"
                sx={{ display: "flex", flexDirection: "row" }}
              >
                <AccessTimeIcon
                  sx={{ color: "#747474", mr: 1 }}
                  fontSize="small"
                />
                {`${timeStart} - ${timeEnd}`}
              </Box>
            </Box>
          </React.Fragment>
        }
      />
    </ListItem>
  );
};

export default CreatedSchedItem;
