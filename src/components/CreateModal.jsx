import { X } from 'lucide-react';
import { useState } from 'react';

export default function CreateModal({ isOpen, onClose, onCreate }) {
  const [form, setForm] = useState({
    name: '',
    description: '',
    vectorStore: 'Qdrant',
    embeddingModel: 'text-embedding-ada-002'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim()) {
      alert('Name is required!');
      return;
    }
    onCreate(form);
    onClose();
    // Reset form
    setForm({ name: '', description: '', vectorStore: 'Qdrant', embeddingModel: 'text-embedding-ada-002' });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-end z-50">
      <div className="bg-white w-full max-w-lg h-full overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="px-8 py-6 border-b flex items-center justify-between sticky top-0 bg-white z-10">
          <div>
            <h2 className="text-2xl font-semibold">Create New Knowledge Base</h2>
            <p className="text-sm text-gray-500 mt-1">
              Best for quick answers from documents, websites and text files.
            </p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X size={28} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-8">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Name <span className="text-red-500">*</span>
              <span className="text-xs text-gray-400 ml-2">(Cannot be edited later)</span>
            </label>
            <input
              type="text"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:border-primary"
              placeholder="Enter knowledge base name"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium mb-2">Description</label>
            <textarea
              value={form.description}
              onChange={e => setForm({ ...form, description: e.target.value })}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:border-primary resize-none"
              placeholder="Brief description of this knowledge base"
            />
          </div>

          {/* Vector Store */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Vector Store <span className="text-red-500">*</span>
            </label>
            <select
              value={form.vectorStore}
              onChange={e => setForm({ ...form, vectorStore: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:border-primary"
            >
              <option value="Qdrant">Qdrant</option>
              <option value="Pinecone">Pinecone</option>
            </select>
          </div>

          {/* LLM Embedding Model */}
          <div>
            <label className="block text-sm font-medium mb-2">
              LLM Embedding Model <span className="text-red-500">*</span>
            </label>
            <select
              value={form.embeddingModel}
              onChange={e => setForm({ ...form, embeddingModel: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:border-primary"
            >
              <option value="text-embedding-ada-002">text-embedding-ada-002</option>
              <option value="text-embedding-3-small">text-embedding-3-small</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-primary hover:bg-indigo-700 transition-colors text-white font-semibold py-4 rounded-3xl text-lg"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
}