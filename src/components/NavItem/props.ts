import { AProps, DivProps } from "react-html-props";
import { IconType } from "react-icons";
interface Props extends DivProps {
  icon: IconType;
  label: string;
  to: string;
  badge?: string;
}

export default Props;
