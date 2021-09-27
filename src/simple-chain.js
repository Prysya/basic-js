/**
 * Implement chainMaker object according to task description
 *
 */
export default {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(String(value));

    return this;
  },
  removeLink(position) {
    if (
      typeof position === "number" &&
      position > 0 &&
      position <= this.chain.length
    ) {
      this.chain = this.chain.filter((_, index) => index + 1 !== position);
      return this;
    }
    this.chain = [];
    throw new Error("You can't remove incorrect link!");
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    if (this.chain.length === 0) {
      return "( )";
    }

    const chainedValue = this.chain.map((item) => `~( ${item} )~`).join("");
    this.chain = [];
    return chainedValue.substring(1, chainedValue.length - 1);
  },
};

