// @ts-ignore
interface String {
  truncate(limit: number): string;
  readingTime(): string;
}

String.prototype.truncate = function(limit: number, end: string = "..."): string {
  const words = this.split(" ");
  const totalWords = words.length;

  if (totalWords <= limit)
    return this.toString();

  if (totalWords > limit) {
    const truncatedWords = words.slice(0, limit);
    return `${truncatedWords.join(" ")} ${end}`;
  }

  return `${words.join(" ")} ${end}`;
};

String.prototype.readingTime = function() {
  const wordsPerMinute = 260;
  const words = this.split(" ").length;
  const minutes = words / wordsPerMinute;
  const readTime = Math.ceil(minutes);
  return `${readTime} MIN READ`;
};
