import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function ModalWindow({ isOpen, onClose, children }: { isOpen: boolean, onClose: () => void, children: React.ReactNode }) {
    const dialogRef = useRef<HTMLDivElement>(null);
    // Escape key handler to close the modal\
    useEffect(() => {
        if (!isOpen) return;

        const handleEscape = (e : KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen, onClose]);

    // Block scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    // Focus on the dialog when it opens
    useEffect(() => {
        if (isOpen && dialogRef.current) {
            dialogRef.current.focus();
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return createPortal(
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" 
                onClick={onClose}>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-lg w-full" 
                    ref={dialogRef}
                    tabIndex={-1}
                    onClick={e => e.stopPropagation()}>
                <button
                    className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
                    onClick={onClose}
                    aria-label="Close modal">
                    &times;
                </button>
                {children}

            </div>
        </div>,
        document.body
    );
}