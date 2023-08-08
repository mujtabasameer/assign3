import { question } from "readline-sync";

function main() {
    const paragraph = question("Enter paragraph to count words:\n");
    const count: number = word_counter(paragraph);
    console.log(`Words: ${count}`);
}

function word_counter(paragraph: string) {
    const count: number = paragraph.split(" ").length;
    return count;
}

main();