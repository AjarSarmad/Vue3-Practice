<template>
    <form>
        <label>Email: </label>
        <input type = "email" required v-model="email" />
        <label>Password: </label>
        <input type = "password" required v-model="password" />

        <label>Role:</label>
        <select v-model="role">
            <option value="developer">Web Developer</option>
            <option value="designer">Web Designer</option>
        </select>

        <div class="terms">
            <input type="checkbox" id="terms" required />
            <label>I accept the terms and conditions</label>
        </div>

    </form>
</template>


<script>
export default {
    name: 'SignupForm',
    data(){
        return{
            email: '',
            password: '',
            role: '',
            terms: false
        }
    }
}
</script>
<style>
form{
    max-width: 400px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;  
    border-radius: 10px;
}

lable{
    color: #333;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}

input, select{
    display: block;
    box-sizing: border-box;
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    margin-bottom: 20px;
    font-size: 0.9em;
}
input[type="checkbox"]{
    display: inline-block;
    width: auto;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
}
</style>