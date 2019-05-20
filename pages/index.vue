<template>
  <div>
    <vue-carousel :items="bannerItems" />
    <div class="base-container">
      <vue-board-card-group :board-cards="boardCards" />
    </div>
  </div>
</template>

<script>
import VueCarousel from '~/components/common/carousel'
import VueBoardCardGroup from '~/components/common/cards/board/group'
import { EventBus } from '~/utils/EventBus'

export default {
  layout: 'main',
  components: {
    VueCarousel,
    VueBoardCardGroup
  },
  data: () => ({
    boardCards: [
      {
        title: 'AC 광장',
        content: '선후배간 자유롭게 대화하세요!',
        imgSrc: require('@/assets/images/free.png'),
        to: '/board/plaza/free'
      },
      {
        title: 'Q&A 게시판',
        content: '질문과 답변을 올려보세요!',
        imgSrc: require('@/assets/images/qna.png'),
        to: '/board/question/job'
      },
      {
        title: '수기게시판',
        content: '취업한 선배들의 꿀팁!',
        imgSrc: require('@/assets/images/consult.png'),
        to: '/board/review/jobreview'
      }
    ],
    bannerItems: [
      {
        src: require('@/assets/images/main_1.png'),
        to: '#'
      },
      {
        src: require('@/assets/images/main_2.png'),
        to: '#'
      },
      {
        src: require('@/assets/images/main_3.png'),
        to: '#'
      },
      {
        src: require('@/assets/images/main_4.png'),
        to: '#'
      }
    ]
  }),
  methods: {
    handleScroll() {
      if (window.scrollY != 0) {
        $('nav').removeClass('hide_background')
      } else {
        $('nav').addClass('hide_background')
      }
    }
  },
  beforeMount() {
    $('nav').addClass('hide_background')
    this.$store.dispatch('login_check').then(check => {
      EventBus.$emit('isLogin', check)
    })
  },
  mounted() {
    $('nav').addClass('hide_background')
    document.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    document.removeEventListener('scroll', this.handleScroll)
    $('nav').removeClass('hide_background')
  }
}
</script>
<style lang="scss" scoped>
.base-container {
  padding: 1.5rem;
  margin-left: 20%;
  margin-right: 20%;
}
</style>
