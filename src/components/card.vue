<template>
    <div class="card-container "  >
        <div class="img-container panel" :class="{dark:darkMode}">
            <img :src="sview"  class="image"/>
        </div>
        <div class="info-container panel" :class="{dark:darkMode}">
            <div class="category" >  <h4>{{scategory}} </h4></div>
            <div class="title"><h2>{{stitle}}</h2></div>
            <div class="adress"> <i  class="fa fa-map-marker-alt" /> {{sadress}}</div>
             <div class="about"> 
                 <p>{{sabout}}</p>
             </div>
             <div class="links"> <h5>from google data base</h5> <button class="see">See </button></div>
        </div>

    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
   props:{
       serviceName : String,
       category : String,
       viewimg :  String,
       adress : String,
       about: String
   },
   computed:{
       ...mapState({
           darkMode : state => state.darkMode
       })},
        data(){
            return {
                        stitle :this.serviceName,
                        scategory: this.category,
                        sview: this.viewimg,
                        sadress: this.adress,
                        slink: this.link,
                        sabout:this.about
                    }
        }
   
}
</script>

<style scoped>
.card-container{
    flex: 1;
    display: flex;  
    box-sizing: border-box;
    margin: 5px;
    transition: 0.4s ease;
}
.img-container{
    width: auto;
    height: 200px;
    aspect-ratio: 16/9;
    margin: 5px;
}
.image{
    height: 200px;
    aspect-ratio: 16/9;
    border-radius:10px ;
}
.info-container{
    flex: 1;
    height: 200px;
    min-width: 300px;
    padding: 10px;
    display: flex;
    flex-flow: column;
    margin: 5px;
    padding: 15px;
}
.title{
    width: 100%;
    display: block;
    text-align: left;
}
.details{
    flex:1;
    width: 100%;
}
.about{
    flex: 2;
    display: block;
    text-align: left;
}
.category{
    width: 100%;
    display: block;
    text-align: left;   
    font-size: 0.8em;
    padding-left: 5px;
}
.adress{
    width: 100%;
    display: block;
    text-align: left;   
    color: rgb(114, 114, 255);
}
.links{
    display: inline-flex;
    justify-content: space-between;
}
.see{
    flex:0 0 1;
    width: 80px;
    height: 30px;
    background-color: rgb(32, 169, 36);
    border: none;
    color: white;
    align-self: flex-end;
}
</style>