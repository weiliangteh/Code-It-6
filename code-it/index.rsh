'reach 0.1';

const Player = {
  ...hasRandom,
  getFortune: Fun([], UInt),
  seeFortune: Fun([UInt], Null),
  getDecision: Fun([UInt], UInt),
  seeDecision: Fun([UInt], Null),
  informTimeout: Fun([], Null),
};

export const main = Reach.App(() => {
  const Alice = Participant('Alice', {
    ...Player,
    wager: UInt,
    deadline: UInt,
  });
  const Bob   = Participant('Bob', {
    ...Player,
    acceptWager: Fun([UInt], Null),
  });

  init();

  const informTimeout = () => {
    each([Alice, Bob], () => {
      interact.informTimeout();
    });
  };

  Alice.only(() => {
    const wager = declassify(interact.wager);
    const deadline = declassify(interact.deadline);
  });
  Alice.publish(wager, deadline)
    .pay(wager);
  commit();

  //unknowable(Bob, Alice(_handAlice, _saltAlice));
  Bob.only(() => {
    interact.acceptWager(wager); 
  });
  Bob.pay(wager)
    .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));

  //must be in consensus
  var decision = 0;
  invariant( balance() == 2 * wager);
  while (decision == 0) {
    commit();

    Bob.only(() => {
      const fortune = declassify(interact.getFortune());
    });
    Bob.publish(fortune)
      .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));
    commit();

    Alice.only(() =>{
      const decide = declassify(interact.getDecision(fortune));
    });
    Alice.publish(decide)
      .timeout(relativeTime(deadline), () => closeTo(Bob, informTimeout));

    decision = decide;

    continue;
  }
  transfer(2 * wager).to(Bob);

  each([Alice, Bob], () => {
    interact.seeDecision(decision);
  });

  commit();
});