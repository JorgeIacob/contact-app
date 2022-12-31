<template>
    <div>
    <div class="container mt-3">
        <div class="row">
            <div class="col">
                <p class="h3 text-success fw-bold">Edit Contact</p>
                <p class="fst-italic">Update User</p>
            </div>
        </div>
    </div>
    <div class="container mt-3">
        <div class="row">
            <div class="col-md-4">
                <form @submit.prevent="updateSubmit()">
                    <div class="mb-2">
                            <router-link to="/" class="btn btn-success"><i class="fa fa-arrow-alt-circle-left"></i>Back</router-link>
                    </div>
                    <div class="mb-2">
                        <input type="text" class="form-control" placeholder="Name" v-model="contact.name">
                    </div>
                    <div class="mb-2">
                        <input type="text" class="form-control" placeholder="Title" v-model="contact.title">
                    </div>
                    <div class="mb-2">
                        <input type="text" class="form-control" placeholder="Photo URL" v-model="contact.photo">
                    </div>
                    <div class="mb-2">
                        <input type="email" class="form-control" placeholder="Email" v-model="contact.email">
                    </div>
                    <div class="mb-2">
                        <input type="text" class="form-control" placeholder="Mobile" v-model="contact.mobile">
                    </div>
                    <div class="mb-2">
                        <input type="text" class="form-control" placeholder="Company" v-model="contact.company">
                    </div>
                    <div class="mb-2">
                        <input type="text" class="form-control" placeholder="Address" v-model="contact.address">
                    </div>
                    <div class="mb-2">
                        <input type="text" class="form-control" placeholder="City" v-model="contact.city">
                    </div>
                    
                    <div class="mb-2">
                        <input type="submit" class="btn-btn-success" value="Update">
                    </div>

                </form>
            </div>
         <div class="col-md-4">
            <img :src="contact.photo" :alt="contact.name" class="contact-img-big">
         </div>

        </div>

    </div>
    </div>
    </template>
    
    <script>
    
    
    import { ContactService } from '@/services/ContactService';
    export default 
    {
        name: "EditContact",
        data: function()
        {
            return{
                contactId : this.$route.params.contactId,
                contact: {
                            name : '',
                            photo: '',
                            email : '',
                            mobile : '',
                            company : '',
                            title : '',
                            id : '',
                            address : '',
                            city : '',
                            location : {},
                        },
                errorMessage : null
            }
        },
        created : function ()
        {
                try
                {
                    let response = ContactService.getContact(this.contactId) ;
                    this.contact = response ;
                }
                catch(error)
                {
                    this.errorMessage = error ;
                }
        },
        methods :
        {
            updateSubmit : async function()
            {
                try
                {
                    if( await ContactService.createContact(this.contact) == true )
                    {
                        return this.$router.push('/') ;
                    }
                }
                catch(error)
                {
                    console.log(error)
                }
            }
        }

    }
    </script>
    
    
    <style scoped>
    
    </style>