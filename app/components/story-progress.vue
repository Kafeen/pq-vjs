<template>
<div id="story-progress">
<div class="header">Story Progress</div>
<ul>
    <li>Prolog</li>
    <li>Act 1</li>
    <li>PROGRESS {{ $store.state.story.currentProgress }}</li>
</ul>
</div>
</template>


<style scoped>
div {
    background-color: violet;
}
</style>
