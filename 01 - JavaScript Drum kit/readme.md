![cover image](https://github.com/KaiZerg/JavaScript30challenge/blob/gh-pages/01%20-%20JavaScript%20Drum%20kit/images/project%20screen.jpg)

WHAT DID I LEARN?

-found resourse to quickly identify key's numbers: www.keycode.info ;

-using data- atrribute(date-key) instead of classes, to bind keys and 
audio files, when someone press keys, we find audio files and play it 
and find div with key to add class playing ;

-using event listener(.addEventListener) for keydown and performing function, 
where selecting(querySelector) audio, according to keyCode pressed, 
if no audio, return function, if audio found, play audio;

-using audio.currentTime=0 for rewind to the start, to allow faster repeatition 
of the audio, when pressed button;

-adding class 'playing' to the key, with key.classList.add('playing')
(available attributes: add, remove, toggle);

-using querySelector to select all keys and .forEach listen for 'transitionend',
when it ends, run function 'remove transition', which removing class 'playing';

-Using console.log() for each function for testing issues while writing code;
