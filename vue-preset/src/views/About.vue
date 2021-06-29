<template>
  <div class="about">
    <h1>This is an about page</h1>
    <textarea v-model="testing"/>
    <input type="checkbox" value="seoul" v-model="checked">seoul
    <input type="checkbox" value="daegu" v-model="checked">daegu
    <input type="checkbox" value="busan" v-model="checked">busan
    <p>{{ checked }}</p>

    <br/>
<!--    <img v-bind:src="imgSrc" />-->
    <br/>

    <input type="radio" v-bind:value="radioValue1" v-model="picked">
    <input type="radio" v-bind:value="radioValue2" v-model="picked">
    <input type="radio" v-bind:value="radioValue3" v-model="picked">
    <br/>
    {{ picked }}
  </div>
  <div>
    <textarea v-model="textValue"/>
    <button type="button" v-bind:disabled="textValue==''">Click</button>
  </div>
  <div class="container" v-bind:class="{'active': isActive, 'text-red':hasError}">
    Class Binding
  </div>
  <p class="container" v-bind:class="['active','text-red']">test</p>
</template>
<script>
export default {
  name: 'About',
  components: {},
  data() {
    return {
      isActive: true,
      hasError: false,
      textValue:'',
      testing: '',
      checked: [],
      test: '',
      radioValue1: 'seoul',
      radioValue2: 'daegu',
      radioValue3: 'busan',
      picked: '',
      imgSrc: 'https://s.pstatic.net/static/www/img/uit/2021/sp_main_4efc7a.png',
    }
  }
}
</script>

<style>

.text-red{
  color: red;
}

</style>