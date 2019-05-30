# Privacy Choices

Privacy Choices is a JavaScript library that allows you to give the users of your website choices regarding the use of cookies and other web storage technologies on their device. Configured correctly, this library should make your site compliant with EU legislation.

<img src="https://github.com/benjeh32/privacy-choices/raw/master/examples/images/readme-prompt.png" alt="Privacy Choices banner prompt" />

<img src="https://github.com/benjeh32/privacy-choices/raw/master/examples/images/readme-toggle.png" alt="Privacy Choices choices toggle" />

<img src="https://github.com/benjeh32/privacy-choices/raw/master/examples/images/readme-settings.png" alt="Privacy Choices choices menu" width="400"/>

## Overview

### History

#### ePrivacy Directive

Under the Privacy and Electronic Communications Directive 2002/58/EC on Privacy and Electronic Communications (ePrivacy Directive), since 2003 anyone storing information on users' devices has been required to provide clear information about that storage [(1)][1].

In May 2011 the ePrivacy Directive was amended by Directive 2009/136/EC. A requirement to obtain consent for cookies and
similar technologies was added, meaning it was no longer enough to simply let a user know that storage was being used [(1)][1].

In summary, as of May 2019 [(2)][2]:

```
The ePrivacy directive – more specifically Article 5(3) – requires prior informed consent for storage or for access to information stored on a user's terminal equipment. In other words, you must ask users if they agree to most cookies and similar technologies (e.g. web beacons, Flash cookies, etc.) before the site starts to use them.
```

#### GDPR

The General Data Protection Regulation (EU) 2016/679 (GDPR) was implemented in 2018 and specifies how personal data should be lawfully processed (including how it is collected, used, protected or interacted with) [(3)][3]. While GDPR doesn't say anything about how cookies and other online identifiers should be used, it does specifically name them as types of personal data [(4)][4].

As a result, after the implementation of GDPR the use of web storage is still governed by the ePrivacy Directive [(5)][5]. However, if a website uses storage that could identify or track a user then that website now has to comply with GDPR data-handling requirements as well [(4)][4].

#### TL;DR

- From 2003 - websites had to tell users about using the storage they use
- From 2011 - websites also had to obtain user consent before using this storage
- From 2018 - websites using storage also need to comply with GDPR data-handling requirements

### Why this was created

### Features and compliance

#### Customisation

The following features are customisable:

- All text (headings, descriptions, buttons) - but this should remain clear and unambiguous if it is changed.
- Colour of buttons, backgrounds and text - but this should remain user friendly if changed.
- Number of days before consent expires and the user has to re-consent - depending on your use case, as per GDPR.
- Whether the policy link is displayed, and the URI to it (if shown) - you may already have links to this you wish to keep.
- Titles and descriptions of the consent categories - add as many or few as required - every category  must be covered.
- The JavaScript callbacks that are executed when a user accepts and rejects their consent for each category - these should entirely manage your storage usage from now on, turning on and off its use as appropriate.
- The JavaScript callback that is executed when a user first loads the page - the 'strictly necessary' category that stores the allowed exemptions.
- The consent categories that are accepted when the user chooses to 'accept and continue' from the banner prompt - one should probably only enable this for a category if it is mentioned in the banner prompt description to be as transparent as possible.

### Live demo

There is a live demo with the default configuration (just some categories added) [here](http://code.benthomas.me/privacy-choices).

### Use it on your website

#### Installation

#### Configuration

#### Responsiveness

Privacy Choices should scale appropriately so that it has good usability on smaller devices (e.g. mobile). However, to take advantage of this, you should configure the viewport on your site to support these devices:

```html
<head>
    ...
    <meta name="viewport" content="width=device-width, initial-scale=1">
    ...
</head>
```

More information on the browser's viewport can be found in the [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag).

## Development

### Status

[![CircleCI](https://circleci.com/gh/benjeh32/privacy-choices.svg?style=svg)](https://circleci.com/gh/benjeh32/privacy-choices)

### Prerequisites

- [Node.js](https://nodejs.org/)

### Installing dependencies

```console
npm install
```

### Building the bundle

#### Production mode

To build the bundle one time:

```console
npm run build
```

#### Development mode

To start the live-updating development build that will rebuild whenever a change is made to the JavaScript or CSS:

```console
npm run start
```

Either way, the library bundle that is built will be at `build/privacy-choices.bundle.js`.

### Using the bundle

After it is built, reference `build/privacy-choices.bundle.js` and use the library like normal. The example page at `examples/index.html` does this.

***Note:** This library stores the user's preferences in a cookie. Many popular browsers no longer support the use of cookies for `file://...` or `http://localhost/...` browsing so this may make development trickier. Most of the original development on this library was done using Microsoft Edge, which doesn't seem to mind local cookies.*

## License

Licensed under the [MIT License](https://github.com/benjeh32/privacy-choices/blob/master/LICENSE).


[1]: https://ico.org.uk/media/for-organisations/documents/1545/cookies_guidance.pdf
[2]: http://ec.europa.eu/ipg/basics/legal/cookies/index_en.htm
[3]: https://www.iubenda.com/en/help/5428-gdpr-guide
[4]: https://www.itgovernance.eu/blog/en/how-the-gdpr-affects-cookie-policies
[5]: https://www.iubenda.com/en/help/5525-cookies-gdpr-requirements