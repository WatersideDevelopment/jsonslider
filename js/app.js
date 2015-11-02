$( document ).ready(function() {
    $( '.slide-show' ).jsonSlider({
        json: 'store.json',
        Class: 'slider-active', //default class
        aspectRatio: '16:9', //aspect ratio of the slider. Chose it according to pictures aspect ratio.
        css: { //don't touch these parametres
            parent: {
                position: 'relative'
            },
            wrap: {
                position: 'relative',
                width: '100%',
                height: '100%',
                margin: '0 auto',
                padding: 0,
                backgroundColor: 'inherit',
                overflow: 'hidden'
            },
            figure: {
                position: 'absolute'
            },
            img: {
                width: 'auto',
                maxWidth: '100%',
                lineHeight: 0,
                margin: '0 auto'
            }
        }
    });



});