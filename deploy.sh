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
./build.sh
git add .
git commit -m "$1"
git push origin feature/github-pages-prod
cd ..

# python3 -m http.server 8080