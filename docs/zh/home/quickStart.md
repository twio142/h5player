# h5player for tampermonkey

网页播放器增强脚本  

- 官网地址：[h5player.anzz.top](https://h5player.anzz.top)  
- GitHub地址：[github.com/xxxily/h5player](https://github.com/xxxily/h5player)  
- Gitee 地址：[gitee.com/ankvps/h5player](https://gitee.com/ankvps/h5player)  
- GreasyFork：[greasyfork.org/scripts/381682](https://greasyfork.org/scripts/381682)
- 一键安装地址：[h5player.anzz.top/h5player.user.js](https://update.greasyfork.org/scripts/381682/HTML5%E8%A7%86%E9%A2%91%E6%92%AD%E6%94%BE%E5%99%A8%E5%A2%9E%E5%BC%BA%E8%84%9A%E6%9C%AC.user.js)

<br />

## 简介

视频增强脚本，支持所有H5视频网站，例如：B站、抖音、腾讯视频、优酷、爱奇艺、西瓜视频、油管（YouTube）、微博视频、知乎视频、搜狐视频、网易公开课、百度网盘、阿里云盘、ted、instagram、twitter等。  

全程快捷键控制，支持：倍速播放/加速播放、视频画面截图、画中画、网页全屏、调节亮度、饱和度、对比度、自定义配置功能增强等功能，为你提供愉悦的在线视频播放体验。  

还有片前片后短视频快进、在线教程/教育视频倍速快学、音视频文件离线私藏等能力  

<a href="https://h5player.anzz.top/assets/img/h5player_ui.jpg" target="_blank">
  <img src="https://h5player.anzz.top/assets/img/h5player_ui.jpg" alt="h5player-ui" />
</a>

## 应用场景

- 无极调速，节奏快慢，掌控自如
- 倍速快学，看教程快人一步
- 快乐刷剧，不再枯燥乏味
- 短片快进，告别无聊等待
- 视频截图，笔记存档、剪贴分享
- 视频离线，本地观看、私发、私藏
- 直播同步，拒绝延迟，迎头赶上

## 技术特性

- 兼容广泛，所有存在video标签的网页均支持 即使嵌在 iframe、shadowdom下均可兼容
- 支持跨域控制，跨域受限页面下快捷键一样可以无缝衔接
- 支持多实例（如：twitter，instagram下亦可兼容）
- 支持播放进度记录
- 支持播放速度记录
- 支持视频画面缩放
- 支持画中画功能
- 支持跨Tab控制画中画
- 支持视频画面截图功能
- 支持对音频实例的控制
- 支持视频/音频文件离线存储
- 支持直播视频流提取
- 支持配置式添加自定义功能

## 关于[@antifeature](https://greasyfork.org/help/antifeatures)

脚本出于自用需要和技术热情开发的，但依然会受到一部分人的无端指责，和莫名奇妙的差评或举报，与其将精力耗费在跟这些人的纠缠上，不如主动声明[@antifeature](https://greasyfork.org/help/antifeatures)（也是greasyfork社区的规范要求），过滤掉那些有严重白嫖洁癖，还喜欢站在道德制高点上对他人指手画脚、评头论足，或从不看文档的人！脚本没有会员内容，也不会要求付费、点赞、关注什么号才能使用，更加不会主动植入百度统计、谷歌统计这类广告追踪脚本。  

但为了能持续地良性迭代，脚本在UI界面上，以文本的形式加入少量的、不影响用户体验的推广链接，不能接受的请在`菜单 > 图形界面`里禁用用户图形界面即可，如果还是不能接受，请不要使用该脚本。  

特别说明：脚本已提供丰富的快捷键控制能力，非常适合喜欢快捷、高效的用户使用，关闭图形界面不会影响脚本的核心功能，用不到图形界面的用户请放心关闭。  

## 交流群

<br />

| 加我拉你入群<br/>（注明来自：h5player） | Telegram群组<br/>（<a href="https://t.me/h5player" target="_blank">直接入群</a>） |
| :----: | :----: |
| <img src="https://h5player.anzz.top/assets/img/WeChat2.png?t=2022.11.21" width=280 /> |  <img src="https://h5player.anzz.top/assets/img/tg.jpg?t=2022.11.21" width=280 /> |

<br />

## 功能定制

脚本已经支持了大部分常用的功能，如果你有更多的需求，可以通过自定义配置来实现。  
具体参考：[自定义配置](https://h5player.anzz.top/home/customConfiguration.html)  
<br />
如果你不懂编程或不想折腾，又有相对复杂的功能需求，可以考虑找作者`付费定制`；  
[通过上面的微信或者TG联系作者](#交流群)  

## 安装

> 安装脚本前需先安装[油猴插件](https://www.tampermonkey.net)，
> [油猴(Tampermonkey)](https://www.baidu.com/s?wd=%E6%B2%B9%E7%8C%B4%E6%8F%92%E4%BB%B6%E5%AE%89%E8%A3%85)是一款广受好评的、用于加载用户脚本的浏览器插件，支持：Chrome、Edge、Firefox、safari、Opera、以及[国内品牌众多的浏览器](https://www.baidu.com/s?wd=%E5%9B%BD%E5%86%85%E6%B5%8F%E8%A7%88%E5%99%A8)

**安装好油猴插件后**，点击下面的链接即可一键安装：  

- **[h5player.user.js (点我直接安装)](https://update.greasyfork.org/scripts/381682/HTML5%E8%A7%86%E9%A2%91%E6%92%AD%E6%94%BE%E5%99%A8%E5%A2%9E%E5%BC%BA%E8%84%9A%E6%9C%AC.user.js)**

更详细的安装帮助看这里：[详细安装教程](https://h5player.anzz.top/home/install.html)  

## 使用文档

- [功能手册](https://h5player.anzz.top/home/feature.html)
- [常见问题Q&A](https://h5player.anzz.top/home/q&a.html)
  
## 快捷键列表

|  快捷键   | 说明    |
| --- | --- |
| → | 快进5秒 |
| ← | 后退5秒 |
| Ctrl+→ | 快进30秒 |
| Ctrl+← | 后退30秒 |
| ↑ | 音量升高 5% |
| ↓ | 音量降低 5% |
| Ctrl+↑ | 音量升高 20% |
| Ctrl+↓ | 音量降低 20% |
| C | 加速播放 +0.1 |
| X | 减速播放 -0.1 |
| Z | 正常速度播放 |
| shift+C | 放大视频画面 +0.05 |
| shift+X | 缩小视频画面 -0.05 |
| shift+Z | 恢复视频画面 |
| shift+P | 进入或退画中画功能 |
| shift+S | 截图，截取当前画面并保存 |
| shift+D | 下载音视频文件（实验性功能） |
| shift+R | 启用或禁止自动恢复播放进度功能 |
| shift+→ | 画面向右移动10px |
| shift+← | 画面向左移动10px |
| shift+↑ | 画面向上移动10px |
| shift+↓ | 画面向下移动10px |
| Enter | 进入/退出全屏 |
| shift+Enter | 进入/退出网页全屏 |
| N | 下一个/集视频（仅部分网站支持） |
| D | 上一帧 (截图时进行微调以找到质量最佳的一帧) |
| F | 下一帧 (截图时进行微调以找到质量最佳的一帧) |
| E | 亮度增加% |
| W | 亮度减少% |
| T | 对比度增加% |
| R | 对比度减少% |
| U | 饱和度增加% |
| Y | 饱和度减少% |
| O | 色相增加 1 度 |
| I | 色相减少 1 度 |
| K | 模糊增加 1 px |
| J | 模糊减少 1 px |
| Q | 图像复位 |
| S | 画面旋转 90 度 |
| M | 画面水平镜像翻转 |
| shift+M | 画面垂直镜像翻转 |
| ctrl+\ | 快捷键是否全网页可用，默认true |
| ~~Ctrl+space~~ | ~~禁用/启用 该播放插件~~ |

## 支持网站列表

> 本插件支持支持所有使用HTML5技术进行视频播放的网站

下面列出一些常见网站列表方便点击测试：

|  视频网站   | URL    |
| --- | --- |
| B站 | [https://bilibili.com](https://bilibili.com) |
| 腾讯视频 | [https://v.qq.com](https://v.qq.com) |
| 抖音 | [https://douyin.com](https://douyin.com) |
| 爱奇艺 | [https://iqiyi.com](https://www.iqiyi.com) |
| 优酷 | [https://youku.com](https://www.youku.com) |
| YouTube | [https://youtube.com](https://www.youtube.com) |
| TED | [https://www.ted.com](https://www.ted.com) |
| Instagram | [https://www.instagram.com](https://www.instagram.com) |
| Twitter | [https://twitter.com](https://twitter.com) |
| Telegram web | [https://web.telegram.org](https://web.telegram.org) |
| Pornhub | [https://www.pornhub.com](https://www.pornhub.com) |
| 斗鱼 | [https://www.douyu.com](https://www.douyu.com) |
| 虎牙 | [https://www.huya.com](https://www.huya.com) |
| 微博TV | [https://weibo.com/tv](https://weibo.com/tv) |
| 酷燃视频 | [https://krcom.cn](https://krcom.cn) |
| 搜狐视频 | [https://tv.sohu.com](https://tv.sohu.com) |
| 网易公开课 | [https://open.163.com/ted](https://open.163.com/ted) |
| QQ音乐 - MV | [https://y.qq.com/portal/mv_lib.html](https://y.qq.com/portal/mv_lib.html) |
| 凤凰视频 | [https://v.ifeng.com/](https://v.ifeng.com) |
| 风行网 | [https://www.fun.tv](https://www.fun.tv) |
| PPTV聚力 | [https://www.pptv.com](https://www.pptv.com) |
| 齐鲁网 | [https://v.iqilu.com](https://v.iqilu.com) |
| 阳光卫视 | [https://www.isuntv.com](https://www.isuntv.com) |
| 央视网 | [https://www.cntv.cn](https://www.cntv.cn) |
| 芒果TV | [https://www.mgtv.com](https://www.mgtv.com) |
| 西瓜视频 | [https://www.ixigua.com](https://www.ixigua.com) |
| 新传宽频 | [https://v.zhibo.tv](https://v.zhibo.tv) |
| 中国体育 | [https://video.zhibo.tv](https://video.zhibo.tv) |
| AcFun | [https://www.acfun.cn](https://www.acfun.cn) |
| 快手 | [https://www.kuaishou.com](https://www.kuaishou.com) |
| MioMio弹幕网 | [https://www.miomio.tv](https://www.miomio.tv) |
| 56网 | [https://www.56.com](https://www.56.com) |
| VK | [https://vk.com](https://vk.com) |
| Vine | [https://vine.co](https://vine.co) |
| Magisto | [https://www.magisto.com](https://www.magisto.com) |
| CBS | [https://www.cbs.com](https://www.cbs.com) |
| FC2 Video | [https://video.fc2.com](https://video.fc2.com) |

|  音频网站   | URL    |
| --- | --- |
| 喜马拉雅 | [https://www.ximalaya.com/](https://www.ximalaya.com/) |
| 懒人听书 | [https://www.lrts.me/](https://www.lrts.me/) |
| 蜻蜓FM | [https://www.qtfm.cn/](https://www.qtfm.cn/) |
| 酷狗听书 | [https://www.kugou.com/ts/](https://www.kugou.com/ts/) |
| 百度网盘音频文件 | [https://pan.baidu.com/](https://pan.baidu.com/) |
| 阿里云盘音频文件 | [https://aliyundrive.com/](https://aliyundrive.com/) |
| 其他网盘音频文件 | ...... |

如果你常去的网站支持不好欢迎提[issues](https://github.com/xxxily/h5player/issues)

## 其他说明

- 1、该脚本是利用业余时间进行开发维护的，有问题欢迎反馈，但不接受任何差评  
- 2、如果发现脚本完全不可用，一般都不是脚本本身的问题，建议重装一下插件试试  

## 更新日志

- [H5player ChangeLog](https://github.com/xxxily/h5player/blob/master/changeLog.md)

## 支持作者

如果我的努力给你带来了便利，请不要吝啬你的赞赏  

[100万级安装量的开源作品，一年有多少打赏收入？](https://u.anzz.top/aboutdonate)  

<p>
  <a href="https://h5player.anzz.top" target="_blank">
  <img src="https://h5player.anzz.top/assets/img/donate.png" width=480 alt="如果我的努力给你带来了便利，请不要吝啬你的赞赏" />
  </a>
</p>

<br />

<Vssue :title="$title" />
