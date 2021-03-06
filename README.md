# Astronomy Photo of the Day
This is an app I built which information provided and maintained by NASA to display beautiful astronomy-inspired media content (photos, and sometimes videos) on a daily basis. It also will save a history of every photo you view and allow you to save favorites (such as April 11th, 2022).

**Link to live demo:** https://nasa-astronomy-photos.netlify.app/

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, API

The information for this webpage is provided by an open API that NASA maintains. It provides media content (photos or videos) as well as accompanying information on a daily basis. I wrote a series of JavaScript functions (both asynchronous and not) that interact with the webpage DOM, retrieve data from the API, and display it in the page.

The webpage also will save each photo you view in a history, as well as save a list of favorites that you can designate by clicking a button on the webpage. This works by interacting with local storage, where the dates and a boolean value are stored to be referenced. I then wrote functions which fulfill the basic principles of CRUD (create, read, update, delete) apps.

## Optimizations and Improvements

In its current state, this page represents a basic minimum basic functionality. I wrote this page to get it up and running as quickly as possible, and hence there are lot of improvments and features I will continue to work on and make. These include:

- Better Styling - this is probably the most obvious glaring issue. While I'm not a designer, I'd of course love to make the site better looking and more befitting of the pictures its intended to display.

- Smoother transitions - you may notice that when the page initially loads in, the picture fades in nicely. I would like to apply that loading in new pictures as well.

- Remove Favorites - currently there is a button to add favorites, but no way to remove them.

- Clear History - is possible by clearing local storage in the console, but would love to add a button in for that.

## Lessons Learned:

How fun and satisfying it is to get a project up live and running (even with all of its shortcomings)! I love building things and finding solutions to problems - there's nothing better than seeing the work come to fruition.

In terms of technical lessons learned, figuring out how to work with asynchronous functions is probably the biggest takeaway. I also learned a lot about how important it is to plan the scope of your variables - I'm currently learning OOP and the idea of applying encapsulation to the JavaScript I've wrriten would've helped a lot here in terms of both readability and stability of my code.