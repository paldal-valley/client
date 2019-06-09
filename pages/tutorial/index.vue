<template>
<div class="default-image">
    <v-img :src="images.sample"/>
    <v-img :src="images.sample1" />
</div>   
</template>

<script>
export default{
    layout: 'main',
    data(){
        return{
            images: {
                sample : require('@/assets/images/Metamask.png'),
                sample1 : require('@/assets/images/Tutorial_real.png')
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
