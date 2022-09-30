import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';

const stdlib = loadStdlib();
const startingBalance = stdlib.parseCurrency(100);
const accAlice = await stdlib.newTestAccount(startingBalance);
const accBob = await stdlib.newTestAccount(startingBalance);

const fmt = (x) => stdlib.formatCurrency(x, 4);
const getBalance = async (who) => fmt(await stdlib.balanceOf(who));
const beforeAlice = await getBalance(accAlice);
const beforeBob = await getBalance(accBob);

const ctcAlice = accAlice.contract(backend);
const ctcBob = accBob.contract(backend, ctcAlice.getInfo());

const FORTUNE = ['Unlucky', 'Average', 'Lucky'];
const DECISION = ['Decline', 'Accept'];

const Player = (Who) => ({
  ...stdlib.hasRandom,
  getFortune: async () => {
    const fortune = Math.floor(Math.random() * 3);
    console.log(`${Who} drawn ${FORTUNE[fortune]}`);
    if (Math.random() <= 0.01){
      for (let i = 0; i < 10; i++){
        console.log(`${Who} takes his sweet time...`);
        await stdlib.wait(1);
      }
    }
    return fortune;
  },
  getDecision: async () => {
    const decision = Math.floor(Math.random() * 2);
    console.log(`${Who} chose to ${DECISION[decision]} the fortune`);
    if (Math.random() <= 0.01){
      for (let i = 0; i < 10; i++){
        console.log(`${Who} takes his sweet time...`);
        await stdlib.wait(1);
      }
    }
    return decision;
  },
  informTimeout: () => {
    console.log(`${Who} observed a timeout`);
  }
});

await Promise.all([
  ctcAlice.p.Alice({
    ...Player('Alice'),
    payment: stdlib.parseCurrency(5),
    deadline: 10,
  }),
  ctcBob.p.Bob({
    ...Player('Bob'),
    acceptPayment:  (amt) => {
      console.log(`Bob accepts the payment of ${fmt(amt)}.`);
    },
  }),
]);

const afterAlice = await getBalance(accAlice);
const afterBob = await getBalance(accBob);
console.log(`Alice went from ${beforeAlice} to ${afterAlice}.`);
console.log(`Bob went from ${beforeBob} to ${afterBob}.`);