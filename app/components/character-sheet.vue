<template id="character-sheet-templete">
<div id="character-sheet">
    <div class="header">Character Sheet</div>
    <ul>
        <li>Name {{ $store.state.character.name }}</li>
        <li>Race {{ $store.state.character.race }}</li>
        <li>Class {{ $store.state.character.job }}</li>
        <li>Level {{ $store.state.character.level }}</li>
        <li>EXP {{ $store.state.character.exp }}</li>
        <!--li>STR {{ $store.state.stats.str }}</li>
        <li>CON {{ $store.state.stats.con }}</li>
        <li>DEX {{ $store.state.stats.dex }}</li>
        <li>INT {{ $store.state.stats.int }}</li>
        <li>WIS {{ $store.state.stats.wis }}</li>
        <li>Max HP {{ $store.state.stats.hp }}</li>
        <li>Max MP: {{ $store.state.stats.mp }}</li-->
    </ul>
</div>
</template>

<script>
module.exports = {
    data: function () {
        return {
            
        }
    }
}
</script>

<style scoped>
div {
    background-color: red;
}
</style>
