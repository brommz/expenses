#!/bin/sh

if [ $# -eq 0 ]
  then
    echo "Add a commit message"
    return 1
fi

git add .
git commit -m "$1"
# git push origin master


# github pages
REACT_APP_SHEET_ID=1DEBrE6KXBxdAaWnWfS-e0u2aFawrephhzmH81Ne5sxw npm run build
cp -a build/. docs/
cd docs
git add .
git commit -m "$1"
git push origin feature/github-pages
cd ..