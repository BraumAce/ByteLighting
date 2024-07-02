#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd src/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:BraumAce/ByteLighting.git main:gh-pages
# git push -f git@gitee.com:BraumAce/ByteLighting.git main:gh-pages
git push -f git@47.96.125.148:/home/www/website/byte-lighting-blog.git main:main

cd -