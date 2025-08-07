import { EVENTS } from "./const";

export function navigate(href) {
  window.history.pushState({}, "", href);
  // Crear un evento para visar q cambia la url
  const navigationEvent = new Event(EVENTS.PUSHSTATE);
  window.dispatchEvent(navigationEvent);
}

export function Link({ target, to, ...props }) {
  const handleClick = (event) => {
    const isMainEvent = event.button === 0; //left clic
    const isModifiEvent =
      event.metaKey || event.altKey || event.ctrlKey || event.shiftKey;
    const isManageableEvent = target === undefined || target === "_self";

    if (isMainEvent && isManageableEvent && !isModifiEvent) {
      event.preventDefault();
      navigate(to);
    }
  };
  return <a onClick={handleClick} href={to} target={target} {...props} />;
}
