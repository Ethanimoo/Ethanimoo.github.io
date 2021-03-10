#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m "deploy"
git push -f https://github.com/JoffreyLee/JoffreyLee.github.io.git master:gh-pages # 推送到github

cd - # 退回开始所在目录
rm -rf docs/.vuepress/dist # 删除打包文件

git add -A
git commit -m "推送到coding"
git push -f https://github.com/JoffreyLee/JoffreyLee.github.io.git master # 推送到coding