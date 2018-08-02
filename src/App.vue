<template>
<div class="wrapper">

  <section class = 'header'>
    <h3 class = 'text button' @click='createThis'>create</h3>
    <h2 class = 'text' >Battle Bots</h2>
    <h3 class = 'text button' @click='collection'>collection</h3>
  </section>
  
<!-- <section class="createWrapper"> -->

    <section v-if='create' class="createWrapper">
      <div class="create">

      <input class = 'input' type="text" placeholder="Bot Name*" v-model='name'>
      <input class = 'input' type="number" placeholder="Attack Value*" v-model='attack'>
      <input class = 'input' type="number" placeholder="Health Value*" v-model='health'>
      <br/>
      <div class="buttonWrap">

      <button class = 'myButton' @click='submit'>SUBMIT</button>
      <button class = 'myButton' @click='clear'>CLEAR</button>
      </div>
      </div>
    </section>
<!-- </section> -->

 
  


  <section class="list" v-else>

    <div class="notARapper">
    <h3 class = 'fighter'>{{fighters.first}}</h3>
    <h3 class = 'fighter'>{{fighters.second}}</h3>
    <button class='myButton' @click='battle' >Battle</button>
    <button class='myButton' @click="clearFighter">Clear</button>
    </div>
  <hr/>
  <bot v-for='(bot, index) in bots' :key = 'index'
  :name='bot.name'
  :index='index'
  :attack='bot.attack'
  :health='bot.health'
  :select='select'
  :deleteBot='deleteBot'
  ></bot>
  </section>


</div>

</template>

<script>
import bot from "./components/bot";

export default {
  data() {
    return {
      create: true,
      createFilled: false,
      name: "",
      attack: "",
      health: "",
      bots: [
        { name: "Frank", attack: 30, health: 20 },
        { name: "Harry", attack: 40, health: 10 },
        { name: "Pearl", attack: 10, health: 40 }
      ],
      fighters: {
        first: "Bot #1 Select a bot below",
        second: "Bot #2 Select a bot below"
      }
    };
  },
  components: {
    bot: bot
  },
  methods: {
    select(name) {
      console.log("bot selected");
      if (this.fighters.first === "Bot #1 Select a bot below") {
        this.fighters.first = `Bot#1: ${name}`;
      } else if (
        this.fighters.first !== "Bot #1 Select a bot below" &&
        this.fighters.second === "Bot #2 Select a bot below"
      ) {
        this.fighters.second = `Bot#2:${name}`;
      } else {
        console.log("bot can't fight itself");
      }
    },
    deleteBot(index) {
      console.log("bot selected for retirement");
      this.bots.splice(index, 1);
    },
    battle() {
      if (
        this.fighters.first !== "Bot #1 Select a bot below" &&
        this.fighters.second !== "Bot #2 Select a bot below"
      ) {
        var winner = Math.ceil(Math.random() * 2);
        console.log("battle starting");
        console.log(winner);
        var name = "";
        if (winner === 1) {
          name = this.fighters.first;
        } else {
          name = this.fighters.second;
        }
        alert(`Winner is ${name}`);
        this.clearFighter();
      } else {
        console.log("Incorrect");
      }
    },
    clearFighter() {
      this.fighters = {
        first: "Bot #1 Select a bot below",
        second: "Bot #2 Select a bot below"
      };
    },
    createThis() {
      this.create = true;
    },
    collection() {
      this.create = false;
    },

    toggleView() {
      this.create = !this.create;
    },
    submit() {
      if (!this.name || !this.attack || !this.health) {
        this.createFilled = false;
      } else {
        this.createFilled = true;
        this.bots.push({
          name: this.name,
          attack: this.attack,
          health: this.health
        });
        console.log(this.bots);
        this.toggleView();
      }
    },
    clear() {
      this.name = "";
      this.attack = "";
      this.health = "";
      toggleView();
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Orbitron");

.gr__localhost {
  padding: 0px;
  margin: 0px;
}
html {
  padding: 0px;
}
body {
  padding: 0px;
  margin: 0px;
  background-color: #5CDB95;
}
.header {
  color: white;
  font-family: Orbitron, sans-serif;
  height: 85px;
  margin: 0px;
  background-color: #05386b;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
.text {
  display: flex;
  justify-content: center;
  font-weight: lighter;
}
.button {
  align-items: center;
}
.createWrapper {
 height:500px;
 width:99.5%;
  padding-top:40px;
}
.create{
  font-family: Orbitron, sans-serif;
  margin-top:40px;
  background-color: white;
  margin:auto;
 height:300px;
 width:400px;
 display:grid;
 grid-template-rows: 1fr 1fr 1fr .5fr;
}
placeholder{
  font-family:Orbitron
}
.fighter{
  font-family: Orbitron;
  /* margin:auto; */
}
.notARapper{
  width:100%;
  text-align: center;
}
.buttonWrap{
  width:100%;
  text-align:center;
}
.myButton{
  width:125px;
  height:36px;
  background-color: white;
  border:none;
  font-family: Orbitron;
  box-shadow: 1px 1px 5px;
  border-radius: 2px;
  margin:0px 7px;
  margin-bottom:15px;
}

</style>
