<template>
  <div class="slide">
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
}
.slide{
  height: 100%;
  overflow: hidden; 
  ul{
    position: relative;
    width: 100vw;
    height: 100vh;
  }
  li{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    opacity: 0;
    animation: fade 8s infinite;
  
    &:nth-child(1){
      background-image: url('static/1.jpg');
      animation-delay: 0s;
    }
    &:nth-child(2){
      background-image: url('static/2.jpg');
      animation-delay: 2s;
    }
    &:nth-child(3){
      background-image: url('static/3.jpg');
      animation-delay: 4s;
    }
    &:nth-child(4){
      background-image: url('static/4.jpg');
      animation-delay: 6s;
    }
    &:nth-child(5){
      background-image: url('static/5.jpg');
      animation-delay: 8s;
    }
  }
}

@keyframes fade {
  0% {opacity:0;}
  5% {opacity:1;}
  25% {opacity:1;}
  30% {opacity:0;}
  100% {opacity:0;}
}
</style>
