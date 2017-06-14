<template>
<div id="current-activity">
<div>Doing a Thing</div>
<span>PROGRESS {{ $store.state.quest.currentProgress }}</span>
<div class="progress-bar" />
</div>
</template>

<style scoped>
div {
    background-color: orange;
}
</style>
