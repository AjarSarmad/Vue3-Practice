
<template>
    <div class="backdrop" @click.self="closeModal">
        <div class="modal" :class="{sale: theme === 'sale'}">
            <h1>{{ header }}</h1>
            <p>{{text}}</p>
        </div>
    </div>
</template>

<script>
export default {
name: 'ModalVue',

props: {
    header: String,
    text: String,
    theme: String
    
  },
  methods: {
      closeModal(){
          this.$emit('close');
      }
  }
}
</script>
<style scoped>
.modal{
    width: 400px;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
    margin: 100px auto;
}

.backdrop{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
}
h1{
    font-size: 1.5em;
    margin: 0 0 10px 0;
    color: aqua;
}

.modal.sale{
    background-color: red;
    color: white;
}

.modal.sale h1{
    color: white;
}
</style>