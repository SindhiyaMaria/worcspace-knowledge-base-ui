import { 
  Users, Brain, BookOpen, CheckCircle, Server, List, Zap, 
  Briefcase, Play, Shield, FolderOpen, Key, Building2, Plug 
} from 'lucide-react';

const menuItems = [
  { icon: Users, label: 'Agents', section: 'MY PROJECTS' },
  { icon: Brain, label: 'AI Models', section: 'MY PROJECTS' },
  { icon: BookOpen, label: 'Library', section: 'MY PROJECTS' },
  { icon: CheckCircle, label: 'Published', section: 'ORCHESTRATOR' },
  { icon: Server, label: 'Machines', section: 'ORCHESTRATOR' },
  { icon: List, label: 'Queues', section: 'ORCHESTRATOR' },
  { icon: Zap, label: 'Triggers', section: 'ORCHESTRATOR' },
  { icon: Briefcase, label: 'Jobs', section: 'ORCHESTRATOR' },
  { icon: Play, label: 'Executions', section: 'ORCHESTRATOR' },
  { icon: Shield, label: 'Vault', section: 'ORCHESTRATOR' },
  { icon: FolderOpen, label: 'Knowledge Base', section: 'ORCHESTRATOR', active: true },
  { icon: Key, label: 'Key Store', section: 'ORCHESTRATOR' },
  { icon: Building2, label: 'Tenant', section: 'ADMIN' },
  { icon: Plug, label: 'Integrations', section: 'ADMIN' },
];

export default function Sidebar() {
  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col h-full overflow-y-auto">
      {/* Logo */}
      <div className="px-6 py-5 border-b flex items-center gap-3">
        <div className="w-8 h-8 bg-[#4F46E5] rounded-xl flex items-center justify-center">
          <span className="text-white text-xl font-bold">W</span>
        </div>
        <span className="text-2xl font-semibold tracking-tight text-secondary">Worcspace</span>
      </div>

      <div className="flex-1 py-6 px-3">
        {['MY PROJECTS', 'ORCHESTRATOR', 'ADMIN'].map(section => (
          <div key={section} className="mb-8">
            <div className="px-3 text-xs font-medium text-gray-500 mb-2 tracking-widest">
              {section}
            </div>
            {menuItems
              .filter(item => item.section === section)
              .map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className={`flex items-center gap-3 px-3 py-3 mx-1 rounded-2xl text-sm font-medium transition-colors ${
                      item.active 
                        ? 'bg-[#4F46E5]/10 text-[#4F46E5] font-semibold' 
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <Icon size={20} />
                    {item.label}
                  </div>
                );
              })}
          </div>
        ))}
      </div>
    </div>
  );
}