<template>
  <div>
    <h1>Registrar</h1>

    <input
      type="email"
      name="email"
      v-model="email"
      placeholder="email" />
    <br>
    <input
      type="password"
      name="password"
      v-model="password"
      placeholder="password" />
    <br>
    <button
    @click="registrar">
    Registrar
    </button>
  </div>
</template>

<script>
import AutenticacionService from '@/services/AutenticacionService'
export default {
  data () {
    return {
      email: 'abc',
      password: '123'
    }
  },
  methods: {
    async registrar () {
      const response = await AutenticacionService.registrar({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
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
