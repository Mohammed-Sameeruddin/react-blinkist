import { styled } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material";
import Logo from "../../atoms/Logo/Logo";
import Typography from "../../atoms/Typography/Typography";
import FooterNav from "../FooterNav/FooterNav";
import data from "../../../data/FooterNav";
import Constants from "../../../data/Constants";

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        subtitle1: {
          fontFamily: "Cera Pro",
          fontWeight: "500",
          fontSize: "24px",
          lineHeight: "32px",
          color: "#0365F2",
        },
        caption: {
          fontFamily: "Cera Pro",
          fontSize: "14px",
          lineHeight: "22px",
          color: "#6D787E",
        },
      },
    },
  },
});

const FooterStyled = styled("div")({
  padding: "0px",
  boxSizing: "border-box",
  height: "370px",
  backgroundColor: "#F1F6F4",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "48px",
  marginTop: "20vh",
});

const FooterFrame = styled("div")({
  width: "952px",
  height: "224px",
  margin: "0 auto",
  position: "relative",
  top: "38px",
  display: "flex",
});

const LeftFrame = styled("div")({
  width: "378px",
  height: "120px",
});

const TypographyFrame = styled("div")({
  position: "relative",
  top: "32px",
  color: "#0365F2",
});

const RightFrame = styled("div")({
  width: "542px",
  height: "224px",
  display: "flex",
});

const BottomFrame = styled("div")({
  width: "546px",
  height: "22px",
  position: "relative",
  top: "48px",
  left: "24%",
});

const Footer = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <FooterStyled>
          <FooterFrame>
            <LeftFrame>
              <Logo />
              <TypographyFrame>
                <Typography variant="subtitle1">
                  {Constants.footer.description1}
                </Typography>
                <Typography variant="subtitle1">
                  {Constants.footer.description2}
                </Typography>
              </TypographyFrame>
            </LeftFrame>
            <RightFrame>
              <FooterNav title="Editorial" data={data.Editorial} />
              <FooterNav title="Useful Links" data={data.UsefulLinks} />
              <FooterNav title="Company" data={data.Company} />
            </RightFrame>
          </FooterFrame>
          <BottomFrame>
            <Typography variant="caption">{Constants.footer.footer}</Typography>
          </BottomFrame>
        </FooterStyled>
      </ThemeProvider>
    </>
  );
};

export default Footer;
