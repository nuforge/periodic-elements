import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

import {
  VApp,
  VContainer,
  VRow,
  VCol,
  VMain,
  VResponsive,
  VNavigationDrawer,
  VCard,
  VCardTitle,
  VCardText,
  VCardActions,
  VCardSubtitle,
  VChip,
  VTooltip,
  VList,
  VListItem,
  VListItemTitle,
  VListItemSubtitle,
  VFooter,
} from 'vuetify/components'

const app = createApp(App)

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'dark',
    themes: {
      light: {
        dark: false,
        colors: {
          periodOne: '#2B75B1',
          secondary: '#00CC88',
          tertiary: '#9E3E3B',
          quaternary: '#FFBB00',
          accent: '#82B1FF',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107',
        },
      },
      dark: {
        dark: true,
        colors: {
          primary: '#2B75B1',
          secondary: '#00CC88',
          tertiary: '#9E3E3B',
          quaternary: '#FFBB00',
          accent: '#82B1FF',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107',
        },
      },
    },
  },
  icons: {
    defaultSet: 'mdi', // 'mdi' is Material Design Icons; use 'md' for Material Icons
    aliases: {
      icon: 'mdi-emoticon-happy',
      next: 'mdi-arrow-right',
      upvote: 'mdi-arrow-up',
      downvote: 'mdi-arrow-down',
      comment: 'mdi-comment',
      favorite: 'mdi-heart',
      share: 'mdi-share',
      primary: 'mdi-cards-spade',
      secondary: 'mdi-cards-club',
      tertiary: 'mdi-cards-heart',
      quaternary: 'mdi-cards-diamond',
      scarf: '🧣',
    },
  },
  components: {
    VApp,
    VContainer,
    VMain,
    VResponsive,
    VNavigationDrawer,
    VCard,
    VCardTitle,
    VCardText,
    VCardActions,
    VCardSubtitle,
    VRow,
    VCol,
    VChip,
    VTooltip,
    VList,
    VListItem,
    VListItemTitle,
    VListItemSubtitle,
    VFooter,
  },
})

app.use(createPinia())
app.use(vuetify)
app.use(router)

app.mount('#app')
