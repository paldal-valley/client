<template>
  <nuxt-link :to="to" class="card-link">
    <div class="card-container">
      <div
        v-if="boardTitle"
        class="card__category">
        {{ category }}
      </div>


<!-- 여기서 v-if로 보드 타이틀을 확인해 줘야하는데..... -->
<!-- 글의 테이블 이름을 확인해 주면 되나...? -->
    <div  class = "card__header">
        <span v-if="fetchBoardTitle(this.boardTitle)" class= "card__rewardBox">
                  <!-- 30 -->
             {{ post.reward }}
        </span>
        <span class="card__title">{{ post.title }}</span>
        <span
          v-if="post.totalComment"
          class="card__comment">[{{ post.totalComment }}]</span>
      </div>
      <p class="card__content">{{ post.content }}</p>
      <div class="card__date"> {{ post.createdDate }} </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      default: () => ({})
    },
    to: {
      type: String,
      default: '#'
    },
    boardTitle: {
      type: String,
      default: ''
    },
    hasReward: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    title() {
      return `${this.post.title}`
    },
    category() {
      return this.$categoryMapper(this.boardTitle, this.post.categoryId)
    }
  },
  methods: {
    
    fetchBoardTitle(category){
      //question, review, plaz
      if(category == "question"){
        return true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/index';
.card-link {
  /*flex: 0 0 50%;*/
  margin: 3px;
  display: block;
  padding: 0.875rem;
  text-align: left;
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid transparent;
  text-decoration: none !important;
  /*background-color: blue;*/

  position: relative;
  list-style: none;
  box-shadow: $box-shadow;

  &:hover {
    .card__title {
      color: $ac-green2;
    }

    .card__content {
      color: $ac-green2;
    }
  }

  .card__header {
    margin-bottom: 10px;
    font-weight: bold;

    .card__title {
      color: black;
      font-size: 20px;
    }
    .card__comment {
      color: $ac-green2;
      font-size: 15px;
      margin-left: 5px;
    }
  }

  .card__content {
    color: $ac-green3;
  }

  .card__img {
    position: absolute;
    right: -10px;
    bottom: -10px;
    width: 100px;
  }

  .card__category {
    display: inline-block;
    box-shadow: 2px 2px 0 0 rgba(0, 0, 0, 0.2);
    background-color: #4e98a424;
    color: black;
    padding: 3px;
    margin-bottom: 10px;
    border-radius: 3px;
  }

  .card__date {
    text-align: right;
    font-weight: bold;
    color: gray;
  }

  .card__rewardBox {
    color: black;
    display: inline-block;
    border-radius: 1px;
    padding: 1px 5px 2px;
    font-size: 15px;
    line-height: 17px;
    background-color: #a5adb7;
}

// .rewardBox {
//   display: inline-block;
//   border-radius: 1px;
//   padding: 1px 5px 2px;
//   font-size: 15px;
//   line-height: 17px;
//   background-color: #a5adb7;
  
// }
}
</style>
