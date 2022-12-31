<template>
    <div>
    <div class="container mt-3">
        <div class="row">
            <div class="col">
                <p class="h3 text-success fw-bold">View Contact</p>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row align-items-center">
            <div class="col-md-4">
                <img :src="contact.photo" :alt="contact.name" class="contact-img-big">
                
            </div>
            <div class="col-md-6">
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
            <div class="row mt-3">
                <div class="col">
                    <router-link to="/" class="btn btn-success"><i class="fa fa-arrow-alt-circle-left"></i>Back</router-link>
                </div>
            </div>
        </div>
    </div>
    </div>

    </template>
    
    <script>
    
    import { ContactService } from '@/services/ContactService';
    export default {
        name: "ViewContact",
        data: function(){
            return{
                contactId : this.$route.params.contactId,
                contact: {},
                errorMessage : null
            }
        },
            created : function (){
                    try{
                         let response = ContactService.getContact(this.contactId) ;
                         this.contact = response ;
                    }
                    catch(error)
                    {
                        this.errorMessage = error ;
                    }
            }
        }
    </script>
    
    <style scoped>
    
    </style>