# Privacy Choices

Privacy Choices is a JavaScript library that allows you to give the users of your website choices regarding the use of cookies and other web storage technologies on their device.

<img src="https://github.com/benjeh32/privacy-choices/raw/master/examples/images/readme-prompt.png" alt="Privacy Choices banner prompt" />

## Disclaimer

I am not a lawyer. You should independently verify - through your own research - that your use of this tool and your configuration of it henceforth is suitable to satisfy any legal requirements that you may be making use of it to satisfy.

**_If you are in any doubt, I strongly advise that you consult a legal professional before continuing._**

## Overview

### History

If your website is impacted by EU privacy legislation, it is worth doing your research into why the legislation exists, how you are affected and what exactly is required of you prior to implementing any solution on your website. To that end, in the expandable section below is a short collection of what I learnt during the creation of this library about EU privacy legislation and how it impacts the use of web storage technologies.

<details>

<summary>Show/hide section</summary>

#### ePrivacy Directive

Under the Privacy and Electronic Communications Directive 2002/58/EC on Privacy and Electronic Communications (ePrivacy Directive), since 2003 anyone storing information on users' devices has been required to provide clear information about that storage [(1)][1].

In May 2011 the ePrivacy Directive was amended by Directive 2009/136/EC. A requirement to obtain consent for cookies and
similar technologies was added, meaning it was no longer enough to simply let a user know that storage was being used [(1)][1].

In summary, as of May 2019 [(2)][2]:

_The ePrivacy directive – more specifically Article 5(3) – requires prior informed consent for storage or for access to information stored on a user's terminal equipment. In other words, you must ask users if they agree to most cookies and similar technologies (e.g. web beacons, Flash cookies, etc.) before the site starts to use them._

#### GDPR

The General Data Protection Regulation (EU) 2016/679 (GDPR) was implemented in 2018 and specifies how personal data should be lawfully processed (including how it is collected, used, protected or interacted with) [(3)][3]. While GDPR doesn't say anything about how cookies and other online identifiers should be used, it does specifically name them as types of personal data [(4)][4].

As a result, after the implementation of GDPR the use of web storage is still governed by the ePrivacy Directive [(5)][5]. However, if a website uses storage that could identify or track a user then that website now has to comply with GDPR data-handling requirements as well [(4)][4].

</details>

#### TL;DR

If you didn't bother to read that then at least take note of the the short version:

- From 2003 - websites have to tell users from the EU about the storage they use
- From 2011 - websites *also* have to obtain consent from the user before using this storage
- From 2018 - websites using storage *also* need to comply with GDPR data-handling requirements

### Why Privacy Choices was created

