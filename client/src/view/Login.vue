<template>
    <div>
        <auth-layout>
            <p slot="title">Login</p>
            </p>
            <Form>
                <FormItem prop="user">
                    <Input type="text" v-model="username" placeholder="Username">
                        <Icon type="md-person" style="color: #26b99a" slot="prepend"></Icon>
                    </Input>
                </FormItem>
                <FormItem prop="password">
                    <Input type="password" v-model="password"  placeholder="Password">
                        <Icon type="md-lock" style="color: #26b99a" slot="prepend"></Icon>
                    </Input>
                </FormItem>
                <FormItem>
                    <Col>
                        <Button style="width: 100%; background: #26b99a" type="success" @click="login()">Login</Button>
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
            username: '',
            password: ''
        }
    },
    methods: {
        login(){
            console.log(this.username, this.password)
        }
    },
}
</script>
