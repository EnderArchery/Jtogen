let x, y, z, viewDistance, minDistance, maxDistance, player, tpDelay, /*typeDelay,*/ chatKey //inputs
//let stepSize, startStep, endStep //derived from input
let generator, done //globals
let robot = require("robotjs")
let sendKeys = require("sendKeys-js")
let prompt = require("prompts")
let iohook = require("iohook")
//let clipboardy = require("clipboardy")
let question = [{
  type: "text",
  name: "input",
  //message: "x y z minDistance maxDistance viewDistance player tpDelay typeDelay chatKey",
  message: "x y z minDistance maxDistance viewDistance player tpDelay chatKey",
  initial: "0 200 0 0 2048 8 @s 10000 t"
}]
let inputRegex = /^(-?\d+) (\d+) (-?\d+) (\d+) (\d+) (\d+) ([\.\S]+) (\d+) ([\.\S]+)$/
let stop = 1
let typeDelay = 100

setup()

function handler() {
  //console.log("handled");
  stop *= -1
  if (stop != 1) {
    run()
  }
}

function sleep(delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(delay)
    }, delay)
  })
}

async function setup() {
  while (true) {
    console.log("")
    console.log("To get started, choose a starting position (Center)")
    console.log("Make sure that you can see all the corners in your render distance (Even at a 45° angle x-rotation)")
    console.log("If not, increase your FOV, or increase your height")
    console.log("Recommended: max FOV, height 200, render distance 10")
    console.log("If you're using this on a website or server console, I recommend setting the chatKey option to \"null\" (Without \")");
    console.log("All options must be entered with a single space separating them")
    console.log("")
    let input = await prompt(question)
    input = input.input.match(inputRegex)
    if (input != null) {
      input = input.map((x) => {
        let y = parseInt(x, 10)
        if (y * 1 == y * 1) {
          return y
        } else {
          return x
        }
      });
      console.log(input.toString());
      [input, x, y, z, minDistance, maxDistance, viewDistance, player, tpDelay, /*typeDelay,*/ chatKey] = input
      break;
    }
    console.log("")
    console.log("")
    console.log("It seems like you've missed something there... could you please try again?")
  }
  generator = CommandGenerator(x, y, z, minDistance, maxDistance, viewDistance, player)
  done = false
  iohook.registerShortcut([52, 29], () => handler())
  iohook.start()
  console.log("")
  console.log("Ready, enter your minecraft world, open the debug-menu (F3), go into flight mode and press Ctrl+. (Control + Dot)")
  console.log("Your x-rotation (Penultimate number in the command) will show you the progress in percent (0%-100%)")
  console.log("You can pause and continue by pressing Ctrl+.")
  console.log("If you don't want to pause but cancel, you can just pause the process and close this window")
  console.log("")
}

async function run() {
  let time
  while (stop != 1 && done == false) {
    let command = generator.next()
    done = command.done
    if (!command.done) {
      time = new Date().getTime()
      command = command.value
      //console.log(command)
      await sendCommand(command, chatKey, typeDelay)
      time = new Date().getTime() - time
      //console.log(time)
      //await sendCommand(`/say Progress: ${progress}`, chatKey, typeDelay)
      await sleep(tpDelay - time)
    }
  }
  if (done == true) {
    iohook.unregisterAllShortcuts()
    iohook.stop()
    console.log("Done 100%")
    console.log("You can close this window now")
    process.exit()
  }
}

async function sendCommand(command, chatKey, typeDelay) {
  robot.setKeyboardDelay(typeDelay)
  if (chatKey != "null") {
    await robot.keyTap(chatKey)
  }
  sendKeys.send(command)
  //await sleep(typeDelay)
  //await sendKeys.send(command)
  await sleep(typeDelay)
  //sendKeys.sendKeys("{enter}")
  await robot.keyTap("enter")
}

function command(x, y, z, player, progress) {
  //progress = 360 / progress
  return `/execute as ${player} at @s run tp @s ${x} ${y} ${z} ${progress} 90`
}

function* CommandGenerator(x, y, z, minDistance, maxDistance, viewDistance, player) {
  function makeCommand(curX, curZ) {
    counter++
    progress = round(counter / totalCommands * 100, 1)
    let realX = x + curX * stepSize
    let realZ = z + curZ * stepSize
    return command(realX, y, realZ, player, progress)
  }
  let counter = 0
  let progress = 0
  let stepSize = viewDistance * 16 * 2
  let startStep = Math.round(minDistance / stepSize)
  let endStep = -Math.round(-(maxDistance / stepSize))
  let totalCommands = ((endStep * 2 + 1) ** 2)
  if (startStep != 0) {
    totalCommands -= ((startStep - 1) * 2 + 1) ** 2
  }
  for (let curStep = startStep; curStep <= endStep; curStep++) {
    let curX = -curStep
    let curZ = -curStep
    if (curStep == 0) {
      yield makeCommand(curX, curZ)
    }
    while (curX < curStep) {
      yield makeCommand(curX, curZ)
      curX += 1
    }
    while (curZ < curStep) {
      yield makeCommand(curX, curZ)
      curZ += 1
    }
    while (curX > -curStep) {
      yield makeCommand(curX, curZ)
      curX -= 1
    }
    while (curZ > -curStep) {
      yield makeCommand(curX, curZ)
      curZ -= 1
    }
  }
}

function round(number, decimalPlaces) {
  let multiplier = Math.pow(10, decimalPlaces || 0)
  return Math.round(number * multiplier) / multiplier
}