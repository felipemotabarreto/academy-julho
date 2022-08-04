const counter = require("../counter");

describe("counter", () => {
  it("ele aumentar o valor em 1 quando incrementado", () => {
    const n = Math.random() * 100;
    expect(counter.increment(n)).toBe(n + 1);
  });

  it("ele deve notificar mudanças no counter quando startado", () => {
    const listener = jest.fn();

    counter.observe(listener);
    counter.start();

    setTimeout(() => {
      counter.stop();
      expect(listener).toBeCalledWith(1);
    }, 2000);
  });
});