A friend of mine is involved with the [Nightline Association](https://www.nightline.ac.uk), a charity that supports student listening services open at night and run by students for students at nearly 40 educational institutes across the UK and Ireland. When attempting to identify a solution to handle their use of web storage across their websites and applications it became clear that there wasn't anything that quite fit their needs.

Few of the many free or open-source plugins available online really felt like the right fit as they were either missing certain desired functionality or required a significant amount of manual customisation to get the look and feel that was desired.

Conversely, a number of the available paid-for solutions seemed like exactly what was wanted but for a charity it just wasn't feasible to pay a yearly subscription to get access to the one or two 'pro-edition' features that they needed.

As a result, I decided to put together Privacy Choices. It is my attempt at a privacy management library that, while it might not have all of the bells and whistles of the subscription-based solutions, has a clean look and feel, an intuitive settings panel, is highly customisable, and is free to use.

### Live demo

There are a number of live demo examples with various configurations [here](http://code.benthomas.me/privacy-choices).

### Latest release

Head over to the [releases page](https://github.com/benjeh32/privacy-choices/releases) to get the latest version, compiled and ready to use.

<img style="text-align=center" src="https://github.com/benjeh32/privacy-choices/raw/master/examples/images/readme-settings.png" alt="Privacy Choices choices menu" width="400"/>

## Features

### What it has

- A notification banner prompting users to make their choices

- Equal-weighted options for accepting and denying full use of storage

- Privacy settings always available to the user through an on-screen toggle:

<img style="text-align=center" src="https://github.com/benjeh32/privacy-choices/raw/master/examples/images/readme-toggle.png" alt="Privacy Choices choices toggle" />

- A configurable list of storage categories that users can toggle on or off according to their preference in the settings sidebar

- Support for when only strictly-necessary storage is in use, whereby the library acts as an information tool about privacy on your site

- Option to display a link to your site's privacy policy

- Configurable number of days after which a user's choices will expire

- Stores user preferences in a cookie across all pages on the current domain

  - Sub-domains will have their own preferences - they will not be shared with each other or their parent domain

- JavaScript callbacks that execute when categories are toggled, allowing you to manage turning on and off your storage to respect your users' wishes

- Lots of customisation

### What it does not have

There are some things not covered by this library, which may or may not change in future releases. **Do your research** and reconsider whether to use Privacy Choices if your use case requires any of the below:

- Handling of third-party cookies

- Sharing users' preferences across a parent domain and its sub-domains

- Multiple language support

  - The default configuration has text in English (UK)
  
  - Currently, all text values can be overidden (which you could do in another language)

- Using users' geolocation to conditionally display the tool or not

### Customisation

#### Headings, descriptions and buttons

- Change the wording to better inform users about how you use storage on your site
- Alternatively, override with text in your own language
- If these are changed, you should ensure that the replacement text is clear and unambiguous

#### Colour of buttons, backgrounds and text

- Match the tool to your site's design by changing text and background colours
- You should keep things user-friendly if you change things - don't use these settings to trick users

#### Number of days before consent expires and the user has to re-consent

- After a configurable number of days users will be asked to provide their choices again
- Make sure your users stay in control by regularly reminding them to update their privacy settings
- The default reminder is every 90 days, and this can be changed to any value
- If changed, consider the context of your website when deciding how often to make users update settings

#### Privacy policy link

- Point users in the direction of your full privacy policy or other statement
- If you already have links to this that you wish to keep, the link can be disabled

#### Titles and descriptions of the consent categories

- Add as many or few categories as needed
- Every category you use must be covered, although these categories are defined by you according to your use case
- In the case of only using necessary storage, define no categories to enable 'informational mode'

#### JavaScript callbacks

- These should entirely manage your storage usage if you use this library
- There is one for:
  - The necessary category
  - Every custom category, when turned on
  - Every custom category, when turned off

## Use it on your website

### Installation

Include `privacy-choices.bundle.js` at the bottom of your `<body>`:

```html
<!DOCTYPE html>
<html>

<head>
    <title>Installation</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>

<body>
    <h1>Installation</h1>

    <p>The rest of the page content.</p>

    <!-- Include privacy-choices.bundle.js at the bottom of your <body> -->
    <script type="text/javascript" src="path/to/privacy-choices.bundle.js"></script>
</body>

</html>
```

This should be done anywhere that you wish to show the tool (probably everywhere). For the tool to be effective the library must be loaded at all times as soon as the user lands on any page on your site.

Depending on your framework (or lack thereof) a theme or template would be a good way to include the script because you would only need to do it in one place. Alternatively, you will have to include it on every static page.

### Responsiveness

Privacy Choices should scale appropriately so that it has good usability on smaller devices (e.g. mobile). However, to take advantage of this, you should configure the viewport on your site to support such devices:

```html
<head>
    ...
    <meta name="viewport" content="width=device-width, initial-scale=1">
    ...
</head>
```

More information on the browser's viewport can be found in the [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag).

### Configuration

Configuration is set as a JavaScript object `window.privacyChoicesConfiguration`. It is merged with the default configuration that can be seen further down this README, with the configuration you set on the page taking priority. You only need to set what you want to override.

The configuration setting should also be included in your `<body>`, but above the inclusion of the library itself:

```html
<!DOCTYPE html>
<html>

<head>
    <title>Configuration</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>

<body>
    <h1>Configuration</h1>

    <p>The rest of the page content </p>

    <!-- Add configuration to the bottom of the <body> before the library itself -->
    <script>
        window.privacyChoicesConfiguration = { }
    </script>

    <script type="text/javascript" src="path/to/privacy-choices.bundle.js"></script>
</body>

</html>
```

#### Minimal configuration

While it would be recommended to conmfigure some more things to suit you needs, the minimal configuration would only need to define the set of consent categories and the callbacks to manage the user's acceptance or non-acceptance of these.

```javascript
window.privacyChoicesConfiguration = {
    {
        necessary: {
            handle: function () {
                /*
                * This runs once, on page load.
                *
                * You should configure any strictly-necessary storage here.
                */
            }
        },
        categories: [
            {
                storageKey: 'example1',
                title: 'Category title',
                description: 'Category description.',
                handleAccept: function () {
                    /*
                    * This runs whenever the category is toggled ON, plus at page load if currently turned ON.
                    *
                    * You should set up, enable or configure any storage for this category here.
                    */
                },
                handleReject: function () {
                    /*
                    * This runs whenever the category is toggled OFF, plus at page load if currently turned OFF.
                    *
                    * You should tear down, disable or remove any storage for this category here.
                    */
                }
            },
            {
                storageKey: 'example2',
                title: 'Category 2 title',
                description: 'Category 2 description.',
                handleAccept: function () {
                    /*
                    * This runs whenever the category is toggled ON, plus at page load if currently turned ON.
                    *
                    * You should set up, enable or configure any storage for this category here.
                    */
                },
                handleReject: function () {
                    /*
                    * This runs whenever the category is toggled OFF, plus at page load if currently turned OFF.
                    *
                    * You should tear down, disable or remove any storage for this category here.
                    */
                }
            },
        ]
    }
```

### Informational mode

An alternate configuration of Privacy Choices is available in the case of a website that only uses necessary storage. In this case, a website need only inform the user that they use storage for making the site work and nothing more. Simply don't define the `categories` in the configuration and the library will run with a `Dismiss` button instead of `Accept` and `Reject` buttons. The live demo [here](http://code.benthomas.me/privacy-choices/necessary-only) is an implementation of the below configuration, which may be suitable for such a use case.

```javascript
window.privacyChoicesConfiguration = {
    necessary: {
        handle: function () {
            /*
             * This runs once, on page load.
             *
             * You should configure any strictly-necessary storage here.
             */
        },
        title: 'Strictly-necessary cookies',
        description: 'These cookies enable core site functionality. This site cannot function properly without them, and they can only be disabled by changing your browser preferences.',
    },
    language: {
        settings: {
            openButton: 'Privacy Information',
            closeButton: 'Close',
            heading: 'Privacy Information',
            description: 'This site uses cookies to enable core site functionality. No other storage is kept on your device.'
        },
        prompt: {
            heading: 'Privacy information for this site',
            description: 'This site uses cookies to enable core site functionality. No other storage is kept on your device.',
            settingsButton: 'More information',
            dismissButton: 'Dismiss'
        }
    },
}
```

## Full configuration

The full set of configuration values are below. There are inline comments to describe them. The values assigned in the code snippet below are the default ones that any custom configuration defined on the page will overwrite:

```javascript
window.privacyChoicesConfiguration = {
    necessary: {
        // OPTIONAL (string) the heading for the necessary storage category in the settings sidebar
        title: 'Strictly necessary storage',
        // OPTIONAL (string) the longer text for the necessary storage category in the settings sidebar
        description: 'Necessary storage enables core site functionality. This site cannot function without it, so it can only be disabled by changing settings in your browser.',
        // REQUIRED (function) the callback executed once on every page load where you should manage your necessary storage
        handle: function () { }
    },
    policy: {
        // OPTIONAL (boolean) whether the link to a privacy policy should be shown in the settings sidebar
        display: true,
        // OPTIONAL (string, URI) the location to link to for the privacy policy
        uri: 'https://example.com/policy'
    },
    /* OPTIONAL (object array)
     * The default value is an empty array, but an example category is included here for reference.
     * Leave empty (i.e. don't define it in custom configuration) to run the library in informational mode.
     */
    categories: [
        {
            // REQUIRED (string) unique identifier for this category in the user preferences cookie (should not contain spaces)
            storageKey: 'analytics',
            // REQUIRED (string) the title of the category as shown in the settings sidebar
            title: 'Analytics storage',
            // REQUIRED (string) the description of the category as shown in the settings sidebar
            description: 'We use analytics to track visits to our sites. We also track which pages you view while you\'re hear to learn how we could improve the site.',
            // REQUIRED (function) the callback executed whenever this category is toggled on (or when already on and the page is loaded) - you should manage enabling of this storage here
            handleAccept: function () { },
            // REQUIRED (function) the callback executed whenever this category is toggles off (or when already off and the page is loaded) - you should manage disabling and clearing of this storage here
            handleReject: function () { }
        }
    ],
    language: {
        // OPTIONAL (object) language options for the settings sidebar
        settings: {
            // OPTIONAL (string) text for the always-present button that opens the settings sidebar
            openButton: 'Privacy',
            // OPTIONAL (string) text for the settings sidebar close button
            closeButton: 'Close',
            // OPTIONAL (string) text for the setting-sidebar title
            heading: 'Privacy information',
            // OPTIONAL (string) text for the settings sidebar below the title
            description: 'This site uses cookies and other web storage technologies. You can set your privacy choices below. Changes will take effect immediately.',
            // OPTIONAL (string) text for the button on the settings sidebar that toggles all categories on
            acceptAllButton: 'Accept all',
            // OPTIONAL (string) text for the button on the settings sidebar that toggles all categories off
            declineAllButton: 'Decline all'
        },
        // OPTIONAL (object) language options for the notification prompt banner
        prompt: {
            // OPTIONAL (string) text for the heading on the notification prompt
            heading: 'Your privacy choices for this site',
            // OPTIONAL (string) longer text on the notification prompt
            description: 'This site uses cookies and other web storage technologies to enhance your experience beyond necessary core functionality.',
            // OPTIONAL (string) text on the button that the user can accept everything using
            acceptButton: 'Accept',
            // OPTIONAL (string) text on the button that the user can decline everything using
            declineButton: 'Decline',
            // OPTIONAL (string) text on the button that the user can click to see more options
            settingsButton: 'Manage choices',
            // OPTIONAL (string) text on the button that dismisses the banner when in informational mode
            dismissButton: 'Dismiss'
        },
        // OPTIONAL (object) language options for the privacy policy link, used if window.privacyChoicesConfiguration.policy.display is set to true
        policy: {
            // OPTIONAL (string) the text proceeding the privacy policy link, after which will follow a space character and then the link
            text: 'For more information on our use of web storage, please refer to our',
            // OPTIONAL (string) the text that is hyperlinked to the URI specified by window.privacyChoicesConfiguration.policy.uri
            linkText: 'Privacy Policy'
        }
    },
    storage: {
        // OPTIONAL (string) the name of the cookie that is used to store the user preferences in the browser (should not contain spaces)
        key: 'privacy-choices',
        // OPTIONAL (integer) the number of days after which a user will be asked to make their choices again
        expiryDays: 90
    },
    style: {
        // OPTIONAL (string, hex colour) the background colour of the settings toggle button
        toggleBackgroundColour: '#222222',
        // OPTIONAL (string, hex colour) the text colour of the settings toggle button
        toggleTextColour: '#ffffff',
        // OPTIONAL (string, hex colour) the background colour of the buttons
        buttonBackgroundColour: '#690060',
        // OPTIONAL (string, hex colour) the text colour of the buttons
        buttonTextColour: '#ffffff',
        // OPTIONAL (string, hex colour) the background colour of the notification prompt banner
        promptBackgroundColour: '#222222',
        // OPTIONAL (string, hex colour) the text colour of the notification prompt banner
        promptTextColour: '#ffffff',
        // OPTIONAL (string, hex colour) the background colour of the settings sidebar
        settingsBackgroundColour: '#222222',
        // OPTIONAL (string, hex colour) the text colour of the settings sidebar
        settingsTextColour: '#ffffff'
    }
}
```

## Developer information

This section will be useful for anybody who ends up cloning this repository.

If you just want to use Privacy Choices, head over to the [releases page](https://github.com/benjeh32/privacy-choices/releases) to get the latest version that is compiled and ready to go.

<details>

<summary>Show/hide section</summary>

### Status

#### master

![AWS CodeBuild build badge for master branch](https://codebuild.eu-west-2.amazonaws.com/badges?uuid=eyJlbmNyeXB0ZWREYXRhIjoiQjJNYmduWTh0NHFlU3NPalF1VzNWeHppVjRtZk5DVG5oZlR4VlJ5SmZzanhLaEQ2WHE3QnA4Tm9tS3BJMjl6dzNTUjB1czdJb3oweU9XMVdFSTJkeS9vPSIsIml2UGFyYW1ldGVyU3BlYyI6IkcrZmdTdjFFOWdEbUpZQWoiLCJtYXRlcmlhbFNldFNlcmlhbCI6MX0%3D&branch=master)

#### develop

![AWS CodeBuild build badge for develop branch](https://codebuild.eu-west-2.amazonaws.com/badges?uuid=eyJlbmNyeXB0ZWREYXRhIjoiQjJNYmduWTh0NHFlU3NPalF1VzNWeHppVjRtZk5DVG5oZlR4VlJ5SmZzanhLaEQ2WHE3QnA4Tm9tS3BJMjl6dzNTUjB1czdJb3oweU9XMVdFSTJkeS9vPSIsIml2UGFyYW1ldGVyU3BlYyI6IkcrZmdTdjFFOWdEbUpZQWoiLCJtYXRlcmlhbFNldFNlcmlhbCI6MX0%3D&branch=develop)

### Prerequisites

- [Node.js](https://nodejs.org/)

#### Code layout

- The library source CSS is in `./src/css`.

- The library source JavaScript is in `./src/js`.

- The live site HTML is in `./examples`.

### Installing dependencies

```console
npm install
```

### Building the bundle

The live site is designed to be hosted on a web server, not viewed from a local file system.

Furthermore, this library stores the user's preferences in a cookie. Many popular browsers don't support the use of cookies for `file://...` or `http://localhost/...` browsing. The easiest way to develop this library is using the live-updating web server and Microsoft Edge (which doesn't seem to mind local cookies).

#### Development mode

To start the live-updating web server:

```console
npm run start
```

This builds the bundle in memory and hosts a local copy of the demo site at `http://localhost:9000`. This location will automatically be launched in your default browser.

Changes to the bundle JavaScript or CSS will be reflected instantly by the web server without needing a manual page reload, as will changes to the demo site HTML.

#### Production mode

To build the bundle and live demo site files for release:

```console
npm run build
```

The built production mode artefacts (library bundle and demo site files) will be in `./build`.

</details>

## Credits

- The sources referenced in the history section for providing information on the legislation

- https://github.com/b3none/gdprconsent for technical inspiration around some of the patterns used

- https://www.civicuk.com/cookie-control for look and feel inspiration for the user experience

## License

Licensed under the [MIT License](https://github.com/benjeh32/privacy-choices/blob/master/LICENSE).

[1]: https://ico.org.uk/media/for-organisations/documents/1545/cookies_guidance.pdf
[2]: http://ec.europa.eu/ipg/basics/legal/cookies/index_en.htm
[3]: https://www.iubenda.com/en/help/5428-gdpr-guide
[4]: https://www.itgovernance.eu/blog/en/how-the-gdpr-affects-cookie-policies
[5]: https://www.iubenda.com/en/help/5525-cookies-gdpr-requirements
