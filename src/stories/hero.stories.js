import { storiesOf } from '@storybook/vue'
import AppHero from '../components/AppHero.vue'
  storiesOf('Part|Hero', module)
  .add('default', () => ({
    components: { AppHero },
    template: `<AppHero title="JSLounge" subtitle="Vue.js + Storybookによる柔軟なコンポーネント開発" />`
  }))
  .add('color', () => ({
  components: { AppHero },
  template: `
 <div>
   <AppHero title="JSLounge" subtitle="Vue.js + Storybookによる柔軟なコンポーネント開発" />
   <AppHero color="primary" title="JSLounge" subtitle="Vue.js + Storybookによる柔軟なコンポーネント開発" />
   <AppHero color="info" title="JSLounge" subtitle="Vue.js + Storybookによる柔軟なコンポーネント開発" />
   <AppHero color="success" title="JSLounge" subtitle="Vue.js + Storybookによる柔軟なコンポーネント開発" />
   <AppHero color="warning" title="JSLounge" subtitle="Vue.js + Storybookによる柔軟なコンポーネント開発" />
   <AppHero color="danger" title="JSLounge" subtitle="Vue.js + Storybookによる柔軟なコンポーネント開発" />
   <AppHero color="light" title="JSLounge"subtitle="Vue.js + Storybookによる柔軟なコンポーネント開発" />
   <AppHero color="dark" title="JSLounge" subtitle="Vue.js + Storybookによる柔軟なコンポーネント開発" />
 </div>
    `
  }))
  .add('size', () => ({
    components: { AppHero },
    template: `
    <div>
      <AppHero color="primary" title="JSLounge" subtitle="Vue.js + Storybookによる柔軟なコンポーネント開発" />
      <AppHero size="medium" color="info" title="JSLounge" subtitle="Vue.js + Storybookによる柔軟なコンポーネント開発" />
      <AppHero size="large" color="warning" title="JSLounge" subtitle="Vue.js + Storybookによる柔軟なコンポーネント開発" />
    </div>
    `
  }))