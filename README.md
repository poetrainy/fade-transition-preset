# Fade Transition Preset

Preset for fade transition with React + [Chakra UI](https://chakra-ui.com/).

Currently, the following variations are available:

- Scroll
- Page

## Variations

### Scroll

The fade transition is triggered by scrolling and detecting if the content being monitored has entered the viewport.

Currently this is a dependency with [motion](https://motion.dev/).

### Page

The fade transition is triggered when the page is rendered (i.e., on component mount).

## Props

| Name      | Type                                    | Default   | Description                                                                    |
| --------- | --------------------------------------- | --------- | ------------------------------------------------------------------------------ |
| direction | `"x" \| "y" \| "X" \| "Y" \| undefined` | `"Y"`     | Direction of the fade transition.<br>- x: horizontal<br>- y: vertical          |
| offset    | `string \| undefined`                   | `"200px"` | Offset distance from the starting point of the fade transition. (e.g., "24px") |
| duration  | `number \| undefined`                   | `500`     | Duration of the fade transition.<br>Unit: ms                                   |

## Acknowledgements

This preset includes several dependencies. I would like to express my deepest respect and gratitude to all those involved in the development and management of each of them.
