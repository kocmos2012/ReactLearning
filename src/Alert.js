import { useState } from 'react';
export function Alert({ type, heading, children, closable }) {
const [visible, setVisible] = useState(true);
 return (
 <div>
 <div>
 ...
 <span>{heading}</span>
 </div>
 {closable && (
 <button aria-label="Close">
 <span role="img" aria-label="Close">
 ❌
 </span>
 </button>
 )}
 <div>{children}</div>
 </div>
 );
}