<template>
  <div class="grid-container">
    <div class="myPig">myPig</div>
    <div class="yourPig">yourPig</div>
    <div class="myState">myState</div>
    <div class="myMenu">myMenu</div>
    <div class="yourState">yourState</div>
    <div class="empty2">empty2</div>
    <div class="empty1">empty1</div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    'yourState yourState yourState yourPig yourPig'
    'empty1 empty1 empty1 yourPig yourPig'
    'empty2 empty2 empty2 empty2 empty2'
    'myPig myPig myState myState myState'
    'myPig myPig myMenu myMenu myMenu';
}

.myPig {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: '.';
  grid-area: myPig;
}

.yourPig {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: '.';
  grid-area: yourPig;
}

.myState {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: '.';
  grid-area: myState;
}

.myMenu {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: '.';
  grid-area: myMenu;
}

.yourState {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: '.';
  grid-area: yourState;
}

.empty2 {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: '.';
  grid-area: empty2;
}

.empty1 {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: '.';
  grid-area: empty1;
}
</style>
