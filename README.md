# React Components [![Build Status](https://api.travis-ci.org/OrnamentStudio/components.svg?branch=master)](https://travis-ci.org/OrnamentStudio/components)

React components


## Install

```
npm install ornament-components
```

You also need to install peer dependencies by yourself
```
npm install react // v16.x.x
npm install prop-types // v15.x.x
npm install clsx // v2.x.x
```

This module works only with babel compiler since it uses jsx syntax and doesn't compile it on publish.

## Usage

```jsx
const EmaiLink = require('ornament-components/src/email_link');
const PhoneLink = require('ornament-components/src/phone_link');
const PopupLink = require('ornament-components/src/popup_link');
const Markdown = require('ornament-components/src/markdown');
const Meta, { Provider } = require('ornament-components/src/meta');
const ProgressiveImage = require('ornament-components/src/progressive-image');
```

## License

MIT © Abylay Keldibek
