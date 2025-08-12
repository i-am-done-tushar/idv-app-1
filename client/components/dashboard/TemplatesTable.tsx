import React from 'react';
import { MoreHorizontal } from 'lucide-react';

interface Template {
  id: number;
  name: string;
  invitees: Array<{ initials: string; color: string }>;
  createdDate: string;
  createdBy: string;
  status: 'Completed' | 'In Progress';
  lastUpdated: string;
}

const templates: Template[] = [
  {
    id: 1,
    name: "Template Name",
    invitees: [
      { initials: "OP", color: "avatar-1" },
      { initials: "VS", color: "avatar-2" },
      { initials: "+5", color: "grey-bg" }
    ],
    createdDate: "14-07-2024",
    createdBy: "Patricia A. Ramirez",
    status: "Completed",
    lastUpdated: "14-07-2024"
  },
  {
    id: 2,
    name: "New Template",
    invitees: [
      { initials: "OP", color: "avatar-3" },
      { initials: "VS", color: "avatar-4" },
      { initials: "+4", color: "grey-bg" }
    ],
    createdDate: "22-06-2024",
    createdBy: "Deloris L. Hall",
    status: "Completed",
    lastUpdated: "22-06-2024"
  },
  {
    id: 3,
    name: "Template_Newname",
    invitees: [
      { initials: "OP", color: "avatar-8" },
      { initials: "VS", color: "avatar-6" },
      { initials: "+2", color: "grey-bg" }
    ],
    createdDate: "18-06-2024",
    createdBy: "Carl H. Smith",
    status: "In Progress",
    lastUpdated: "18-06-2024"
  },
  {
    id: 4,
    name: "Template Name 8",
    invitees: [
      { initials: "OP", color: "avatar-1" },
      { initials: "VS", color: "avatar-2" },
      { initials: "+1", color: "grey-bg" }
    ],
    createdDate: "04-05-2024",
    createdBy: "Ryan M. Johnson",
    status: "Completed",
    lastUpdated: "29-05-2024"
  },
  {
    id: 5,
    name: "Template Name 2",
    invitees: [
      { initials: "OP", color: "avatar-6" },
      { initials: "VS", color: "avatar-3" },
      { initials: "+4", color: "grey-bg" }
    ],
    createdDate: "14-07-2024",
    createdBy: "Fannie W. Johnson",
    status: "Completed",
    lastUpdated: "29-05-2024"
  },
  {
    id: 6,
    name: "Template_New1name",
    invitees: [
      { initials: "OP", color: "avatar-6" },
      { initials: "VS", color: "avatar-3" },
      { initials: "+4", color: "grey-bg" }
    ],
    createdDate: "14-07-2024",
    createdBy: "Carl H. Smith",
    status: "Completed",
    lastUpdated: "29-05-2024"
  }
];

// Add more rows to match the design
for (let i = 7; i <= 13; i++) {
  templates.push({
    id: i,
    name: "Template Name 2",
    invitees: [
      { initials: "OP", color: i % 2 === 0 ? "avatar-3" : "avatar-1" },
      { initials: "VS", color: i % 2 === 0 ? "avatar-4" : "avatar-2" },
      { initials: i === 13 ? "+6" : "+1", color: "grey-bg" }
    ],
    createdDate: "14-07-2024",
    createdBy: i % 2 === 0 ? "Patricia A. Ramirez" : "Ryan M. Johnson",
    status: i % 3 === 0 ? "In Progress" : "Completed",
    lastUpdated: "29-05-2024"
  });
}

function StatusBadge({ status }: { status: 'Completed' | 'In Progress' }) {
  const isCompleted = status === 'Completed';
  return (
    <div className={`flex items-center justify-center h-6 px-2 rounded ${
      isCompleted ? 'bg-completed-bg' : 'bg-warning-bg'
    }`}>
      <span className={`text-sm font-normal leading-5 ${
        isCompleted ? 'text-primary-text' : 'text-warning-text'
      }`}>
        {status}
      </span>
    </div>
  );
}

