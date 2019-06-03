<template>
  <div class="nav-menu">
    <nuxt-link
      v-if="isCurrentPage"
      :to="to"
      :style="highlight"
      class="nav-btn"
    >
      <p class="btn-text mb-0">{{ text }}</p>
    </nuxt-link>
    <nuxt-link v-else :to="to" class="nav-btn">
      <p class="btn-text mb-0">{{ text }}</p>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'button'
    },
    to: {
      type: String,
      default: '#'
    }
  },
  data: () => ({
    highlight: {
      color: '#4E98A4'
    }
  }),
  methods: {
    getLongerCommonStr(input1, input2) {
      var shorter = input1.length <= input2.length ? input1 : input2
      var longer = input1.length > input2.length ? input1 : input2

      for (var i = 0; i < shorter.length; i++) {
        var part = longer.substr(0, shorter.length - i)
        if (shorter.indexOf(part) != -1) {
          return part
        }
      }
      return undefined
    }
  },
  computed: {
    isCurrentPage() {
      // 현재 위치와 버튼의 href 의 공통된 부분이 8 이상 (/mypage/) 이면 같은 depth, 아니면 다른 depth
      return this.getLongerCommonStr(this.$route.path, this.to).length > 8
        ? true
        : false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/index';
.nav-menu {
  font-weight: bold;
  font-size: 1rem;
  text-align: center;

  .nav-btn {
    display: block;
    padding: 20px;
    text-decoration: none;
    text-align: center;
    color: rgba(0, 0, 0, 0.35);

    .btn-text {
      display: inline-block;
    }
  }

  .nav-btn.nuxt-link-active:after{
    border-color: transparent transparent #4e98a4;
    border-style: solid;
    border-width: 0 12px 12px;
    content: "";
    position: relative;
    right: 50%;
    bottom: -21px;
    -webkit-transform: translate(-50%);
    transform: translate(-50%);
  }

  &:hover {
    cursor: pointer;

    .nav-btn {
      color: rgb(78, 152, 164);
    }
  }
}

</style>
