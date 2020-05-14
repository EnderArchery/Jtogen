# Jtogen
[Jtogen 2.3.3](./Releases/Jtogen.zip) by EnderArchery

Pregenerate minecraft terrain with nothing else but the tp-command
Enter the options with spaces inbetween, go into the minecraft-world and press Ctrl+.

### Tip:

 Make sure you pick a height AND FOV that make your game render all the junks in the render distance (Even at a 45° angle x-rotation)
 Press F3 before starting the process (Ctrl+.) as the first of your rotations is the generation progress in % (0 = 0%, 100 = 100%)

### Recommended:

 - View distance 10
 - heigth 200
 - FOV max

### [Download](./Releases/Jtogen.zip)

#### Releases:

 - [Jtogen 2.3.3](./Releases/Jtogen_2.3.3.zip)

### Changelog:

  |Version|Changes|
  |---:|---|
  |1.0.0 |<ul><li>Works now</li></ul>|
  |2.0.0 |<ul><li>X-Rotation represents the progress now</li><li>Don't crash on wrong input</li></ul>|
  |2.1.0 |<ul><li>TP-Delay compensates for typing on slower PCs (still synchronous: It won't start typing while the last command is still beeing typed)</li></ul>|
  |2.1.1 |<ul><li>Doesn't log type timings in the console anymore</li></ul>|
  |2.2.0 |<ul><li>Changed shortcut to Ctrl+.</li></ul>|
  |2.2.1 |<ul><li>Added some explanatory text to the console</li><li>Round progress to one decimal place</li></ul>|
  |2.3.0 |<ul><li>Things are now explained before entering all the options</li><li>Better option checking</li><li>Set null as chatKey to not make it open the chat (consoles on a website or server)</li></ul>|
  |2.3.1 |<ul><li>Reformatting explanations</li></ul>|
  |2.3.2 |<ul><li>Negative x- and z-coordinates are accepted now</li></ul>|
  |2.3.3 |<ul><li>Fixed broken behaviour (handling coordintes as strings, teleporting to wrong locations when starting point isn't 0 0)</li></ul>|