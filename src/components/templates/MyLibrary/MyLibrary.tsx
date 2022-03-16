import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material";
import Typography from "../../atoms/Typography/Typography";
import Header from "../../organisms/Header/Header";
import Tabs from "../../organisms/Tab/Tab";
import Footer from "../../organisms/Footer/Footer";
import Constants from "../../../data/Constants";

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        h1: {
          color: "#03314B",
          fontFamily: "Cera Pro",
          fontSize: "36px",
          lineHeight: "45px",
          fontStyle: "normal",
          fontWeight: "700",
        },
      },
    },
  },
});

const useStyles = makeStyles(theme => ({
  root: {
    margin: "0px",
    padding: "0px",
    boxSizing: "border-box",
  },
  heading: {
    marginTop: "59px",
  },
}));

const MyLibrary = () => {
  const style = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={style.root}>
        <Header />
        <Container>
          <Box sx={{ width: "912px", margin: "59px auto " }}>
            <Typography variant="h1" className={style.heading}>
              {Constants.header.heading}
            </Typography>
            <Tabs />
          </Box>
        </Container>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default MyLibrary;
