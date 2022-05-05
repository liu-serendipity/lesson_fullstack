# Git  最先进的分布式版本控制系统  用C语言开发的  
<!-- 简单来说，记录每次文件的改动 -->

- 集中式版本控制系统  CVS  SVN  免费开源
    ClearCase  收费  难用
    VSS  微软的 集成在VS里面  反人类设计
    SVN修复了一些CVS自身设计稳定的问题
    版本库是集中存放在中央服务器的，
    而干活的时候，用的都是自己的电脑，
    所以要先从中央服务器取得最新的版本，
    然后开始干活，干完活了，再把自己的活推送给中央服务器
    毛病：必须联网  网速慢时，烦人
    中央服务器出问题，所有人无法干活

- 分布式版本控制系统  BitKeeper  Git  Mercurial  Bazaar
    Git  最简单，最流行
    没有“中央服务器”  
    不需要联网  每个人的电脑都有一个完整的版本库
    协作工作 只需要把各自的修改推给对方
    安全性高
    通常有一台充当“中央服务器”的电脑

- 早期Git只在Linux和Unix用

## 安装Git
- 在Linux上安装Git
    1. 查看系统有没有安装Git `$ git`
    - 安装语句`sudo apt-get install git` 适用在Debian, Ubuntu, Linux
    - 安装语句`sudo apt-get install git-core` 适用在老一点的Debian, 
        Ubuntu, Linux，因为有个软件也叫Git
    - 安装语句，依此输入`./config,  make,  sudo make install`  适用其他
        Linux版本，直接通过源码安装

- 在Mac OS X 上安装Git
    1. 通过安装homebrew安装Git，参考homebrew的文档：`http://brew.sh/`
    2. 直接从AppStore安装Xcode，它集成了Git，默认不安装，要运行Xcode,选择菜
    单“Xcode”->“Preferences”，
    3. 在弹出窗口中找到“Downloads”，选择“Command Line Tools”，点“Install”
    就可以完成安装了

- 在window上安装
    1. 从官网直接下载安装程序
    2. 然后在开始菜单找到Git或者右键打开位置找到Git Bash，弹出命令行窗口即安装成功
    3. 安装成功后在命令行输入进行绑定：
        `$ git config --global user.name "Your Name"`
        `$ git config --global user.email "email@example.com"`
    4. --gobal参数，表示你这台机器上所有的Git仓库都会使用这个配置，
        当然也可以对某个仓库指定不同的用户名和Email地址

- 创建版本库  repository
    简单理解成一个目录，这个目录里面的所有文件都可以被Git管理起来，
    每个文件的修改、删除，Git都能跟踪，以便任何时刻都可以追踪历史，
    或者在将来某个时刻可以“还原”
    1. 选择一个合适的地方，创建一个空目录：
    ```
        $ mkdir learngit
        $ cd learngit
        $ pwd  显示当前目录
        仓库位置为/Users/michael/learngit  最好别用中文
    ```
    不一定必须在空目录下创建Git仓库，选择一个已经有东西的目录也是可以的。
    2. 把这个目录变成Git可以管理的仓库：
    `$ git init`  空的仓库
    .git目录是Git来跟踪管理版本库的，勿删
    如果没有.git目录，可能是隐藏了，可以用`ls-ah`看见

- 把文件添加到版本库
    1. 所有的版本控制系统，其实只能跟踪文本文件的改动，比如TXT文件，网页，所有的程序代码等等，Git也不例外。版本控制系统可以告诉你每次的改动，比如在第5行加了一个单词“Linux”，在第8行删了一个单词“Windows”。
    2. 而图片、视频这些二进制文件，虽然也能由版本控制系统管理，但没法跟踪文件的变化，只能把二进制文件每次改动串起来，也就是只知道图片从100KB改成了120KB，但到底改了啥，版本控制系统不知道，也没法知道
    3. Microsoft word的格式也是二进制
    4. 要真正使用版本控制系统，就要以纯文本方式编写文件  文本是有编码的  建议用utf-8
    5. 尽量别用自带的记事本编辑，在每个文件开头添加了0xefbbbf（十六进制）的字符，容易出错

- 一个例子
    1. 编写一个readme.txt文件
    2. 一定要放到learngit目录下（子目录也行），因为这是一个Git仓库，放到其他地方Git再厉害也找不到这个文件。
    3. 用命令git add告诉Git，把文件添加到仓库`$ git add readme.txt`
    4. 执行完毕无提示即成功
    5. 用命令git commit告诉Git，把文件提交到仓库`$ git commit -m "本次提交的说明(能从历史记录里方便地找到改动记录)"`
    6. 执行成功后提示 `1 file changed`：1个文件被改动（我们新添加的readme.txt文件）；2 `insertions`：插入了两行内容（readme.txt有两行内容）
    7. commit可以一次提交很多文件，所以可以多次add不同的文件 用空格隔开

