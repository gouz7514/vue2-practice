<template>
    <div>
        <form-helper>
            <template v-slot:form-header>
                <h3>Form One - Contact Us</h3>
                <p>Fill in this form to contact us</p>
            </template>
            <template v-slot:form-fields>
                <input type="text" placeholder="name" required />
                <label>Your Message:</label>
                <textarea></textarea>
            </template>
            <template v-slot:form-controls>
                <button v-on:click="handleSubmit">Send</button>
            </template>
        </form-helper>
    </div>
</template>

<script>
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
            alert('thanks for submitting form one & contacting us');
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