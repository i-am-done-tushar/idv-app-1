import React from 'react';
import { Filter, Search, ChevronDown, MoreHorizontal } from 'lucide-react';
import { TemplatesTable } from './TemplatesTable';
import { Pagination } from './Pagination';

export function TemplatesContent() {
  return (
    <div className="flex flex-col flex-1 bg-white">
      {/* Sub Header */}
      <div className="flex flex-col h-[58px] border-b border-border-color">
        <div className="flex items-center justify-between flex-1 px-4 py-2">
          <div className="flex items-start gap-2">
            <h1 className="text-xl font-bold leading-[30px] text-primary-text">
              Templates
            </h1>
          </div>
          
          <div className="flex items-center gap-1">
            {/* Filter Button */}
            <button className="flex items-center gap-1 h-8 px-2 py-2.5 rounded bg-white border border-gray-300">
              <Filter size={16} className="text-placeholder-text" />
              <span className="text-sm font-medium text-secondary-text">Filter</span>
            </button>
            
            {/* Search Input */}
            <div className="flex items-center justify-between w-[200px] h-8 px-3 py-0 rounded border border-gray-300 bg-white">
              <div className="flex items-center gap-1 flex-1">
                <Search size={18} className="text-placeholder-text" />
                <span className="text-sm text-placeholder-text">Search</span>
              </div>
            </div>
            
            {/* Add New Button Group */}
            <div className="flex items-center">
              <button className="flex items-center h-8 px-3 gap-3 rounded-l bg-primary text-white">
                <span className="text-xs font-medium">Add New</span>
              </button>
              <button className="flex items-center justify-center h-8 px-2 rounded-r bg-primary border-l border-blue-600 text-white">
                <ChevronDown size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Table Container */}
      <div className="flex flex-1 px-4 pt-0 pb-4">
        <div className="flex flex-col justify-between flex-1 h-[542px]">
          <TemplatesTable />
          <Pagination />
        </div>
      </div>
    </div>
  );
}