- 易错：
    Q：输入`git add readme.txt`，得到错误：`fatal: not a git repository (or any of the parent directories)`。
    A：Git命令必须在Git仓库目录内执行（git init除外），在仓库目录外执行是没有意义的。

    Q：输入`git add readme.txt`，得到错误`fatal: pathspec 'readme.txt' did not match any files`。
    A：添加某个文件时，该文件必须在当前目录下存在，用ls或者dir命令查看当前目录的文件，看看文件是否存在，或者是否写错了文件名。

- 语句释义”
    `git status 文件名`: 可以让我们时刻掌握仓库当前的状态
    `git diff 文件名`: 看具体修改了什么内容
    `git log`: 显示从最近到最远的提交日志，一大串类似1094adb...的是commit id（版本号）十六进制表示
    `git log --pretty=oneline`: 简短输出显示从最近到最远的提交日志 
    在Git中，用HEAD表示当前版本，也就是最新的提交1094adb...，
    上一个版本就是HEAD^，上上一个版本就是HEAD^^，
    当然往上100个版本写100个^比较容易数不过来，所以写成HEAD~100
    `git reset --hard HEAD^`: 回退到上一个版本
    窗口未关，退回版本想回到新的那个版本用`git reset --hard 1094a`, 1094a为那个版本号的前几位，不用写全
    关了电脑，想恢复到新的那个版本用`git reflog`，这个是记录每一次的命令，查看那个的版本号，再执行`git reset --hard 1094a`

- Git和其他版本控制系统如SVN的一个不同之处就是有暂存区的概念。
    1. 工作区：在电脑里能看到的目录
    2. 版本库：工作区有一个隐藏目录.git，这个不算工作区，而是Git的版本库。
    Git的版本库里存了很多东西，其中最重要的就是称为stage（或者叫index）的暂存区，
    还有Git为我们自动创建的第一个分支master，以及指向master的一个指针叫HEAD
    3. 把文件往Git版本库里添加的时候，是分两步执行的：
        第一步是用git add把文件添加进去，实际上就是把文件修改添加到暂存区；
        第二步是用git commit提交更改，实际上就是把暂存区的所有内容提交到当前分支。
        因为创建Git版本库时，Git自动为我们创建了唯一一个master分支，
        所以，现在，git commit就是往master分支上提交更改。

- Git管理的是修改
    最简单的例子：分两步提交和直接用git commit提交的区别

- 准备提交前，`git checkout -- 文件名` 可以丢弃工作区的修改, 
    让这个文件回到最近一次git commit或git add时的状态
    `git reset HEAD <file>` 可以把暂存区的修改撤销掉（unstage），重新放回工作区
    `git reset`命令既可以回退版本，也可以把暂存区的修改回退到工作区

- 在文件管理器中把没用的文件删了, 直接`rm 文件名`
    因此，工作区和版本库就不一致了, `git status`命令会立刻告诉你哪些文件被删除了
    从版本库中删除该文件，那就用命令`git rm 文件名`删掉，并且`git commit`
    删错了想恢复到最新版本，`git checkout -- 文件名`, 
    从来没有被添加到版本库就被删除的文件，是无法恢复的

