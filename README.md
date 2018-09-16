# react-bootcamp-fa18

## HTML
### What is HTML?
HTML stands for Hyper Text Markup Language. It describes the structure of a static
web page and its contents using markup, or HTML tags. For example, the \<body> tag
represents the start of the content of an html page and the \<head> tag signifies
the location of site meta data.

When a website is visited, the static HTML file for the page is downloaded,
the content is parsed, and the site is rendered accordingly.

### What are the different types of tags?
There are three different types of HTML tags:
  * File Tags
  * Block Tags
  * Inline Tags

**File Tags** provide the structure of the web page and don't add any visible content
to the site. Some examples include:
  * \<!DOCTYPE> - required at the start of any HTML file. Defines that the file is
  using HTML
  * \<body> - signifies the start of the content of the page

**Block Tags** create a new line on the web page and takes up the full width available.
Some examples of block tags include:
  * \<p> - labels a paragraph element
  * \<h1> - labels a large header

**Inline Tags** don't normally create a new line on the web page. Instead, these tags
usually take the width of the element that it surrounds and applies its effects.
Some examples include:
  * \<i> - adds italics to a text element
  * \<strong> - makes a text element bold

**_NOTE:_** Some tags in HTML are self closing. This means that, unlike elements
like \<p> and \<h1> that come in pairs (open and closing tag), self closing elements
open and close on one line. One element that has this behavior is the \<img /> tag.
The tags that are present in this README will only have the opening tag, and self
closing tags will have the closing slash.

### Creating an HTML file
There are four crucial tags that are needed within an HTML file. These tags are:
  * \<!DOCTYPE html> - Needed at the start of any HTML file, the DOCTYPE tag
  defines that the file is using HTML5.
  * \<html> - The html tag represents the root element of an html page. It's also
  the "base" tag and contains the rest of the elements in an HTML file.
  * \<head> - The head tag, although not required to be in an HTML file, contains
  meta information about the document such as the title of the page, paths to
  CSS files, etc.
  * \<body> - The body tag contains the visible page content. All other elements/
  content that will be presented to the user will be within the body tag.

### What are some useful elements/tags?
  * \<div> - the div tag doesn't really add any visible content to the web page.
  It mainly defines a division or section in an HTML document.
  * \<h1 - h6> - defines headers of different sizes, with h1 being the largest header.
  * \<img/> - adds an image, specified by the src attribute, to the webpage.
  * \<button> - adds a clickable button to the webpage.

### What is Bootstrap?
Bootstrap is an open-source frontend framework for designing websites. It contains
predefined HTML and CSS components including typography, forms, navigation, etc.

#### Getting Bootstrap and CDNs
Bootstrap can be included in projects by downloading the html and css files from
the website (https://getbootstrap.com/) or through a content distribution network (CDN).
CDNs are, at a very high level, data centers that contain and provide end-users with
resources. Bootstrap can be included in an HTML document through providing a link
to the CDN in the <link> tag.

**_NOTE_**: There are some tradeoffs and considerations when using CDNs rather than
downloading the code. Although CDNs are usually reliable, in the even that a server
error occurs, styling won't be applied to your page. By downloading the Bootstrap
source code, the styling will always be available and relatively fast because the files
can be accessed through relative paths, but there are some more in-depth tradeoffs.

#### Useful Bootstrap Classes
Bootstrap includes new components that can be used within an HTML document, but
the main features that we'll be using are its CSS classes. The framework has a large
set of CSS classes that can be added onto an HTML element to change its style or
behavior.

The more common classes include the **row** and **col-** classes, which specifies a row
and how many columns in that row that an element should span
(out of the maximum 12 columns per row), respectively. The common components include:
  * Navbar
  * Dropdowns
  * Buttons

The components are relatively self explanatory, and Bootstrap provides further
customization of its components. The CSS can also be overwritten for even greater
flexibility.

More documentation can be found on the Bootstrap website.
https://getbootstrap.com/docs/4.1/getting-started/introduction/

## CSS
### What is CSS?
CSS stands for Cascading Style Sheets. It is a style sheet language, which is a
language that expresses the presentation of a structured document like HTML. The
term cascading arises from the priority scheme used in resolving the style rules
to be applied to the document.

### How do I style an element?
There are multiple ways to style an HTML element, including inline and external
styling. **Inline styling** involves using the **style** attribute of elements,
while **external styling** requires separate CSS files and applying them through
the \<link> tag in \<head>.

**_NOTE_**: For larger applications/websites, inline styling should generally be
avoiding for better code readability and maintainability.

### Overriding
One useful feature of CSS includes its priority scheme for resolving which styles
to apply.

#### File Overriding
Two CSS files can style the same class. If both CSS files are linked to an HTML
document, one file's class can override the other depending on the order that the
files are linked. The last file that's linked will have a higher priority and thus
override the other.

#### Class Overriding
One brute force method to override a particular style is to use !important. However,
you should NEVER use that method if possible because it makes CSS code harder to read
and causes its effects on an element harder to understand, especially for large
sites/applications. Instead, other methods for overriding styling include providing
a more specific path to the desired class to be styled. For example, instead of
having .classname {styles}, using .parentclass .classname {styles} will cause the
classname class to be styled with the latter CSS.
