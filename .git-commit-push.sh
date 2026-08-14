#!/bin/bash

# 自动 Git 提交和推送脚本
# 用法: bash .git-commit-push.sh "提交信息"

COMMIT_MESSAGE="${1:-Update Wellness Spring}"

echo "📝 检查有没有更改..."
if git diff-index --quiet HEAD --; then
    echo "✅ 没有更改，无需提交"
    exit 0
fi

echo "📌 暂存所有更改..."
git add .

echo "💾 提交更改: $COMMIT_MESSAGE"
git commit -m "$COMMIT_MESSAGE"

echo "🚀 推送到远程仓库..."
git push

echo "✨ 完成！"
