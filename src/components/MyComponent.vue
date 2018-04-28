<template>
  <div>
      <button @click="myFunc(msg)">Alert1</button>
      <button @click="myFuncII(msg)">Alert2</button>
      {{msg}}
  </div>
</template>

<script>
export default {
  props: {
      msg: {
          type: String
      },
      myFunc: {
          type: Function
      },
      myFuncII: {
          type: Function
      }
  }
}
</script>

