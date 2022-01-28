<template>
    <div class="cover"> 
        <div class="loader">
            <div class="box"> <div class="dot d1"></div></div>
            <div class="box"> <div class="dot d2"></div></div>
            <div class="box"> <div class="dot d3"></div></div>
        </div>
    </div>
</template>

<style scoped>
.cover{
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    z-index: 999;
}
.loader{
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
}
.box{
    flex: 1;
    height: 100%;
}
.dot{
    height: 5px;
    width: 5px;
    border-radius: 100%;
    animation: swip 2s  ease-in-out infinite;
}
.d1{
    transition-delay: 0s;
}
.d2{
    transition-delay: 0.5s;
}
.d3{
    transition-delay: 1s;
}
</style>