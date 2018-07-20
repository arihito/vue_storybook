import VueInfoAddon from 'storybook-addon-vue-info'
import { storiesOf } from '@storybook/vue'
import {withKnobs, text} from '@storybook/addon-knobs'
import AppButton from '../components/AppButton.vue'
// import HeaderBrand from '../components/Header/HeaderBrand.vue'
import HeaderItem from '../components/Header/HeaderItem.vue'
// import HeaderWrapper from '../components/Header/HeaderWrapper.vue'
// import TheHeader from '../components/Header/TheHeader.vue'
import AppHero from '../components/AppHero.vue'

storiesOf('Usage|Button', module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add('AppButton', () => {
      const buttonText = text('text', 'Usage Button')
      const color = text('color', '')
      const size = text('size', '')
      return {
        components: { AppButton },
        template: `<AppButton text="${buttonText}" color="${color}" size="${size}" />`
      }
    })

storiesOf('Usage|Header', module)
  .addDecorator(VueInfoAddon)
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
    components: { HeaderItem },
    template: `<HeaderItem :item="item" />`
  }))
  storiesOf('Usage|Hero', module)
   .addDecorator(VueInfoAddon)
   .addDecorator(withKnobs)
   .add('AppHero', () => {
      const title = text('title', 'JSLounge')
      const subtitle = text('subtitle', 'Vue.js + Storybookによる柔軟なコンポーネント開発')
      const size = text('size', '')
      const color = text('color', '')
      return {
        components: { AppHero },
         template: `<AppHero title="${title}" subtitle="${subtitle}" size="${size}" color="${color}" />`
      }
    })
// storiesOf('Part|Button', module)
//   .add('default', () => ({
//     components: { AppButton },
//     template: `<AppButton text="default" />`
//   }))
//   .add('color', () => ({
//     components: { AppButton },
//       template: `
//         <div style="display: flex; flex-wrap:wrap; justify-content: space-around; margin-top: 30px; width: 800px;">
//           <AppButton text="white" color="white" />
//           <AppButton text="light" color="light" />
//           <AppButton text="dark" color="dark"/>
//           <AppButton text="black" color="black" />
//           <AppButton text="text" color="text"/>
//           <AppButton text="primary" color="primary" />
//           <AppButton text="link" color="link"/>
//           <AppButton text="info" color="info"/>
//           <AppButton text="success" color="success" />
//           <AppButton text="warning" color="warning" />
//           <AppButton text="danger" color="danger" />
//         </div>
//       `
//     }))
//   .add('size', () => ({
//     components: { AppButton },
//       template: `
//         <div style="display: flex; flex-wrap:wrap; justify-content: space-around; margin-top: 30px; width: 800px;">
//           <AppButton text="small" size="small" />
//           <AppButton text="normal" />
//           <AppButton text="medium" size="medium" />
//           <AppButton text="large" size="large" />
//         </div>
//       `
//   }))
// storiesOf('Part|Header', module)
//   .add('HeaderBrand', () => ({
//     components: { HeaderBrand },
//     template: `<HeaderBrand />`
//   }))
//   .add('HeaderItem', () => ({
//     components: { HeaderItem },
//     data() {
//       return {
//         item: {
//           text: '事業紹介',
//           href: '/works'
//         }
//       }
//     },
//     template: `<HeaderItem :item="item" />`
//   }))
//   .add('HeaderWrapper', () => ({
//     components: { HeaderWrapper },
//     template: `<HeaderWrapper></HeaderWrapper>`
//   }))
//   .add('TheHeader', () => ({
//     components: { TheHeader },
//     template: `<TheHeader />`
//   }))
//   storiesOf('Part|Hero', module)
//    .add('default', () => ({
//     components: { AppHero },
//        template: `<AppHero title="JSLounge" subtitle="Vue.js + Storybookによる柔軟なコンポーネント開発" />`
//      }))
//   .add('color', () => ({
//     components: { AppHero },
//     template: `
//     <div>
//       <AppHero title="JSLounge" subtitle="Vue.js + Storybookによる柔軟なコンポーネント開発" />
//       <AppHero color="primary" title="JSLounge" subtitle="Vue.js + Storybookによる柔軟なコンポーネント開発" />
//       <AppHero color="info" title="JSLounge" subtitle="Vue.js + Storybookによる柔軟なコンポーネント開発" />
//       <AppHero color="success" title="JSLounge" subtitle="Vue.js + Storybookによる柔軟なコンポーネント開発" />
//       <AppHero color="warning" title="JSLounge" subtitle="Vue.js + Storybookによる柔軟なコンポーネント開発" />
//       <AppHero color="danger" title="JSLounge" subtitle="Vue.js + Storybookによる柔軟なコンポーネント開発" />
//       <AppHero color="light" title="JSLounge" subtitle="Vue.js + Storybookによる柔軟なコンポーネント開発" />
//       <AppHero color="dark" title="JSLounge" subtitle="Vue.js + Storybookによる柔軟なコンポーネント開発" />
//      </div>
//     `
//   }))
//   .add('size', () => ({
//     components: { AppHero },
//     template: `
//       <div>
//         <AppHero color="primary" title="JSLounge" subtitle="Vue.js + Storybookによる柔軟なコンポーネント開発" />
//         <AppHero size="medium" color="info"title="JSLounge" subtitle="Vue.js + Storybookによる柔軟なコンポーネント開発" />
//         <AppHero size="large" color="warning" title="JSLounge" subtitle="Vue.js + Storybookによる柔軟なコンポーネント開発" />
//       </div>
//    `
//     }))
//   storiesOf('Page', module)
//     .add('Top', () => ({
//     components: { AppHero, TheHeader, AppButton },
//       template: `
//         <div>
//         <TheHeader />
//         <AppHero size="medium" color="info"title="JSLounge" subtitle="Vue.js + Storybookによる柔軟なコンポーネント開発">
//         <AppButton text="7/20" />
//         </AppHero>
//         </div>
//       `
//     }))