<template>
  <v-card>
    <v-form>
      <v-autocomplete
        v-if="hasCategory"
        v-model="posts.type"
        :items="['취업', '진학', '대외활동', '기타']"
        chips
        label="질문 카테고리를 선택하세요"
        full-width
        hide-details
        hide-no-data
        hide-selected
        single-line
      ></v-autocomplete>
      <v-divider></v-divider>
      <v-text-field
        v-if="hasTitle"
        class="title"
        v-model="posts.title"
        label="Q. 제목을 입력하세요"
        single-line
        full-width
        hide-details
      ></v-text-field>
      <v-divider></v-divider>
      <v-textarea
        class="content"
        v-model="posts.content"
        label="내용"
        counter
        full-width
        single-line
        rows="13px;"
      ></v-textarea>
    </v-form>
  </v-card>
</template>

<script>
export default {
  props: {
    hasCategory: {
      type: Boolean,
      default: true
    },
    hasTitle: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      posts: {
        title: '', //제목
        content: '', //내용
        writer: '', // userId
        view: '', // 조회수
        recommended: '', // 추천수
        createdDate: '', //작성일
        lastModifiedDate: '', //최종 수정일
        isPending: '',
        isDeleted: '',
        type: ''
      }
    }
  }
}
</script>

<style scoped></style>
