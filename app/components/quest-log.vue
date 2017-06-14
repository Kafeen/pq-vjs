<template>
<div id="quest-log">
<div class="header">Quest Log</div>
<ul>
    <li>Do a thing</li>
    <li>Kill something</li>
    <li>Find something</li>
    <li>Escort someone</li>
    <li>PROGRESS {{ $store.state.quest.currentProgress }}</li>
</ul>
</div>
</template>

<style scoped>
div {
    background-color: blue;
}
</style>
