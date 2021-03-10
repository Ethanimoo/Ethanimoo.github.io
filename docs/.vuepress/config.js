const utils = require('./utils')

module.exports = {
    title: "Joffrey's Doc", 
    description: 'Joffrey的前端记录', 
    head: [
        [
          'link',
          {
            rel: 'icon',
            href: '/egg.png'
          }
        ]
      ],
    plugins: ['one-click-copy'],
    themeConfig: {    
        logo: '/egg.png',
        lastUpdated: 'lastUpdate', // string | boolean
        nav: [
                {
                  text: '首页',
                  link: '/'
                },
                {
                  text: 'API',
                  link: '/api/'
                },
                {
                  text: '资源',
                  items: [
                      { text: '推荐库', link: '/repository/' },
                      { text: '网站', link: '/website/' }
                  ]
                },
                {
                  text: '最近阅读',
                  link: '/diary/read'
                },
                {
                  text: '文章',
                  link: '/article/'
                },
                {
                  text: '面试',
                  link: '/interview/'
                },
                {
                  text: 'Blog',
                  link: '/blog/'
                }
        ],
        sidebar: utils.inferSiderbars(),
    }
}