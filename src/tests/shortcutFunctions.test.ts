import {
  gitlab, github, GitLabSmelter, GitHubSmelter,
} from '../index';

const ShortcutFunctionDescriptor = (shortcut: Function, smelter: Function) => ({
  shortcut,
  smelter,
});

const SHORTCUT_FUNCTIONS = [
  ShortcutFunctionDescriptor(gitlab, GitLabSmelter),
  ShortcutFunctionDescriptor(github, GitHubSmelter),
];

describe('Shortcuts return objects', () => {
  SHORTCUT_FUNCTIONS.forEach((shortcutDescriptor, key) => {
    const { shortcut, smelter } = shortcutDescriptor;
    test(`for shortcut ${key}`, () => {
      expect(shortcut()).toBeInstanceOf(smelter);
    });
  });
});
