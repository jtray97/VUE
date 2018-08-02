<template>
<div class="wrapper">

    <div class="unit">
        <h3>{{name}}</h3>
        <h5>Attack: {{attack}}</h5>
        <h5>Health: {{health}}</h5>
        <div class="buttonWrapper">
        <button @click ='select(name)'>SELECT</button>
        <button class='retire' @click ='deleteBot(index)'>RETIRE</button>
        </div>
        
    </div>
</div>
</template>


<script>
export default {
    props:['name','attack','health', 'index', 'select', 'deleteBot']
}
</script>
<style scoped>
.wrapper{
    width:100%;
}
.unit{
    padding-bottom:10px;
    padding-top:15px;
    margin:auto;
    margin-bottom:55px;
    text-align: center;
    font-family:Orbitron, sans-serif;
    height:170px;
    width:300px;
    background-color: white;
    box-shadow:1px 2px 5px;
}
.unit:hover{
    box-shadow:2px 4px 10px;
}
button{
    border:none;
    background-color: white;
    font-family: Orbitron, sans-serif;
    font-size: 100%;
}
.buttonWrapper{
    display:flex;
    justify-content: space-around;
}
.wrapper{
  margin-top:40px;
}
.retire{
    color:#9C26B0
}
</style>
