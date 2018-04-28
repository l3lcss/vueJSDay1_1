<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="text" v-model="msg">
    <button @click="AlertToggle(msg)">Click</button>
    <MyComponent :msg="msg" :myFunc="testAlerts1" :myFuncII="testAlerts2" />

    <carousel-3d>
	    <slide :index="0">
	      <img src="http://kprofiles.com/wp-content/uploads/Jisoo.jpg">
	    </slide>
	    <slide :index="1">
	      <img src="https://i.pinimg.com/originals/2d/2e/44/2d2e440fbec663c809730b268f5ba792.jpg">
	    </slide>
      <slide :index="2">
	      <img src="https://i.pinimg.com/originals/45/a3/dd/45a3dd811a45b92be0a98cf4d4915466.jpg">
	    </slide>
      <slide :index="3">
	      <img src="https://i.pinimg.com/originals/b9/7c/f0/b97cf0fead297f5a9e83a05843e6c339.jpg" alt="">
	    </slide>
      <slide :index="4">
	      <img src="https://i.pinimg.com/236x/43/c8/fa/43c8fa2eac2d487aa86b0ef80cc06a2a.jpg" alt="">
	    </slide>
      <slide :index="5">
        <img src="http://www.asianjunkie.com/wp-content/uploads/2017/03/JisooCarUpdate.jpg" alt="">
      </slide>
      <slide :index="6">
        <img src="https://www.sbs.com.au/popasia/sites/sbs.com.au.popasia/files/styles/full/public/black-pink-jisoo-4.jpg?itok=Ahcw4oq4&mtime=1496021495" alt="">
      </slide>
      <slide :index="7">
        <img src="https://cdn140.picsart.com/235765776057202.jpg?r1024x1024" alt="">
      </slide>
	  </carousel-3d>

    
  </div>
  
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';
import MyComponent from './MyComponent'
export default {
  name: 'HelloWorld',
  components:{
    MyComponent,
    Carousel3d,
    Slide
  },
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    testAlerts1(msg) {
      alert("test ==> " + msg)
    },
    testAlerts2(msg) {
      alert("test2 ==> " + msg)
    },
    AlertToggle () {
			this.$swal('Hello Vue world!!!')
		}
  },
  created () {
    this.$Progress.start()
  },
  mounted () {
    this.$Progress.finish()
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
