import { addons } from "@storybook/manager-api";
import { storybookTheme } from "./storybookTheme";

addons.setConfig({
  theme: storybookTheme,
  sidebar: {
    showRoots: true
  },
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: false },
    eject: { hidden: true },
    copy: { hidden: false },
    fullscreen: { hidden: false }
  }
});