- 基于Github搭建远程仓库
    1. 创建SSH Key。在用户主目录下，看看有没有.ssh目录，
        如果有，再看看这个目录下有没有id_rsa和id_rsa.pub这两个文件，
        如果已经有了，可直接跳到下一步。如果没有，打开Shell（Windows下打开Git Bash），
        创建SSH Key：`ssh-keygen -t rsa -C "youremail@example.com"`
        id_rsa是私钥，不能泄露出去，id_rsa.pub是公钥，可以放心地告诉任何人
    2. 登陆GitHub，打开“Account settings”，“SSH Keys”页面,
        然后，点“Add SSH Key”，填上任意Title，在Key文本框里粘贴id_rsa.pub文件的内容
        因为GitHub需要识别出你推送的提交确实是你推送的，而不是别人冒充的
        GitHub允许你添加多个Key, 只要把每台电脑的Key都添加到GitHub，就可以在每台电脑上往GitHub推送了
    3. 添加远程库
        本地创建了一个Git仓库后，想在GitHub创建一个Git仓库，并且让这两个仓库进行远程同步
        在本地的learngit仓库下运行命令`git remote add origin git@github.com:GitHub账户名/learngit.git`
        添加后，远程库的名字就是origin，这是Git默认的叫法，也可以改成别的
        `git push -u origin master` 把当前分支master推送到远程, 第一次推送所以加了-u
    4. 删除远程库 
        想删除远程库，可以用`git remote rm <name>`命令, 仅解除了本地和远程的绑定关系
        使用前，建议先用`git remote -v`查看远程库信息
    5. 从远程库克隆
        登陆GitHub，创建一个新的仓库，名字叫gitskills
        勾选Initialize this repository with a README，这样GitHub会自动为我们创建一个README.md文件
        命令git clone克隆一个本地库`git clone git@github.com:GitHub账户名/gitskills.git`
        注意把Git库的地址换成你自己的，然后进入gitskills目录看看，已经有README.md文件了
        `$ cd gitskills,     $ ls ` 
        Git支持多种协议，包括https，但ssh协议速度最快

- 分支管理
    只有一条时间线，在Git里，这个分支叫主分支，即master分支
    HEAD严格来说不是指向提交，而是指向master，master才是指向提交的，所以，HEAD指向的就是当前分支
    创建新的分支，例如dev时，Git新建了一个指针叫dev，指向master相同的提交，再把HEAD指向dev，就表示当前分支在dev上
    合并最简单的方法，就是直接把master指向dev的当前提交，就完成了合并
    合并完分支后，甚至可以删除dev分支。删除dev分支就是把dev指针给删掉，删掉后，我们就剩下了一条master分支

- 一个例子：
    1. 创建dev分支，然后切换到dev分支
        `git checkout -b dev`
        -b参数表示创建并切换,相当于:
        `git branch dev`
        `git checkout dev`
    2. 查看当前分支
        `git branch`
        会列出所有分支，当前分支前面会标一个*号
    3. 切换回master分支
        `git checkout master`
    4. 再查看一个readme.txt文件，刚才添加的内容不见,
        因为那个提交是在dev分支上，而master分支此刻的提交点并没有变
    5. 把dev分支的工作成果合并到master分支上
        `git merge dev`用于合并指定分支到当前分支
        Fast-forward信息，Git告诉我们，这次合并是“快进模式”，
        也就是直接把master指向dev的当前提交，所以合并速度非常快
    6. 合并完成后，就可以放心地删除dev分支了
        `git branch -d dev`
    7. 实际上，切换分支这个动作，用switch更科学。
        因此，最新版本的Git提供了新的git switch命令来切换分支：
        创建并切换到新的dev分支，可以使用`git switch -c dev`
        直接切换到已有的master分支，可以使用`git switch master`
    8. 当Git无法自动合并分支时，就必须首先解决冲突。解决冲突后，再提交，合并完成。
        解决冲突就是把Git合并失败的文件手动编辑为我们希望的内容，再提交。
        用git log --graph命令可以看到分支合并图
    9. 通常，合并分支时，如果可能，Git会用Fast forward模式，
        但这种模式下，删除分支后，会丢掉分支信息。
        准备合并dev分支，请注意--no-ff参数，表示禁用Fast forward
        如果要强制禁用Fast forward模式，
        Git就会在merge时生成一个新的commit，
        这样，从分支历史上就可以看出分支信息
        `git merge --no-ff -m "merge with no-ff" dev`
        用`git log`看看分支历史
    10. Bug分支，bug都可以通过一个新的临时分支来修复，
        修复后，合并分支，然后将临时分支删除
        Git还提供了一个stash功能，可以把当前工作现场“储藏”起来，等以后恢复现场后继续工作
        `git stash`
        首先确定要在哪个分支上修复bug，假定需要在master分支上修复，就从master创建临时分支
        `git checkout master`
        修复完成后，切换到master分支，并完成合并，最后删除issue-101分支
        接着回到dev分支干活
        工作区是干净的，刚才的工作现场存到哪去了？用git stash list命令看看
        `git stash list`
        一是用`git stash apply`恢复，但是恢复后，stash内容并不删除，你需要用`git stash drop`来删除
        另一种方式是用`git stash pop`，恢复的同时把stash内容也删了
        可以多次stash，恢复的时候，先用`git stash list`查看，然后恢复指定的stash,可以用
        `git stash apply stash@{0}`
        在master分支上修复了bug后，我们要想一想，dev分支是早期从master分支分出来的，
        所以，这个bug其实在当前dev分支上也存在
        同样的bug，要在dev上修复，我们只需要把4c805e2 fix bug 101这个提交所做的修改“复制”到dev分支
        `git cherry-pick 4c805e2`
        此时提交的commit不同于master修改bug提交的
        也可以直接在dev分支上修复bug，然后在master分支上“重放”行不行？
        当然可以，不过你仍然需要git stash命令保存现场，才能从dev分支切换到master分支
    11. 软件开发中，总有无穷无尽的新的功能要不断添加进来。
        添加一个新功能时，不希望因为一些实验性质的代码，把主分支搞乱了，
        所以，每添加一个新功能，最好新建一个feature分支，在上面开发，完成后，合并，
        最后，删除该feature分支
        feature-vulcan分支还没有被合并，
        如果删除，将丢失掉修改，如果要强行删除，需要使用大写的-D参数
        `git branch -D feature-vulcan`
    12. 多人协作
        要查看远程库的信息，用`git remote`
        或者，用`git remote -v`显示更详细的信息
        如果没有推送权限，就看不到push的地址
        如果要推送其他分支，比如dev，就改成：`git push origin dev`

        master分支是主分支，因此要时刻与远程同步；
        dev分支是开发分支，团队所有成员都需要在上面工作，所以也需要与远程同步；
        bug分支只用于在本地修复bug，就没必要推到远程了，除非老板要看看你每周到底修复了几个bug；
        feature分支是否推到远程，取决于你是否和你的小伙伴合作在上面开发

        抓取推送
        即多人对同一文件做了修改并且已经存在推送
        当另一个人再次推送产生推送失败，因为你的小伙伴的最新提交和你试图推送的提交有冲突，
        解决办法也很简单，Git已经提示我们，先用`git pull`把最新的提交从origin/dev抓下来，
        然后，在本地合并，解决冲突，再推送
        `git pull`也失败了，原因是没有指定本地dev分支与远程origin/dev分支的链接，
        根据提示，设置dev和origin/dev的链接
        `git branch --set-upstream-to=origin/dev dev`
        这回git pull成功，但是合并有冲突，需要手动解决，解决的方法和分支管理中的解决冲突完全一样。
        解决后，提交，再push
    13. rebase
        rebase操作的特点：把分叉的提交历史“整理”成一条直线，看上去更直观。
        缺点是本地的分叉提交已经被修改过了
        `git rebase`
        `git log --graph --pretty=oneline --abbrev-commit`看效果
        rebase操作可以把本地未push的分叉提交历史整理成直线；
        rebase的目的是使得我们在查看历史提交的变化时更容易，因为分叉的提交需要三方对比

