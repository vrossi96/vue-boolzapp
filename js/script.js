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
            visible: true,
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
            visible: true,
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
            visible: true,
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
      resultSearchContact() {
         const input = this.searchContact.toLowerCase().split("");
         this.contacts.forEach((element) => {
            element.visible = false;
            const lettersArray = element.name.toLowerCase().split("");

            if (input.every((item) => lettersArray.includes(item))) {
               element.visible = true;
            }
         });
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
            const nowTime = this.addPresentTime();
            const newMessage = {
               date: nowTime,
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
                  date: nowTime,
                  text: "Ok",
                  status: "received",
               };
               const newArray = [...this.contacts[index].messages, autoMessage];
               this.contacts[index].messages = newArray;
            }, 2000);
         }
      },
   },
});

const helo = "ginger";

console.log(helo.split(""));

/* 
1 prendere l'input
2 trasformare in array i name
 */
