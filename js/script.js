const app = new Vue({
   el: "#root",
   data: {
      user: {
         name: "Nome Utente",
         avatar: "_io",
         message: "",
      },
      contacts: [
         {
            name: "Michele",
            avatar: "_1",
            visible: true,
            messages: [
               {
                  date: "10/01/2020 15:30:55",
                  text: "Hai portato a spasso il cane?",
                  status: "sent",
               },
               {
                  date: "10/01/2020 15:50:00",
                  text: "Ricordati di dargli da mangiare",
                  status: "sent",
               },
               {
                  date: "10/01/2020 16:15:22",
                  text: "Tutto fatto!",
                  status: "received",
               },
            ],
         },
         {
            name: "Fabio",
            avatar: "_2",
            visible: false,
            messages: [
               {
                  date: "20/03/2020 16:30:00",
                  text: "Ciao come stai?",
                  status: "sent",
               },
               {
                  date: "20/03/2020 16:30:55",
                  text: "Bene grazie! Stasera ci vediamo?",
                  status: "received",
               },
               {
                  date: "20/03/2020 16:35:00",
                  text: "Mi piacerebbe ma devo andare a fare la spesa.",
                  status: "sent",
               },
            ],
         },
         {
            name: "Samuele",
            avatar: "_3",
            visible: false,
            messages: [
               {
                  date: "28/03/2020 10:10:40",
                  text: "La Marianna va in campagna",
                  status: "received",
               },
               {
                  date: "28/03/2020 10:20:10",
                  text: "Sicuro di non aver sbagliato chat?",
                  status: "sent",
               },
               {
                  date: "28/03/2020 16:15:22",
                  text: "Ah scusa!",
                  status: "received",
               },
            ],
         },
         {
            name: "Marco",
            avatar: "_4",
            visible: false,
            messages: [
               {
                  date: "10/01/2020 15:30:55",
                  text: "Lo sai che ha aperto una nuova pizzeria?",
                  status: "sent",
               },
               {
                  date: "10/01/2020 15:50:00",
                  text: "Si, ma preferirei andare al cinema",
                  status: "received",
               },
            ],
         },
      ],
   },
   methods: {
      selectContact(index) {
         this.contacts.map((contact) => {
            return (contact.visible = false);
         });
         this.contacts[index].visible = true;
      },

      addMessage(index) {
         const newText = this.user.message.trim();
         const newMessage = {
            date: "10/01/2022 18:45:00",
            text: newText,
            status: "sent",
         };
         const newArray = [...this.contacts[index].messages, newMessage];
         this.contacts[index].messages = newArray;
         // Secondo metodo
         // this.contacts[index].messages.push(newMessage);
         this.user.message = "";

         //* Answer from pc
         setTimeout(() => {
            const autoMessage = {
               date: "10/01/2022 18:45:00",
               text: "Ok",
               status: "received",
            };
            const newArray = [...this.contacts[index].messages, autoMessage];
            this.contacts[index].messages = newArray;
         }, 2000);
      },
   },
});
