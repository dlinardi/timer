const args = process.argv.slice(2);

for (const arg of args) {
  if (arg >= 0 && isNaN(arg) === false) {
    setTimeout(() => {
      process.stdout.write("\x07");
      console.log(arg);
    }, arg * 1000);
  }
}