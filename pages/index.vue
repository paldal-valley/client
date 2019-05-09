<template>
  <div>
    <vue-board-card-group
      :board-cards="boardCards"/>
  </div>
</template>

<script>
import VueBoardCardGroup from '~/components/common/cards/board/group'

export default {
  components: {
    VueBoardCardGroup
  },
  data: () => ({
    boardCards: [
      {
        title: '자유게시판',
        content: '선후배간 자유롭게 대화하세요!',
        imgSrc: require('@/assets/images/free.png')
      },
      {
        title: 'QnA 게시판',
        content: '질문과 답변을 올려보세요!',
        imgSrc: require('@/assets/images/qna.png')
      },
      {
        title: '수기게시판',
        content: '취업한 선배들의 꿀팁!',
        imgSrc: require('@/assets/images/consult.png')
      }
    ]
  })
}
</script>

