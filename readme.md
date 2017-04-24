# Bringing the Bands

##### token: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjb250ZW50X2lkIjoxNTU1MiwiY29udGVudF90eXBlIjoiQXNzaWdubWVudCJ9.crav03bNvfJBE20jeFEqc5iS-PK268f_i6kEDv-s4Jk

### Band Time

A local music venue has asked you to build a promotional app: Bring The Band! Bring the band will allow users to vote for musicians they want to see at the venue. The venue hopes to gain a following, and boost their patron engagement by tracking popular bands, and trends in their market share.

## Explorer Mode

* Using React components, create 2 pages, a Search page and a Votes page in addition to login/signup functionality
* Your Search page should include a Search field and search button.
* The search field should query Spotify if the user presses "enter" or clicks the search button.
* The results of the Spotify search should be displayed as a list of bands.
  * For each band in the list, display an image, the band name, and a button allowing the user to vote for them.
* If the user votes for a band, save that band to your backend (use backendless).
* Your Votes page should display all bands that have been voted for so far.
  * For each band in the list, display an image, the band name. For Explorer mode, don't worry about having duplicate bands in this list.
* Write tests AT LEAST for any custom functions created on components and actions

#### NOTES
* The Spotify API allows anyone to search their database. You don't need an API key to use their search endpoint.
* You should make a table on backendless for the voted for bands and a model in your app to represent that. Up to you whether you also make a table for the search results bands in Spotify.
* You have an entire week to work on this project! Pace yourself, and strive for polish. DO NOT SIT ON YOUR LAURELS - if you run out of features to work on come talk to me! This project is in part an opportunity for you to see what you can accomplish in this time frame so that you can think about final project with a little more context.

#### WHAT TO SUBMIT
* A link to a repository that should include:
* A README.md explaining your project
* In the Notes section, include a link to your project live on the internet
* As always, in the Notes section, include your confidence (1-5) and if you are anything below 5, briefly explain why.


### Adventurer Mode

Show a band only one time in the votes count - and display the number of votes they received if they have been up-voted multiple times.
Don't allow a user to vote for a band more than once.
If a user has already voted for a band, display a "voted" badge instead of the "vote for" button.

### Epic Mode

Automatically log in new users with an 'anonymous' account when they arrive at the site, allowing you to keep track of their behavior and let them view votes, but NOT allowing them to vote until they officially sign up.
Keep track of votes in a separate table on backendless ( use a 'join table' ).
Your application should be fully unit tested
