<template>
<link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css">
    <div class="all">
        <div class="text">
            <h1>Thing To Do</h1> 
            <div class="input-container" placeholder="text"> 
             
                <form action="">
                    
                <input  type="text" placeholder="search here">
                <i class="fas fa-search"></i>
                </form>
            </div>
        </div>

    </div>
</template>
<style scoped>
.all{
    display: flex;
    background-color: lightblue;
    height: 100vh;
    justify-content: center;
    align-items: center;


}
.text{
    
position: absolute;

}

.input-container{
    position: absolute;
    display: contents;
width: 400px;
}
input{
    border: lightblue;
    border-style: groove;
    border-radius: 50px;
    width: 500px;
    height: 40px ;
    
}
h1{
text-align: center;
}

</style>
<script>
export default {
    
}
</script>