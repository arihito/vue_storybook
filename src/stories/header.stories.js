import { storiesOf } from '@storybook/vue'

import HeaderBrand from '../components/Header/HeaderBrand.vue'
import HeaderItem from '../components/Header/HeaderItem.vue'
import HeaderWrapper from '../components/Header/HeaderWrapper.vue'
import TheHeader from '../components/Header/TheHeader.vue'

storiesOf('Part|Header', module)
  .add('HeaderBrand', () => ({
  components: { HeaderBrand },
  template: `<HeaderBrand />`
}))
.add('HeaderItem', () => ({
  components: { HeaderItem },
  data() {
    return {
      item: {
        text: '事業紹介',
        href: '/works'
      }
    }
  },
  template: `<HeaderItem :item="item" />`
  }))
  .add('HeaderWrapper', () => ({
    components: { HeaderWrapper },
    template: `<HeaderWrapper></HeaderWrapper>`
  }))
  .add('TheHeader', () => ({
    components: { TheHeader },
    template: `<TheHeader />`
}))