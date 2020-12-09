<template>
   <nav>
     <h2>Home</h2>
      <router-link to="/" active-class="link--active" exact class="link">Home</router-link>
      <router-link to="/users/1" active-class="link--active" exact class="link">Users</router-link>
      <button @click="increment(2)">+2</button>
      <button @click="decrement(2)">-2</button>
    </nav>
</template>

<script>
// import { mapMutations } from 'vuex'
import { mapActions } from "vuex"
export default {
  methods: {
    // ...mapMutations(["increment", "decrement"])
    ...mapActions("count",["increment", "decrement"])
    // increment() {
    //   this.$store.dispatch('increment', 2)
    // },
    // decrement() {
    //   this.$store.dispatch('decrement', 2)
    // }
  }
}
</script>