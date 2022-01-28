<template>
    <div class="in">
        <div class="content">
        <h2 >welcom to oran </h2>
         <h2 >welcom to oran </h2>
         </div>
        <div class="discover-container">
        <div class="discover">تعال معنا في رحلة استكشافية لوهران    </div>
        <div class="discref">
             <button  > استكشف وهران</button> 
        </div>
        </div>
    </div>
    
</template>
<style  scoped>


.in{
    top: 60px;
background: rgb(4,46,109);
background: linear-gradient(111deg, rgba(4,46,109,1) 0%, rgba(4,13,33,1) 31%, rgba(4,13,33,1) 68%, rgba(72,31,73,1) 100%);
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
}
/*h1{
    flex: 0 0 auto;
    color: bisque;
    font-size: 64px;
    text-shadow: 6px 6px 1px black ;
    
}
*/
.content h2 {
  color: #fff;
  font-size: 6em;
  position: absolute;
  transform: translate(-50%, -50%);
}

.content h2:nth-child(1) {
  color: transparent;
  -webkit-text-stroke: 2px #03a9f4;
}

.content h2:nth-child(2) {
  color: #03a9f4;
  animation: animate 4s ease-in-out infinite;
}

@keyframes animate {
  0%,
  100% {
    clip-path: polygon(
      0% 45%,
      16% 44%,
      33% 50%,
      54% 60%,
      70% 61%,
      84% 59%,
      100% 52%,
      100% 100%,
      0% 100%
    );
  }

  50% {
    clip-path: polygon(
      0% 60%,
      15% 65%,
      34% 66%,
      51% 62%,
      67% 50%,
      84% 45%,
      100% 46%,
      100% 100%,
      0% 100%
    );
  }
}
.discover{
    position: absolute;
    bottom: 30px;
    right: 50px;
    font-size: 32px;
    color: chartreuse;
   
}
.discover-container{
    flex: 0 0 auto;

    bottom: 0;
    right: 0;
}
.discref{
    flex: 0 0 auto;
    bottom: 40px;
    left: 30px;

}
button{
    position: absolute;
    bottom: 20px;
    left: 50px;
    font-size: 40px;
    text-decoration: none;
    border: groove orange;
    border-radius: 16px;
    padding: 4px;
    background-color: orange;
    animation: heartbeat 1s infinite;
    cursor: pointer;

}
@keyframes heartbeat {
    0%{
        transform: scale(1);
        
    }
    100%{
        transform: scale(1.1);
    }
    
}
</style>
<script>


export default {
   
}
</script>