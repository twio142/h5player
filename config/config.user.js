// ==UserScript==
// @name         HTML5播放器自定义配置
// @name:en      HTML5 player enhanced script custom configuration
// @namespace    https://github.com/xxxily/h5player
// @homepage     https://github.com/xxxily/h5player
// @version      0.0.1
// @description  HTML5播放器自定义配置，按需定制自己的功能
// @description:en  HTML5 video player enhanced script custom configuration
// @author       ankvps
// @icon         https://cdn.jsdelivr.net/gh/xxxily/h5player@master/logo.png
// @match        *://*/*
// @grant        unsafeWindow
// @run-at       document-start
// @license      GPL
// @updateURL    https://raw.githubusercontent.com/twio142/h5player/refs/heads/master/config/config.user.js
// @downloadURL  https://raw.githubusercontent.com/twio142/h5player/refs/heads/master/config/config.user.js
// ==/UserScript==

/* 自定义配置 */
const customConfiguration = {
  media: {
    autoPlay: false,
    playbackRate: 1,
    volume: 1,

    /* 是否允许存储播放进度 */
    allowRestorePlayProgress: {},
    /* 视频播放进度映射表 */
    progress: {},
  },
  hotkeys: [
    {
      desc: "Web FullScreen",
      key: "x",
      command: "setWebFullScreen",
      /* 如需禁用快捷键，将disabled设为true */
      disabled: false,
    },
    {
      desc: "FullScreen",
      key: "f4",
      command: "setFullScreen",
    },
    {
      desc: "WideScreen",
      key: "t",
      command: "setWideScreen",
    },
    {
      desc: "Back to Start",
      key: "0",
      command: "setBackToStart",
    },
    {
      desc: "Seek to …",
      key: "shift+j",
      command: "seekToTime",
    },
    {
      desc: "Picture in Picture",
      key: "shift+p",
      command: "togglePictureInPicture",
    },
    {
      desc: "Copy Video URL",
      key: "shift+y",
      command: "copyVideoURL",
    },
    {
      desc: "Capture Screenshot",
      key: "shift+s",
      command: "capture",
    },
    {
      desc: "Toggle Restore Progress",
      key: "ctrl+r",
      command: "switchRestorePlayProgressStatus",
    },
    {
      desc: "Mirror Vertical",
      key: "m",
      command: "setMirror",
      args: [true],
      disabled: true,
    },
    {
      desc: "Mirror Horizontal",
      key: "shift+m",
      command: "setMirror",
    },
    {
      desc: "Download Media",
      key: "shift+d",
      command: "mediaDownload",
      disabled: true,
    },
    {
      desc: "Scale Down -5%",
      key: "Minus",
      command: "setScaleDown",
    },
    {
      desc: "Scale Up +5%",
      key: "shift++",
      command: "setScaleUp",
    },
    {
      desc: "Reset Scale",
      key: "Equal",
      command: "resetTransform",
    },
    {
      desc: "Move Right 10px",
      key: "shift+arrowright",
      command: "setTranslateRight",
      disabled: true,
    },
    {
      desc: "Move Left 10px",
      key: "shift+arrowleft",
      command: "setTranslateLeft",
      disabled: true,
    },
    {
      desc: "Move Up 10px",
      key: "shift+arrowup",
      command: "setTranslateUp",
      disabled: true,
    },
    {
      desc: "Move Down 10px",
      key: "shift+arrowdown",
      command: "setTranslateDown",
      disabled: true,
    },
    {
      desc: "Forward 5s",
      key: "arrowright",
      command: "setCurrentTimeUp",
    },
    {
      desc: "Backward 5s",
      key: "arrowleft",
      command: "setCurrentTimeDown",
    },
    {
      desc: "Forward 30s",
      key: "shift+arrowright",
      command: "setCurrentTimeUp",
      args: [30],
    },
    {
      desc: "Backward 30s",
      key: "shift+arrowleft",
      command: "setCurrentTimeDown",
      args: [-30],
    },
    {
      desc: "Volume Up 10%",
      key: "arrowup",
      command: "setVolumeUp",
      args: [0.1],
    },
    {
      desc: "Volume Down 10%",
      key: "arrowdown",
      command: "setVolumeDown",
      args: [-0.1],
    },
    {
      desc: "Volume Up 25%",
      key: "shift+arrowup",
      command: "setVolumeUp",
      args: [0.25],
    },
    {
      desc: "Volume Down 25%",
      key: "shift+arrowdown",
      command: "setVolumeDown",
      args: [-0.25],
    },
    {
      desc: "Play/Pause",
      key: "p",
      command: "switchPlayStatus",
    },
    {
      desc: "Speed Down -0.25",
      key: "Comma",
      command: "setPlaybackRateDown",
      args: [-0.25],
      when: () => window.location.host !== 'pocketcasts.com',
    },
    {
      desc: "Speed Down -0.2",
      key: "Comma",
      command: "setPlaybackRateDown",
      args: [-0.2],
      when: () => window.location.host === 'pocketcasts.com',
    },
    {
      desc: "Speed Up +0.25",
      key: "Period",
      command: "setPlaybackRateUp",
      args: [0.25],
      when: () => window.location.host !== 'pocketcasts.com',
    },
    {
      desc: "Speed Up +0.2",
      key: "Period",
      command: "setPlaybackRateUp",
      args: [0.2],
      when: () => window.location.host === 'pocketcasts.com',
    },
    {
      desc: "Reset Speed to 1x",
      key: "Slash",
      command: "resetPlaybackRate",
    },
    {
      desc: "Speed 1x",
      key: "Digit1",
      command: "setPlaybackRatePlus",
      args: 1,
      disabled: true,
    },
    {
      desc: "Speed 1x",
      key: "Numpad1",
      command: "setPlaybackRatePlus",
      args: 1,
      disabled: true,
    },
    {
      desc: "Speed 2x",
      key: "Digit2",
      command: "setPlaybackRatePlus",
      args: 2,
      disabled: true,
    },
    {
      desc: "Speed 2x",
      key: "Numpad2",
      command: "setPlaybackRatePlus",
      args: 2,
      disabled: true,
    },
    {
      desc: "Speed 3x",
      key: "Digit3",
      command: "setPlaybackRatePlus",
      args: 3,
      disabled: true,
    },
    {
      desc: "Speed 3x",
      key: "Numpad3",
      command: "setPlaybackRatePlus",
      args: 3,
      disabled: true,
    },
    {
      desc: "Speed 4x",
      key: "Digit4",
      command: "setPlaybackRatePlus",
      args: 4,
      disabled: true,
    },
    {
      desc: "Speed 4x",
      key: "Numpad4",
      command: "setPlaybackRatePlus",
      args: 4,
      disabled: true,
    },
    {
      desc: "Next Frame",
      key: "F",
      command: "freezeFrame",
      args: 1,
      disabled: true,
    },
    {
      desc: "Previous Frame",
      key: "D",
      command: "freezeFrame",
      args: -1,
      disabled: true,
    },
    {
      desc: "Brightness Up",
      key: "E",
      command: "setBrightnessUp",
      disabled: true,
    },
    {
      desc: "Brightness Down",
      key: "W",
      command: "setBrightnessDown",
      disabled: true,
    },
    {
      desc: "Contrast Up",
      key: "T",
      command: "setContrastUp",
      disabled: true,
    },
    {
      desc: "Contrast Down",
      key: "R",
      command: "setContrastDown",
      disabled: true,
    },
    {
      desc: "Saturation Up",
      key: "U",
      command: "setSaturationUp",
      disabled: true,
    },
    {
      desc: "Saturation Down",
      key: "Y",
      command: "setSaturationDown",
      disabled: true,
    },
    {
      desc: "Hue Up",
      key: "O",
      command: "setHueUp",
      disabled: true,
    },
    {
      desc: "Hue Down",
      key: "I",
      command: "setHueDown",
      disabled: true,
    },
    {
      desc: "Blur Up",
      key: "K",
      command: "setBlurUp",
      disabled: true,
    },
    {
      desc: "Blur Down",
      key: "J",
      command: "setBlurDown",
      disabled: true,
    },
    {
      desc: "Reset Filter and Transform",
      key: "Q",
      command: "resetFilterAndTransform",
      disabled: true,
    },
    {
      desc: "Rotate 90°",
      key: "shift+r",
      command: "setRotate",
    },
    {
      desc: "Previous Video",
      key: "BracketLeft",
      command: "setPrevVideo",
    },
    {
      desc: "Previous Video",
      key: "shift+BracketLeft",
      command: "setPrevVideo",
    },
    {
      desc: "Next Video",
      key: "BracketRight",
      command: "setNextVideo",
    },
    {
      desc: "Next Video",
      key: "shift+BracketRight",
      command: "setNextVideo",
    },
    {
      desc: "Mute/Unmute",
      key: "f10",
      command: "setMute",
    },
    {
      desc: "Subtitle On/Off",
      key: "c",
      command: "setSubtitle",
    },
    {
      desc: "Danmaku Input",
      key: "enter",
      command: () => {
        if (document.activeElement != "input.bpx-player-dm-input") {
          document.querySelector(".bpx-player-dm-input").focus();
        } else if (document.querySelector(".bpx-player-dm-input").value) {
          document.querySelector("div.bui-area.bui-button-blue").click();
        } else {
          document.querySelector(".bpx-player-dm-input").blur();
        }
      },
      when: () => window.location.host === 'www.bilibili.com',
    },
    {
      desc: "Shuffle",
      key: "shift+x",
      command: () => {
        switch (window.location.host) {
          case "www.bilibili.com":
            document.querySelector(".list-playway-btn")?.click();
            break;
          case "www.youtube.com":
            document.querySelector("button[aria-label='Shuffle playlist']")?.click();
            break;
          case "open.spotify.com":
            document.querySelector("button[aria-label*='Shuffle']")?.click();
            break;
        }
      },
    },
    {
      desc: "Center Player",
      key: "z",
      command: "centerPlayer",
    },
  ],
  enhance: {
    /* 不禁用默认的调速逻辑，则在多个视频切换时，速度很容易被重置，所以该选项默认开启 */
    blockSetPlaybackRate: true,

    blockSetCurrentTime: false,
    blockSetVolume: true,
    allowExperimentFeatures: true,
  },
  debug: false,
};

