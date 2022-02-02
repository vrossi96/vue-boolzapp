dayjs.extend(dayjs_plugin_customParseFormat);

const app = new Vue({
   el: "#root",
   data: {
      searchContact: "",
      currentContact: 0,
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
                  dropdown: false,
               },
               {
                  date: "10/01/2020 15:50:00",
                  text: "Ricordati di dargli da mangiare",
                  status: "sent",
                  dropdown: false,
               },
               {
                  date: "10/01/2020 16:15:22",
                  text: "Tutto fatto!",
                  status: "received",
                  dropdown: false,
               },
            ],
         },
         {
            name: "Fabio",
            avatar: "_2",
            visible: true,
            messages: [
               {
                  date: "20/03/2020 16:30:00",
                  text: "Ciao come stai?",
                  status: "sent",
                  dropdown: false,
               },
               {
                  date: "20/03/2020 16:30:55",
                  text: "Bene grazie! Stasera ci vediamo?",
                  status: "received",
                  dropdown: false,
               },
               {
                  date: "20/03/2020 16:35:00",
                  text: "Mi piacerebbe ma devo andare a fare la spesa.",
                  status: "sent",
                  dropdown: false,
               },
            ],
         },
         {
            name: "Samuele",
            avatar: "_3",
            visible: true,
            messages: [
               {
                  date: "28/03/2020 10:10:40",
                  text: "La Marianna va in campagna",
                  status: "received",
                  dropdown: false,
               },
               {
                  date: "28/03/2020 10:20:10",
                  text: "Sicuro di non aver sbagliato chat?",
                  status: "sent",
                  dropdown: false,
               },
               {
                  date: "28/03/2020 16:15:22",
                  text: "Ah scusa!",
                  status: "received",
                  dropdown: false,
               },
            ],
         },
         {
            name: "Marco",
            avatar: "_4",
            visible: true,
            messages: [
               {
                  date: "10/01/2020 15:30:55",
                  text: "Lo sai che ha aperto una nuova pizzeria?",
                  status: "sent",
                  dropdown: false,
               },
               {
                  date: "10/01/2020 15:50:00",
                  text: "Si, ma preferirei andare al cinema",
                  status: "received",
                  dropdown: false,
               },
            ],
         },
      ],
   },
   methods: {
      resultSearchContact() {
         const input = [this.searchContact.toLowerCase()];
         this.contacts.forEach((element) => {
            element.visible = false;
            const lettersArray = element.name.toLowerCase();

            if (input.every((item) => lettersArray.includes(item))) {
               element.visible = true;
            }
         });
      },

      openDropdown(index) {
         const dropdownStatus = this.contacts[this.currentContact].messages[index].dropdown;
         this.contacts[this.currentContact].messages[index].dropdown = !dropdownStatus;
      },

      deleteMessage(index) {
         const newArray = this.contacts[this.currentContact].messages.filter((message, i) => {
            if (index !== i) {
               return message;
            }
         });
         this.contacts[this.currentContact].messages = [...newArray];
      },

      addPresentTime() {
         const now = dayjs().format("DD/MM/YYYY HH:mm:ss");
         return now;
      },

      selectContact(index) {
         this.currentContact = index;
      },

      addMessage(index) {
         const newText = this.user.message.trim();
         if (newText) {
            const newMessage = {
               date: this.addPresentTime(),
               text: newText,
               status: "sent",
               dropdown: false,
            };
            const newArray = [...this.contacts[index].messages, newMessage];
            this.contacts[index].messages = newArray;
            // Secondo metodo
            // this.contacts[index].messages.push(newMessage);
            this.user.message = "";

            //* Answer from pc
            setTimeout(() => {
               const autoMessage = {
                  date: this.addPresentTime(),
                  text: "Ok",
                  status: "received",
                  dropdown: false,
               };
               const newArray = [...this.contacts[index].messages, autoMessage];
               this.contacts[index].messages = newArray;
            }, 2000);
         }
      },
   },
});
