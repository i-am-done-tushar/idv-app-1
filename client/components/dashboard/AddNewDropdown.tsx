import React from 'react';

interface AddNewDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  position?: { x: number; y: number };
}

interface DropdownItemProps {
  label: string;
  onClick?: () => void;
}

function DropdownItem({ label, onClick }: DropdownItemProps) {
  return (
    <div 
      className="flex items-center h-8 px-2 rounded bg-white hover:bg-gray-50 transition-colors cursor-pointer"
      onClick={onClick}
    >
      <span className="text-sm font-medium text-secondary-text">
        {label}
      </span>
    </div>
  );
}

export function AddNewDropdown({ isOpen, onClose, position }: AddNewDropdownProps) {
  if (!isOpen) return null;

  const handleAction = (action: string) => {
    console.log(`${action} action triggered`);
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 z-40"
        onClick={onClose}
      />
      
      {/* Dropdown */}
      <div 
        className="fixed z-50 w-[230px] p-2 bg-white rounded shadow-lg"
        style={{
          left: position?.x || '50%',
          top: position?.y || '50%',
          transform: position ? 'none' : 'translate(-50%, -50%)',
          boxShadow: '0 6px 20px 0 rgba(0, 0, 0, 0.20)'
        }}
      >
        <div className="flex flex-col gap-px">
          <DropdownItem
            label="Create New Template"
            onClick={() => handleAction('Create New Template')}
          />
          
          <DropdownItem
            label="Choose Template"
            onClick={() => handleAction('Choose Template')}
          />
        </div>
      </div>
    </>
  );
}