/**
 * 任务配置中心 Task Control Center
 * 用于配置所有无法进行通用处理的任务，如不同网站的全屏方式不一样，必须调用网站本身的全屏逻辑，才能确保字幕、弹幕等正常工作
 **/
const customTaskControlCenter = {
  /**
   * 配置示例
   * 父级键名对应的是一级域名，
   * 子级键名对应的相关功能名称，键值对应的该功能要触发的点击选择器或者要调用的相关函数
   * 所有子级的键值都支持使用选择器触发或函数调用
   * 配置了子级的则使用子级配置逻辑进行操作，否则使用默认逻辑
   * 注意：include，exclude这两个子级键名除外，这两个是用来进行url范围匹配的
   * */
  "demo.demo": {
    fullScreen: ".fullscreen-btn",
    exitFullScreen: ".exit-fullscreen-btn",
    webFullScreen: function () {},
    exitWebFullScreen: ".exit-fullscreen-btn",
    autoPlay: ".player-start-btn",
    pause: ".player-pause",
    play: ".player-play",
    switchPlayStatus: ".player-play",
    playbackRate: function () {},
    currentTime: function () {},
    addCurrentTime: ".add-currenttime",
    subtractCurrentTime: ".subtract-currenttime",
    // 自定义快捷键的执行方式，如果是组合键，必须是 ctrl-->shift-->alt 这样的顺序，没有可以忽略，键名必须全小写
    shortcuts: {
      /* 注册要执行自定义回调操作的快捷键 */
      register: [
        "ctrl+shift+alt+c",
        // "ctrl+shift+c",
        // "ctrl+alt+c",
        // "ctrl+c",
        // "c"
      ],
      /* 自定义快捷键的回调操作 */
      callback: function (h5Player, taskConf, data) {
        const { event, player } = data;
        console.log(event, player);
      },
    },
    /* 当前域名下需包含的路径信息，默认整个域名下所有路径可用 必须是正则 */
    include: /^.*/,
    /* 当前域名下需排除的路径信息，默认不排除任何路径 必须是正则 */
    exclude: /\t/,
  },
  "youtube.com": {
    wideScreen: "button.ytp-size-button",
    webFullScreen: undefined,
    subtitle: ".ytp-subtitles-button",
    prev: ".ytp-prev-button",
    blockSetVolume: true,
  },
  "bilibili.com": {
    wideScreen: ".bilibili-player-video-btn-widescreen, .bpx-player-ctrl-wide",
    subtitle: ".bui-danmaku-switch-input, .bui-switch-input[aria-Label=弹幕]",
    autoNext: ".switch-button",
    prev: ".bpx-player-ctrl-prev",
    init: function (h5Player, taskConf) {
      if (window.location.href.match(/bilibili\.com\/watchlater\//)) {
        window.GM_addStyle(`.animated-banner video{ display:none !important }`);
        document.querySelector(".animated-banner video").loop = false;
      }
    },
  },
  "netflix.com": {
    // 停止在netflix下使用插件的所有功能
    // disable: true,
    fullScreen: "button.button-nfplayerFullscreen",
    addCurrentTime: "button.button-nfplayerFastForward",
    subtractCurrentTime: "button.button-nfplayerBackTen",
    /**
     * 使用netflix自身的调速，因为目前插件没法解决调速导致的服务中断问题
     * https://github.com/xxxily/h5player/issues/234
     * https://github.com/xxxily/h5player/issues/317
     * https://github.com/xxxily/h5player/issues/381
     * https://github.com/xxxily/h5player/issues/179
     * https://github.com/xxxily/h5player/issues/147
     */
    playbackRate: true,
    shortcuts: {
      /**
       * TODO
       * netflix 一些用户习惯使用F键进行全屏，所以此处屏蔽掉f键的下一帧功能
       * 后续开放自定义配置能力后，让用户自行决定是否屏蔽
       */
      register: ["f"],
      callback: function (h5Player, taskConf, data) {
        return true;
      },
    },
  },
};

/* 注册自定义配置信息 */
const pageWin = window.unsafeWindow;
if (pageWin) {
  const configuration = { customConfiguration, customTaskControlCenter };
  pageWin.__h5PlayerCustomConfiguration__ = configuration;
  pageWin.__setH5PlayerCustomConfiguration__ instanceof Function &&
    pageWin.__setH5PlayerCustomConfiguration__(configuration, "External");
}
