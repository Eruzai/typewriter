const sentence = "hello there from lighthouse labs";
const sentenceWithNewLineChar = sentence + "\n";

let delay = 0;

for (const char of sentenceWithNewLineChar) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
  delay += 50;
}