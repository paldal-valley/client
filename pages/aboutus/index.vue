<template>
    <div class="default-image">
        <v-parallax
            dark
            src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
        >
            <v-layout
            align-center
            column
            justify-center
            >
            <h1 class="display-2 font-weight-thin mb-3 ">DOAJOU</h1>
            <h4 class="subheading">아주코인으로 졸업생, 재학생 정보 공유</h4>
            </v-layout>
        </v-parallax>



        <section class = "target">
            <h2>DoAJOU,
                누가 사용하나요?
            </h2>
            <v-img class="target_img" :src="images.sample" style="margin-top: 5px"/>
            <h6>DoAJOU는 아주대학교 졸업생들과 재학생들이 <br>
            함께 경험을 나누는 공간입니다.
            </h6>
        </section>

        <v-parallax
            height="200"
            src="https://images.unsplash.com/photo-1524673450801-b5aa9b621b76?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        ></v-parallax>

        <section class = "relationship">
            <h2>DoAJOU,
                어떻게 사용하나요?
            </h2>
            <v-carousel class="carousel" hide-delimiters max="800px">
                <v-carousel-item
                v-for="(item,i) in items"
                :key="i"
                :src="item.src"

                ></v-carousel-item>
            </v-carousel>
            <h6>DoAJOU에서는 사용자들이 글을 남기며 아주코인을 얻고 <br>
             얻은 코인을 학교와 근교 상권에서 사용하도록 지원합니다.
            </h6>
        </section>

        <v-parallax
            height="200"
            src="https://images.unsplash.com/photo-1524673450801-b5aa9b621b76?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        ></v-parallax>



        <section class = "token-usage">
            <h2>아주코인,
                어디서 사용하나요?
            </h2>
            <v-layout class = "usage-list">                    
                    <v-flex class = "univ">
                        <v-img class="univ_img" :src="images.univ_icon"/>
                        <span>학교 내 식당</span>
                    </v-flex>
                    <v-flex class ="print">
                        <v-img class="print_img" :src="images.printer_icon"/>
                        <span>학교 내 프린트 수수료</span>
                    </v-flex>
                <v-flex class ="store">
                        <v-img class="store_img" :src="images.store_icon" />
                        <span>학교 주변 제휴 업체</span>
                </v-flex>
                
            </v-layout>
            
            <h6>학교 내부 프린트 수수료, <br>
            학교 주변 상권 제휴 업체에서 사용합니다.
            </h6>
        </section>

        <v-parallax
            height="200"
            src="https://images.unsplash.com/photo-1524673450801-b5aa9b621b76?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        ></v-parallax>

        <section class = "tech-stack">
            <h2>DoAJOU,
                어떤 기술을 사용했나요?
            </h2>
            <v-img class="tech_img" :src="images.tech"/>
            <h6>도아주는 Javascript 기반으로 개발된 <br>
            이더리움 기반 블록체인 생태계입니다.
            </h6>
        </section>

        <v-parallax
            height="200"
            src="https://images.unsplash.com/photo-1524673450801-b5aa9b621b76?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        ></v-parallax>

        
        <section class = "developer">
            <h2>DoAJOU,
                누가 개발했나요?
            </h2>
            <v-img class="us_img" :src="images.us" />
            <h6>아주대학교 소프트웨어학과 재학중인 <br>
            Paldal Valley 팀에서 개발하였습니다.
            </h6>
        </section>

        <v-parallax
            height="200"
            src="https://images.unsplash.com/photo-1524673450801-b5aa9b621b76?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        ></v-parallax>
    </div>   
</template>

<script>
export default{
    layout: "main",
    data(){

        return{

            images: {
                sample : require('@/assets/images/main_target.PNG'),
                univ_icon : require ('@/assets/images/univ_icon.PNG'),
                store_icon : require ('@/assets/images/store_icon.PNG'),
                printer_icon : require ('@/assets/images/printer_icon.PNG'),
                tech: require('@/assets/images/system_architecture.PNG'),
                us: require('@/assets/images/us.jpg')
            },
            items: [
                {
                    src: require('@/assets/images/relationship.PNG')
                },
                {
                    src: require('@/assets/images/students.PNG')
                },
                {
                    src: require('@/assets/images/graduates.PNG')
                }
            ]
        }
    }
}
</script>

<style>
.target {
    margin-top : 50px;
    margin-bottom: 30px;
    font-size: 26px;
    text-align: center;
    padding: 40px 0 40px 0;
    line-height: 1.5;

}

.relationship  {
    margin-top : 50px;
    font-size: 26px;
    text-align: center;
    padding: 40px 0 40px 0;
    line-height: 1.5;

}

.token-usage {
    margin-top : 50px;
    font-size: 26px;
    text-align: center;
    padding: 40px 0 40px 0;
    line-height: 1.5;

}
.tech-stack{
    margin-top : 50px;
    font-size: 26px;
    text-align: center;
    padding: 40px 0 40px 0;
    line-height: 1.5;
} 
.developer{
    margin-top : 50px;
    font-size: 26px;
    text-align: center;
    padding: 40px 0 40px 0;
    line-height: 1.5;
}

.carousel {
    margin-top: 35px;
    margin-bottom: 35px;
    width: 50%;
    height: 50%;
    margin-left: auto;
    margin-right: auto;
    box-shadow: none;
}

.target_img, .tech_img {
    width: 50%;
    height: 50%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    margin-bottom: 20px;
}

.usage-list {
    margin-top: 35px;
    margin-bottom: 35px;
    margin-left: 15rem;
    margin-right: 15rem;
}


.univ {
    width: 320px;
    height: 300px;
    position: relative;
    background: white;
    box-shadow: 10px 10px 20px rgba(36,36,36,.05);
    margin: 0 auto 30px;
    font-size: 20px;

}

.print {
    width: 320px;
    height: 300px;
    position: relative;
    background: white;
    box-shadow: 10px 10px 20px rgba(36,36,36,.05);
    margin: 0 auto 30px;
    font-size: 20px;

}
.store {
    width: 320px;
    height: 300px;
    position: relative;
    background: white;
    box-shadow: 10px 10px 20px rgba(36,36,36,.05);
    margin: 0 auto 30px;
    font-size: 20px;
    }
.univ_img, .store_img, .print_img{
    width: 130px;
    height: 120px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px; 
    margin-bottom: 20px;

}

.us_img {
    margin-top: 35px; 
    margin-bottom: 35px; 
    margin-left: auto;
    margin-right: auto;
    width: 50%; 
    height: 50%; 
}

</style>
