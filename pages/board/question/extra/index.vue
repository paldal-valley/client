<template>
  <vue-board-container>
    <!-- sidebar -->
    <vue-board-sidebar
      :buttons="buttons"
      :buttons-downside="buttonsDownside"/>

    <!-- posts -->
    <vue-board-post-list
      :buttons="icon_buttons"
      board-title="question"
      api-endpoint="posts/question?categoryId=3"
      post-link-prefix="/board/question/"
      alert-msg="대외활동 관련 질문 페이지입니다."
    />
    <vue-float-btn to="/board/question/write/"/>
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
        to: '/board/question/job'
      },
      {
        text: '진학 질문',
        to: '/board/question/school'
      },
      {
        text: '대외활동 질문',
        to: '/board/question/extra'
      },
      {
        text: '기타 질문',
        to: '/board/question/etc'
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
        text: 'Q&A 게시판',
        to: '/board/question/job'
      },
      {
        text: '수기게시판',
        to: '/board/review/jobreview'
      }
    ]
  })
}
</script>

<style lang="scss" scoped></style>
