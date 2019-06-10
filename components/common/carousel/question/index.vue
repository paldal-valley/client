<template>
  <div class="category-group">
    <h2>답변을 기다리는 질문</h2>
    <div class="category-card-container">
      <v-carousel hide-controls hide-delimiters class="question-list" height="50px">
        <nuxt-link v-for="(item, i) in items" :key="i" :to="route(item)">
          <v-carousel-item>
            <div class="question">
              <span class= "reward">
                  {{ item.reward }}
              </span>
              <span>Q. {{ calTitle(item.title) }}</span>
              <font-awesome-icon icon="chevron-right" class="carousel-icon"/>
            </div>
          </v-carousel-item>
        </nuxt-link>
      </v-carousel>
    </div>
  </div>
</template> 

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    calTitle(title) {
      return title.length > 15 ? title.substr(0, 20) + "..." : title
    },
    route(data) {
      return "/post/question/" + data.id
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/index';
.category-group {
  margin-top: 30px;
  text-align: left;

  .line-separator {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #ccc;
    padding: 0;
  }
  .category-card-container {
    /*background-color: red;*/
    display: flex;
    flex-wrap: wrap;
    margin-left: -1%;
    margin-right: -1%;
  }
}
.question-list{
  margin: 1%;
  text-align: center;
  font-size: 1.3rem;
  letter-spacing: 1px;
  background: white;
  box-shadow: none;
  border: 0.5px solid #D0D0D0;
  font-family: 'Nanum Gothic', sans-serif;

  a {
    text-decoration-line: none;
    color: #404040;
    .question{
      margin-top: 10px;

    .reward {
        margin-right: 5px;
        display: inline-block;
        border-radius: 6px;
        padding: 2px 5px;
        font-size: 15px;
        line-height: 17px;
        background-color: #4e98a4;
        color: white;
      }
      .carousel-icon{
        float: right;
        margin-right: 2%;
        margin-top: 4px;
      }
    }
  }
}
</style>
