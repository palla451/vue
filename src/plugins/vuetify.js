import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import colors from 'vuetify/util/colors'

export default createVuetify({
    theme: {
        dark: true,
        themes: {
            light: {
                primary: colors.red.darken1,
                secondary: colors.red.lighten4,
            },
        },
    },
    customProperties: true,
    icons: {
        iconfont: 'mdi',
    },
    // Aggiungi il font personalizzato
    fonts: {
        body: 'MyCustomFont, sans-serif',
        heading: 'MyCustomFont, sans-serif',
    },
    // Configura il menu laterale compresso
    navigationDrawer: {
        miniVariant: {
            // Aggiungi questa opzione per abilitare il menu compresso
            showMiniVariant: true,
        },
    },
})
