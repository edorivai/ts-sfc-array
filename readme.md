# Showcase for TS problem regarding React's stateless functional components

The React team [announced](https://reactjs.org/blog/2017/09/26/react-v16.0.html) that since React 16:

> You can now return an array of elements from a component’s render method.

This works in typescript for regular class components, but I cannot get it to work for stateless functional components.

Steps to reproduce:
1. Clone this repo
2. Run `npm run build`

You'll get the following TS error:

```
index.tsx(8,9): error TS2605: JSX element type 'Element[]' is not a constructor function for JSX elements.
	Property 'render' is missing in type 'Element[]'.
```