/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
const React = require("react")

export const onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  setHeadComponents([
    <link rel="stylesheet" href="https://api.mapbox.com/mapbox-gl-js/v1.11.1/mapbox-gl.css" />,
    <link rel="stylesheet" href="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.5.1/mapbox-gl-geocoder.css" />,
    <script src="https://api.mapbox.com/mapbox-gl-js/v1.11.1/mapbox-gl.js"></script>,
    <script src="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.5.1/mapbox-gl-geocoder.min.js"></script>
  ])
}