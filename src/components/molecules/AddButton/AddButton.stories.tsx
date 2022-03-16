import { ComponentMeta, ComponentStory } from "@storybook/react";
import { createTheme, ThemeProvider } from "@mui/material";
import Typography from "../../atoms/Typography/Typography";
import AddButton from "./AddButton";
import IconWithTypography from "../IconWithTypography/IconWithTypography";
import { ReactComponent as Add } from "../../../images/add.svg";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        text: {
          textTransform: "none",
        },
      },
    },
  },
});

export default {
  title: "Add Button",
  component: AddButton,
} as ComponentMeta<typeof AddButton>;

const Template: ComponentStory<typeof AddButton> = args => (
  <ThemeProvider theme={theme}>
    <AddButton {...args} />
  </ThemeProvider>
);

export const AddLibrary = Template.bind({});

AddLibrary.args = {
  children: (
    <IconWithTypography
      iconSrc={<Add />}
      variant="body1"
      title="Add to library"
    />
  ),
  style: {
    width: "183px",
    height: "52px",
  },
};

export const Connect = Template.bind({});

Connect.args = {
  children: <Typography variant="body1">connect</Typography>,
  style: {
    width: "296px",
    height: "44px",
  },
};
