<template>
  <vue-board-container>
    <!-- sidebar -->
    <vue-board-sidebar
      :buttons="buttons"
      :buttons-downside="buttonsDownside"/>

    <!-- posts -->
    <vue-board-post-list
      :buttons="icon_buttons"
      board-title="qna"
      api-endpoint="posts/qna?categoryId=2"
      post-link-prefix="/board/qna/"
      alert-msg="진학관련 질문 페이지입니다."
    />
    <vue-float-btn to="/board/qna/write/"/>
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
        text: '취업 질문',
        to: '/board/qna/job'
      },
      {
        text: '진학 질문',
        to: '/board/qna/school'
      },
      {
        text: '대외활동 질문',
        to: '/board/qna/extra'
      },
      {
        text: '기타 질문',
        to: '/board/qna/etc'
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
