export default class Settings {
  constructor() {
    this.settings = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);
    this.available = {
      theme: new Set(['dark', 'light', 'gray']),
      music: new Set(['trance', 'pop', 'rock', 'chillout', 'off']),
      difficulty: new Set(['easy', 'normal', 'hard', 'nightmare']),
    };
  }

  getSettings(key) {
    if (!(key in this.available)) {
      throw new Error('Unknown settings parameter');
    }
    return this.settings.get(key);
  }

  setSettings(key, value) {
    if (!(key in this.available)) {
      throw new Error('Unknown settings parameter');
    }
    if (!this.available[key].has(value)) {
      throw new Error(`Unknown settings value for ${key}`);
    }
    this.settings.set(key, value);
  }
}
