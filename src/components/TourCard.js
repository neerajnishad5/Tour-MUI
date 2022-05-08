import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Rating from "@mui/material/Rating";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body2",
          },
          style: {
            fontSize: 11,
          },
        },
        {
          props: {
            variant: "body3",
          },
          style: {
            fontSize: 9,
          },
        },
      ],
    },
  },
});

const TourCard = ({ tour }) => {
  return (
    <Grid item xs={3}>
      <ThemeProvider theme={theme}>
        <Paper elevation={5}>
          <img className="img" src= {tour.image} alt="niagara falls"></img>

          <Box paddingX={1}>
            <Typography variant="subtitle1" component="h2">
              {tour.name}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <AccessTimeIcon
                sx={{
                  width: 12.5,
                }}
              />

              <Typography variant="body2" component="p" marginLeft={0.5}>
                {tour.duration} hours
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
              marginTop={3}
            >
              <Rating
                name="read-only"
                value={tour.rating}
                size="small"
                readOnly
                precision={0.5}
              />

              <Typography variant="body2" component="p" marginLeft={0.5}>
                {tour.rating}
              </Typography>

              <Typography
                margin="2"
                variant="body2"
                component="p"
                marginLeft={0.5}
              >
                ({tour.numberOfViews} reviews)
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" component="h3" marginLeft={1.5}>
                From C {tour.price}
              </Typography>
            </Box>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
};

export default TourCard;
