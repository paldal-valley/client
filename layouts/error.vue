<template>
  <div class="errorContainer">
    <div class="inner">
        <div class="errorTextContainer">
            <v-icon class="errorTextIcon">warning</v-icon>
            <h1 class="errorTextHead">Page not found</h1>
            <h3 class="mb-3">존재하지 않는 페이지입니다.</h3>
            <nuxt-link class="errorLink" to="/"><v-icon class="errorIcon">home</v-icon></nuxt-link>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'main' // you can set a custom layout for the error page
}
</script>

<style lang="scss" scoped>
.errorContainer {
    height: 100%;
    padding-top: 64px;
    background: url(https://images.unsplash.com/photo-1532003885409-ed84d334f6cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80);
    background-position: center;
    background-size: cover;

    .inner {
        height: 100%;
        padding: 16rem;
        background: rgba(0,0,0,0.4);
        
        .errorTextContainer {
            margin-top: auto;
            margin-bottom: auto;
            display: block;
            color: white;

            .errorTextIcon{
                font-size: 6rem;
                color: white;
            }
            .errorTextHead {
                font-size: 4rem;
            }
            .errorLink{
                text-decoration-line: none;

                .errorIcon{
                    font-size: 2rem;
                    color:navy;   
                    
                    &:hover {
                        transform: scale(1.4); /*  default */
                        -webkit-transform: scale(1.4); /*  크롬 */
                        -moz-transform: scale(1.4); /* FireFox */
                        transition: all 0.1s ease-in-out;
                    }
                }
            }
        }
    }
}

html, body{
    height: 100%;
}
</style>
