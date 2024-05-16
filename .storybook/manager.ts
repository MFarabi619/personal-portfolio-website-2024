import {addons} from "@storybook/manager-api"
import {create} from "@storybook/theming"

addons.setConfig({
// theme: themes.dark,
theme: create({
    base: "light",

    brandTitle: "Mumtahin Farabi",
    brandUrl: "https://mfarabi.dev",
    brandImage: ""
  })
})
