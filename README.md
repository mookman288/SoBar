# SoBar

## The Social Media Icon Bar

### Developed by [PxO Ink](http://pxo.ink/)

## Preface

SoBar is designed to provide svg-based social media icon experience. SoBar can be used in a standalone manner by setting a width or height on an image element using an svg as a source. Alternatively, this repository comes packaged with CSS designed to provide a slightly more modular icon system.

Unlike its predecessor, SMIB, SoBar has no limiting factor of attractivity. Any size can be used, with any styles, which allows for complete customization within the confines of the branding guidelines for each icon:

* [Github](https://github.com/logos)
* [Facebook](https://www.facebookbrand.com/)
* [Twitter](https://about.twitter.com/company/brand)
* [LinkedIn](https://brand.linkedin.com/)
* [Tumblr](https://www.tumblr.com/logo)
* [Pinterest](https://business.pinterest.com/en/brand-guidelines)
* [SoundCloud](https://soundcloud.com/press)
* [Beatport](https://support.beatport.com/hc/en-us/articles/200353255-Beatport-Logos-and-Images)
* [iTunes](https://www.apple.com/itunes/marketing-on-itunes/identity-guidelines.html)
* [Instagram](https://en.facebookbrand.com/instagram/)

## Source and Special Mention

The share icon used in this repository is based on Min Ming Lo's article, entitled [Share: The Icon No One Agrees On](https://bold.pixelapse.com/minming/share-the-icon-no-one-agrees-on). It is clear that the milkshake icon is far greater than anything else, and should be adopted as a standard sharing icon. If you disagree with this notion, feel free to fork and add your own icon.

EDIT: It's five years later, and I don't think this has caught on, yet.

## Syntax

    <span class="social share" title="Share">Share</span>

    <a href="./mailto.php" title="Email Me"><span class="social email">Email Me</span></a>

### List of sizes:

Default pixel size: 16px

Default size: 2.50rem | 40px

* .micro - 1.00rem | 16px
* .small - 2.00rem | 32px
* .medium - 3.00rem | 48px
* .large - 4.00rem | 64px
* .mega - 5.00rem | 80px

### List of modifications:

* .baseline - `vertical-align: baseline;`
* .bottom - `vertical-align: bottom;`
* .middle - `vertical-align: middle;`
* .top - `vertical-align: top;`

### List of icons:

* .share
* .email
* .github
* .facebook
* .twitter
* .linkedin
* .tumblr
* .pinterest
* .soundcloud
* .beatport
* .itunes
* .instagram

### Compatibility

SoBar relies on svg and inline-block support. SoBar was tested on the following platforms:

* Internet Explorer 9+
* Chrome 43+
* Opera 32+
* FireFox 40+

## Example

A working example is available here: https://mookman288.github.io/SoBar/

## License

It is your responsibility, and your responsibility alone to adhere to the branding guidelines above.

All logos and trademarks included within this application are the property of their respective owners, and use of these logos and trademarks are subject to the policies of those individual organizations. Any and all logos, trademarks, or code not acquired through a third party, shall have the following license:

*The MIT License (MIT)*

Software Copyright &copy; 2015 PxO Ink LLC. Most Rights Reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.