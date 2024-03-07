import { Button } from "react-bootstrap";

const BUTTON_DEFAULT_VARIANT = "light";
const BUTTON_DEFAULT_STYLE = { marginBottom: "7px" };
const ICON_DEFAULT_STYLE = { fontSize: "24px" };

export default function SideBarButton({ buttonVariant, icon, onClick }) {
  buttonVariant = buttonVariant || BUTTON_DEFAULT_VARIANT;
  console.log("Button Variant", buttonVariant);
  return (
    <Button
      variant={buttonVariant}
      style={BUTTON_DEFAULT_STYLE}
      onClick={onClick}
    >
      <i className={icon} style={ICON_DEFAULT_STYLE}></i>
    </Button>
  );
}
