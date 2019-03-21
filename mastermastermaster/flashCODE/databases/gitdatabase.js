let gitFlashCards =

    [
    {"Term":"$ git diff <first-branch>...<second-branch>", "Definition": "Shows content differences between two branches"},
    {"Term":"$ git pull <remote> <branch>", "Definition": "Download changes and directly merge/integrate into HEAD"},
    {"Term":"$ git fetch <remote>", "Definition": "Downloads all history from the repository remote branch"},
    {"Term":"$ git log -p <file>", "Definition": "Show changes over time for a specific file"},
    {"Term":"$ git mv <file-original> <file-renamed>", "Definition": "Changes the file name and prepares it for commit"},
    {"Term":"$ git status", "Definition": "Lists all new or modified files to be committed"},
    {"Term":"$ git reset --hard HEAD", "Definition": "Discard all local changes in your working directory"},
    {"Term":"$ git branch <branch-name>", "Definition": "Creates a new branch"},
    {"Term":"$ git clone <url>", "Definition": "Downloads a project and its entire version history"},
    {"Term":"$ git config --global user.email <email address>", "Definition": "Sets the information you want attached to your commit transactions"},
    {"Term":"$ git tag <tag-name>", "Definition": "Mark the current commit with a tag"},
    {"Term":"$ git pull", "Definition": "Downloads remote branch history and incorporates changes"},
    {"Term":"$ git reset <file>", "Definition": "Unstages the file but preserves its contents"},
    {"Term":"$ git init <project-name>", "Definition": "Creates a new local repository with the specified name"},
    {"Term":"$ git remote add <shortname> <url>", "Definition": "Add new remote repository named <shortname>"},
    {"Term":"$ git blame <file>", "Definition": "Who changed what and when in <file>"},
    {"Term":"$ git ls-files --other --ignored --exclude-standard", "Definition": "Lists all ignored files in this project"},
    {"Term":"$ git config --global color.ui auto", "Definition": "Enables helpful colorization of command line output"},
    {"Term":"$ git branch -dr <remote/branch>", "Definition": "Delete a branch on the remote"},
    {"Term":"$ git reset --hard <commit>", "Definition": "Discards all history and changes back to the specified commit"},
    {"Term":"$ git remote show <remote>", "Definition": "Show information about a remote"},
    {"Term":"$ git branch", "Definition": "Lists all local branches in the current repository"},
    {"Term":"$ git stash pop", "Definition": "Restores the most recently stashed files"},
    {"Term":"$ git rm <file>", "Definition": "Deletes the file from the working directory and stages the deletion"},
    {"Term":"$ git stash", "Definition": "Temporarily stores all modified tracked files"},
    {"Term":"$ git diff --staged", "Definition": "Shows file changes between staging and the last file version"},
    {"Term":"$ git reset <commit>", "Definition": "Undoes all commits after <commit> preserving changes locally"},
    {"Term":"$ git push <alias> <branch>", "Definition": "Uploads all local branch commits to remote"},
    {"Term":"$ git stash list", "Definition": "Lists all stashed changesets"},
    {"Term":"$ git reset --keep <commit>", "Definition": "Reset your HEAD pointer to a previous commit and preserve uncommitted local changes"},
    {"Term":"$ git revert <commit>", "Definition": "Revert a commit (by producing a new commit with contrary changes)"},
    {"Term":"$ git remote -v", "Definition": "List all currently configured remotes"},
    {"Term":"$ git log --follow <file>", "Definition": "Lists version history for a file including renames"},
    {"Term":"$ git merge <branch>", "Definition": "Combines the specified branch’s history into the current branch"},
    {"Term":"$ git add <file>", "Definition": "Stages file in preparation for versioning"},
    {"Term":"$ git diff", "Definition": "Shows file changes between commits"},
    {"Term":"$ git push --tags", "Definition": "Publish your tags"},
    {"Term":"$ git merge <remote>/<branch>", "Definition": "Combines remote branch into current local branch"},
    {"Term":"$ git show <commit>", "Definition": "Outputs metadata and content changes of the specified commit"},
    {"Term":"$ git config --global user.name <name>", "Definition": "Sets the information you want attached to your commit transactions"},
    {"Term":"$ git commit -m <descriptive message>", "Definition": "Records file snapshots permanently in version history"},
    {"Term":"$ git branch -d <branch-name>", "Definition": "Deletes the specified branch"},
    {"Term":"$ git stash drop", "Definition": "Discards the most recently stashed changeset"},
    {"Term":"$ git checkout <branch-name>", "Definition": "Switches to the specified branch and updates the working directory"},
    {"Term":"$ git rm --cached <file>", "Definition": "Removes the file from version control but preserves the file locally"},
    {"Term":"$ git checkout HEAD <file>", "Definition": "Discard local changes in a specific file"},
    {"Term":"$ git log", "Definition": "Lists version history for the current branch"}
    ]
