import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from "../../molecules/Dropdown/Dropdown";
import Typography from "../../atoms/Typography/Typography";
import Icon from "../../atoms/Icons/IconButton";
import Logo from "../../atoms/Logo/Logo";
import SearchIcon from "../../../images/search.svg";
import ExtendedNav from "../../organisms/ExtendedNav/ExtendedNav";
import Constants from "../../../data/Constants";

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        body1: {
          fontFamily: "Cera Pro",
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "16px",
          lineHeight: "20px",
          color: "#03314B",
        },
      },
    },
  },
});

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#ffffff",
    gap: "40px",
    height: "86px",
    margin: "0 auto",
    width: "912px",
  },
  logo: {
    width: "124.09px",
    height: "26px",
    alignSelf: "center",
  },
  library: {
    alignSelf: "center",
    color: "#03314B",
    fontFamily: "Cera Pro",
    fontSize: "16px",
    lineHeight: "20px",
    cursor: "pointer",
    "&:hover": {
      borderBottom: "1px solid #22C870",
    },
  },
  explore: {
    alignSelf: "center",
    "&:hover": {
      borderBottom: "1px solid #22C870",
    },
  },
  account: {
    marginLeft: "auto",
    alignSelf: "center",
  },
}));

const Header = () => {
  const [showExplore, setShowExplore] = useState(false);
  const [iconStyle, SetIconStyle] = useState({
    transform: "rotate(0deg)",
  });

  const navigate = useNavigate();

  const showDropdown = () => {
    showExplore ? setShowExplore(false) : setShowExplore(true);

    if (showExplore) {
      SetIconStyle({ transform: "rotate(0deg)" });
    } else {
      SetIconStyle({ transform: "rotate(180deg)" });
    }
  };

  const style = useStyles();
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container>
          <Box className={style.root}>
            <Logo className={style.logo} />
            <Icon>
              <img src={SearchIcon} alt="icon" />
            </Icon>
            <Dropdown
              title={Constants.header.link1}
              className={style.explore}
              onClick={showDropdown}
              style={iconStyle}
            />
            <Typography
              variant="body1"
              className={style.library}
              onClick={() => navigate("/")}
            >
              {Constants.header.link2}
            </Typography>
            <Dropdown title="Account" className={style.account} />
          </Box>
        </Container>
        {showExplore ? <ExtendedNav /> : null}
      </ThemeProvider>
    </>
  );
};

export default Header;
