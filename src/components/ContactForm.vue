<template>

<transition id="modal-template" name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">

                <form class="">
          <div class="row">
            <div class="s12 col center-align">
              <h4><strong>{{ buttonText }}</strong></h4>
              
            </div>
            <div class="col s3 ">
              <div class="inner">
              <img v-if="contact_item.img" :src="contact_item.img" alt="name" class="circle responsive-img edit-img">    
              </div>  
            </div>
          </div>
  
          <div class="row">
            
            <div class="input-field col s12 l6">
              <input placeholder="Name" v-model="contact_item.name" id="contact-name" type="text">
              <label for="contact-name"></label>
            </div>
            <div class="input-field col s12 l6">
              <input placeholder="Profession" v-model="contact_item.skill" id="contact-prof" type="text">
              <label for="contact-prof"></label>
            </div>
            <div class="input-field col s12 l6">
              <input placeholder="Company" v-model="contact_item.company" id="contact-company" type="text">
              <label for="contact-company"></label>
            </div>
            <div class="input-field col s12 l6">
              <input  type="email" placeholder="Email" v-model="contact_item.email" id="contact-email">
              <label for="contact-email"></label>
            </div>
            <div class="input-field col s12 l6">
              <input placeholder="Address" v-model="contact_item.address" id="contact-address" type="text">
              <label for="contact-address"></label>
            </div>
            <div class="input-field col s12 l6">
              <input placeholder="City" v-model="contact_item.city" id="contact-city" type="text">
              <label for="contact-city"></label>
            </div>
            <div class="input-field col s12 l6">
              <input  data-error="wrong number" placeholder="Phone" v-model="contact_item.phone" id="contact-phone" type="tel">
              <label for="contact-phone"></label>
            </div>        
            <div class="input-field col s12 l6">
              <input  placeholder="Photo" v-model="contact_item.img" id="contact-img">
              <label for="contact-img"></label>
            </div>
            <div class="input-field col s12 l6">
               <button @click.prevent="update" class="btn waves-effect waves-light" type="submit" name="action">{{ buttonText }}
                <i class="material-icons right">send</i>
              </button>
              <button @click.prevent="cancel" class="btn waves-effect waves-light" type="submit" name="action">Cancel
                <i class="material-icons right">cancel</i>
              </button>
            </div>
          </div>
        </form>
            </div>
          </div>
        </div>
      </transition>
  
  </template>
  
  <script>
  export default {
    name: 'ContactForm',
    props: ['contact_item', 'buttonText', 'valid', 'showModal'],
    methods: {
      update() {
        this.$emit('update-contact');
      },
      cancel() {
        this.$emit('cancel-contact');
      },
    }
  }
  </script>
  
  <style>
 .edit-img
  {
    margin-top: -10px;
  }
.modal-mask {
  height:300px;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  bottom:0;
    position:fixed;
    overflow-y:auto;
    overflow-x:hidden;
  z-index: 9998;
  top: 0;
  left: 0;
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  
  width: 90%;
  margin: 0px auto;
  padding: 20px 20px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-from, .modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(5.1);
  transform: scale(1.1);
}
.btn{
  margin:2px;
}
</style>