<template>
  <v-card class="post">
    <v-form>
      <div class="post-container">
        <header>
            <br>
          <p class="post-info">
            <span class="user-info">
              <strong>작성자: {{ userName }}</strong>
              ({{ userEmail }})
            </span>
            <span class="meta"> 작성일: {{ createdDate }} </span>
          </p>
          <br />
          <hr />
        </header>
      </div>
      <div class="post-content">
        {{ content }}
      </div>
      <div></div>
    </v-form>
    <div class="text-xs-right pt-2">
      <v-btn v-if="hasSelectBtn" outline large fab color="blue">
        <v-icon>check</v-icon>
      </v-btn>
      <v-btn outline large fab color="red">
        <v-icon>thumb_up</v-icon>
      </v-btn>
    </div>
    <br>
  </v-card>
</template>

<script>
import { EventBus } from '~/utils/EventBus'
export default {
  props: {
    content: {
      type: String,
      default: ''
    },
    userName: {
      type: String,
      default: ''
    },
    userEmail: {
      type: String,
      default: ''
    },
    createdDate: {
      type: String,
      default: ''
    },
    hasSelectBtn: {
      type: Boolean,
      default: false
    },
    hasTitle: {
      type: Boolean,
      default: true
    },
    questionId: {
      type: String,
      default: ''
    }
  },
  // watcher: detect change of the data
  // updated: detect change of the DOM
  watch: {
    category() {
      EventBus.$emit('categoryName from post', this.category)
    }
  },
  methods: {

  }
}
</script>

<style scoped>
.post {
  width: 100%;
}
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
.user-info {
  float: left;
}
.meta {
  float: left;
  margin-left: 20px;
  color: gray;
}
.post-content {
  text-align: left;
  margin: 20px;
  white-space: pre-line;
}

</style>
