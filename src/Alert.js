import { useState } from 'react';
export function Alert({ type, heading, children, closable, onClose}) {
const [visible, setVisible] = useState(true);
 if (!visible) {
     return null;
 }
 const handleCloseClick = () => {
    setVisible(false);
    if (onClose) {
        onClose();
    }
}
 return (
 <div>
 <div>
 <span>{heading}</span>
 </div>
 {closable && (
 <button aria-label="Close" onClick={handleCloseClick}>
 <span role="img" aria-label="Close">
 ❌
 </span>
 </button>
 )}
 <div>{children}</div>
 </div>
 );
}