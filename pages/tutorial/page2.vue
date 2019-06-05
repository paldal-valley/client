<template>
<div class="default-image">
    <v-img :src="images.sample"/>
   <h1> Tutorial Page 2 </h1>
</div>   
</template>

<script>
export default{
    layout: 'main',
    data(){
        return{
            images: {
                sample : require('@/assets/images/Metamask.png'),
            }
        }
    }
}
</script>

<style>
.default-image{
    margin-top : 35px;
}
</style>
