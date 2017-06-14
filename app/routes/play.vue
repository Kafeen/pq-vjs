<template>
<div id="play">
    <div class="row flex">
        <div class="column flex">
            <character-sheet />            
            <spell-book class="flex"/>
        </div>
        <div class="column flex">
            <equipment />
            <inventory class="flex" />
        </div>
        <div class="column flex">
            <story-progress class="flex" />
            <quest-log class="flex" />
        </div>
    </div>
    <current-activity class="footer"/>
</div>
</template>

<<script>
import CharacterSheet from '../components/character-sheet.vue';
import CurrentActivity from '../components/current-activity.vue';
import Equipment from '../components/equipment.vue';
import Inventory from '../components/inventory.vue';
import QuestLog from '../components/quest-log.vue';
import SpellBook from '../components/spell-book.vue';
import StoryProgress from '../components/story-progress.vue';

import Rx from 'rxjs';

import store from '../state/store';

import { mapGetters } from 'vuex'

export default {
  components: {
    CharacterSheet,
    CurrentActivity,
    Equipment,
    Inventory,
    QuestLog,
    SpellBook,
    StoryProgress
  },

  methods: {

  },

  computed: mapGetters([
    'evenOrOdd'
  ]),

  created: () => {
    //const GAME_INTERVAL = 17;
    const GAME_INTERVAL = 5000;

    const ticker = Rx.Observable
        .interval(GAME_INTERVAL, Rx.Scheduler.requestAnimationFrame)
        .map(() => ({
            time: Date.now(),
            deltaTime: null
        }))
        .scan((previous, current) => ({
            time: current.time,
            deltaTime: (current.time - previous.time) / 1000
        }));

    const game = ticker
        .subscribe((ticker) => {
            store.dispatch('progress', ticker.deltaTime);
            
            /*
            store.dispatch('quest/progress', ticker.deltaTime)
                 .then(() => {
                     console.log(store);
                    });*/
                
            /*
            store.dispatch('character/progress', ticker.deltaTime)
                .then( () => store.dispatch('quest/progress', ticker.deltaTime) )
                .then( () => store.dispatch('story/progress', ticker.deltaTime) );
            */
        });

  },
}
</script>


<style scoped>

#play {
    display: flex;
    width: 100%;
    height: 100%;
}

.row {
  display: flex;
  flex-direction: row;
}

.column {
    display: flex;
    flex-direction: column;
}

.flex {
    flex: 1 1 auto;
}

.footer {
    position: absolute;
    bottom: 0;
    height: 48px;
    width: 100%;
}
</style>

