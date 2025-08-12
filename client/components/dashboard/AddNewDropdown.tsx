import React from "react";

interface AddNewDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateNewTemplate?: () => void;
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
      <span className="text-sm font-medium text-secondary-text">{label}</span>
    </div>
  );
}

export function AddNewDropdown({ isOpen, onClose }: AddNewDropdownProps) {
  const [isNameTemplateModalOpen, setIsNameTemplateModalOpen] = useState(false);

  if (!isOpen) return null;

  const handleCreateNewTemplate = () => {
    onClose(); // Close the dropdown first
    setIsNameTemplateModalOpen(true);
  };

  const handleAction = (action: string) => {
    console.log(`${action} action triggered`);
    onClose();
  };

  const handleSaveTemplate = (templateName: string) => {
    console.log(`Template created with name: ${templateName}`);
    // Here you would typically make an API call to create the template
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-20 z-40"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="fixed z-50 w-[230px] p-2 bg-white rounded shadow-lg"
        style={{
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          boxShadow: "0 6px 20px 0 rgba(0, 0, 0, 0.20)",
        }}
      >
        <div className="flex flex-col gap-px">
          <DropdownItem
            label="Create New Template"
            onClick={handleCreateNewTemplate}
          />

          <DropdownItem
            label="Choose Template"
            onClick={() => handleAction("Choose Template")}
          />
        </div>
      </div>

      <NameTemplateModal
        isOpen={isNameTemplateModalOpen}
        onClose={() => setIsNameTemplateModalOpen(false)}
        onSave={handleSaveTemplate}
      />
    </>
  );
}
