export const state = () => ({
  pageMeta: {
    post: {
      plaza: {
        url: '/post/plaza',
        sidebarButtons: [
          {
            text: '전체 톡',
            to: '/post/plaza'
          },
          {
            text: '자유 톡',
            to: '/post/plaza/free'
          },
          {
            text: '스터디 톡',
            to: '/post/plaza/study'
          },
          {
            text: '취업 톡',
            to: '/post/plaza/job'
          },
          {
            text: '맛집 톡',
            to: '/post/plaza/food'
          }
        ],
      },
      question: {
        url: '/post/question',
        sidebarButtons: [
          {
            text: '전체 질문',
            to: '/post/question'
          },
          {
            text: '취업 질문',
            to: '/post/question/job'
          },
          {
            text: '진학 질문',
            to: '/post/question/school'
          },
          {
            text: '대외활동 질문',
            to: '/post/question/extra'
          },
          {
            text: '기타 질문',
            to: '/post/question/etc'
          }
        ],
      },
      review: {
        url: '/post/review',
        sidebarButtons: [
          {
            text: '전체 수기',
            to: '/post/review'
          },
          {
            text: '취업 수기',
            to: '/post/review/job'
          },
          {
            text: '진학 수기',
            to: '/post/review/school'
          },
          {
            text: '대외활동 수기',
            to: '/post/review/extra'
          }
        ],
      },
      sidebarButtonsDownside: [
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
          to: '/post/plaza/free'
        },
        {
          text: 'Q&A',
          to: '/post/question/job'
        },
        {
          text: '수기',
          to: '/post/review/job'
        }

      ]
    }
  }
})

export const getters = {
  GET_PAGE_META: state => state.pageMeta,
  GET_POST_META: state => state.pageMeta.post,
  GET_PLAZA_META: state => state.pageMeta.post.plaza,
  GET_QUESTION_META: state => state.pageMeta.post.question,
  GET_REVIEW_META: state => state.pageMeta.post.review
}
