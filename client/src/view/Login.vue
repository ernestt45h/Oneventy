<template>
    <div>
        <auth-layout>
            <p slot="title">Login</p>
            </p>
            <Form>
                <FormItem prop="user">
                    <Input type="text" v-model="email" placeholder="Email">
                        <Icon type="md-mail" class="primary-text" slot="prepend"></Icon>
                    </Input>
                </FormItem>
                <FormItem prop="password">
                    <Input type="password" v-model="password"  placeholder="Password">
                        <Icon type="md-lock" class="primary-text" slot="prepend"></Icon>
                    </Input>
                </FormItem>
                <FormItem>
                    <Col>
                        <Button style="width: 100%" class="primary" @click="login()">Login</Button>
                    </Col>
                </FormItem>
                <Divider>Or</Divider>
                <FormItem>
                    <Col>
                        <Button style="width: 100%; background: #dd4b39; color:white"  type="error" icon="logo-google" @click="login()">Google</Button>
                        <h3 style="margin-top: 7px;"><router-link :to="{name: 'Signup'}">  Sign Up</router-link></h3>
                    </Col>
                </FormItem>
            </Form>
        </auth-layout>
    </div>
</template>
<script>
import AuthLayout from '../layout/Auth.layout'
export default {
    name: 'login',
    components:{
        AuthLayout
    },
    data(){
        return{
            email: 'test@test.com',
            password: 'Jimjam241'
        }
    },
    methods: {
        login(){
            if(this.email && this.password)
                this.$store.dispatch('user/signIn', {email: this.email, password: this.password})
            else this.$Message.warning({
                content: 'Email and Password are required',
                duration: 3
            })
        }
    },
    created() {
        if(this.$auth.currentUser)
            this.$router.push({name: 'App'})
    },
}
</script>
