<template>
  <div>
    <HelloWorld class="zhuzhu" />
    <HelloWorld class="cap" />
    <HelloWorld class="clothes" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Action",
  components: {
    HelloWorld,
  },
};
</script>

<style scoped>
.zhuzhu {
  position: fixed;
  left: 33%;
  top: 0%;
  width: 67%;
  height: 66%;
  background-color: blue;
}
.cap {
  position: fixed;
  left: 0%;
  top: 0%;
  height: 33%;
  width: 33%;
  background-color: green;
}
.clothes {
  position: fixed;
  left: 0%;
  top: 33%;
  height: 33%;
  width: 33%;
  background-color: red;
}
.shoe {
  position: fixed;
  left: 0%;
  top: 66%;
  height: 33%;
  width: 33%;
  background-color: salmon;
}
.weapon {
  position: fixed;
  left: 33%;
  top: 66%;
  height: 33%;
  width: 33%;
  background-color: darkcyan;
}
.cloak {
  position: fixed;
  left: 66%;
  top: 66%;
  height: 33%;
  width: 34%;
  background-color: saddlebrown;
}
</style>
