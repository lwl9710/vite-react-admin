import { FC, ReactNode } from "react";
import style from "./index.module.scss";
interface Props {
  top?: number | string
  children?: ReactNode
}

const BasicCard: FC<Props> = (props: Props) => {
  return (
    <div className={style["basic-card"]}>{props.children}</div>
  )
}

export default BasicCard;