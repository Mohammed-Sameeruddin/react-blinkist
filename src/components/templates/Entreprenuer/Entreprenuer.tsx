import { makeStyles, styled } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "../../organisms/Header/Header";
import Banner from "../../organisms/Banner/Banner";
import SearchBar from "../../molecules/SearchBar/SearchBar";
import DisplayCard from "../../organisms/DisplayCard/DisplayCard";
import Footer from "../../organisms/Footer/Footer";
import BookData from "../../../data/Library";
import Constants from "../../../data/Constants";

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        h3: {
          fontFamily: "Cera Pro",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "24px",
          lineHeight: "30px",
          color: "#03314B",
        },
      },
    },
  },
});

const useStyles = makeStyles({
  banner: {
    position: "relative",
    top: "32px",
  },
});

const FirstSection = styled("div")({
  position: "relative",
  top: "100px",
  width: "912px",
  margin: "0 auto",
});

const SecondSection = styled("div")({
  position: "relative",
  top: "190px",
  width: "912px",
  margin: "0 auto",
});

const ThirdSection = styled("div")({
  width: "912px",
  margin: "0 auto",
  position: "relative",
  top: "290px",
});

const FooterStyled = styled("div")({
  marginTop: "380px",
});

const Entreprenuer = () => {
  const style = useStyles();
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Banner className={style.banner} />
        <SearchBar />
        <FirstSection>
          <DisplayCard
            title={Constants.entrepreneur.heading1}
            data={BookData}
            state="trending"
          />
        </FirstSection>
        <SecondSection>
          <DisplayCard
            title={Constants.entrepreneur.heading2}
            data={BookData}
            state="just added"
          />
        </SecondSection>
        <ThirdSection>
          <DisplayCard
            title={Constants.entrepreneur.heading3}
            data={BookData}
            state="featured"
          />
        </ThirdSection>
        <FooterStyled>
          <Footer />
        </FooterStyled>
      </ThemeProvider>
    </>
  );
};

export default Entreprenuer;
