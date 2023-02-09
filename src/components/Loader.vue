<script>
export default {

};
</script>
<template>
 <div class="fixed top-0 left-0 w-full bg-indigo-100 h-screen opacity-90 z-[100000000000000000000000000000000000000]">
  <div class="loader"></div>
 </div>
</template>

<style>
.loader,
.loader:before,
.loader:after {
 background: transparent;
 -webkit-animation: load1 1s infinite ease-in-out;
 animation: load1 1s infinite ease-in-out;
 width: 1em;
 height: 4em;
}

.loader {
 color: rgb(210, 184, 210);
 text-indent: -9999em;
 position: absolute;
 top: 50%;
 left: 50%;
 font-size: 3rem;
 -webkit-transform: translateZ(0);
 -ms-transform: translateZ(0);
 transform: translateZ(0);
 -webkit-animation-delay: -0.16s;
 animation-delay: -0.16s;
}

.loader:before,
.loader:after {
 position: absolute;
 top: 0;
 content: '';
}

.loader:before {
 left: -1.5em;
 -webkit-animation-delay: -0.32s;
 animation-delay: -0.32s;
}

.loader:after {
 left: 1.5em;
}

@-webkit-keyframes load1 {

 0%,
 80%,
 100% {
  box-shadow: 0 0;
  height: 4em;
 }

 40% {
  box-shadow: 0 -2em;
  height: 5em;
 }
}

@keyframes load1 {

 0%,
 80%,
 100% {
  box-shadow: 0 0;
  height: 4em;
 }

 40% {
  box-shadow: 0 -2em;
  height: 5em;
 }
}
</style>
