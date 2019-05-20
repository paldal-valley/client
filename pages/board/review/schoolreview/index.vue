<template>
  <vue-board-container>
    <!-- sidebar -->
    <vue-board-sidebar
      :buttons="buttons"
      :buttons-downside="buttonsDownside"/>

    <!-- posts -->
    <vue-board-post-list
      :buttons="icon_buttons"
      board-title="review"
      api-endpoint="posts/review?categoryId=2"
      post-link-prefix="/board/review/"
      alert-msg="수기 게시판입니다."
    />
    <vue-float-btn to="/board/review/write/"/>
  </vue-board-container>
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
        text: '취업 수기',
        to: '/board/review/jobreview'
      },
      {
        text: '진학 수기',
        to: '/board/review/schoolreview'
      },
      {
        text: '대외활동 수기',
        to: '/board/review/extrareview'
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
        to: '/board/qna/job'
      },
      {
        text: '수기',
        to: '/board/review/jobreview'
      }
    ]
  })
}
</script>

<style lang="scss" scoped></style>
