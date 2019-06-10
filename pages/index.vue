<template>
  <div>
    <vue-carousel :items="bannerItems" />
    <div class="base-container">
      <vue-question-carousel :items="questionList"/>
      <vue-board-card-group :board-cards="boardCards" />
    </div>
  </div>
</template>

<script>
import VueCarousel from '~/components/common/carousel'
import VueQuestionCarousel from '~/components/common/carousel/question'
import VueBoardCardGroup from '~/components/common/cards/board/group'
import { EventBus } from '~/utils/EventBus'

export default {
  layout: 'main',
  components: {
    VueCarousel,
    VueBoardCardGroup,
    VueQuestionCarousel
  },
  data: () => ({
    boardCards: [
      {
        title: 'AC 광장',
        content: '선후배간 자유롭게 대화하세요!',
        imgSrc: require('@/assets/images/free.png'),
        to: '/post/plaza'
      },
      {
        title: 'Q&A 게시판',
        content: '질문과 답변을 올려보세요!',
        imgSrc: require('@/assets/images/qna.png'),
        to: '/post/question'
      },
      {
        title: '수기게시판',
        content: '취업한 선배들의 꿀팁!',
        imgSrc: require('@/assets/images/consult.png'),
        to: '/post/review'
      }
    ],
    bannerItems: [
      {
        src: require('@/assets/images/main_2.png'),
        to: '#'
      },
      {
        src: require('@/assets/images/Main_ver2.png'),
        to: '/tutorial'
      },
      {
        src: require('@/assets/images/about-us.png'),
        to: '/aboutus'
      }
    ],
    questionList: [
      {
        title: "",
        to: '/',
      },
      {
        title: "",
        to: '/',
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
    },
    async fetchPostList() {
      const options = {
        method: 'get',
        url: 'post/question/unselected'
      }
      const { data } = await this.$axios(options)
      this.questionList = data
    }
  },
  beforeMount() {
    $('nav').addClass('hide_background')
  },
  async mounted() {
    $('nav').addClass('hide_background')
    document.addEventListener('scroll', this.handleScroll)
    await this.fetchPostList()
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
