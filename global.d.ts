// Allow importing plain CSS files in TS/TSX modules (global CSS and CSS modules)
// This prevents TypeScript errors like: "Cannot find module or type declarations for side-effect import of './globals.css'."

declare module "*.css" {
  const content: { [className: string]: string } | string;
  export default content;
}

declare module "*.module.css" {
  const classes: { [className: string]: string };
  export default classes;
}

declare module "*.scss";
declare module "*.module.scss";
