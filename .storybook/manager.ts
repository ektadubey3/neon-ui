import { addons } from "@storybook/manager-api";
import { neonTheme } from "./neonTheme";

addons.setConfig({
  theme: neonTheme,
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
