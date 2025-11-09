# Some general info

- package manager: Yarn 1.22.22
- Node: 24.10.0

- You will need to create a .env to run in dev. see the .env.example file to see how the .env file should be structured same for .env.test if you want to run the tests
- I have made 2 main sections, one for each page I needed to create. The general idea is my thought processes making the page from top to bottom.
- I would have prefered to use the payload SDK but I would have needed the payload-types file. I created a sudo payload-types just for type safety by using a json to types converter and fed it a record from the fifaCards api.
- I tried to come back and add things to this readme every now and then but otherwise I might have some comments here and there also. Most comments are on
  how I handled sorting

## Thought process

# List Page

- Set up basic styles that will be used. Setting the default font, background colour
- A little unsure about how to get the background effect. Trying to use a linear gradient but I cant get it to look exactly correct
- create a component for the top navigation bar
- I'll hard code the table headers and then make a components for each row.
- One of the players "Carlos Miguel Coronel" has no stats? So they just show empty blocks

# Detail Page

- Starting off with the black background base div
- noticing that the background has a similar fade like the list page except the gradient is left to right
- Made a flex div to hold the img and stats. bit unsure on exact spacing and width so just chose one and made it uniform.
- # the stats
- - I would have like to use a v-for loop to display the key - stat values but I couldnt think of a way that would allow me
- - to match the key to the correct display name ie: key "sprintSpeed" should read "Sprint Speed". probably could just make a function takinh
- - the key value and returning the correct display name

# More Detail Page

- added name and view all cards link
- bottom info panel simple enough made a flex div to hold each panel. Noticed the height has cm but data is feet/inch so had to do some converting
- ignore the height thing above it was only the one entry that has only feet/inch height so i converted for nothing but will leave it in a comment
- workrates text colour is different to the others on desktop view but is the same when on mobile? marking this as likely a mistake so will make it the same colour
- Some ages are written as a number, others are "x years old". unsure if im supposed to filter the numbers out since they are wildly large like "166149"?
- unsure which value for workrate should be first. I went with workRatesDefensive / workRatesAttacking
