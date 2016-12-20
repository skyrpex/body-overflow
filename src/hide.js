import getScrollbarWidth from 'scrollbar-width';
import hasScrollbar from 'has-scrollbar';

export default () => {
  const { body } = document;

  if (hasScrollbar(body)) {
    body.style.paddingRight = `${getScrollbarWidth()}px`;
  }
  body.style.overflow = 'hidden';
};
