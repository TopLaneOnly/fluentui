import * as React from 'react';
import Screener, { Steps } from 'screener-storybook/src/screener';
import { storiesOf } from '@storybook/react';
import { Link, LinkProps } from '@fluentui/react-link';

const AnchorLink = (props: LinkProps & { as?: 'a' }) => <Link {...props} href="https://www.bing.com" />;
const ButtonLink = (props: LinkProps) => <Link {...props} />;

storiesOf('Link Converged - Rendered as anchor', module)
  .addDecorator(story => (
    <Screener
      steps={new Steps()
        .snapshot('default', { cropTo: '.testWrapper' })
        .hover('a')
        .snapshot('hover', { cropTo: '.testWrapper' })
        .mouseDown('a')
        .snapshot('pressed', { cropTo: '.testWrapper' })
        .mouseUp('a')
        .end()}
    >
      {story()}
    </Screener>
  ))
  .addStory('Stand-alone', () => <AnchorLink>Stand-alone link</AnchorLink>, {
    includeRtl: true,
    includeHighContrast: true,
    includeDarkMode: true,
  })
  .addStory('Stand-alone Disabled', () => <AnchorLink disabled>Stand-alone disabled link</AnchorLink>)
  .addStory(
    'Stand-alone Disabled Focusable',
    () => (
      <AnchorLink disabled disabledFocusable>
        Stand-alone disabled focusable link
      </AnchorLink>
    ),
    { includeHighContrast: true, includeDarkMode: true },
  )
  .addStory(
    'Inline',
    () => (
      <div>
        This is <AnchorLink inline>a link</AnchorLink> used alongside other text content.
      </div>
    ),
    { includeRtl: true },
  )
  .addStory('Inline Disabled', () => (
    <div>
      This is{' '}
      <AnchorLink inline disabled>
        a disabled link
      </AnchorLink>{' '}
      used alongside other text content.
    </div>
  ))
  .addStory('Inline Disabled Focusable', () => (
    <div>
      This is{' '}
      <AnchorLink inline disabled disabledFocusable>
        a disabled focusable link
      </AnchorLink>{' '}
      used alongside other text content.
    </div>
  ));

storiesOf('Link Converged - Rendered as button', module)
  .addDecorator(story => (
    <Screener
      steps={new Steps()
        .snapshot('default', { cropTo: '.testWrapper' })
        .hover('button')
        .snapshot('hover', { cropTo: '.testWrapper' })
        .mouseDown('button')
        .snapshot('pressed', { cropTo: '.testWrapper' })
        .mouseUp('button')
        .end()}
    >
      {story()}
    </Screener>
  ))
  .addStory('Stand-alone', () => <ButtonLink>Stand-alone link</ButtonLink>, { includeRtl: true })
  .addStory('Stand-alone Disabled', () => <ButtonLink disabled>Stand-alone disabled link</ButtonLink>)
  .addStory('Stand-alone Disabled Focusable', () => (
    <ButtonLink disabled disabledFocusable>
      Stand-alone disabled focusable link
    </ButtonLink>
  ))
  .addStory(
    'Inline',
    () => (
      <div>
        This is <ButtonLink inline>a link</ButtonLink> used alongside other text content.
      </div>
    ),
    { includeRtl: true },
  )
  .addStory('Inline Disabled', () => (
    <div>
      This is{' '}
      <ButtonLink inline disabled>
        a disabled link
      </ButtonLink>{' '}
      used alongside other text content.
    </div>
  ))
  .addStory('Inline Disabled Focusable', () => (
    <div>
      This is{' '}
      <ButtonLink inline disabled disabledFocusable>
        a disabled focusable link
      </ButtonLink>{' '}
      used alongside other text content.
    </div>
  ));
