<template>
  <div class="hello">
    <h1>Hello World</h1>
    <p>Count: {{$store.state.count}} ({{evenOrOdd}})</p>
    <div class="container">
    <div class="row text-center">
        <h3>Clicked: {{ $store.state.count }} times, count is {{ evenOrOdd }}.</h3>
        <button class="btn btn-success" @click="increment">+</button>
        <button class="btn btn-danger" @click="decrement">-</button>
        <button class="btn" @click="incrementIfOdd">Increment if odd</button>
        <button class="btn" @click="incrementAsync">Increment async</button>
        <button class="btn" @click="incrementBy(2)">Increment by 2</button>
    </div>
    </div>
  </div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'hello',
  computed: mapGetters([
    'evenOrOdd',
  ]),
  methods: mapActions([
    'increment',
    'decrement',
    'incrementBy',
    'incrementIfOdd',
    'incrementAsync',
  ])
};
</script>

<style>

</style>
