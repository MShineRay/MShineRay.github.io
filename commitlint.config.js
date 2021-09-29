/**
 * git commit msg 检测
 * @reference https://commitlint.js.org/#/guides-local-setup?id=install-commitlint
 * @example
 *  git commit -m <type>[optional scope]: <description>
 *   type ：用于表明我们这次提交的改动类型，是新增了功能？还是修改了测试代码？又或者是更新了文档？
 *   optional scope：一个可选的修改范围。用于标识此次提交主要涉及到代码中哪个模块。
 *   description：一句话描述此次提交的主要内容，做到言简意赅。
 *   注意
 *   : 为英文冒号
 *   冒号后面有一个空格
 *
 *   success demo:
 *    git commit -m 'test: 提交信息详情'
 *
 *   error demo:
 *    git commit -m 'test：提交信息'
 *    git commit -m 'test:提交信息'
 *
 */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // https://commitlint.js.org/#/reference-rules
    'type-enum': [
      2,
      'always',
      [
        'upd', //：更新某功能（不是 feat, 不是 fix）
        'feat', //：新功能（feature）
        'docs', //文档
        'revert', //恢复
        'fix', //：修补bug
        'docs', //：文档（documentation）
        'style', //： 格式（不影响代码运行的变动）
        'refactor', //：重构（即不是新增功能，也不是修改bug的代码变动）
        'test', //：增加测试
        'chore', //：构建过程或辅助工具的变动
        //示例：git commit -m "test(commitlint): 测试commitlint检查"
      ],
    ],
    'type-case': [0],
    'type-empty': [0],
    'scope-empty': [0],
    // 'subject-empty': [0],
    'scope-case': [0],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
    'header-max-length': [0, 'always', 72],
  },
}
