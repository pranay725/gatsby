const colors = require(`./colors`).default

module.exports = {
  colors,
  Mobile: `@media (min-width: 400px)`,
  Phablet: `@media (min-width: 550px)`,
  Tablet: `@media (min-width: 750px)`,
  Desktop: `@media (min-width: 1000px)`,
  Hd: `@media (min-width: 1200px)`,
  radius: 2,
  radiusLg: 4,
  animation: {
    curveDefault: `cubic-bezier(0.4, 0, 0.2, 1)`,
    speedDefault: `250ms`,
    speedFast: `100ms`,
    speedSlow: `350ms`,
  },
  zIndex: {
    main: 20,
    logo: 5,
    header: 10,
  },
  gutter: {
    default: 20,
    tablet: 40,
    desktop: 60,
  },
  offset: 45,
}