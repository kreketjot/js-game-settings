import Settings from '../Settings';

let settings;
beforeEach(() => { settings = new Settings(); });

test.each([
  ['music', 'trance'],
  ['theme', 'dark'],
  ['difficulty', 'easy'],
])('default settings for %s', (prop, expected) => expect(settings.getSettings(prop)).toBe(expected));

test.each([
  ['music', 'rock'],
  ['theme', 'dark'],
  ['difficulty', 'hard'],
])('change settings for %s', (prop, value) => {
  settings.setSettings(prop, value);
  expect(settings.getSettings(prop)).toBe(value);
});

test('getting wrong parameter', () => expect(() => settings.getSettings('wrong P')).toThrow('Unknown settings parameter'));

test.each([
  ['music', 'punk', 'Unknown settings value for '],
  ['dif', 'hey', 'Unknown settings parameter'],
])('setting wrong settings', (key, value, error) => expect(() => settings.setSettings(key, value)).toThrow(error));
