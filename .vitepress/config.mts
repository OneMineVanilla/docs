import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "files",
  lang: 'ru-RU',
  title: "OneMine Wiki",
  description: "OneMine Wiki",
  themeConfig: {
    logo: '/dolphin.png',
    sidebar: [
      {
        items: [
          { text: 'Приветствие', link: '/hello'},
        ]
      },
      {
        text: '🔎 ИНФОРМАЦИЯ',
        items: [
          { text: 'Правила', link: 'rules'},
          { text: 'Модификации', link: 'mods'},
          { text: 'Команды', link: 'commands'}
        ]
      },
      {
        text: '⚙️ МЕХАНИКИ',
        items: [
          { text: 'Быстрый бетон', link: 'mechanics/fast-concrete'},
          { text: 'Метка на карте', link: 'mechanics/label-map'},
          { text: 'Режим инспектора', link: 'mechanics/coreprotect'},
          { text: 'Невидимые рамки', link: 'mechanics/invisible-frame'},
          { text: 'Открытие шалкера в инвентаре', link: 'mechanics/open-shulker'},
          { text: 'Надевание предмета на голову', link: 'mechanics/hat'}
        ]
      },

      {
        text: '💰 ПОДДЕРЖКА',
        items: [
          { text: 'Майнер', link: 'donate/info'}
        ]
      }
    ],

    docFooter: {
      prev: 'Предыдущая страница',
      next: 'Следующая страница'
    },

    outline: {
      label: 'Содержание'
    },
  
    lastUpdated: {
      text: 'Обновлено',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short'
      }
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Поиск',
            buttonAriaLabel: 'Поиск'
          },
          modal: {
            noResultsText: 'ничего не найдено',
            resetButtonTitle: 'очистить',
            footer: {
              selectText: 'выбрать',
              navigateText: 'навигация',
              closeText: 'закрыть'
            }
          }
        }
      }
    },

    socialLinks: [
      {
        icon: 'discord',
        link: "https://dsc.gg/onemine"
      },
      {
        icon: 'telegram',
        link: 'https://t.me/onemine1'
      },
      { 
        icon: {
          'svg': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>Baseline-map SVG Icon</title><path fill="currentColor" d="m20.5 3l-.16.03L15 5.1L9 3L3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1l5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5M15 19l-6-2.11V5l6 2.11z"/></svg>'
        },
        link: 'https://map.onemine.club' 
      }
    ]
  },
  cleanUrls: true,
  lastUpdated: true
})
