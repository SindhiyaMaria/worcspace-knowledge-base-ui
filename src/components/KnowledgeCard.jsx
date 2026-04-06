import { MoreHorizontal } from 'lucide-react';

export default function KnowledgeCard({ name, description, createdOn }) {
  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow group">
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-semibold text-lg text-gray-900">{name}</h3>
        <MoreHorizontal size={20} className="text-gray-400 group-hover:text-gray-600 cursor-pointer" />
      </div>
      
      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-6">
        {description}
      </p>
      
      <div className="pt-6 border-t text-xs text-gray-500 flex justify-between items-center">
        <span>Created On: {createdOn}</span>
      </div>
    </div>
  );
}