<template>
     <div>
        <div class = "answer_count">
        <h4 class = "answer">
          1개의 답변이 있습니다.
        </h4>
      </div>

  <v-card>
    <header>
        <div>
            <span class="category">
                {{ category }}
            </span>
            <br><br>
        </div>
            <!-- <h2 class = "title">
                  <span class = "text-primary">
                      {{ title }}
                  </span>
            </h2> -->
            <br><br>


            <p class = "answer-info">
                <span>
                    <strong class = "user_name">작성자: {{userName}}</strong>
                </span>
                <span class = "createdDate" >
                    작성일: {{ createdDate }}
                </span>
                <span class = "view">
                      조회수 33
                </span>
              </p>
              <br><hr>
         </header>

        <v-textarea
            v-model="content"
            counter
            full-width
            single-line
            disabled
            rows = 10px;
        ></v-textarea>

      <div class ="text-xs-right pt-2">
        <v-btn outline large fab color="blue">
            <v-icon>check</v-icon>
        </v-btn>
        <v-btn outline large fab color="red">
            <v-icon>thumb_up</v-icon>
        </v-btn></div>
    </v-card>
  </div>
</template>

     <script>
import { interpreterDirective } from '@babel/types';
     export default {
         props:{
             content:{
                 type:String,
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
                type: Number,
                default: ''
            },
            recommend: {
                type: Number,
                default: ''
            }

         }
         
     }
     </script>

     <style scoped>
     .answer_count {
        margin-top: 20px; 
        margin-bottom: 20px;
     }
     
     .category {
        float:left; 
        margin-top:10px; 
        margin-left:5px;
     }

     /* .title {
        float:left; 
        margin-top:8px; 
        margin-left:10px;
     } */

     .answer_info{
         margin-top:5px; 
         margin-left:20px;
     }
     .user_name{
        float:left;
     }
     .createdDate{
        float:left; 
        margin-left:10px;
        color:gray;
     }
     .view{
         float:left; 
         margin-left:10px; 
         color:gray;
     }
     </style>
     
     
     
     