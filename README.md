# entgenderer
### Remove ideological garbage from German texts.

Have you ever experienced this? 
You read a text in German and suddenly you wonder if the author had a spontaneous stroke? 

>Der/Die/Das Klassenleiter&ast;In der Klasse 5C, soll eine&ast;n Schüler&ast;In ins Büro schicken.

Have you ever wondered if there wasn't a solution to this problem? Something that allows you to read texts without asterisks, colons or dashes again?

*This script is designed to do just that!* It removes all gender forms, and makes texts readable again.

And if you don't want to bother with scripts, there's a handy website that does it for you!

## Script Usage

```javascript
var remover = new GenderRemover("Lehrer*Innen");   /* Initialize */

console.log(remover.process());                    /* Process, print result */
```
