/*
    We must declare a module for each atypical file type imported in typescript code, or the
    compiler will complain.
    There's a nice explanation and discussion here: https://github.com/Microsoft/TypeScript-React-Starter/issues/12
*/



//images

declare module "*.bmp";
declare module "*.gif";
declare module "*.jpeg";
declare module "*.jpg";
declare module "*.png";
declare module "*.svg";

