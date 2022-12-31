import axios from 'axios'
export class ContactService {
    static contacts = {
        '1519720712925':{
          "id": "1519720712925",
          "name": "John Smith",
          "company": "Twitter. inc.",
          "email":"john_smith@gmail.com",
          "title": "Graphics designer",
          "mobile": "(123)956-7890",
          "photo": "https://img.freepik.com/free-photo/portrait-attractive-man-with-kiss-isolated-blue_155003-4530.jpg?w=740&t=st=1672446016~exp=1672446616~hmac=198df8cc0dde5d8b61b6d7b00b64d9345dde4c9bc3828467b8eb8c50ce8f2fad",
          "location": {
            "lat": 37.7855662,
            "lng": -122.3969688
           },
           "address": '795 Folsom Ave, Suite 600',
	       "city": 'San Francisco, CA 94107'
        },
        '1519720712926':{  "id": "1519720712926",
            "name": "Janeth Carton",
            "company": "Twitter. inc.",
            "email":"j_carthon@gmail.com",
            "title": "CEO",
            "mobile": "(123)456-7790",
            "photo": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1200",      
            "location": {
                "lat": 37.7855662,
                "lng": -122.3969688
               },
            "address": '795 Folsom Ave, Suite 600',
            "city": 'San Francisco, CA 94107'
    },
    '1519720712927':{
            "id": "1519720712927",
            "name": "Alex Jonathan",
            "company": "Twitter. inc.",
            "email":"alexj@gmail.com",
            "title": "Marketing Manager",
            "mobile": "(123)486-7090",
            "photo": "https://img.freepik.com/free-photo/man-portrait_1296-636.jpg?w=740&t=st=1672451684~exp=1672452284~hmac=2a207fc4baa5e6491d133b938ef63cc4ea8bb10f17ff82331a02c9d77a656de9",
            "location": {
                "lat": 37.7855662,
                "lng": -122.3969688
               },
            "address": '795 Folsom Ave, Suite 600',
            "city": 'San Francisco, CA 94107'
    },  
    '1519720712928':{
            "id": "1519720712928",
            "name": "Michael Zimber",
            "company": "Twitter. inc.",
            "email":"j_carthon@gmail.com",
            "title": "Sales Manager",
            "mobile": "(123)456-7890",
            "photo": "https://img.freepik.com/free-photo/profile-young-confident-handsome-man_114579-78891.jpg?w=740&t=st=1672446228~exp=1672446828~hmac=64e4acc190b051fb5549c0d3a696b0705b2ef889fb3589bcbec70fce47343ce4",
            "location": {
                "lat": 37.7855662,
                "lng": -122.3969688
               },
            "address": '795 Folsom Ave, Suite 600',
            "city": 'San Francisco, CA 94107'
    },
        
    '1519720712929':{
            "id": "1519720712929",
            "name": "Monica Smith",
            "company": "Twitter. inc.",
            "email":"monismith@gmail.com",
            "title": "Graphic Designer",
            "mobile": "(123)426-7190",
            "photo": "https://images.pexels.com/photos/7897404/pexels-photo-7897404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "location": {
                "lat": 37.7855662,
                "lng": -122.3969688
               },
            "address": '795 Folsom Ave, Suite 600',
            "city": 'San Francisco, CA 94107'
    },
    '1519720712930':{   "id": "1519720712930",
            "name": "Sandra Smith",
            "company": "Twitter. inc.",
            "email":"sansmith@gmail.com",
            "title": "Graphic Designer",
            "mobile": "(123)456-1890",
            "photo": "https://images.pexels.com/photos/4350178/pexels-photo-4350178.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "location": {
                "lat": 37.7855662,
                "lng": -122.3969688
               },
            "address": '795 Folsom Ave, Suite 600',
            "city": 'San Francisco, CA 94107'
    },
    '1519720712931':{
            "id": "1519720712931",
            "name": "Karl Smith",
            "company": "Twitter. inc.",
            "email":"karlmith@gmail.com",
            "title": "Graphic Designer",
            "mobile": "(123)556-7890",
            "photo": "https://images.pexels.com/photos/5384429/pexels-photo-5384429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "location": {
                "lat": 37.7855662,
                "lng": -122.3969688
               },
            "address": '795 Folsom Ave, Suite 600',
            "city": 'San Francisco, CA 94107' 
        },
        '1519720712932':{
                "id": "1519720712932",
                "name": "Gaia Smith",
                "company": "Twitter. inc.",
                "email":"gaia@gmail.com",
                "title": "Graphic Designer",
                "mobile": "(123)756-7890",
                "photo": "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                "location": {
                    "lat": 37.7855662,
                    "lng": -122.3969688
                   },
                "address": '795 Folsom Ave, Suite 600',
                "city": 'San Francisco, CA 94107'
            }}
    
    static convert_contact_db_to_array(contacts) {
        let cont = []
        
        for (let id in contacts) {
            cont[cont.length] = contacts[id] ;
        }

        return cont ;
        }

    static getAllContacts (){
        let contacts = window.localStorage.getItem('contactsDB') ;

        if(contacts) {
            this.contacts = JSON.parse(contacts)
          }
          else {
            window.localStorage.setItem('contactsDB', JSON.stringify(this.contacts))
          }
          
        return this.convert_contact_db_to_array(this.contacts)
    }

    static validateContact(contact) 
    {
        if(contact.id == "")
        {
            alert("ID field is required") ;
            return false ;
        }

        if(contact.name == "")
        {
            alert("Name field is required") ;
            return false ;
        }

        if(contact.photo == "")
        {
            alert("Photo field is required") ;
            return false ;
        }

        const regex = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
        if (!regex.test(contact.mobile)) {
            alert("Wrong phone no");
            return false
        }
        else return true
    }

    static getContact (contactId){
        return this.contacts[contactId];
    }
    static async createContact (contact){
        if( this.validateContact(contact) )
        {
            await this.getGps(contact)
            this.contacts[contact.id] = contact;
            window.localStorage.setItem('contactsDB', JSON.stringify(this.contacts))

            return true ;
        }
        return false ;
    }
    
    static deleteContact (contactId){
        if( this.contacts[contactId] )
        {
            delete this.contacts[contactId]
            window.localStorage.setItem('contactsDB', JSON.stringify(this.contacts))
            return this.convert_contact_db_to_array(this.contacts) ;
        } 
    } 

    static async getGps(contact) {
        contact.city = contact.city || ''
        contact.address = contact.address || ''
        let address = (contact.city + contact.address) || 'paris'
        const api = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + address +'&key=AIzaSyDKvvBgAkSCugEbXckutuAFuqPzthsCnJ8'
        console.log(api);
        await axios.get(api)
        .then((response) => {
          contact.location = response.data.results[0].geometry.location
        })
        .catch((error) => {
          console.log(error);
          contact.location = {
            lat: 'Shit',
            lng: 'Happened'
          }
        })
      }
}