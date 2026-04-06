import { useState } from 'react';
import KnowledgeCard from './KnowledgeCard';
import CreateModal from './CreateModal';
import { Search, Plus } from 'lucide-react';

const initialData = [
  { id: 1, name: 'Test', description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry\'s standard dummy', createdOn: '14/07/2025' },
  { id: 2, name: 'Test', description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry\'s standard dummy', createdOn: '14/07/2025' },
  { id: 3, name: 'Test', description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry\'s standard dummy', createdOn: '14/07/2025' },
  { id: 4, name: 'Test', description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry\'s standard dummy', createdOn: '14/07/2025' },
  { id: 5, name: 'Test', description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry\'s standard dummy', createdOn: '14/07/2025' },
  { id: 6, name: 'Test', description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry\'s standard dummy', createdOn: '14/07/2025' },
];

export default function KnowledgeBase() {
  const [knowledgeBases, setKnowledgeBases] = useState(initialData);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreate = (formData) => {
    const newKB = {
      id: Date.now(),
      name: formData.name,
      description: formData.description || 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry\'s standard dummy',
      createdOn: new Date().toLocaleDateString('en-GB')
    };
    setKnowledgeBases(prev => [newKB, ...prev]);
  };

  const count = knowledgeBases.length;

  return (
    <div className="flex-1 overflow-auto">
      <div className="p-8">
        {/* Page Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-semibold text-gray-900">Knowledge Base</h1>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search..."
                className="pl-11 pr-4 py-3 w-72 bg-white border border-gray-200 rounded-3xl text-sm focus:outline-none focus:border-primary"
              />
            </div>
            
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-3xl font-semibold hover:bg-indigo-700 transition-colors"
            >
              <Plus size={20} />
              Create New
            </button>
          </div>
        </div>

        {/* Content */}
        {count === 0 ? (
          // Empty State
          <div className="flex flex-col items-center justify-center h-[60vh] text-center">
            <div className="w-24 h-24 bg-gray-100 rounded-3xl flex items-center justify-center mb-6">
              <span className="text-5xl">📂</span>
            </div>
            <h3 className="text-2xl font-medium text-gray-700 mb-2">No Knowledge Bases Found</h3>
            <p className="text-gray-500 max-w-xs">Click "Create New" to get started</p>
            <div className="mt-12 text-sm text-gray-400">0 row(s)</div>
          </div>
        ) : (
          <>
            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {knowledgeBases.map(kb => (
                <KnowledgeCard
                  key={kb.id}
                  name={kb.name}
                  description={kb.description}
                  createdOn={kb.createdOn}
                />
              ))}
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center mt-12 text-sm">
              <div className="text-gray-500">{count} row(s)</div>
              
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <span className="text-gray-500">Rows per page</span>
                  <select className="border border-gray-200 rounded-xl px-3 py-1 text-sm">
                    <option>10</option>
                  </select>
                </div>
                
                <div className="flex items-center gap-1 text-gray-500">
                  <span>page 1 of 1</span>
                  <div className="flex gap-1">
                    <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-xl">‹</button>
                    <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-xl">›</button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Modal */}
      <CreateModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreate={handleCreate}
      />
    </div>
  );
}