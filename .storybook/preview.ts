import { type Preview } from "@storybook/vue3";
// import { registerPlugins } from "../src/plugins";

// setup((app) => {
//     registerPlugins(app);
// });

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
};

export default preview;