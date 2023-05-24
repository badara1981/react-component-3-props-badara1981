# 3. Using Props

This repo contains a version of a recent project, in which you created a `<BootstrapCard`> component using JSX, and used a `data` object (containing information about Bob Dylan) to populate it. Let's take this project a step further...
## Instructions

### Part 1

1. First, you should restructure this project so that it mirrors the structure we looked at before lunch. Remember: your `src` folder should contain:

>- A `components` folder, containing all your React components. Each component should have its own file.
>- An `App.js` file in which you will build a component named `App` which renders your UI.
>- An `index.js` file, in which you will **render** your `<App />` into a `root` DOM element.

For now you can copy the `data` object in `index.js` into the same file as your `BootstrapCard` component.

**Remember:** you should use **default** `export` statements to make your components available to other files, and `import` statements when you want to use a component in another file.

2. When you are done, start the server and make sure the card with information about Bob Dylan is still rendering correctly.

---

### Part 2

3. Next, you should edit your `BootstrapCard` component in `components/BootstrapCard.js`. You should give your component a new `props` parameter, and then create new `props` in place of the variables you are currently using, based on the `data` object. **Remember:** you are just creating the `props` for now - you will give them their values in `App.js` later!

4. When you are done, create a new `assets` folder in your `src` folder. In `assets`, you should next create a file called `data.js`. Finally, copy the `data` object from your `components/BootstrapCard` file into `data.js` and make it a default `export`.

5. Now, `import` the data object into `App.js` from `./data.js`.

---

### Part 3

6. Try to create a `<BootstrapCard />` element in your `App` component. You should use the `props` you defined in Part 2 to give your component all the data it needs to work as expected. As before, you should use the `data` object you just imported to get the correct values. Start your server, and see if the app is rendering as you expect.

**Note:** If things are not quite working as expected, make sure you are **importing** everything you need in each of your files (and also **exporting** the things you are trying to import from their original files!). Don't forget to also check the VS terminal and browser console, to see if you have any helpful error messages which could point you to the problem...

**Finally**, if you are still having issues don't feel shy to contact Ghassan or I, as we will be very happy to help. :-)