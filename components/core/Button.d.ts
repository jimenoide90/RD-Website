export interface ButtonProps{
  /** @default 'primary' */variant?:'primary'|'text';href?:string;onClick?:()=>void;children:React.ReactNode;
}
export function Button(props:ButtonProps):JSX.Element;
