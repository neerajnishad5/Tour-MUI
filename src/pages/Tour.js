import { Container, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import CustomizedAccordions from "../components/Accordion";
import ImageCollage from "../components/ImageCollage";
import BottomNavigation from "@mui/material/BottomNavigation"; 
import Paper from "@mui/material/Paper";
import BasicModal from "../components/Modal";

const Tour = () => (
  <Container sx={{ width: 900 }}>
    <Typography variant="h3" component={"h1"} marginTop={3}>
      Explore the World in Vegas!
    </Typography>
    <Box marginTop={3} sx={{ display: "flex" }}>
      <img
        src={
          "https://cdn.thetealmango.com/wp-content/uploads/2021/07/Las-Vegas-MAIN.jpg"
        }
        alt={"Nothing"}
        height={325}
      />
      <ImageCollage />
    </Box>
    <Box>
      <Typography variant="h6" component={"h4"} marginTop={3}>
        About this ticket
      </Typography>
      <Typography variant="paragraph" component={"p"} marginTop={3}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </Typography>
    </Box>
    <Box marginBottom={10}>
      <Typography variant="h6" component={"h4"} marginTop={3}>
        Frequently Asked Questions
      </Typography>
      <Typography
        variant="paragraph"
        component={"p"}
        marginTop={3}
        marginBottom={3}
      ></Typography>
      <CustomizedAccordions />
    </Box>

    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation  >
        <BasicModal />
      </BottomNavigation>
    </Paper>
  </Container>
);

export default Tour;
