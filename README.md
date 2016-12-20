# Body Overflow

Toggle body overflow keeping scrollbar's width in mind.

Will use inline styles to set the body element overflow to hidden, and will also compute the scrollbar's width (which will be added as right padding).

## Installation

`npm install @skyrpex/body-overflow`

## Usage

### Straight forward

```js
import hideBodyOverflow from '@skyrpex/body-overflow';

// First, wait for the body to be available...

// Hide body overflow.
hideBodyOverflow(true);

// Restore body overflow.
hideBodyOverflow(false);
```

### Multiple consumers

This package is intended to be used by multiple sources that want to ensure that there is no body overflow. Let me show an example:

*Boths packages are run at the same time.*

```js
// package1.js
import { generate as generateBodyOverflowService } from '@skyrpex/body-overflow';

// This acts as the previous examples' method.
const hideBodyOverflow = generateBodyOverflowService();

// Hide body overflow.
hideBodyOverflow(true);

// Restore body overflow in 2 seconds.
setTimeout(() => hideBodyOverflow(false), 2 * 1000);
```

```js
// package2.js
import { generate as generateBodyOverflowService } from '@skyrpex/body-overflow';

// This acts as the previous examples' method.
const hideBodyOverflow = generateBodyOverflowService();

// Hide body overflow.
hideBodyOverflow(true);

// Restore body overflow in 10 seconds.
setTimeout(() => hideBodyOverflow(false), 10 * 1000);
```

Both packages want to remove body overflow during different time lapses. @skyrpex/body-overflow will keep hiding body overflow's until no one needs it to be hidden (this also counts for the default exported method).
