<template>
    <div>
        <auth-layout>
            <p slot="title">Sign Up</p>
            </p>
            <Form>
                <FormItem prop="user">
                    <Input type="text" v-model="email" placeholder="Email">
                        <Icon type="md-mail" style="color: #26b99a" slot="prepend"></Icon>
                    </Input>
                </FormItem>
                <FormItem prop="password">
                    <Input type="password" v-model="password"  placeholder="Password">
                        <Icon type="md-lock" style="color: #26b99a" slot="prepend"></Icon>
                    </Input>
                </FormItem>
                <FormItem prop="password">
                    <Input type="password" v-model="repassword"  placeholder="Re enter password">
                        <Icon type="md-refresh" style="color: #26b99a" slot="prepend"></Icon>
                    </Input>
                </FormItem>
                <FormItem>
                    <Col>
                        <Button style="width: 100%; background: #26b99a" type="success" @click="signup()">Sign Up</Button>
                    </Col>
                </FormItem>
                <Divider>Or</Divider>
                <FormItem>
                    <Col>
                        <Button style="width: 100%; background: #dd4b39; color:white" type="error" icon="logo-google" @click="login()">Google</Button>
                        <h3 style="margin-top: 7px;"><router-link :to="{name: 'Login'}">  Login</router-link></h3>
                    </Col>
                </FormItem>
            </Form>
        </auth-layout>
    </div>
</template>
<script>
import AuthLayout from '../layout/Auth.layout'
export default {
    name: 'signup',
    components:{
        AuthLayout
    },
    data() {
        return {
            email: '',
            password: '',
            repassword: ''
        }
    },
    methods: {
        signup(){
            if(!this.password)
                this.$Message.error({
                    content: 'password required',
                    duration: 5
                    })
            else if(this.password !== this.repassword)
                this.$Message.error({
                    content: 'password mismatch',
                    duration: 5
                    })
            else if(this.password.length < 5)
                this.$Message.error({
                    content: 'password must be more than 5', 
                    duration: 5
                    })
            else
                this.$store.dispatch('user/signup', {email: this.email, password: this.password})

        }
    },
}
</script>
