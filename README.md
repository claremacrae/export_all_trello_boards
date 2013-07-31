export_all_trello_boards
========================

Script to simplify downloading of all Trello boards

***Note that this is currently not working, due to a change in Trello itself. See issue 1, and this [question on webapps.stackexchange](http://webapps.stackexchange.com/q/47272/9027)***.

This arose out of my question [Is it possible to export my data from Trello, to back it up?](http://webapps.stackexchange.com/questions/18975/is-it-possible-to-export-my-data-from-trello-to-back-it-up) The accepted answer shows how to download one board, but it's pretty tedious once you've got a few dozen.

# Alternatives

If you have PHP and a Trello API key, or want to get one, you can use [Matthieu Aubry's trello-backup](https://github.com/mattab/trello-backup). Although it requires possibly more steps to set up, it is much quicker to run - which is important if you want to regularly backup your Trello data.  

# Instructions for use

Rough overview of how to use:

## Setting up the bookmarklet

* Paste entire contents of `export_all_trello_boards.js` into a javascript compressor, e.g. [http://javascriptcompressor.com/](http://javascriptcompressor.com/)
* Compress the code
* Copy-and-paste the compressed code into a web browser bookmark

## Using the bookmark

* In the same browser where you set up the bookmarklet, browse to [your Trello list of boards](https://trello.com/)
* Click on the Bookmarklet
* This will open a new window, with a link-per-board, each of which will download the entire board as a 1-line JSON file

## Quicker downloading

* Use a tool such as [DownThemAll](https://addons.mozilla.org/en-US/firefox/addon/downthemall/) to download all the JSON files in one go, to saving having to manually select each one.

## Fixing the names of output files

* Due to the above mentioned issue 1, your saved files will have 8-character hexadecimal filenames.
* If you wish to give them more meaningful names, follow the instructions on renaming, that are included in the pop-up html window.