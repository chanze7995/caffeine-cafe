import { createApp } from 'vue'

import SvgIcon from '../components/SvgIcon.vue'
const app = createApp({})
app.component('SvgIcon', SvgIcon)

const req = require.context('../assets/icon', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)

requireAll(req)
