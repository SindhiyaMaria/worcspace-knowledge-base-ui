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

  // This function adds the new knowledge base
  const handleCreate = (formData) => {
    const newKB = {
      id: Date.now(),                    // unique id
      name: formData.name,
      description: formData.description || 
        "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
      createdOn: new Date().toLocaleDateString('en-GB')   // today's date in DD/MM/YYYY
    };

    // Add new card at the top
    setKnowledgeBases(prev => [newKB, ...prev]);
    
    // Optional: Show success message
    alert(` Knowledge Base "${formData.name}" created successfully!`);
  };

  const count = knowledgeBases.length;

  return (
    <div className="flex-1 overflow-auto">
      <div className="p-8">
        {/* Header */}
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
              className="flex items-center gap-2 bg-primary hover:bg-indigo-700 text-white px-6 py-3 rounded-3xl font-semibold transition-colors"
            >
              <Plus size={20} />
              Create New
            </button>
          </div>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {knowledgeBases.map((kb) => (
            <KnowledgeCard
              key={kb.id}
              name={kb.name}
              description={kb.description}
              createdOn={kb.createdOn}
            />
          ))}
        </div>

        {/* Footer Info */}
        <div className="flex justify-between items-center mt-12 text-sm text-gray-500">
          <div>{count} row(s)</div>
          <div className="flex items-center gap-6">
            <div>
              Rows per page 
              <select className="ml-2 border border-gray-200 rounded-xl px-3 py-1 text-sm">
                <option>10</option>
              </select>
            </div>
            <div>page 1 of 1</div>
          </div>
        </div>
      </div>

      {/* Create Modal */}
      <CreateModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreate={handleCreate}
      />
    </div>
  );
}