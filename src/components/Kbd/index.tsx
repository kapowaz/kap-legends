import { Fragment } from 'react';
import platform from 'platform-detect';
import styles from './Kbd.module.css';

const COMMAND_SYMBOL = '⌘';
const META_SYMBOL = 'Ctrl';
const THIN_SPACE = ' ';

type Modifier = 'meta' | 'control' | 'shift' | 'alt' | 'option' | 'function';

export interface IKeyboardShortcut {
  mod?: Array<Modifier> | Modifier;
  children: string;
}

export const Kbd = ({ mod, children }: IKeyboardShortcut) => {
  const SYMBOLS: Record<Modifier, string> = {
    meta: platform.ios || platform.macos ? COMMAND_SYMBOL : META_SYMBOL,
    control: platform.ios || platform.macos ? '⌃' : 'Ctrl',
    option: platform.ios || platform.macos ? '⌥' : 'Alt',
    alt: 'Alt',
    shift: '⇧',
    function: 'Fn',
  };

  const modifierArray = typeof mod === 'string' ? [mod] : mod;

  return (
    <>
      {mod &&
        modifierArray.map((modifier) => (
          <Fragment key={modifier}>
            <kbd className={styles.keyboardShortcut}>{SYMBOLS[modifier]}</kbd>
            {THIN_SPACE}
          </Fragment>
        ))}
      <kbd className={styles.keyboardShortcut}>{children}</kbd>
    </>
  );
};
