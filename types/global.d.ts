// declare module '*.svg' {
//   const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
//   export default content;
// }

declare module '@/images/*.svg' {
  export default string;
}
declare module '@/images/*.png' {
  export default string;
}
declare module '@/images/*.jpg' {
  export default string;
}
declare module '*.webm' {
  const src: string;
  export default src;
}
declare module '*.mp4' {
  const src: string;
  export default src;
}
