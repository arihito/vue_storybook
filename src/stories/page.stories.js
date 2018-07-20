import { storiesOf } from '@storybook/vue'
import AppButton from '../components/AppButton.vue'
import TheHeader from '../components/Header/TheHeader.vue'
import AppHero from '../components/AppHero.vue'

storiesOf('Page', module)
  .add('Top', () => ({
  components: { AppHero, TheHeader, AppButton },
  template: `
    <div>
      <TheHeader />
      <AppHero size="medium" color="info" title="JSLounge" subtitle="Vue.js + Storybookによる柔軟なコンポーネント開発">
      <AppButton text="7/20" />
      </AppHero>
    </div>
  `
}))