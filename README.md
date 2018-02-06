# starter-graphql-project

A starter project referenced in my guide on setting up a React/GraphQL project for AgFirst.

A few notes:

* This doesn't actually work. Since I'm hosting this on a public site, I removed anything that can relate to AgF systems. The purpose of this project is to give you a file structure that you can expand upon to make an app. If you're just trying to experiment with GraphQL, I recommend making your resolvers return constant data you define in the project instead of trying to connect to a DB/API.
* I recommend defining new types and their resolvers in their own file (like the `src/schema/User.js` file). This is not necessary at all, but it keeps your project clean. None of the sample projects I saw on the internet did this. I think this is one of those times where there's just a gap between tutorials and real code.
* Run `yarn start` to start the server. I've installed a package called [nodemon](https://www.npmjs.com/package/nodemon) that will watch your source code files for changes and restart the server when you save.
