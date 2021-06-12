<template>
    <div>
        <form-helper>
            <template v-slot:form-header>
                <h3>Form Two - Log In</h3>
                <p>Enter your details to log-in</p>
            </template>
            <template v-slot:form-fields>
                <input type="text" placeholder="username" required />
                <input type="password" placeholder="password" required />
            </template>
            <template v-slot:form-controls>
                <button v-on:click="handleSubmit">Login</button>
            </template>
        </form-helper>
    </div>
</template>

<script>
// Imports
import formHelper from './FormHelper.vue'
export default {
    components: {
        'form-helper': formHelper
    },
    data () {
        return {
        }
    },
    methods: {
        handleSubmit: function(){
            alert('thanks for logging in (form two)');
        }
    }
}
</script>

<style>
body{
    margin: 0;
    font-family: 'Nunito SemiBold';
}
</style>