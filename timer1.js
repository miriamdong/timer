const input = process.argv.slice(2);
if (input.length < 1) return;
const sorted = input.sort();

for (let i = 0; i < sorted.length; i++) {
  if (sorted[i] < 0 || isNaN(sorted[i])) {
    sorted.splice(i, 1);
  }
  setTimeout(() => {
    process.stdout.write('\x07');
  }, sorted[i]);
}