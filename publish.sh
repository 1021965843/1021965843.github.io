npm run build
cd dist
git init
git add -A
git commit -m 'deploy'
git push -f  git@gitee.com:sxlm201215/jianli.git master
cd ../
rm -rf dist