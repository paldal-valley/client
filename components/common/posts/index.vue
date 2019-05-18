<template>
  <v-card>
    <v-form>
      <div class="post-container">
        <header>
          <div>
            <span class="category">
              {{ category }}
            </span>
            <br><br>
          </div>
          <h2 class="title">
            {{ title }}
          </h2>
          <br><br>

          <p class="post-info">
            <span>
              <strong class="user-name">작성자: {{ userName }}</strong>
            </span>
            <span class="meta">
              작성일: {{ createdDate }}
            </span>
            <span class="meta">
              조회수: {{ view }}
            </span>
          </p>
          <br><hr>
        </header>
      </div>
      <v-textarea
        v-model="content"
        counter
        full-width
        single-line
        disabled
        rows="10px"/>
      <div></div>
    </v-form>
    <div class="text-xs-right pt-2">
      <v-btn outline large fab color="red">
        <v-icon>thumb_up</v-icon>
      </v-btn>
    </div>
    <v-btn
      v-if="hasAnswerBtn"
      block
      color="#054d95"
      class="white--text">
      <strong>답변하기</strong>
    </v-btn>
  </v-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    category: {
      type: String,
      default: ''
    },
    userName: {
      type: String,
      default: ''
    },
    createdDate: {
      type: String,
      default: ''
    },
    view: {
      type: String,
      default: ''
    },
    hasAnswerBtn: {
      type: Boolean,
      default: false
    }
  },
}
</script>

<style scoped>
  .category {
    float: left;
    margin-top: 10px;
    margin-left: 20px;
  }
  .title {
    float: left;
    margin-top: 8px;
    margin-left: 20px;
  }
  .post-info {
    margin-top: 5px;
    margin-left: 20px;
  }
  .user-name {
    float: left;
  }
  .meta {
    float: left;
    margin-left: 20px;
    color: gray;
  }
</style>
