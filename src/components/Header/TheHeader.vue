<template>
  <HeaderWrapper>
    <HeaderBrand />
    <HeaderItemWrapper>
      <HeaderItem v-for="(val, key) in menuList" :key="key" :item="val" />
    </HeaderItemWrapper>
  </HeaderWrapper>
</template>

<script>
import HeaderWrapper from '../Header/HeaderWrapper.vue'
import HeaderBrand from '../Header/HeaderBrand.vue'
import HeaderItem from '../Header/HeaderItem.vue'
import HeaderItemWrapper from '../Header/HeaderItemWrapper.vue'

export default {
  components: {
    HeaderWrapper,
    HeaderBrand,
    HeaderItem,
    HeaderItemWrapper
  },
  data () {
    return {
      menuList: [
        {
          text: '事業紹介',
          href: '/work'
        }, {
          text: '会社情報',
          href: '/company'
        }, {
          text: 'お問い合わせ',
          href: '/contact'
        }
      ]
    }
  }
}
</script>