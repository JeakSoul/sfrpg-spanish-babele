/* globals Hooks, game, Babele,console */

Hooks.on('init', () => {
    console.log ("INITIALIZING SPANISH TRANSLATION BABELE INIT");
    if(typeof Babele !== 'undefined') {
        Babele.get().register({
            module: 'sfrpg-spanish-babele',
            lang: 'es',
            dir: 'compendiums/es'
        });
    }
});

Hooks.once("babele.ready", () => {
    game.foundryvtt-starfinder.ConditionManager.initialize();
});
