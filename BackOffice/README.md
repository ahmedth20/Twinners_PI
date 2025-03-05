## File structure

    .
    ├── public                  # static files
    │   ├── favicon             # favicon files
    │   ├── index.html          # main HTML file
    ├── src                     # source files
    │   ├── assets              # media
    │   ├── components          # reusable components shared across the app
    │   ├── constants           
    │   ├── contexts            # context providers
    │   ├── db                  # dummy data
    │   ├── fonts               # local fonts (including icomoon)
    │   ├── hooks               
    │   ├── layout              # app layout components (sidebar, grid, etc.)
    │   ├── pages               
    │   ├── store               # redux store (main store file, features)
    │   ├── styles              # global app styles, keyframes, variables
    │   ├── UI                  # UI components (buttons, inputs, etc.)
    │   ├── utils               # helper functions (dates formatting, etc.)
    │   ├── widgets             
    │   ├── App.jsx             # main app component
    │   ├── AppLayout.jsx       
    │   ├── index.js            # main entry point
    │   ├── layouts.js          # app layouts
    │   └── ...
    ├── babel-plugin-macros.config.js   # babel macros config (for styled-components)
    ├── craco.config.js                 # Create React App config overrides (aliases, etc.)
    ├── jsconfig.json                   # IDE config
    └── ...

## Libraries

- [Redux](https://redux.js.org/) - state management
- [react-router](https://reactrouter.com/) - routing
- [Create React App Configuration Override](https://github.com/dilanx/craco)
- [styled-components](https://styled-components.com/)  -  CSS-in-JS
- [polished](https://polished.js.org/) - CSS helper functions
- [Material UI](https://material-ui.com/) - UI components
- [Framer Motion](https://www.framer.com/motion/) - animation library
- [Recharts](http://recharts.org/en-US/) - charts library
- [react-grid-layout](https://github.com/react-grid-layout/react-grid-layout) - draggable grid layout
- [dnd-kit](https://dndkit.com/) - drag and drop library
- [lodash](https://lodash.com/) - utility library
- [wavesurfer.js](https://wavesurfer-js.org/) - audio player
- [use-mobile-detect-hook](https://github.com/haldarmahesh/use-mobile-detect-hook) - device detection hook
- [swipeable-views](https://react-swipeable-views.com/)
- [swiper](https://swiperjs.com/) - carousel
- [rtl-detect](https://github.com/shadiabuhilal/rtl-detect)
- [@fontsource](https://github.com/fontsource/fontsource) - fonts library
- [nanoid](https://github.com/ai/nanoid) - unique ID generator
- [prop-types](https://reactjs.org/docs/typechecking-with-proptypes.html) - type checking
- [moment](https://momentjs.com/) - date formatting
- [react-countup]() - animated number counter
- [react-select](https://react-select.com/home) - select component
- [notistack](https://iamhosseindhv.com/notistack) - notifications
- [react-calendar](https://projects.wojtekmaj.pl/react-calendar/)
- [react-big-calendar](https://projects.wojtekmaj.pl/react-calendar/) - scheduler
- [react-bootstrap](https://react-bootstrap.github.io/) - bootstrap components
- [react-helmet](https://github.com/nfl/react-helmet) - document head manager
- [lottie-react](https://lottiefiles.com) - Lottie animations
- [react-rating](https://github.com/dreyescat/react-rating)
- [@south-paw/react-vector-maps](https://react-vector-maps.netlify.app)
- [country-state-city](https://github.com/harpreetkhalsagtbit/country-state-city) - country, state, city data
- [react-portal](https://github.com/tajo/react-portal)
- [react-dropzone](https://react-dropzone.js.org/) - drag and drop file upload
- [react-transition-group](https://reactcommunity.org/react-transition-group/) - animation transitions
- [react-datepicker](https://reactdatepicker.com/) - date picker
- [react-d3-speedometer](https://palerdot.in/react-d3-speedometer/?path=/story/reactspeedometer--default-with-no-config) - speedometer chart
- [react-sizeme](https://github.com/ctrlplusb/react-sizeme) - responsiveness helper
- [react-cardiogram](https://github.com/dmitriy-kudelko/react-cardiogram) - heart rate chart
- [react-indiana-drag-scroll](https://norserium.github.io/react-indiana-drag-scroll/) - draggable scroll
- [react-lines-ellipsis](https://xiaody.github.io/react-lines-ellipsis/) - text ellipsis
- [react-number-format](https://github.com/s-yadav/react-number-format) - number formatting
- [react-select-country-list](https://github.com/Chun-Lin/react-select-country-list)
