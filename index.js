import { periodiclyCount } from './local-lib.js'
import numeral from 'https://esm.sh/numeral'

const p = document.getElementById('current-count')

periodiclyCount(count => {
  const num = numeral(count)
  const formatted = num.format('000')
  p.innerText = formatted
})