// Automatically generated with Reach 0.1.12 (4ca32459)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (4ca32459)';
export const _backendVersion = 24;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1],
      5: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1],
      7: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Address;
  
  
  const v197 = stdlib.protect(ctc0, interact.deadline, 'for Alice\'s interact field deadline');
  const v198 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v198, v197],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:35:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v198, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v202, v203], secs: v205, time: v204, didSend: v31, from: v201 } = txn1;
      
      sim_r.txns.push({
        amt: v202,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v214 = stdlib.safeAdd(v204, v203);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v202, v203], secs: v205, time: v204, didSend: v31, from: v201 } = txn1;
  ;
  const v214 = stdlib.safeAdd(v204, v203);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v214],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v201, v202, v203, v214],
      evt_cnt: 0,
      funcNum: 2,
      lct: v204,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v317, time: v316, didSend: v163, from: v315 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v201,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc2, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v317, time: v316, didSend: v163, from: v315 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:27:29:application',
      fs: ['at ./index.rsh:26:9:application call to [unknown function] (defined at: ./index.rsh:26:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:25:28:function exp)', 'at ./index.rsh:44:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v220, time: v219, didSend: v40, from: v218 } = txn2;
    const v222 = stdlib.add(v202, v202);
    ;
    let v223 = stdlib.checkedBigNumberify('./index.rsh:47:18:decimal', stdlib.UInt_max, '0');
    let v224 = v219;
    let v231 = v222;
    
    let txn3 = txn2;
    while (await (async () => {
      const v235 = stdlib.eq(v223, stdlib.checkedBigNumberify('./index.rsh:49:22:decimal', stdlib.UInt_max, '0'));
      
      return v235;})()) {
      const v242 = stdlib.safeAdd(v224, v203);
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc0],
        timeoutAt: ['time', v242],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v201, v202, v203, v218, v231, v242],
          evt_cnt: 0,
          funcNum: 5,
          lct: v224,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v288, time: v287, didSend: v121, from: v286 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v201,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc2, ctc0, ctc0, ctc2, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v288, time: v287, didSend: v121, from: v286 } = txn5;
        ;
        const v289 = stdlib.addressEq(v201, v286);
        const v290 = stdlib.addressEq(v218, v286);
        const v291 = v289 ? true : v290;
        stdlib.assert(v291, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:56:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:27:29:application',
          fs: ['at ./index.rsh:26:9:application call to [unknown function] (defined at: ./index.rsh:26:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:25:28:function exp)', 'at ./index.rsh:56:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Alice'
          });
        
        return;
        
        }
      else {
        const {data: [v248], secs: v250, time: v249, didSend: v57, from: v247 } = txn4;
        ;
        const v251 = stdlib.addressEq(v218, v247);
        stdlib.assert(v251, {
          at: './index.rsh:55:9:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v258 = stdlib.safeAdd(v249, v203);
        const v262 = stdlib.protect(ctc0, await interact.getDecision(v248), {
          at: './index.rsh:60:53:application',
          fs: ['at ./index.rsh:59:15:application call to [unknown function] (defined at: ./index.rsh:59:19:function exp)'],
          msg: 'getDecision',
          who: 'Alice'
          });
        
        const txn5 = await (ctc.sendrecv({
          args: [v201, v202, v203, v218, v231, v258, v262],
          evt_cnt: 1,
          funcNum: 6,
          lct: v249,
          onlyIf: true,
          out_tys: [ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:62:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v264], secs: v266, time: v265, didSend: v67, from: v263 } = txn5;
            
            ;
            const cv223 = v264;
            const cv224 = v265;
            const cv231 = v231;
            
            await (async () => {
              const v223 = cv223;
              const v224 = cv224;
              const v231 = cv231;
              
              if (await (async () => {
                const v235 = stdlib.eq(v223, stdlib.checkedBigNumberify('./index.rsh:49:22:decimal', stdlib.UInt_max, '0'));
                
                return v235;})()) {
                const v242 = stdlib.safeAdd(v224, v203);
                sim_r.isHalt = false;
                }
              else {
                const v304 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:69:12:decimal', stdlib.UInt_max, '2'), v202);
                sim_r.txns.push({
                  kind: 'from',
                  to: v218,
                  tok: undefined /* Nothing */
                  });
                
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }})();
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v258],
          tys: [ctc2, ctc0, ctc0, ctc2, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v201, v202, v203, v218, v231, v258],
            evt_cnt: 0,
            funcNum: 7,
            lct: v249,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v270, time: v269, didSend: v87, from: v268 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v218,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc2, ctc0, ctc0, ctc2, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v270, time: v269, didSend: v87, from: v268 } = txn6;
          ;
          const v271 = stdlib.addressEq(v201, v268);
          const v272 = stdlib.addressEq(v218, v268);
          const v273 = v271 ? true : v272;
          stdlib.assert(v273, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:63:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Alice'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:27:29:application',
            fs: ['at ./index.rsh:26:9:application call to [unknown function] (defined at: ./index.rsh:26:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:25:28:function exp)', 'at ./index.rsh:63:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Alice'
            });
          
          return;
          
          }
        else {
          const {data: [v264], secs: v266, time: v265, didSend: v67, from: v263 } = txn5;
          ;
          const v267 = stdlib.addressEq(v201, v263);
          stdlib.assert(v267, {
            at: './index.rsh:62:11:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          const cv223 = v264;
          const cv224 = v265;
          const cv231 = v231;
          
          v223 = cv223;
          v224 = cv224;
          v231 = cv231;
          
          txn3 = txn5;
          continue;}
        
        }
      
      }
    const v304 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:69:12:decimal', stdlib.UInt_max, '2'), v202);
    ;
    stdlib.protect(ctc1, await interact.seeDecision(v223), {
      at: './index.rsh:72:25:application',
      fs: ['at ./index.rsh:71:7:application call to [unknown function] (defined at: ./index.rsh:71:25:function exp)'],
      msg: 'seeDecision',
      who: 'Alice'
      });
    
    return;
    }
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v202, v203], secs: v205, time: v204, didSend: v31, from: v201 } = txn1;
  ;
  const v214 = stdlib.safeAdd(v204, v203);
  stdlib.protect(ctc1, await interact.acceptWager(v202), {
    at: './index.rsh:41:25:application',
    fs: ['at ./index.rsh:40:11:application call to [unknown function] (defined at: ./index.rsh:40:15:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v201, v202, v203, v214],
    evt_cnt: 0,
    funcNum: 1,
    lct: v204,
    onlyIf: true,
    out_tys: [],
    pay: [v202, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v220, time: v219, didSend: v40, from: v218 } = txn2;
      
      const v222 = stdlib.add(v202, v202);
      sim_r.txns.push({
        amt: v202,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v223 = stdlib.checkedBigNumberify('./index.rsh:47:18:decimal', stdlib.UInt_max, '0');
      const v224 = v219;
      const v231 = v222;
      
      if (await (async () => {
        const v235 = stdlib.eq(v223, stdlib.checkedBigNumberify('./index.rsh:49:22:decimal', stdlib.UInt_max, '0'));
        
        return v235;})()) {
        const v242 = stdlib.safeAdd(v224, v203);
        sim_r.isHalt = false;
        }
      else {
        const v304 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:69:12:decimal', stdlib.UInt_max, '2'), v202);
        sim_r.txns.push({
          kind: 'from',
          to: v218,
          tok: undefined /* Nothing */
          });
        
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v214],
    tys: [ctc2, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v201, v202, v203, v214],
      evt_cnt: 0,
      funcNum: 2,
      lct: v204,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v317, time: v316, didSend: v163, from: v315 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v201,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc2, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v317, time: v316, didSend: v163, from: v315 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:27:29:application',
      fs: ['at ./index.rsh:26:9:application call to [unknown function] (defined at: ./index.rsh:26:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:25:28:function exp)', 'at ./index.rsh:44:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v220, time: v219, didSend: v40, from: v218 } = txn2;
    const v222 = stdlib.add(v202, v202);
    ;
    let v223 = stdlib.checkedBigNumberify('./index.rsh:47:18:decimal', stdlib.UInt_max, '0');
    let v224 = v219;
    let v231 = v222;
    
    let txn3 = txn2;
    while (await (async () => {
      const v235 = stdlib.eq(v223, stdlib.checkedBigNumberify('./index.rsh:49:22:decimal', stdlib.UInt_max, '0'));
      
      return v235;})()) {
      const v242 = stdlib.safeAdd(v224, v203);
      const v246 = stdlib.protect(ctc0, await interact.getFortune(), {
        at: './index.rsh:53:53:application',
        fs: ['at ./index.rsh:52:13:application call to [unknown function] (defined at: ./index.rsh:52:17:function exp)'],
        msg: 'getFortune',
        who: 'Bob'
        });
      
      const txn4 = await (ctc.sendrecv({
        args: [v201, v202, v203, v218, v231, v242, v246],
        evt_cnt: 1,
        funcNum: 4,
        lct: v224,
        onlyIf: true,
        out_tys: [ctc0],
        pay: [stdlib.checkedBigNumberify('./index.rsh:55:9:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v248], secs: v250, time: v249, didSend: v57, from: v247 } = txn4;
          
          ;
          const v258 = stdlib.safeAdd(v249, v203);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v242],
        tys: [ctc2, ctc0, ctc0, ctc2, ctc0, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v201, v202, v203, v218, v231, v242],
          evt_cnt: 0,
          funcNum: 5,
          lct: v224,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v288, time: v287, didSend: v121, from: v286 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v201,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc2, ctc0, ctc0, ctc2, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v288, time: v287, didSend: v121, from: v286 } = txn5;
        ;
        const v289 = stdlib.addressEq(v201, v286);
        const v290 = stdlib.addressEq(v218, v286);
        const v291 = v289 ? true : v290;
        stdlib.assert(v291, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:56:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Bob'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:27:29:application',
          fs: ['at ./index.rsh:26:9:application call to [unknown function] (defined at: ./index.rsh:26:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:25:28:function exp)', 'at ./index.rsh:56:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Bob'
          });
        
        return;
        
        }
      else {
        const {data: [v248], secs: v250, time: v249, didSend: v57, from: v247 } = txn4;
        ;
        const v251 = stdlib.addressEq(v218, v247);
        stdlib.assert(v251, {
          at: './index.rsh:55:9:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v258 = stdlib.safeAdd(v249, v203);
        const txn5 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 6,
          out_tys: [ctc0],
          timeoutAt: ['time', v258],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v201, v202, v203, v218, v231, v258],
            evt_cnt: 0,
            funcNum: 7,
            lct: v249,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v270, time: v269, didSend: v87, from: v268 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v218,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc2, ctc0, ctc0, ctc2, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v270, time: v269, didSend: v87, from: v268 } = txn6;
          ;
          const v271 = stdlib.addressEq(v201, v268);
          const v272 = stdlib.addressEq(v218, v268);
          const v273 = v271 ? true : v272;
          stdlib.assert(v273, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:63:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:27:29:application',
            fs: ['at ./index.rsh:26:9:application call to [unknown function] (defined at: ./index.rsh:26:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:25:28:function exp)', 'at ./index.rsh:63:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Bob'
            });
          
          return;
          
          }
        else {
          const {data: [v264], secs: v266, time: v265, didSend: v67, from: v263 } = txn5;
          ;
          const v267 = stdlib.addressEq(v201, v263);
          stdlib.assert(v267, {
            at: './index.rsh:62:11:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          const cv223 = v264;
          const cv224 = v265;
          const cv231 = v231;
          
          v223 = cv223;
          v224 = cv224;
          v231 = cv231;
          
          txn3 = txn5;
          continue;}
        
        }
      
      }
    const v304 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:69:12:decimal', stdlib.UInt_max, '2'), v202);
    ;
    stdlib.protect(ctc1, await interact.seeDecision(v223), {
      at: './index.rsh:72:25:application',
      fs: ['at ./index.rsh:71:7:application call to [unknown function] (defined at: ./index.rsh:71:25:function exp)'],
      msg: 'seeDecision',
      who: 'Bob'
      });
    
    return;
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `ByALAAEHBVhQIAIoCDAmAgEAACI1ADEYQQNaKWRJIls1ASEJWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0mBBAxAAY1JgQYMQACwSSQMQABSJBJEJDQBEkQ0BEkiEkw0AhIRRChkSTUDVzAgNf+ABOIbs6mwMgY0AyEEWw9ENANXACAxABI0/zEAEhFEsSKyATQDIQVbsggjshA0/7IHs0ICfUgkNAESRDQESSISTDQCEhFEKGRJNQNXACA1/0k1BRc1/oAEcO3vejT+FlCwMgY0AyEEWwxENP8xABJENP80AyEGWzQDIQhbNANXMCA0/jIGNAMhBVtCAcxJJQxAAFBIJTQBEkQ0BEkiEkw0AhIRRChkSTUDVwAgNf+ABMyZklywMgY0AyEEWw9ENP8xABI0A1cwIDEAEhFEsSKyATQDIQVbsggjshA0/7IHs0IBz0glNAESRDQESSISTDQCEhFEKGRJNQNJSklXACA1/yEGWzX+IQhbNf1XMCA1/CEFWzX7STUFFzX6gAT5i694NPoWULAyBjQDIQRbDEQ0/DEAEkQyBjT9CDX5NP80/hZQNP0WUDT8UDT7FlA0+RZQKEsBVwBgZ0gkNQEyBjUCQgFqSSMMQACQSSEHDEAAQSEHEkQjNAESRDQESSISTDQCEhFEKGQ1A4AEQbFATbAyBjQDIQpbD0SxIrIBNAMhBluyCCOyEDQDVwAgsgezQgEBSCM0ARJENARJIhJMNAISEUQoZEk1AyEGWzX/gASai5F0sDIGNAMhClsMRDT/iAE+NANXACA0/zQDIQhbMQAiMgY0/0kIQgBgSIGgjQaIAR4iNAESRDQESSISTDQCEhFESTUFSSJbNf8hCVs1/oAErNEfwzT/FlA0/hZQsDT/iADtMgY0/gg1/TEANP8WUDT+FlA0/RZQKEsBVwA4Z0gjNQEyBjUCQgB0Nf81/jX9Nfw1+zX6Nfk0/SISQQAuNP40+wg1+DT5NPoWUDT7FlA0/FA0/xZQNPgWUChLAVcAYGdIJTUBMgY1AkIAMbEisgEhBzT6C7III7IQNPyyB7NCAAAxGSUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQhBzE1EkQiMTYSRCIxNxJEIjUBIjUCQv+uNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 96,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v202",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v203",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v202",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v203",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v248",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v264",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v248",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v264",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200160b3803806200160b8339810160408190526200002691620002a9565b6000808055436003556040805160208082018352928152815133815284518185015284840151805182850152909301516060840152905190917fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f95919081900360800190a16020820151516200009f90341460076200014a565b620000b9438360200151602001516200017560201b60201c565b81526040805160808082018352600060208084018281528486018381526060808701858152338089528b860180515186525186015184528a5182526001968790554390965588518086019690965292518589015290519084015251828401528451808303909301835260a090910190935280519192620001409260029290910190620001cc565b505050506200036d565b81620001715760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b60008262000184838262000309565b9150811015620001c65760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b604482015260640162000168565b92915050565b828054620001da9062000330565b90600052602060002090601f016020900481019282620001fe576000855562000249565b82601f106200021957805160ff191683800117855562000249565b8280016001018555821562000249579182015b82811115620002495782518255916020019190600101906200022c565b50620002579291506200025b565b5090565b5b808211156200025757600081556001016200025c565b604080519081016001600160401b0381118282101715620002a357634e487b7160e01b600052604160045260246000fd5b60405290565b60008183036060811215620002bd57600080fd5b620002c762000272565b835181526040601f1983011215620002de57600080fd5b620002e862000272565b60208581015182526040909501518582015293810193909352509092915050565b600082198211156200032b57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200034557607f821691505b602082108114156200036757634e487b7160e01b600052602260045260246000fd5b50919050565b61128e806200037d6000396000f3fe6080604052600436106100845760003560e01c80638e314769116100565780638e314769146100ec578063980b6eac146100ff578063a209ad4e14610112578063ab53f2c614610125578063bf2c5b241461014857005b80631e93b0f11461008d5780632c10a159146100b15780637eea518c146100c457806383230757146100d757005b3661008b57005b005b34801561009957600080fd5b506003545b6040519081526020015b60405180910390f35b61008b6100bf366004610f3e565b61015b565b61008b6100d2366004610f3e565b6102ea565b3480156100e357600080fd5b5060015461009e565b61008b6100fa366004610f3e565b610468565b61008b61010d366004610f3e565b6105ff565b61008b610120366004610f3e565b6107a3565b34801561013157600080fd5b5061013a6109b2565b6040516100a8929190610f61565b61008b610156366004610f3e565b610a4f565b61016b6001600054146009610bea565b6101858135158061017e57506001548235145b600a610bea565b60008080556002805461019790610fbe565b80601f01602080910402602001604051908101604052809291908181526020018280546101c390610fbe565b80156102105780601f106101e557610100808354040283529160200191610210565b820191906000526020600020905b8154815290600101906020018083116101f357829003601f168201915b5050505050806020019051810190610228919061100f565b905061023b81606001514310600b610bea565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338360405161026c929190611088565b60405180910390a1610285816020015134146008610bea565b61028d610df7565b815181516001600160a01b03909116905260208083018051835183015260408085015184519091015282513360609091015281830180516000905251439201919091525180016020820151604001526102e581610c10565b505050565b6102fa600160005414600d610bea565b6103148135158061030d57506001548235145b600e610bea565b60008080556002805461032690610fbe565b80601f016020809104026020016040519081016040528092919081815260200182805461035290610fbe565b801561039f5780601f106103745761010080835404028352916020019161039f565b820191906000526020600020905b81548152906001019060200180831161038257829003601f168201915b50505050508060200190518101906103b7919061100f565b90506103cb8160600151431015600f610bea565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d95033836040516103fc929190611088565b60405180910390a16104103415600c610bea565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561044d573d6000803e3d6000fd5b506000808055600181905561046490600290610e50565b5050565b6104786005600054146017610bea565b6104928135158061048b57506001548235145b6018610bea565b6000808055600280546104a490610fbe565b80601f01602080910402602001604051908101604052809291908181526020018280546104d090610fbe565b801561051d5780601f106104f25761010080835404028352916020019161051d565b820191906000526020600020905b81548152906001019060200180831161050057829003601f168201915b50505050508060200190518101906105359190611159565b90506105498160a001514310156019610bea565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d338360405161057a929190611088565b60405180910390a161058e34156015610bea565b80516105c2906001600160a01b031633146105b85760608201516001600160a01b031633146105bb565b60015b6016610bea565b805160808201516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561044d573d6000803e3d6000fd5b61060f600760005414601c610bea565b6106298135158061062257506001548235145b601d610bea565b60008080556002805461063b90610fbe565b80601f016020809104026020016040519081016040528092919081815260200182805461066790610fbe565b80156106b45780601f10610689576101008083540402835291602001916106b4565b820191906000526020600020905b81548152906001019060200180831161069757829003601f168201915b50505050508060200190518101906106cc9190611159565b90506106df8160a001514310601e610bea565b7fa2ddd0bc62239facbd79cdab1df75ee0cb72af9166d4371e62852a98cb4ca19c3383604051610710929190611175565b60405180910390a16107243415601a610bea565b805161073c906001600160a01b03163314601b610bea565b610744610df7565b815181516001600160a01b0391821690526020808401518351820152604080850151845182015260608086015185519416930192909252808301805186830135905280514392019190915260808401519051909101526102e581610c10565b6107b36005600054146012610bea565b6107cd813515806107c657506001548235145b6013610bea565b6000808055600280546107df90610fbe565b80601f016020809104026020016040519081016040528092919081815260200182805461080b90610fbe565b80156108585780601f1061082d57610100808354040283529160200191610858565b820191906000526020600020905b81548152906001019060200180831161083b57829003601f168201915b50505050508060200190518101906108709190611159565b90506108886040518060200160405280600081525090565b6108998260a0015143106014610bea565b7f117ff0fc7909f539043dcba1a015e3c49852b86bcb1c87a6cfa653f771ccbdc033846040516108ca929190611175565b60405180910390a16108de34156010610bea565b60608201516108f9906001600160a01b031633146011610bea565b610907438360400151610d45565b81526040805160c081018252600080825260208083018281528385018381526060808601858152608080880187815260a089018881528c516001600160a01b039081168b528d8901519097528c8b0151909552928b015190941690529188015190915285519052600790915543600155915190916109879183910161119c565b604051602081830303815290604052600290805190602001906109ab929190610e8d565b5050505050565b6000606060005460028080546109c790610fbe565b80601f01602080910402602001604051908101604052809291908181526020018280546109f390610fbe565b8015610a405780601f10610a1557610100808354040283529160200191610a40565b820191906000526020600020905b815481529060010190602001808311610a2357829003601f168201915b50505050509050915091509091565b610a5f6007600054146021610bea565b610a7981351580610a7257506001548235145b6022610bea565b600080805560028054610a8b90610fbe565b80601f0160208091040260200160405190810160405280929190818152602001828054610ab790610fbe565b8015610b045780601f10610ad957610100808354040283529160200191610b04565b820191906000526020600020905b815481529060010190602001808311610ae757829003601f168201915b5050505050806020019051810190610b1c9190611159565b9050610b308160a001514310156023610bea565b7f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb3383604051610b61929190611088565b60405180910390a1610b753415601f610bea565b8051610ba9906001600160a01b03163314610b9f5760608201516001600160a01b03163314610ba2565b60015b6020610bea565b80606001516001600160a01b03166108fc82608001519081150290604051600060405180830381858888f1935050505015801561044d573d6000803e3d6000fd5b816104645760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b604080516020810190915260008152602082015151610cf557610c43826020015160200151836000015160400151610d45565b81526040805160c0810182526000808252602080830182815283850183815260608086018581526080870186815260a088018781528b51516001600160a01b039081168a528c518801519096528b518a01519094528a5190920151909316909252878301518601519091528551905260059091554360015591519091610ccb9183910161119c565b60405160208183030381529060405260029080519060200190610cef929190610e8d565b50505050565b8160000151606001516001600160a01b03166108fc610d1d6002856000015160200151610d98565b6040518115909202916000818181858888f1935050505015801561044d573d6000803e3d6000fd5b600082610d5283826111ff565b9150811015610d925760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401610c07565b92915050565b6000811580610dbc57508282610dae8183611217565b9250610dba9083611236565b145b610d925760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b6044820152606401610c07565b6040805160c0810182526000918101828152606082018390526080820183905260a08201929092529081908152602001610e4b60405180606001604052806000815260200160008152602001600081525090565b905290565b508054610e5c90610fbe565b6000825580601f10610e6c575050565b601f016020900490600052602060002090810190610e8a9190610f11565b50565b828054610e9990610fbe565b90600052602060002090601f016020900481019282610ebb5760008555610f01565b82601f10610ed457805160ff1916838001178555610f01565b82800160010185558215610f01579182015b82811115610f01578251825591602001919060010190610ee6565b50610f0d929150610f11565b5090565b5b80821115610f0d5760008155600101610f12565b600060408284031215610f3857600080fd5b50919050565b600060408284031215610f5057600080fd5b610f5a8383610f26565b9392505050565b82815260006020604081840152835180604085015260005b81811015610f9557858101830151858201606001528201610f79565b81811115610fa7576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c90821680610fd257607f821691505b60208210811415610f3857634e487b7160e01b600052602260045260246000fd5b80516001600160a01b038116811461100a57600080fd5b919050565b60006080828403121561102157600080fd5b6040516080810181811067ffffffffffffffff8211171561105257634e487b7160e01b600052604160045260246000fd5b60405261105e83610ff3565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b6001600160a01b0383168152813560208083019190915260608201908301358015158082146110b657600080fd5b80604085015250509392505050565b600060c082840312156110d757600080fd5b60405160c0810181811067ffffffffffffffff8211171561110857634e487b7160e01b600052604160045260246000fd5b60405290508061111783610ff3565b8152602083015160208201526040830151604082015261113960608401610ff3565b60608201526080830151608082015260a083015160a08201525092915050565b600060c0828403121561116b57600080fd5b610f5a83836110c5565b6001600160a01b038316815260608101610f5a602083018480358252602090810135910152565b81516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080808301519082015260a0808301519082015260c08101610d92565b634e487b7160e01b600052601160045260246000fd5b60008219821115611212576112126111e9565b500190565b6000816000190483118215151615611231576112316111e9565b500290565b60008261125357634e487b7160e01b600052601260045260246000fd5b50049056fea2646970667358221220632d49658e3757eb42ce59c45691d2b26eefa19b3f852f3e021dc145ae8efc0964736f6c634300080c0033`,
  BytecodeLen: 5643,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:37:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:44:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:75:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:50:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:56:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:57:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:63:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
