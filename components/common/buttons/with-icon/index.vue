<template>
  <v-layout class="menu">
    <nuxt-link
      v-if="isCurrentPage"
      :to="to"
      :style="highlight"
      class="menu-btn mx-auto">
        <p class="btn-text">{{ text }}</p>
        <font-awesome-icon :icon="icon" class="btn-icon"/>
    </nuxt-link>
    <nuxt-link
      v-else
      :to="to"
      class="menu-btn mx-auto">
        <p class="btn-text">{{ text }}</p>
        <font-awesome-icon :icon="icon" class="btn-icon"/>
    </nuxt-link> 
  </v-layout>
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
    },
    icon: {
      type: Array,
      default: () => ['fas', 'chevron-right']
    }
  },
  data: () => ({
    highlight: {
        'color': 'white',
        'background': 'rgb(78, 152, 164)'
    }
  }),
  methods:{
      getLongerCommonStr(input1, input2){
        var shorter = (input1.length <= input2.length)? input1 : input2;
        var longer = (input1.length > input2.length)? input1 : input2;

        for(var i = 0; i < shorter.length; i++){
            var part = longer.substr(0, shorter.length - i);
            if(shorter.indexOf(part) != -1){
                return part;
            }
        }
        return undefined;
        }
  },
  computed: {
    isCurrentPage() {
        // 현재 위치와 버튼의 href 의 공통된 부분이 7 이상 (/board/ 이면 같은 depth, 아니면 다른 depth)
        return this.getLongerCommonStr(this.$route.path, this.to).length > 7 ? true : false
    }
  },
}   
</script>

<style lang="scss" scoped>
@import '~assets/scss/index';
.menu {
    font-weight: bold;
    font-size: 1rem;
    padding: 5px 0px;
    text-align: center;
    height: 54px;

    .menu-btn {
        display: block;
        width: 70%;
        padding: 10px 15px;
        text-decoration: none;
        text-align: center;
        color: rgb(78, 152, 164);
        background: rgb(255, 255, 255);
        border-radius: 25px;
        border: 1.5px solid rgb(78, 152, 164);

        .btn-text{
            display: inline-block;
        }

        .btn-icon{
            float: right;
            padding-top: 5px;
            font-size: 18px;
        }
    }

  &:hover {
    cursor: pointer;

    .menu-btn {
        color: white;
        background: rgb(78, 152, 164);
    }
  }
}
</style>
