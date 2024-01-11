import {
  Grid,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  useTheme,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import classImage from "../../../../../../assets/sample1.jpg";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const getPendingStudents = (students) => {
  let counter = 0;
  if (students === null || students === undefined) return counter;
  students.forEach((student) => {
    if (student.status === "Pending") {
      counter++;
    }
  });
  return counter;
};
const getAcceptedStudents = (students) => {
  let counter = 0;
  if (students === null || students === undefined) return counter;
  students.forEach((student) => {
    if (student.status === "Accepted") {
      counter++;
    }
  });
  return counter;
};

const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));

const ClassCard = ({ teacherClass }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const viewSelectedClass = (classCode, classTitle, classSection) => {
    navigate(`/teacher/classes/${classTitle}`, {
      state: { classCode: classCode, classSection: classSection },
    });
  };

  return (
    <Card variant="outlined">
      <CardMedia
        component="img"
        image={classImage}
        alt="random"
        sx={{ height: 100 }}
      />
      <CardContent>
        <Grid container spacing={1}>
          <Grid item>
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: 600,
              }}
            >
              {teacherClass.title} ({teacherClass.section})
            </Typography>
            <Typography
              sx={{
                fontSize: "13px",
                fontWeight: 500,
                color: "gray",
              }}
            >
              {teacherClass.description}
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 400,
              }}
            >
              {teacherClass.code}
            </Typography>
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            columns={16}
          >
            <Grid item md={8} sx={{ display: "flex", pl: 1 }}>
              <BootstrapTooltip title="Total Enrolled Students">
                <PersonIcon color="primary" />
              </BootstrapTooltip>
              <Typography
                sx={{
                  fontSize: "13.5px",
                  pt: 0.5,
                }}
              >
                {getAcceptedStudents(teacherClass.students)}
              </Typography>
            </Grid>
            <Grid
              item
              md={8}
              sx={{ display: "flex", justifyContent: "flex-end", pr: 1 }}
            >
              <BootstrapTooltip title="Total Pending Students">
                <PersonIcon color="error" />
              </BootstrapTooltip>
              <Typography
                sx={{
                  fontSize: "13.5px",
                  pt: 0.5,
                }}
              >
                {getPendingStudents(teacherClass.students)}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>

      <CardActions
        sx={{
          justifyContent: "center",
          borderTop: `1px solid ${theme.palette.divider}`,
          padding: 0,
        }}
      >
        <Button
          sx={{
            height: 1,
            width: 1,
            padding: 1,
          }}
          color="inherit"
          onClick={() => {
            viewSelectedClass(
              teacherClass.code,
              teacherClass.title,
              teacherClass.section
            );
          }}
        >
          View
        </Button>
      </CardActions>
    </Card>
  );
};

export default ClassCard;
