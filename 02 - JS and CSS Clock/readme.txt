![cover image](https://github.com/KaiZerg/JavaScript30challenge/blob/gh-pages/02%20-%20JS%20and%20CSS%20Clock/images/project%20screen.jpg )


-WHAT DID I LEARN?


-tranform-origin: 50% - default value.
If we make transform-origin: 100%; - it will move transform point
from the middle of the element to the right end. We need this,
to make arrows rotate around center of the clock.

- Using transition property to make smooth animation;

- transform-rotate: (90deg); - to rotate clock arrows;

-transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1)
choosing transition timing effects(It moves arrow fast forward
and than makes a little snap back - so it look more realistic).

-Bug to fix, when second hand is on 12 hours, it moves back
to the 90deg position, due to the transition effect;
