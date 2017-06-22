
    "use strict";

    /**
     * TODO:
     * Create person object, store it in a variable named person
     */
     var person = [{},{}];
     var person = [
       {
         firstName : "William",
         lastName : "Warren",
       }
     ];
     var person = [
       {
         firstName : "William",
         lastName : "Warren",
         sayHello: function() {
           return "Hello, " + this.firstName + " "+ this.lastName + "!";
         }
       }
     ];






    var shoppers = [
      {name: 'Cameron', amount: 180},
      {name: 'Ryan', amount: 250},
      {name: 'George', amount: 320}
    ];

    for (var i = 0; i < shoppers.length; i++) {
      if (shoppers[i].amount > 200) {
        console.log(shoppers[i].name + "'s total was $" + shoppers[i].amount + "." )
        shoppers[i].amount = (shoppers[i].amount)*(.9);
        console.log(shoppers[i].name + " actually spent $" + shoppers[i].amount + "." )

      } else {
        console.log(shoppers[i].name + " only spent $" + shoppers[i].amount + "." );
      }
    }


    // todo:
    // Create an array of objects that represent books.
    var d = new Date();
    var time;
    var due;
    var dueDate;
    var transformDate = function () {
      dueDate = new Date(+new Date + 1209600000);
      return dueDate;
    };
      var books = [
      {
      title: "Camino Island",
      author: ["Grisham","John"],
      keywords: ["word", "word", "word"],
      available: true,
      dateAvailable: ["time"],
      rent : function() {
        this.available = false;
        this.dateAvailable = transformDate();
      },
      returned : function() {
        this.available = true;
        this.dateAvailable = "now";

      },
      },

      {
      title: "Into The Water",
      author: ["Hawkins","Paula"],
      keywords: ["word", "word", "word"],
      available: true,
      dateAvailable: ["time"],
      rent : function() {
        this.available = false;
        this.dateAvailable = transformDate();
      },
      returned : function() {
        this.available = true;
        this.dateAvailable = "now";

      },

      },
      {
      title: "Come Sundown",
      author: ["Roberts","Nora"],
      keywords: ["word", "word", "word"],
      available: true,
      dateAvailable: ["time", "month", "day", "year"],
      rent : function() {
        this.available = false;
        this.dateAvailable = transformDate();
      },
      returned : function() {
        this.available = true;
        this.dateAvailable = "now";

      },

      },
      {
      title: "Dragon Teeth",
      author: ["Chrichton","Michael"],
      keywords: ["word", "word", "word"],
      available: true,
      dateAvailable: ["time", "month", "day", "year"],
      rent : function() {
        this.available = false;
        this.dateAvailable = transformDate();
      },
      returned : function() {
        this.available = true;
        this.dateAvailable = "now";

      },

      },
      {
      title: "Love Story",
      author: ["Kingsbury","Karen"],
      keywords: ["word", "word", "word"],
      available: true,
      dateAvailable: ["time", "month", "day", "year"],
      rent : function() {
        this.available = false;
        this.dateAvailable = transformDate();
      },
      returned : function() {
        this.available = true;
        this.dateAvailable = "now";

      },

      }];
      books.forEach(function (book, index, array) {
        console.log("Book #" + (parseInt(index) + 1));
        console.log("Title: " + book.title);
        console.log("Author: " + book.author[1] + " " + book.author[0]);
        console.log("---");
      });

      var dogs = [
        {
          breed: "string",
          weightInPounds: 0,
          age: 0,
          color: "string",
          sterilized: true,
          shotRecords: [

          ],
          bark : function() {
            console.log("WOOF");
          },
          getOlder : function() {
            this.age++;
          },
          getYounger : function() {
            this.age--;
          },
          fix : function() {
            this.sterilized = true;
          },
          getShot : function() {
            var shotType = prompt("What was the shot?");
            var shotDate = prompt("When did you get the shot?");
            var shotObject = {date: shotDate, shot: shotType};
            this.shotRecords.push(shotObject);
          }
        }
      ]