- 标签管理
    发布一个版本时，我们通常先在版本库中打一个标签（tag），这样，就唯一确定了打标签时刻的版本。
    将来无论什么时候，取某个标签的版本，就是把那个打标签的时刻的历史版本取出来。
    所以，标签也是版本库的一个快照
    tag就是一个让人容易记住的有意义的名字，它跟某个commit绑在一起
    1. 创建标签
        切换到需要打标签的分支上`git branch`
        敲命令`git tag <name>`就可以打一个新标签，例如`git tag v1.0`
        忘记打标签，找到历史提交的commit id，然后打上,例如：
        `git log --pretty=oneline --abbrev-commit`
        `git tag v0.9 f52c633`
        用`git tag`查看标签
        标签不是按时间顺序列出，而是按字母排序的。可以用`git show <tagname>`查看标签信息
        还可以创建带有说明的标签，用-a指定标签名，-m指定说明文字, 例如：
        `git tag -a v0.1 -m "version 0.1 released" 1094adb`
        标签总是和某个commit挂钩。如果这个commit既出现在master分支，又出现在dev分支，
        那么在这两个分支上都可以看到这个标签。

        标签打错了，也可以删除`git tag -d v0.1`
        因为创建的标签都只存储在本地，不会自动推送到远程。所以，打错的标签可以在本地安全删除
        推送某个标签到远程，使用命令`git push origin <tagname>`
        一次性推送全部尚未推送到远程的本地标签`git push origin --tags`

        标签已经推送到远程，要删除远程标签就麻烦一点，先从本地删除, 例如：
        `git tag -d v0.9`
        然后，从远程删除`git push origin :refs/tags/v0.9`

