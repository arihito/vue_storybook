import { storiesOf } from '@storybook/vue'

import AppButton from '../components/AppButton.vue'

storiesOf('Part|Button', module)
  .add('default', () => ({
components: { AppButton },
      template: `<AppButton text="default" />`
    }))
.add('color', () => ({
components: { AppButton },
    template: `
    <div style="display: flex; flex-wrap: wrap; justify-content: space-around; margin-top: 30px; width: 800px;">
      <AppButton text="white" color="white" />
      <AppButton text="light" color="light" />
      <AppButton text="dark" color="dark" />
      <AppButton text="black" color="black" />
      <AppButton text="text" color="text" />
      <AppButton text="primary" color="primary" />
      <AppButton text="link" color="link" />
      <AppButton text="info" color="info" />
      <AppButton text="success" color="success" />
      <AppButton text="warning" color="warning" />
      <AppButton text="danger" color="danger"/>
    </div>
  `
  }))
.add('size', () => ({
components: { AppButton },
    template: `
    <div style="display: flex; flex-wrap: wrap; justify-content: space-around; margin-top: 30px; width: 800px;">
      <AppButton text="small" size="small" />
      <AppButton text="normal" />
      <AppButton text="medium" size="medium" />
      <AppButton text="large" size="large" />
    </div>
  `
  }))