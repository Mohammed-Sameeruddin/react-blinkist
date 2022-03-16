import { ComponentMeta, ComponentStory } from "@storybook/react";
import { createTheme, ThemeProvider } from "@mui/material";
import DisplayCard from "./DisplayCard";
import Data from "../../../data/Library";

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

export default {
  title: "Display Card",
  component: DisplayCard,
} as ComponentMeta<typeof DisplayCard>;

const Template: ComponentStory<typeof DisplayCard> = args => (
  <ThemeProvider theme={theme}>
    <DisplayCard {...args} />
  </ThemeProvider>
);

export const DisplayCardStory = Template.bind({});
DisplayCardStory.args = {
  title: "Trending",
  data: Data,
};
