<template>
    <div class="backdrop" @click.self="back">
        <div class="modal" :class="{display : display}">
            {{ console.log(student)  }}
            <h1>Student: {{ student.id }}</h1>
            <p>Email: {{ student.email }}</p>
            <p>Mobile no. : {{ student.phone }}</p>
            <p>Date of Birth: {{ student.dob }}</p>
            <p>Gender: {{ student.gender }}</p>
        </div>
    </div>
</template>

<script>

export default {
    name: 'StudentDetails',
    props: {
        student: {
            type: Object,
            required: true
        },
        display: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        back() {
            this.$emit('close');
        }
    }
}
</script>

<style scoped>
.modal {
  width: 400px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  margin: 100px auto;
}

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
}

h1 {
  font-size: 1.5em;
  margin: 0 0 10px 0;
  color: aqua;
}


</style>