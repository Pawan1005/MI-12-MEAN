INTRODUCTION OF GIT: Git is widely used for software development for version control where we control source code. It is a distributed revision control system. It enhances speed, data integrity and also support non-linear workflows. Git is widely used to update source code of the Linux kernel from anywhere. Git working directory has a full-accessed repository with complete history and full version tracking capabilities i.e., we can track any files through branchname. It is free and open source of distributed version control system. However, before using git commnads firsly check whether git is installed or not.

BASIC COMMANDS OF GIT:

FETCHING GIT COMMANDS: $ git // It is used to fetch git commands

INSTALLAION OF GIT BY: $ sudo apt install git OR $ sudo apt install git --all // This command is used to install git

CHECKING GIT IS INSTALLED OR NOT: $ git --version // This command shows the version of git that is installed in your system

$ git help // It is used to read about specific subcommand concept.

$ git help git //It shows an overview of the system

$ git init // It is used to create new repository locally with atleast one commit. Once you have initialized it, create remote repository somewhere on GitHub.com

$ git status //It displays the stage of the working directory and the staging area.

$ git config //It is used to set the git configuration values.

GIT CONFIGURATION TO SET USERNAME AND EMAIL-ID: $ git config --global user.name "Username" //It is used to set username on git $ git config --global email.id "Email-id" //It is used to set email-id on git

CHECKING GIT CONFIGURATION BY COMMAND: $ git config --list

CLONING A TARGET REPOSITORY: $ git clone <http>  //It is used to target an existing repository and create a clone.

ADDING NEW FILES TO THE STAGING AREA: $ git add filename.md //It will stage all files in your repository includes all new, modified, and deleted files.

COMMITTING THE FILES: $ git commit -m "Commit_message" //It is used to commit new files or changes to tle local repository

CHECKING COMMIT HISTORY: $ git log

$ git push // This command is used to upload local repository content to remote repository

Syntax: $ git push E.g., $ git push origin shradha@work // Pushing the branch to Git

$ git branch --list //Listing current branches

TO CREATE NEW BRANCH: $ git branch <branch_name>

SWITCHING TO A BRANCH: $ git checkout <branch_name>

DELETING A BRANCH: $ git branch -d <branch_name> //It is used to delete a branch

