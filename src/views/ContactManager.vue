<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col">
                <p class="h3 text-success fw-bold">Contact Manager</p>
                <router-link to="/contacts/add" class="btn btn-success btn -sm"><i class="fa fa-plus-circle"></i></router-link>
            </div>
        </div>
   

        <div v-if="errorMessage">
            <div class="container mt-3">
                <div class="row">
                    <div class="col">
                       <p class="h4 text-danger fw-bold">{{ errorMessage }}</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="container mt-3" v-if = "contacts.length > 0">
            <div class="row">
                <div class="col-md-6">
                    <div class="card my-2 list-group-item-success shadow-lg" v-for = "contact of contacts" v-bind:key = "contact">
                        <div class="card-body">
                            <div class="row align-items-center">
                                <div class="col-sm-4">
                                    <img :src="contact.photo" :alt="contact.name" class="contact-img-big">

                                </div>
                                <div class="col-sm-7">
                                    <ul class="list-group">  
                                        <li class="list-group-item">ID : <span class="fw-bold">{{contact.id}}</span></li>
                                        <li class="list-group-item">Name : <span class="fw-bold">{{contact.name}}</span></li>
                                        <li class="list-group-item">Title : <span class="fw-bold">{{contact.title}}</span></li>
                                        <li class="list-group-item">Company: <span class="fw-bold">{{contact.company}}</span></li>
                                        <li class="list-group-item">Email : <span class="fw-bold">{{contact.email}}</span></li>
                                        <li class="list-group-item">Mobile : <span class="fw-bold">{{contact.mobile}}</span></li>   
                                        <li class="list-group-item">Address: <span class="fw-bold">{{contact.address}}</span></li>
                                        <li class="list-group-item">City: <span class="fw-bold">{{contact.city}}</span></li>
                                        <li class="list-group-item">Location : <span class="fw-bold">lat:{{contact.location.lat}} lng:{{contact.location.lng}}</span></li>  
                                    </ul>

                                </div>
                                <div class="col-sm-1 d-flex flex-column justify-content-center align-items-center">
                        
                                    <router-link :to="`/contacts/view/${contact.id}`" class="btn btn-warning my-1">
                                        <i class="fa fa-eye"></i>
                                    </router-link>
                                    <router-link :to="`/contacts/edit/${contact.id}`"  class="btn btn-primary my-1">
                                        <i class="fa fa-pen"></i>
                                    </router-link>
                                    <router-link :to="`/contacts/delete/${contact.id}`"  class="btn btn-primary my-1">
                                        <i class="fa fa-trash"></i>
                                    </router-link>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>
    

</template>

<script>
import { ContactService } from '@/services/ContactService';

export default {  
    name: "ContactManager",
    data: function (){
        return{
        contacts : [],
        errorMessage : null
    }
},
    created: function (){

        try {
            let response = ContactService.getAllContacts();
            this.contacts = response;
        }
        catch (error){
            this.errorMessage = error;
        }
    },
    methods: {
        
        }
    }

</script>

<style scoped>

</style>
