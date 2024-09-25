#!/usr/bin/env sh

# abort on errors
set -e

rm -rf ./docs/*

# build
npm run docs:build

# move
mv -f -n .vitepress/dist/* ./docs

# navigate into the build output directory
cd ./docs

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git add -A
git commit -m 'deploy'
git push
cd -