- gitee关联本地库
    在本地库上使用命令git remote add把它和Gitee的远程库关联
    `git remote add gitee git@gitee.com:serendipity/lesson_fullstack`

    一个本地库能既关联GitHub，又关联Gitee
    `git remote add github git@github.com:michaelliao/learngit.git`
    注意，远程库的名称叫github，不叫origin了
    `git remote add gitee git@gitee.com:liaoxuefeng/learngit.git`
    同样注意，远程库的名称叫gitee，不叫origin
    用`git remote -v`查看远程库信息，可以看到两个远程库
    如果要推送到GitHub，使用命令：`git push github master`
    如果要推送到Gitee，使用命令：`git push gitee master`

- Git还有很多可配置项
    1. 比如，让Git显示颜色`git config --global color.ui true`
    2. 忽略特殊文件：在Git工作区的根目录下创建一个特殊的.gitignore文件，
        然后把要忽略的文件名填进去，Git就会自动忽略这些文件，然后提交
        各种配置文件：https://github.com/github/gitignore
        忽略文件的原则是：
            忽略操作系统自动生成的文件，比如缩略图等；
            忽略编译生成的中间文件、可执行文件等，也就是如果一个文件是通过另一个文件自动生成的，
            那自动生成的文件就没必要放进版本库，比如Java编译产生的.class文件；
            忽略你自己的带有敏感信息的配置文件，比如存放口令的配置文件
        被忽略的文件强制提交：`git add -f 文件名`
        发现可能是.gitignore写得有问题，需要找出来哪个规则写错了`git check-ignore -v 文件名`
        ```
            # 排除所有.开头的隐藏文件:
            .*
            # 排除所有.class文件:
            *.class
            # 不排除.gitignore和App.class:
            !.gitignore
            !App.class
        ```
        把指定文件排除在.gitignore规则外的写法就是!+文件名，所以，只需把例外文件添加进去即可
    3. 配置别名，告诉Git，以后st就表示status，可以用`git config --global alias.st status`
        `--global`参数是全局参数，也就是这些命令在这台电脑的所有Git仓库下都有用
        给命令`git reset HEAD file`配置一个unstage别名`git config --global alias.unstage 'reset HEAD'`
        配置一个git last，让其显示最后一次提交信息`git config --global alias.last 'log -1'`
        配置Git的时候，加上--global是针对当前用户起作用的，如果不加，那只针对当前的仓库起作用
        每个仓库的Git配置文件都放在.git/config文件中`cat .git/config`
        别名就在[alias]后面，要删除别名，直接把对应的行删掉即可
        当前用户的Git配置文件放在用户主目录下的一个隐藏文件.gitconfig中`cat .gitconfig`
        配置别名也可以直接修改这个文件，如果改错了，可以删掉文件重新通过命令配置
    4. 搭建git服务器
        不想公开源代码，又舍不得给GitHub交保护费
        已经有sudo权限的用户账号
        (1) 安装git `sudo apt-get install git`
        (2) 创建一个git用户，用来运行git服务 `sudo adduser git`
        (3) 创建证书登录,收集所有需要登录的用户的公钥，就是他们自己的id_rsa.pub文件，
            把所有公钥导入到/home/git/.ssh/authorized_keys文件里，一行一个
        (4) 初始化Git仓库,选定一个目录作为Git仓库，假定是/srv/sample.git，
            在/srv目录下输入命令`sudo git init --bare sample.git`
            Git就会创建一个裸仓库，裸仓库没有工作区，因为服务器上的Git仓库纯粹是为了共享，
            所以不让用户直接登录到服务器上去改工作区，并且服务器上的Git仓库通常都以.git结尾。
            然后，把owner改为git `sudo chown -R git:git sample.git`
        (5) 禁用shell登录,出于安全考虑，第二步创建的git用户不允许登录shell，
            这可以通过编辑/etc/passwd文件完成。找到类似下面的一行
            `git:x:1001:1001:,,,:/home/git:/bin/bash`
            改为：`git:x:1001:1001:,,,:/home/git:/usr/bin/git-shell`
            这样，git用户可以正常通过ssh使用git，但无法登录shell，
            因为我们为git用户指定的git-shell每次一登录就自动退出
        (6) 克隆远程仓库`git clone git@server:/srv/sample.git`
    5. 管理公钥，如果团队很小，把每个人的公钥收集起来放到服务器的/home/git/.ssh/authorized_keys文件里就是可行的。
        如果团队有几百号人，可以用Gitosis来管理公钥
    6. 管理权限，Git支持钩子（hook），可以在服务器端编写一系列脚本来控制提交等操作，达到权限控制的目的。
        Gitolite就是这个工具