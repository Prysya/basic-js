/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
export default class VigenereCipheringMachine {
  constructor(isNotReverse = true) {
    this.isNotReverse = isNotReverse;

    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    this.encrypt = this.encrypt.bind(this);
    this.decrypt = this.decrypt.bind(this);
  }

  _getIndexes(word) {
    return [...word].map((letter) => {
      const index = this.alphabet.indexOf(letter.toUpperCase());

      return index === -1 ? letter : index;
    });
  }

  _getNewIndexes(arr, keyIndexes, isEncode = true) {
    let index = -1;

    return arr.map((item) => {
      if (typeof item === "number") {
        index += 1;
      }

      let parsedIndex = isEncode
        ? (item + keyIndexes[index % keyIndexes.length]) % this.alphabet.length
        : (item - keyIndexes[index % keyIndexes.length]) % this.alphabet.length;

      if (parsedIndex < 0) {
        parsedIndex = this.alphabet.length + parsedIndex;
      }

      return typeof item === "number"
        ? parsedIndex % this.alphabet.length
        : item;
    });
  }

  _getLetterFromIndexes(arr) {
    const newArr = arr.map((item) =>
      typeof item === "number" ? this.alphabet[item] : item
    );

    return this.isNotReverse ? newArr : newArr.reverse();
  }
  
  encrypt(word, key) {
    if ((word === undefined && typeof word !== "string") || (key === undefined && typeof key !== "string"))
      throw new Error("Incorrect arguments!");

    const keyIndexes = this._getIndexes(key);

    const wordIndexes = this._getIndexes(word);

    const newIndexes = this._getNewIndexes(wordIndexes, keyIndexes);

    return this._getLetterFromIndexes(newIndexes).join("");
  }
  decrypt(word, key) {
    if ((word === undefined && typeof word !== "string") || (key === undefined && typeof key !== "string"))
      throw new Error("Incorrect arguments!");

    const keyIndexes = this._getIndexes(key);

    const wordIndexes = this._getIndexes(word);

    const newIndexes = this._getNewIndexes(wordIndexes, keyIndexes, false);

    return this._getLetterFromIndexes(newIndexes).join("");
  }
}
