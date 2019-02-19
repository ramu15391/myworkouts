## css module

    *[css modules](https://blog.pusher.com/css-modules-react/)
    https://reactjs.org/docs/error-boundaries.html


##  semantic version
    
    * [semantic version](https://semver.org/)

## readme configuration 
    
    * [Read me file rules](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#code)


## TsLint
    
    * [rules for Tslint](https://palantir.github.io/tslint/rules/)

## git configuration for adding existing project to remote repository

    * [git configuration](https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/)

    * "git merge" used to allow merging two branches that have no common
    base by default, which led to a brand new history of an existing
    project created and then get pulled by an unsuspecting maintainer,
    which allowed an unnecessary parallel history merged into the
    existing project.  The command has been taught not to allow this by
    default, with an escape hatch "--allow-unrelated-histories" option
    to be used in a rare event that merges histories of two projects
    that started their lives independently.

    * "git pull" has been taught to pass the "--allow-unrelated-histories"
    option to underlying "git merge".
    
    * [git merge two branches](https://github.com/git/git/blob/master/Documentation/RelNotes/2.9.0.txt#L58-L68)


# VS COde Plugin Config:- 

    * Install Node,Yarn,make[mingw]
    * Add their bin paths to path

    ## 1) Errors Faced :
        self signed certificate in certificate chain during ‘yarn install --ignore-engines’
        Resolution : 
        yarn config set "strict-ssl" false

    ## 2) To install all the vs code extensions in one shot

    - In vscode file->preferences->settings
    Add the below line in user settings JSON 
    "http.proxyStrictSSL": false
    - hit ctrl+`  to open the command prompt, then copy paste the below code to the terminal

    ```
        code --install-extension akamud.vscode-theme-onelight
        code --install-extension dbaeumer.vscode-eslint
        code --install-extension dzannotti.vscode-babel-coloring
        code --install-extension mgmcdermott.vscode-language-babel
        code --install-extension mikestead.dotenv
        code --install-extension ms-vscode.typescript-javascript-grammar
        code --install-extension streetsidesoftware.code-spell-checker
        code --install-extension editorconfig.editorconfig
        code --install-extension eamodio.gitlens
        code --install-extension kumar-harsh.graphql-for-vscode
        code --install-extension zhuangtongfa.material-theme
        code --install-extension esbenp.prettier-vscode
        code --install-extension wayou.vscode-todo-highlight
        code --install-extension eg2.tslint
        code --install-extension jpoissonnier.vscode-styled-comp
    ```

