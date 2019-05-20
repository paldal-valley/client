<template>
  <transition name="fade">
    <vue-board-container>
      <!-- sidebar -->
      <vue-board-sidebar
        :buttons="buttons"
        :buttons-downside="buttonsDownside"/>

      <!-- posts -->
      <vue-board-post-list
        :buttons="icon_buttons"
        board-title="plaza"
        api-endpoint="posts/plaza?categoryId=1"
        post-link-prefix="/board/plaza/"
        alert-msg="플라자 자유게시판 페이지입니다."
      />
      <vue-float-btn to="/board/plaza/write/"/>
    </vue-board-container>
  </transition>
</template>

<script>
// containers
import VueBoardContainer from '~/containers/board'

// components
import VueBoardSidebar from '~/components/each-page/board/sidebar'
import VueBoardPostList from '~/components/each-page/board/post-list'
import VueFloatBtn from '~/components/common/buttons/float'

export default {
  components: {
    VueBoardContainer,
    VueBoardSidebar,
    VueBoardPostList,
    VueFloatBtn
  },
  data: () => ({
    buttons: [
      {
        text: '자유톡',
        to: '/board/plaza/free'
      },
      {
        text: '스터디톡',
        to: '/board/plaza/study'
      },
      {
        text: '취업톡',
        to: '/board/plaza/job'
      },
      {
        text: '맛집톡',
        to: '/board/plaza/food'
      }
    ],
    buttonsDownside: [
      {
        text: '공지사항',
        to: '#'
      },
      {
        text: 'ABOUT US',
        to: '#'
      }
    ],
    icon_buttons: [
      {
        text: 'AC 광장',
        to: '/board/plaza/free'
      },
      {
        text: 'Q&A',
        to: '/board/question/job'
      },
      {
        text: '수기',
        to: '/board/review/jobreview'
      }
    ],
  })
}
</script>

<style lang="scss" scoped></style>