function AvatarGroup({ invitees }: { invitees: Array<{ initials: string; color: string }> }) {
  return (
    <div className="flex items-center -space-x-1.5">
      {invitees.map((invitee, index) => (
        <div
          key={index}
          className={`flex items-center justify-center w-7 h-7 rounded-full border border-white text-xs font-medium text-secondary-text bg-${invitee.color}`}
        >
          {invitee.initials}
        </div>
      ))}
    </div>
  );
}

export function TemplatesTable() {
  return (
    <div className="border border-border-color rounded">
      <div className="flex">
        {/* Fixed Name Column */}
        <div className="flex flex-col w-[229px]">
          <div className="flex items-center h-[38px] px-2 bg-table-header-bg">
            <span className="text-sm font-medium text-primary-text">Name</span>
          </div>
          {templates.map((template, index) => (
            <div key={template.id} className="flex items-center h-[38px] px-2 pr-6 border-t border-border-color bg-white">
              <span className="text-sm font-normal leading-5 text-secondary-text">
                {template.name}
              </span>
            </div>
          ))}
        </div>
        
        {/* Scrollable Columns */}
        <div className="flex-1 flex flex-col">
          <div className="flex">
            {/* Invitees Column */}
            <div className="flex-1 flex flex-col">
              <div className="flex items-center h-[38px] px-2 bg-table-header-bg">
                <span className="text-sm font-medium text-primary-text">Invitees</span>
              </div>
              {templates.map((template) => (
                <div key={template.id} className="flex items-center h-[38px] px-2 pr-6 border-t border-border-color bg-white">
                  <AvatarGroup invitees={template.invitees} />
                </div>
              ))}
            </div>
            
            {/* Created Date Column */}
            <div className="flex-1 flex flex-col">
              <div className="flex items-center h-[38px] px-2 bg-table-header-bg">
                <span className="text-sm font-medium text-primary-text">Created Date</span>
              </div>
              {templates.map((template) => (
                <div key={template.id} className="flex items-center h-[38px] px-2 pr-6 border-t border-border-color bg-white">
                  <span className="text-sm font-normal leading-5 text-secondary-text">
                    {template.createdDate}
                  </span>
                </div>
              ))}
            </div>
            
            {/* Created By Column */}
            <div className="flex-1 flex flex-col">
              <div className="flex items-center h-[38px] px-2 bg-table-header-bg">
                <span className="text-sm font-medium text-primary-text">Created By</span>
              </div>
              {templates.map((template) => (
                <div key={template.id} className="flex items-center h-[38px] px-2 pr-6 border-t border-border-color bg-white">
                  <span className="text-sm font-normal leading-5 text-secondary-text">
                    {template.createdBy}
                  </span>
                </div>
              ))}
            </div>
            
            {/* Status Column */}
            <div className="w-[215px] flex flex-col">
              <div className="flex items-center h-[38px] px-2 bg-table-header-bg">
                <span className="text-sm font-medium text-primary-text">Status</span>
              </div>
              {templates.map((template) => (
                <div key={template.id} className="flex items-center h-[38px] px-2 pr-6 border-t border-border-color bg-white">
                  <StatusBadge status={template.status} />
                </div>
              ))}
            </div>
            
            {/* Last Updated Column */}
            <div className="flex-1 flex flex-col">
              <div className="flex items-center h-[38px] px-2 bg-table-header-bg">
                <span className="text-sm font-medium text-primary-text">Last Updated</span>
              </div>
              {templates.map((template) => (
                <div key={template.id} className="flex items-center h-[38px] px-2 pr-6 border-t border-border-color bg-white">
                  <span className="text-sm font-normal leading-5 text-secondary-text">
                    {template.lastUpdated}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Fixed More Actions Column */}
        <div className="w-[52px] flex flex-col">
          <div className="h-[38px] bg-table-header-bg"></div>
          {templates.map((template) => (
            <div key={template.id} className="flex items-center justify-center h-[38px] border-t border-border-color bg-white">
              <button className="flex items-center justify-center w-7 h-7 rounded-full bg-white">
                <MoreHorizontal size={16} className="text-placeholder-text" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
