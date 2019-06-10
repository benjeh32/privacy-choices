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

<summary>Show/hide more</summary>

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

Not many of the many free or open-source plugins available online really felt like the right fit as they were either missing certain desired functionality or required an excessive amount of manual customisation to get the look and feel that was wanted.

Conversely, a number of the available paid-for solutions seemed like exactly what was wanted but for a charity it just wasn't feasible to pay a yearly subscription to get access to the one or two 'pro-edition' features that they needed.

As a result, I decided to put together Privacy Choices. It is my attempt at a privacy management library that, while it might have all of the bells and whistles of the subscription-based solutions, has a clean look and feel, has an intuitive settings panel, is highly customisable, and is free to use.

<img style="text-align=center" src="https://github.com/benjeh32/privacy-choices/raw/master/examples/images/readme-settings.png" alt="Privacy Choices choices menu" width="400"/>

### Features

#### What it has

- A notification banner prompting users to make their choices

- Equal-weighted options for accepting and denying full use of storage

- Privacy settings always available to the user through an on-screen toggle

<img style="text-align=center" src="https://github.com/benjeh32/privacy-choices/raw/master/examples/images/readme-toggle.png" alt="Privacy Choices choices toggle" />

- A configurable list of storage categories that users can toggle on or off according to their preference in the settings sidebar

- Support for when only strictly-necessary storage is in use, whereby the library acts as an information tool about privacy on your site

- Option to display a link to your site's privacy policy

- Configurable number of days after which a user's choices will expire

- Stores user preferences in a cookie across all pages on the current domain

  - Sub-domains will have their own preferences - they will not be shared with each other or their parent domain

- JavaScript callbacks that execute when categories are toggled, allowing you to manage turning on and off your storage to respect your users' wishes

- Lots of customisation

#### What it does not have

There are some things not covered by this library, which may or may not change in future releases. **Do your research** and reconsider whether to use Privacy Choices if your use case requires any of the below:

- Handling of third-party cookies

- User preferences for a parent domain coming with them to sub-domains

- Multiple language support

  - The default is English (UK)
  
  - All text can be customised to change to a single different language, however

- Conditional use of the tool based on user geolocation

#### Customisation

The following things are customisable:

- Headings, descriptions and buttons

  - These should remain clear and unambiguous if changed

- Colour of buttons, backgrounds and text

  - These should remain user-friendly if changed

- Number of days before consent expires and the user has to re-consent

  - Depending on your use case, as per legislation

- Whether the policy link is displayed, and the URI to it (if shown)

  - You may already have links to this you wish to keep

- Titles and descriptions of the consent categories

  - Add as many or few as required - every category you use must be covered, although these categories are defined by you according to your use case

- The JavaScript callbacks that are executed when a user accepts or rejects their consent for each category

  - These should entirely manage your storage usage from now on, turning it on and off as appropriate

- The JavaScript callback that is executed when a user first loads the page

  - This is for the 'strictly necessary' category that stores the allowed exemptions

  - Some may find this category useful to use, others may leave it blank

### Live demo

There are a number of live demo examples with various configurations [here](http://code.benthomas.me/privacy-choices).

### Use it on your website

#### Installation

#### Configuration

#### Responsiveness

Privacy Choices should scale appropriately so that it has good usability on smaller devices (e.g. mobile). However, to take advantage of this, you should configure the viewport on your site to support such devices:

```html
<head>
    ...
    <meta name="viewport" content="width=device-width, initial-scale=1">
    ...
</head>
```

More information on the browser's viewport can be found in the [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag).

## Developer information

The below will be useful for anybody who may end up cloning this repository.

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
