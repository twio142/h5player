import { defineConfig } from 'vitepress'

export const zh = defineConfig({
  description: 'HTML5视频增强脚本',
  dest: './dist/h5player-docs',
  lang: 'zh-Hans',

  themeConfig: {
    nav: [
      { text: '文档中心', link: '/zh/home/quickStart' },
      { text: '支持作者', link: '/zh/home/rewardTheAuthor' },
      {
        text: '相关连接',
        ariaLabel: '相关连接',
        items: [
          {
            text: '安装地址',
            items: [
              { text: 'Greasy Fork', link: 'https://greasyfork.org/zh-CN/scripts/381682', target: '_blank' },
              { text: 'GitHub dist', link: 'https://raw.githubusercontent.com/xxxily/h5player/master/dist/h5player.js', target: '_blank' },
            ]
          },
          {
            text: '反馈',
            items: [
              { text: 'GitHub Issues', link: 'https://github.com/xxxily/h5player/issues', target: '_blank' },
              { text: 'Greasy Fork 反馈', link: 'https://greasyfork.org/zh-CN/scripts/381682/feedback', target: '_blank' },
            ]
          },
          {
            text: '油猴插件',
            items: [
              { text: 'Tampermonkey（推荐）', link: 'https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo', target: '_blank' },
              { text: 'Tampermonkey（edge商店）', link: 'https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd', target: '_blank' },
              { text: 'Tampermonkey（官网下载）', link: 'https://www.tampermonkey.net/index.php?browser=chrome&locale=zh', target: '_blank' },
              { text: 'Tampermonkey（国内站）', link: 'https://www.extfans.com/productivity/dhdgffkkebhmkfjojejmpbldmpobfkfo/', target: '_blank' },
            ]
          },
          {
            text: '其他',
            items: [
              { text: 'GitHub.Dev', link: 'https://github.dev/xxxily/h5player', target: '_blank' },
              { text: '赞赏码', link: 'https://h5player.anzz.top/assets/img/donate.png', target: '_blank' },
            ]
          },
        ]
      },
      {
        text: 'anzz.top',
        items: [
          {
            text: 'anzz',
            items: [
              { text: 'anzz.top', link: 'https://anzz.top', target: '_blank' },
              { text: 'ai.anzz.top', link: 'https://ai.anzz.top', target: '_blank' },
              { text: '996.anzz.top', link: 'https://996.anzz.top', target: '_blank' },
              { text: 'h5player.anzz.top', link: 'https://h5player.anzz.top', target: '_blank' },
              { text: 'broadcast-message.anzz.top', link: 'https://broadcast-message.anzz.top', target: '_blank' },
            ]
          }
        ]
      }
    ],

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',

    sidebar: [
      {
        text: '文档中心',
        items: [
          { text: '快速开始', link: '/zh/home/quickStart' },
          { text: '安装详解', link: '/zh/home/install' },
          { text: '用户手册', link: '/zh/home/feature' },
          { text: '自定义配置', link: '/zh/home/customConfiguration' },
        ]
      },
      {
        text: '更多',
        items: [
          { text: '常见问题', link: '/zh/home/q&a' },
          { text: '关于捐赠', link: '/zh/home/aboutDonate' },
          { text: '支持作者', link: '/zh/home/rewardTheAuthor' },
          { text: '更新日志', link: '/zh/home/changeLog' },
        ]
      },
      {
        text: '其它作品',
        items: [
          { text: 'Hello-AI', link: 'https://github.com/xxxily/hello-ai' },
          { text: 'ffmpeg-script', link: 'https://github.com/xxxily/ffmpeg-script' },
          { text: 'local-appstore-for-1Panel', link: 'https://github.com/xxxily/local-appstore-for-1Panel' },
          { text: 'broadcast-message', link: 'https://github.com/xxxily/broadcast-message' },
        ]
      },
      {
        text: 'anzz',
        items: [
          { text: 'anzz.top', link: 'https://anzz.top', target: '_blank' },
          { text: 'ai.anzz.top', link: 'https://ai.anzz.top', target: '_blank' },
          { text: '996.anzz.top', link: 'https://996.anzz.top', target: '_blank' },
          { text: 'h5player.anzz.top', link: 'https://h5player.anzz.top', target: '_blank' },
          { text: 'broadcast-message', link: 'https://broadcast-message.anzz.top', target: '_blank' },
        ]
      },
      {
        text: '其它推荐',
        items: [
          { text: 'HuluAI', link: 'https://u.anzz.top/huluai02', target: '_blank' },
          { text: 'AnakinAI', link: 'https://u.anzz.top/anakinai', target: '_blank' },
          { text: 'AI编程插件', link: 'https://u.anzz.top/comate', target: '_blank' },
        ]
      }
    ]
  }
})


export const search = {
  zh: {
    placeholder: '搜索文档',
    translations: {
      button: {
        buttonText: '搜索文档',
        buttonAriaLabel: '搜索文档'
      },
      modal: {
        searchBox: {
          resetButtonTitle: '清除查询条件',
          resetButtonAriaLabel: '清除查询条件',
          cancelButtonText: '取消',
          cancelButtonAriaLabel: '取消'
        },
        startScreen: {
          recentSearchesTitle: '搜索历史',
          noRecentSearchesText: '没有搜索历史',
          saveRecentSearchButtonTitle: '保存至搜索历史',
          removeRecentSearchButtonTitle: '从搜索历史中移除',
          favoriteSearchesTitle: '收藏',
          removeFavoriteSearchButtonTitle: '从收藏中移除'
        },
        errorScreen: {
          titleText: '无法获取结果',
          helpText: '你可能需要检查你的网络连接'
        },
        footer: {
          selectText: '选择',
          navigateText: '切换',
          closeText: '关闭',
          searchByText: '搜索提供者'
        },
        noResultsScreen: {
          noResultsText: '无法找到相关结果',
          suggestedQueryText: '你可以尝试查询',
          reportMissingResultsText: '你认为该查询应该有结果？',
          reportMissingResultsLinkText: '点击反馈'
        }
      }
    }
  }
}