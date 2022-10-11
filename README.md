# Hi Everyone!

I am working on creating an e-commerce template site using [Commerce](https://commercejs.com/docs/). I figured this would be a perfect time to ask the dev community to help me since it is Hacktober fest. This will be a great opportunity to learn open-source and how to read new docs together. I look forward to coding with you.

## Application

This is the Frontend React application

Thank you for your interest in contributing to e-commerce-site-using-commerce.js! This document is a set of guidelines to help you contribute to this project.

# Getting Started

1. First you make a fork of the repo so that you can use your fork to update the project. 1. create a e-commerce directory by running `mkdir e-commerce` 
2. cd into the e-commerce directory by running `cd e-commerce ` 
3. Clone the project to your local terminal by running git clone `git@github.com:{YOUR_GITHUB_USERNAME}/e-commerce-site-using-commerce.js.git` 
4. cd into the e-commerce frontend directory by running `cd e-commerce-site-using-commerce.js` 
5. Now run `npm install` to install all of the project dependencies. 
6. Run `npm install && npm start` and go to http://localhost:3000 to see the application.

# How to Contribute

Before you start writing code, make sure there is an issue open. Pull requests without a link to an existing issue won't be merged.

If you want to get started contributing code to this project but don't know exactly what to work on, we compiled a good list of issues labeled as ['good first issues'](https://github.com/SincerelyBrittany/e-commerce-site-using-commerce.js/labels/good%20first%20issue) which are small in scope and not so complex to solve. There are also issues labeled as ['help wanted'](https://github.com/SincerelyBrittany/e-commerce-site-using-commerce.js/labels/help%20wanted) which can be a bit more complex but are good examples of things we are currently accepting help from the community. Lastly if you are participating in Hacktoberfest, look for issues labeled ['hacktoberfest'](https://github.com/SincerelyBrittany/e-commerce-site-using-commerce.js/labels/hacktoberfest).

# How To Contribute - Set Up

2. Now that you are inside the frontend directory, you need to create a branch based off the development branch.
    1. Run: `git checkout development` 
    2. Confirm you are on the development branch by running `git status`
    3. Create a branch based off the development branch by running - git checkout -b `branch-name`
    4. Make your changes - commit often using [commit best practices][best_practices].
    5. Make sure to add test to all of your changes, when applicable. 

[best_practices]: https://git-scm.com/book/en/v2/Distributed-Git-Contributing-to-a-Project#_commit_guidelines


# How To Contribute - Pushing your changes

1. After adding your code changes you will need to add and commit your changes.
   1. Run `git status` - to see the files you changed and confirm thats what you want.
   2. Run `git add .` to add all of the files or `git add <file name>` to add a specific file.
   3. Once you know and added what files you want to commit. Commit your changes by running `git commit -m "[#<issue_number>]<commit_type>:description"`
        *  **Your final commit should be formatted like this: #15(docs)-updatesreadme**
        *  The issue number can be found on the title of the issue you were assigned.
        * The commit_types are:
             * (feat): (new feature for the user, not a new feature for build script)
             * (fix: (bug fix for the user, not a fix to a build script)
             * (docs): (changes to the documentation)
             * (style): (formatting, missing semi colons, etc; no production code change)
             * (refactor): (refactoring production code, eg. renaming a variable)
             * (test): (adding missing tests, refactoring tests; no production code change)
             * (chore): (updating grunt tasks etc; no production code change)
        *  The description/name is the name or title descripting the changes you made.
   4. Push your changes to your forked repo by running `git push --set-upstream origin <branch name>`
   5. On Github create a pull request, all pull requests _must_ target the `development` branch of the
   repository.

# IMPORTANT BEFORE MAKING PULL REQUEST 
On Github create a pull request, all pull requests _must_ target the `development` branch of the repository.


## Testing 
Any code modifications will have to be accompanied by the appropriate unit tests. This will be checked and verified during code review. Once the pull request is opened, our CI server will run the unit test suite and run a code linter to verify that the code follows the coding guidelines.

If you want to run the unit tests and linter on your machine, run the following commands:

`npm test` for unit tests

You can also configure your editor of choice with a ESLint plugin so you can get the linter feedback as you write code.

### Bugs and testing

If you find a bug, please open an issue in this repository describing the bug. You can file a bug [here](https://github.com/SincerelyBrittany/e-commerce-site-using-commerce.js/issues/new?template=bug_report.md). You will see a bug report template with the required information you should provide.

### Proposing changes or new features

If you have an idea of a new feature or change to how the Openverse frontend works, please [file an issue](https://github.com/SincerelyBrittany/e-commerce-site-using-commerce.js/issues/new?template=feature_request.md) so we can discuss the possibility of that change or new feature being implemented and released in the future. This lets us come to an agreement about the proposed idea before any work is done.

## Questions or Thoughts?

Feel free to contact me on Twitter [@SincerelyBrittt](https://twitter.com/SincerelyBrittt) and discuss the project with me.

## License

- [MIT LICENSE](https://opensource.org/licenses/MIT)

## Code of Conduct

By participating in this project, you are expected to uphold our [Code of Conduct](./CODE_OF_CONDUCT.md).
