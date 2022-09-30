import React from 'react';

const exports = {};

// Player views must be extended.
// It does not have its own Wrapper view.

exports.GetFortune = class extends React.Component {
  render() {
    const {parent, playable, fortune} = this.props;
    return (
      <div>
        {fortune ? 'Fortune Rejected! Pick again.' : ''}
        <br />
        {!playable ? 'Please wait...' : ''}
        <br />
        <button
          disabled={!playable}
          onClick={() => parent.revealFortune('UNLUCKY')}
        >UNLUCKY</button>
        <button
          disabled={!playable}
          onClick={() => parent.revealFortune('AVERAGE')}
        >AVERAGE</button>
        <button
          disabled={!playable}
          onClick={() => parent.revealFortune('LUCKY')}
        >LUCKY</button>
      </div>
    );
  }
}

exports.GetDecision = class extends React.Component {
  render() {
    const {parent, playable, fortune2} = this.props;
    return (
      <div>
        {!playable ? 'Please wait...' : ''}
        <br />
        Do you accept the fortune {fortune2 || 'Unknown'}?
        <br />
        <button
          disabled={!playable}
          onClick={() => parent.revealDecision('ACCEPT')}
        >ACCEPT</button>
        <button
          disabled={!playable}
          onClick={() => parent.revealDecision('REJECT')}
        >REJECT</button>
      </div>
    );
  }
}

exports.WaitingForResults = class extends React.Component {
  render() {
    return (
      <div>
        Waiting for results...
      </div>
    );
  }
}

exports.Done = class extends React.Component {
  render() {
    const {decision} = this.props;
    return (
      <div>
        Thank you for playing. The fortune was:
        <br />{decision +'ED' || 'Unknown'}
      </div>
    );
  }
}

exports.Timeout = class extends React.Component {
  render() {
    return (
      <div>
        There's been a timeout. (Someone took too long.)
      </div>
    );
  }
}

export default exports;