# Jtogen
[Jtogen](#latest-release) by EnderArchery

Pre-generate Minecraft terrain without plugins, command blocks, console access, or other trickery.
It just uses your keyboard to make the appropriate inputs.

Enter the options with spaces inbetween, go into the minecraft-world and press `Ctrl`+`.`

### Tip

   Make sure you pick a height AND FOV that make your game render all the chunks in the render distance (Even at a 45° angle x-rotation)

   Press F3 before starting the process (`Ctrl`+`.`) as the first of your rotations is the generation progress in % (0 = 0%, 100 = 100%)

### Recommended

 - View distance 10
 - heigth 200
 - FOV max

### Latest Release
#### [(2.3.5)](./Releases/Jtogen.zip)

### Changelog
  <table>
    <tr>
      <th>
        Version
      </th>
      <th>
        Changes
      </th>
    </tr>
    <tr>
      <td>
        1.0.0
      </td>
      <td>
        <ul>
          <li>
            Works now
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        2.0.0
      </td>
      <td>
        <ul>
          <li>
            X-Rotation represents the progress now
          </li>
          <li>
            Don't crash on wrong input
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        2.1.0
      </td>
      <td>
        <ul>
          <li>
            TP-Delay compensates for typing on slower PCs (still synchronous: It won't start typing while the last command is still beeing typed)
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        2.1.1
      </td>
      <td>
        <ul>
          <li>
            Doesn't log type timings in the console anymore
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        2.2.0
      </td>
      <td>
        <ul>
          <li>
            Changed shortcut to <code>Ctrl</code>+<code>.</code>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        2.2.1
      </td>
      <td>
        <ul>
          <li>
            Added some explanatory text to the console
          </li>
          <li>
            Round progress to one decimal place
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        2.3.0
      </td>
      <td>
        <ul>
          <li>
            Things are now explained before entering all the options
          </li>
          <li>
            Better option checking
          </li>
          <li>
            Set null as chatKey to not make it open the chat (consoles on a website or server)
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        2.3.1
      </td>
      <td>
        <ul>
          <li>
            Reformatting explanations
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        2.3.2
      </td>
      <td>
        <ul>
          <li>
            Negative x- and z-coordinates are accepted now
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <a href="./Releases/Jtogen_2.3.3.zip">
          2.3.3
        </a>
      </td>
      <td>
        <ul>
          <li>
            Fixed broken behaviour (handling coordinates as strings, teleporting to wrong locations when starting point isn't 0 0)
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <a href="./Releases/Jtogen_2.3.4.zip">
          2.3.4
        </a>
      </td>
      <td>
        <ul>
          <li>
            Updated dependencies
          </li>
          <li>
            Removed input logging to console
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <a href="./Releases/Jtogen_2.3.5.zip">
          2.3.5
        </a>
      </td>
      <td>
        <ul>
          <li>
            Updated dependencies
          </li>
        </ul>
      </td>
    </tr>
  </table>
