<template>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<div v-for="(item,id) in items" :key= "id"   >
<div class="box">
    <div class="picture">
        <img :src="item.img" alt="">
    </div>
    <hr>
    <div class="text">
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>
<h1>
{{item.title}} 
 </h1>
    </div>
</div>
</div>
</template>
<style scoped>
.box{
background: rgb(236 128 0 / 80%);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(7.7px);
-webkit-backdrop-filter: blur(7.7px);
border: 1px solid rgba(180, 255, 249, 0.46);
width: 400px;
height: 300px;
overflow: hidden;

}
.checked {
  color: green;
}

.picture{
    height: 70%;
    background-size:100% 100%;
    padding: 0;
    bottom: 0;


    
}
img{
    height: 100%;
    width: 100%;
}
.text{
 height: 20px;   
 text-align: right;
}

</style>

<script>
import json from './entrt.json'
export default {
    data() {
        return {
            items:json
        }
    },


 

}
</script>